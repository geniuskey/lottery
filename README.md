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
| 🏅 [구슬 올림픽](./marble-olympics/) | 물리 엔진 기반 구슬 레이싱 | 레이싱 |
| 🧟 [좀비 아레나](./zombie-arena/) | 좀비 배틀로얄 서바이벌 | 서바이벌 |
| ✊ [단체 가위바위보](./rock-paper-scissors/) | 토너먼트 방식 가위바위보 | 토너먼트 |
| 🎯 [빙고](./bingo/) | 실시간 랭킹 빙고 게임 | 보드게임 |
| 🌰 [밤송이 서바이벌](./chestnut-survival/) | 떨어지는 밤송이 회피 | 회피게임 |
| 🥏 [원판 밀치기](./disk-shove/) | 원형 아레나 밀치기 배틀 | 서바이벌 |
| 🥊 [펀치 서바이벌](./punch-survival/) | 링 위의 복싱 난타전 | 액션 |

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

## 📁 프로젝트 구조

```
lottery/
├── index.html              # 게임 포털 메인 페이지
├── README.md
├── LICENSE
├── marble-olympics/
│   └── index.html
├── zombie-arena/
│   └── index.html
├── rock-paper-scissors/
│   └── index.html
├── bingo/
│   └── index.html
├── chestnut-survival/
│   └── index.html
├── disk-shove/
│   └── index.html
└── punch-survival/
    └── index.html
```

## 🎯 사용 사례

- 🏫 **교실** - 발표자/조 선정
- 🎉 **파티** - 벌칙 당첨자 선정
- 🏢 **회사** - 회의 진행자 선정
- 🎁 **이벤트** - 경품 추첨

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