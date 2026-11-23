import unittest
from datetime import date, datetime, timezone
from pathlib import Path

from ga4_traffic import collect, game_slugs, report_request

def report(users, views, **metadata):
    return {
        "metadata": {"timeZone": "Asia/Seoul", **metadata},
        "rows": [{"metricValues": [{"value": str(users)}, {"value": str(views)}]}],
    }


class TrafficTests(unittest.TestCase):
    def test_uses_portal_cards_and_aggregates_each_game_in_one_report(self):
        games = game_slugs(Path(__file__).resolve().parents[1] / "index.html")
        self.assertIn("pinball", games)
        self.assertNotIn("rps-tournament", games)
        filters = report_request("pinball")["dimensionFilter"]["andGroup"]["expressions"]
        self.assertEqual(filters[0]["filter"]["inListFilter"]["values"], ["pages.euiyun.com", "geniuskey.github.io"])
        self.assertEqual(filters[1]["filter"]["inListFilter"]["values"], [
            "/lottery/pinball", "/lottery/pinball/", "/lottery/pinball/index.html",
        ])

    def test_uses_property_timezone_and_independent_site_total(self):
        batches = []
        def fetch(requests):
            batches.append(requests)
            return [report(12, 30)] if len(batches) == 1 else [report(11, 20), {"metadata": {"timeZone": "Asia/Seoul"}}]

        result = collect(["pinball", "bingo"], fetch, datetime(2026, 11, 23, 16, tzinfo=timezone.utc), date(2026, 11, 18))
        self.assertEqual([len(batch) for batch in batches], [1, 2])
        self.assertEqual(batches[1][0]["dateRanges"], [{"startDate": "2026-11-18", "endDate": "2026-11-22"}])
        self.assertEqual(result["startDate"], "2026-10-24")
        self.assertEqual(result["endDate"], "2026-11-22")
        self.assertEqual(result["site"], {"activeUsers": 12, "pageViews": 30})
        self.assertEqual(result["games"]["pinball"], {"activeUsers": 11, "pageViews": 20})
        self.assertEqual(result["games"]["bingo"], {"activeUsers": 0, "pageViews": 0})

    def test_rejects_incomplete_or_thresholded_reports(self):
        now = datetime(2026, 11, 23, tzinfo=timezone.utc)
        with self.assertRaises(ValueError):
            collect(["pinball", "bingo"], lambda requests: [report(12, 30)], now, date(2026, 10, 1))
        with self.assertRaises(ValueError):
            collect([], lambda requests: [report(12, 30, subjectToThresholding=True)], now)

    def test_first_snapshot_shows_site_history_without_ranking_untracked_games(self):
        requests_seen = []

        def fetch(requests):
            requests_seen.extend(requests)
            return [report(12, 30) for _ in requests]

        snapshot = collect(["pinball"], fetch, datetime(2026, 11, 23, tzinfo=timezone.utc))
        self.assertEqual(snapshot["trackingSince"], "2026-11-24")
        self.assertIsNone(snapshot["rankingStartDate"])
        self.assertEqual(snapshot["games"], {})
        self.assertEqual(len(requests_seen), 1)

    def test_refuses_to_publish_lossy_totals(self):
        now = datetime(2026, 11, 23, tzinfo=timezone.utc)
        with self.assertRaises(ValueError):
            collect([], lambda requests: [report(12, 30, dataLossFromOtherRow=True)], now)
