# 🎲 추첨 게임 포털

다양한 싱글 페이지 추첨 게임을 한 곳에서 즐기세요!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-blue)](https://geniuskey.github.io/lottery)

## ✨ 특징

- **100% 브라우저 기반** - 서버 불필요, 오프라인 지원
- **모바일 반응형** - 어떤 기기에서든 플레이 가능
- **다크 테마** - 눈이 편한 모던 UI
- **실시간 랭킹** - 게임 진행 중 순위 확인
- **결과 복사** - 추첨 결과를 쉽게 공유

## 🎮 게임 목록

| 게임 | 설명 | 카테고리 |
|------|------|----------|
| 🎱 [핀볼 서바이벌](./pinball/) | 범퍼와 플리퍼 사이에서 오래 버티기 | 서바이벌 |
| 🌌 [네온 레이스](./neon-race/) | 사이버펑크 네온 레이싱 | 레이싱 |
| 🏅 [구슬 올림픽](./marble-olympics/) | 물리 엔진 기반 구슬 레이싱 | 레이싱 |
| 🧟 [좀비 아레나](./zombie-arena/) | 좀비 배틀로얄 서바이벌 | 서바이벌 |
| 💃 [교실에서 춤을!](./school-dance/) | 선생님 몰래 춤추는 서바이벌 | 서바이벌 |
| ✊ [단체 가위바위보](./group-rps/) | 교실 테마의 가위바위보 토너먼트 | 토너먼트 |
| 🎯 [빙고](./bingo/) | 실시간 랭킹 빙고 게임 | 보드게임 |
| 💣 [폭탄 돌리기](./bomb/) | 긴장감 넘치는 폭탄 돌리기 | 서바이벌 |
| 🎡 [룰렛 추첨](./roulette/) | 화려한 룰렛 휠 추첨 | 추첨 |
| 🌰 [밤송이 서바이벌](./chestnut-survival/) | 떨어지는 밤송이 회피 | 회피게임 |
| 🥏 [원판 밀치기](./disk-shove/) | 원형 아레나 밀치기 배틀 | 서바이벌 |
| 🥊 [펀치 서바이벌](./punch-survival/) | 링 위의 복싱 난타전 | 액션 |
| 🪑 [의자 앉기](./chair/) | 뮤지컬 체어 의자 뺏기 | 서바이벌 |
| 🪐 [중력 궤도 생존](./gravity-orbit/) | 행성 중력 궤도 서바이벌 | 서바이벌 |
| 👹 [술래로부터 살아남기](./chaser-survival/) | 술래를 피해 도망치기 | 서바이벌 |
| 😈 [악마로부터 살아남기](./devil-survival/) | 악마의 돌진 피하기 | 서바이벌 |
| 🛸 [UFO 납치](./ufo-abduction/) | 트랙터 빔을 피해 마지막까지 버티기 | 서바이벌 |
| 🚀 [우주 경주](./space-race/) | 소행성 사이로 달리는 우주선 경주 | 레이싱 |
| 🎈 [풍선 서바이벌](./balloon-survival/) | 마지막까지 풍선 지키기 | 서바이벌 |
| 🎯 [다트 토너먼트](./dart-tournament/) | 과녁 점수로 순위를 가리는 경기 | 토너먼트 |
| 🪜 [사다리 추첨](./ladder/) | 클래식 사다리 타기 | 추첨 |

[토너먼트 가위바위보](./rps-tournament/)도 직접 열어 플레이할 수 있습니다.

## 🚀 시작하기

### 온라인 플레이
[https://geniuskey.github.io/lottery](https://geniuskey.github.io/lottery) 에서 바로 플레이하세요.

### 로컬 실행
```bash
# 저장소 클론
git clone https://github.com/geniuskey/lottery.git
cd lottery

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js
npx serve
```
브라우저에서 `http://localhost:8000` 접속

## 🛠️ 기술 스택

- **HTML5 Canvas** - 게임 렌더링
- **Vanilla JavaScript** - 게임 로직 및 물리 엔진
- **CSS3** - 애니메이션 및 반응형 디자인
- **localStorage** - 설정 저장

## 포털 접속 통계

포털의 누적 사용자와 페이지 조회수는 첫 GA4 태그가 추가된 2026년 1월 15일부터 조회합니다. GA4의 `totalUsers`를 전체 기간으로 한 번 조회해 여러 날짜에 방문한 사용자의 중복 집계를 피합니다. 인기 배지는 이틀 전까지의 최근 30일 중 모든 게임에 공통으로 측정된 기간을 사용합니다. 활성 사용자 10명 이상인 게임 중 최대 3개에 붙고, 동률이면 페이지 조회수가 많은 게임이 우선입니다.

1. Google Cloud 프로젝트에서 [Google Analytics Data API](https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com)를 사용 설정합니다. 서비스 계정을 만들고, 측정 ID `G-GFTNV73W8L`이 연결된 GA4 속성에서 해당 계정에 Viewer 권한을 부여합니다. [Google 공식 설정 안내](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart)
2. 저장소의 [Actions 변수](https://github.com/geniuskey/lottery/settings/variables/actions) 또는 [Actions 시크릿](https://github.com/geniuskey/lottery/settings/secrets/actions)에 숫자 속성 ID를 `GA4_PROPERTY_ID`로 등록합니다. 서비스 계정 JSON 키는 Actions 시크릿에 `GA4_CREDENTIALS_JSON`으로 등록합니다.
3. 워크플로가 `main`에 반영되면 [Update GA4 traffic](https://github.com/geniuskey/lottery/actions/workflows/ga4-traffic.yml)을 실행합니다. 이후 Actions가 매일 `ga4-stats` 브랜치의 집계 파일을 갱신하고 포털이 이 파일을 읽습니다.

공개 파일에는 집계 기간과 사이트 및 게임별 집계 숫자가 들어갑니다. 집계 파일이 없거나 마지막 집계가 7일을 넘으면 접속 통계와 인기 배지를 숨깁니다. 전체 측정이 적용된 시점부터의 인기 순위를 계산하기 위해 첫 집계의 다음 날을 공통 측정 시작일로 기록합니다. 새로 태그를 추가한 페이지의 방문은 태그 적용 이후부터 사이트 합계에 포함됩니다.

## 📁 프로젝트 구조

```
lottery/
├── index.html              # 게임 포털 메인 페이지
├── README.md
├── LICENSE
├── assets/                 # 공유 리소스와 게임 썸네일
└── <게임 이름>/index.html  # 게임별 페이지
```

## 🎯 사용 사례

- 📺 **방송 & 스트리밍** - 트위치, 유튜브 등 시청자 참여형 이벤트 및 실시간 경품 추첨
- 🤝 **오피스 아이스브레이킹** - 회의 시작 전 분위기 환기, 팀워크 강화, 오늘 점심/커피 내기
- 🏫 **역동적인 수업 참여** - 발표자 선정, 팀 빌딩, 지루할 틈 없는 게임형 수업 진행
- 🎪 **각종 축제 & 모임** - 파티, 결혼식 이벤트, 온라인 정모 등 특별한 순간의 주인공 선정
- 🏠 **현명한 가정 생활** - "오늘 설거지는 누가?" 같은 사소한 결정을 평화롭고 박진감 넘치게 해결

## 🤝 기여하기

기여를 환영합니다! [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고해주세요.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 라이선스

MIT License - 자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.

## 👤 만든 사람

**Euiyun Edwin Kim**
- Email: [geniuskey@gmail.com](mailto:geniuskey@gmail.com)
- GitHub: [@geniuskey](https://github.com/geniuskey)

## ☕ 후원하기

이 프로젝트가 유용하셨다면 커피 한 잔 사주세요!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/euiyun)

---

⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요!
