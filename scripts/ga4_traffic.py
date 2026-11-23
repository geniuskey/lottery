"""Export public aggregate traffic for the PLAYPICK portal."""
import argparse
import base64
import json
import os
import re
from datetime import date, datetime, timedelta, timezone
from html.parser import HTMLParser
from pathlib import Path
from zoneinfo import ZoneInfo

HOSTS = ["pages.euiyun.com", "geniuskey.github.io"]
ANALYTICS_SINCE = "2026-01-15"  # First GA4 tag in the portal repository.
SCOPE = "https://www.googleapis.com/auth/analytics.readonly"


class GameCards(HTMLParser):
    def __init__(self):
        super().__init__()
        self.slugs = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag != "a" or "game-card" not in (attributes.get("class") or "").split():
            return
        match = re.fullmatch(r"\./([a-z0-9-]+)/", attributes.get("href") or "")
        if not match:
            raise ValueError("A portal game card has an unexpected URL.")
        self.slugs.append(match[1])


def game_slugs(index):
    cards = GameCards()
    cards.feed(index.read_text(encoding="utf-8"))
    if not cards.slugs or len(set(cards.slugs)) != len(cards.slugs):
        raise ValueError("Portal game cards are empty or contain duplicate URLs.")
    return cards.slugs


def report_request(game=None, start="31daysAgo", end="2daysAgo", user_metric="activeUsers"):
    if game:
        path = f"/lottery/{game}"
        path_filter = {"inListFilter": {"values": [path, f"{path}/", f"{path}/index.html"], "caseSensitive": True}}
    else:
        path_filter = {"stringFilter": {"matchType": "PARTIAL_REGEXP", "value": "^/lottery(/|$)", "caseSensitive": True}}

    return {
        "dateRanges": [{"startDate": start, "endDate": end}],
        "metrics": [{"name": user_metric}, {"name": "screenPageViews"}],
        "dimensionFilter": {
            "andGroup": {"expressions": [
                {"filter": {"fieldName": "hostName", "inListFilter": {"values": HOSTS}}},
                {"filter": {"fieldName": "pagePath", **path_filter}},
            ]}
        },
    }


def totals(report, user_metric="activeUsers"):
    metadata = report.get("metadata", {})
    if any(metadata.get(key) for key in (
        "subjectToThresholding", "dataLossFromOtherRow", "dataTruncationReasons", "samplingMetadatas",
    )):
        raise ValueError("GA4 returned a limited or sampled aggregate.")
    rows = report.get("rows", [])
    if not rows:
        if report.get("rowCount", 0):
            raise ValueError("Missing GA4 report rows.")
        return {user_metric: 0, "pageViews": 0}

    if len(rows) != 1 or len(rows[0]["metricValues"]) != 2:
        raise ValueError("Unexpected GA4 aggregate report shape.")
    users, views = (int(metric["value"]) for metric in rows[0]["metricValues"])
    if min(users, views) < 0:
        raise ValueError("GA4 returned a negative metric.")
    return {user_metric: users, "pageViews": views}


def collect(games, fetch_batch, now, tracking_since=None):
    site_reports = fetch_batch([report_request(start=ANALYTICS_SINCE, end="today", user_metric="totalUsers")])
    if len(site_reports) != 1:
        raise ValueError("GA4 returned an incomplete site report.")
    site_report = site_reports[0]
    site = totals(site_report, "totalUsers")
    today = now.astimezone(ZoneInfo(site_report["metadata"]["timeZone"])).date()
    recent_start = today - timedelta(days=31)
    recent_end = today - timedelta(days=2)
    tracking_since = tracking_since or (today + timedelta(days=1))
    ranking_start = max(recent_start, tracking_since)
    ranking = {}

    if ranking_start <= recent_end:
        for offset in range(0, len(games), 5):
            batch = games[offset:offset + 5]
            reports = fetch_batch([report_request(game, ranking_start.isoformat(), recent_end.isoformat()) for game in batch])
            if len(reports) != len(batch):
                raise ValueError("GA4 returned an incomplete game batch.")
            ranking.update((game, totals(report)) for game, report in zip(batch, reports))

    return {
        "source": "ga4",
        "generatedAt": now.astimezone(timezone.utc).isoformat(),
        "startDate": ANALYTICS_SINCE,
        "endDate": today.isoformat(),
        "trackingSince": tracking_since.isoformat(),
        "rankingStartDate": ranking_start.isoformat() if ranking_start <= recent_end else None,
        "rankingEndDate": recent_end.isoformat(),
        "site": site,
        "games": ranking,
    }


def service_account_info(secret):
    contents = secret.strip().lstrip("\ufeff")
    message = "GA4_CREDENTIALS_JSON must contain the downloaded Google service account JSON key."
    try:
        account = json.loads(contents)
    except ValueError:
        try:
            decoded = base64.b64decode("".join(contents.split()), validate=True)
            account = json.loads(decoded.decode("utf-8-sig"))
        except ValueError:
            raise ValueError(message) from None

    if not isinstance(account, dict) or account.get("type") != "service_account":
        raise ValueError(message)
    if not all(isinstance(account.get(field), str) and account[field].strip()
               for field in ("client_email", "private_key", "token_uri")):
        raise ValueError(message)
    return account


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--previous", type=Path)
    args = parser.parse_args()
    property_id = os.environ.get("GA4_PROPERTY_ID", "")
    credentials_json = os.environ.get("GA4_CREDENTIALS_JSON")
    if not re.fullmatch(r"[0-9]+", property_id) or not credentials_json:
        parser.error("Set a numeric GA4_PROPERTY_ID and the GA4_CREDENTIALS_JSON secret.")
    try:
        account = service_account_info(credentials_json)
    except ValueError as error:
        parser.error(str(error))

    from google.auth.transport.requests import AuthorizedSession
    from google.oauth2 import service_account

    credentials = service_account.Credentials.from_service_account_info(account, scopes=[SCOPE])
    tracking_since = None
    if args.previous and args.previous.is_file():
        previous = json.loads(args.previous.read_text(encoding="utf-8"))
        tracking_since = date.fromisoformat(previous["trackingSince"])
    endpoint = f"https://analyticsdata.googleapis.com/v1beta/properties/{property_id}:batchRunReports"
    with AuthorizedSession(credentials) as session:
        def fetch_batch(requests):
            response = session.post(endpoint, json={"requests": requests}, timeout=20)
            if not response.ok:
                raise RuntimeError(f"GA4 Data API returned HTTP {response.status_code}.")
            return response.json()["reports"]

        snapshot = collect(game_slugs(Path("index.html")), fetch_batch, datetime.now(timezone.utc), tracking_since)
    args.output.write_text(json.dumps(snapshot, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
