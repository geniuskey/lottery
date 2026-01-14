# 추첨 게임 개발 가이드

## 개요
single page 추첨 게임들을 만듭니다. 모든 게임은 아래 플랫폼 규격을 준수해야 합니다.

## 게임 메타데이터 주석 규격
모든 게임 index.html 파일 최상단에 아래 형식의 주석을 필수로 포함합니다:

<!--
@game-meta
{
  "id": "game-folder-name",
  "title": "게임 제목",
  "emoji": "🎮",
  "category": "카테고리",
  "description": "게임 설명 (1-2문장)",
  "features": ["특징1", "특징2"],
  "color": "accent-color-name",
  "badge": "NEW|인기|null",
  "version": "1.0.0",
  "updated": "2025-01-01",
  "author": {
    "name": "Euiyun Edwin Kim",
    "email": "geniuskey@gmail.com",
    "github": "geniuskey"
  },
  "urls": {
    "service": "https://geniuskey.github.io/lottery/{id}/",
    "repository": "https://github.com/geniuskey/lottery"
  },
  "license": "MIT",
  "copyright": "© 2025 Euiyun Edwin Kim. Licensed under the MIT License."
}
@end-game-meta
-->

### 메타데이터 필드 설명
- id: 게임 폴더명과 동일 (URL 경로에 사용)
- title: 한글 게임 제목
- emoji: 대표 이모지 1개
- category: 레이싱|서바이벌|토너먼트|보드게임|회피게임|액션|퍼즐|전략
- description: 게임 설명 (40-80자 권장)
- features: 게임 특징 배열 (2개 권장, 이모지+텍스트 형식)
- color: marble|zombie|rps|bingo|chestnut|blue|green|purple|pink|orange|yellow|red|cyan
- badge: 뱃지 텍스트 (없으면 null)
- version: 시맨틱 버전
- updated: 최종 수정일
- license: 라이선스 유형
- copyright: 저작권 표시 문구

### Copyright 표시 규격 (삭제 - 메타데이터로 통합)
~~메인 게임 영역(game-area) 우하단에 저작권 표시를 포함합니다~~ 
→ 화면 표시용 copyright는 메타데이터의 copyright 필드 값을 사용

## SEO 메타 태그 규격
`<head>` 섹션에 다음 메타 태그를 포함하여 검색엔진 최적화 및 소셜 미디어 공유를 지원합니다.
메타데이터 필드값은 @game-meta의 해당 값을 사용합니다.

### 필수 메타 태그 템플릿
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFTNV73W8L"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GFTNV73W8L');
    </script>

    <title>{emoji} {title}</title>

    <!-- SEO 기본 -->
    <meta name="description" content="{description}">
    <meta name="author" content="{author.name}">
    <meta name="keywords" content="{title}, 추첨, 게임, lottery, {category}, {추가 키워드}">
    
    <!-- Open Graph (카카오톡, 페이스북, 슬랙 등) -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="추첨 게임 포탈">
    <meta property="og:title" content="{emoji} {title}">
    <meta property="og:description" content="{description}">
    <meta property="og:url" content="{urls.service}">
    <meta property="og:locale" content="ko_KR">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{emoji} {title}">
    <meta name="twitter:description" content="{description}">
    
    <!-- 추가 SEO -->
    <link rel="canonical" href="{urls.service}">
    <meta name="robots" content="index, follow">
    
    <!-- 기타 리소스 -->
    <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
</head>
```

### SEO 메타 태그 필드 설명
| 태그 | 용도 | 값 |
|------|------|-----|
| description | 검색 결과 설명 | @game-meta description |
| author | 제작자 | @game-meta author.name |
| keywords | 검색 키워드 | 제목, 카테고리, 관련어 조합 |
| og:type | 콘텐츠 유형 | "website" 고정 |
| og:site_name | 사이트명 | "추첨 게임 포탈" 고정 |
| og:title | 공유 시 제목 | emoji + title |
| og:description | 공유 시 설명 | @game-meta description |
| og:url | 페이지 URL | @game-meta urls.service |
| og:locale | 언어/지역 | "ko_KR" 기본 |
| twitter:card | 카드 유형 | "summary" 기본 |
| canonical | 대표 URL | @game-meta urls.service |
| robots | 크롤링 지시 | "index, follow" 고정 |

## Google Analytics 규격
모든 HTML 파일에 Google Analytics 태그를 포함합니다. viewport 메타 태그 바로 다음에 위치합니다.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GFTNV73W8L"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GFTNV73W8L');
</script>
```

- **Measurement ID**: `G-GFTNV73W8L`
- **위치**: `<head>` 섹션 내, viewport 메타 태그 바로 다음

## Side Bar 구성 규격
* 최상단: 좌측 title, 우측 ? 버튼(도움말 모달)
* 참여자 명단 입력
* 게임별 설정 요소 2-3개
* 참여자/설정은 localStorage에 저장하여 유지
* "🎮 시작", "↺"(초기화) 버튼
* 실시간 랭킹 보드
* 하단 footer: 결과 복사, GitHub, 커피 사주기 버튼

## 참여자 입력 규격
### 입력 형식
- **구분자**: 쉼표(,) 또는 줄바꿈으로 참여자 구분
- **복제 표기**: `이름*n` 형식으로 동명이인 n명 생성 (예: 철수*3 → 철수, 철수, 철수)
- **placeholder**: `이름을 입력하세요 (줄바꿈 또는 쉼표)\n예: 철수, 영희*3, 민수`
- **기본값**: `영수, 영호, 영식, 영철, 광수, 상철`

### 파싱 함수 (공통)
```javascript
function parseParticipants(input) {
    // 줄바꿈과 쉼표로 분리
    const names = input.split(/[,\n]/).map(n => n.trim()).filter(n => n);
    const result = [];

    for (const name of names) {
        // *n 패턴 체크 (예: 철수*3)
        const match = name.match(/^(.+)\*(\d+)$/);
        if (match) {
            const baseName = match[1].trim();
            const count = parseInt(match[2]);
            for (let i = 0; i < count; i++) {
                result.push(baseName);
            }
        } else {
            result.push(name);
        }
    }

    return result;
}
```

## Footer 버튼 코드
```html
<div class="sidebar-footer">
  <a href="https://geniuskey.github.io/lottery/" class="icon-btn" data-tooltip="추첨 포탈 홈">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  <button class="icon-btn" id="copyResultBtn" data-tooltip="결과 복사">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
  <a href="https://github.com/geniuskey/lottery" target="_blank" class="icon-btn" data-tooltip="GitHub 저장소">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
  </a>
  <a href="https://buymeacoffee.com/euiyun" target="_blank" class="icon-btn" data-tooltip="커피 사주기 ☕">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364z"></path></svg>
  </a>
</div>
```

## 기술 요구사항
- Single HTML 파일 (CSS/JS 임베디드)
- 모바일 반응형 디자인
- 다크 테마 (glassmorphism 효과)
- HTML5 Canvas 게임 렌더링
- localStorage 설정 저장
- 10-60초 내 게임 완료
- 실시간 랭킹 업데이트

## 저작권
모든 파일에 포함: "© 2025 Euiyun Edwin Kim."

## Copyright 표시 규격
메인 게임 영역(game-area) 우하단에 저작권 표시를 포함합니다:
```html
© 2025 Euiyun Edwin Kim. 
```
```css
.copyright {
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.25);
  pointer-events: none;
  user-select: none;
}
```

game-area에 `position: relative;` 필수 적용
