# SEO 최적화 가이드

## 1. 개별 게임 파일 (game/index.html)

각 게임 HTML 파일의 `<head>` 섹션에 추가할 내용:

```html
<!DOCTYPE html>
<!--
@game-meta
{
  "id": "marble-olympics",
  "title": "구슬 올림픽",
  ...
}
@end-game-meta
-->
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 기본 SEO 메타 태그 -->
  <title>구슬 올림픽 - 추첨 게임 포털</title>
  <meta name="description" content="구슬들이 다양한 트랙에서 경쟁하는 올림픽 스타일의 레이싱 추첨 게임. 물리 엔진 기반의 박진감 넘치는 경주로 공정한 추첨을 즐기세요!">
  <meta name="keywords" content="추첨 게임, 구슬 레이싱, 랜덤 선택, 당첨자 추첨, 무료 추첨, 온라인 추첨">
  <meta name="author" content="Euiyun Edwin Kim">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph (Facebook, LinkedIn, KakaoTalk) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="구슬 올림픽 - 추첨 게임 포털">
  <meta property="og:description" content="구슬들이 다양한 트랙에서 경쟁하는 올림픽 스타일의 레이싱 추첨 게임. 물리 엔진 기반의 박진감 넘치는 경주!">
  <meta property="og:image" content="https://geniuskey.github.io/lottery/marble-olympics/og-image.png">
  <meta property="og:url" content="https://geniuskey.github.io/lottery/marble-olympics/">
  <meta property="og:site_name" content="추첨 게임 포털">
  <meta property="og:locale" content="ko_KR">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="구슬 올림픽 - 추첨 게임 포털">
  <meta name="twitter:description" content="구슬들이 다양한 트랙에서 경쟁하는 올림픽 스타일의 레이싱 추첨 게임.">
  <meta name="twitter:image" content="https://geniuskey.github.io/lottery/marble-olympics/og-image.png">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://geniuskey.github.io/lottery/marble-olympics/">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏅</text></svg>">
  
  <!-- 구조화된 데이터 (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "구슬 올림픽",
    "description": "구슬들이 다양한 트랙에서 경쟁하는 올림픽 스타일의 레이싱 추첨 게임",
    "url": "https://geniuskey.github.io/lottery/marble-olympics/",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    },
    "author": {
      "@type": "Person",
      "name": "Euiyun Edwin Kim",
      "email": "geniuskey@gmail.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100"
    }
  }
  </script>
  
  <!-- Copyright -->
  <!-- © 2025 Euiyun Edwin Kim. Licensed under the MIT License. -->
</head>
```

---

## 2. 포털 메인 페이지 (index.html)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 기본 SEO 메타 태그 -->
  <title>추첨 게임 포털 - 무료 온라인 추첨 게임 모음</title>
  <meta name="description" content="다양한 무료 온라인 추첨 게임을 즐기세요! 구슬 레이싱, 좀비 서바이벌, 빙고, 가위바위보 등 재미있는 방식으로 공정한 추첨을 할 수 있습니다. 설치 없이 브라우저에서 바로 플레이!">
  <meta name="keywords" content="추첨 게임, 무료 추첨, 온라인 추첨, 랜덤 선택, 당첨자 추첨, 제비뽑기, 사다리 게임, 룰렛, 뽑기">
  <meta name="author" content="Euiyun Edwin Kim">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#0f172a">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="추첨 게임 포털 - 무료 온라인 추첨 게임 모음">
  <meta property="og:description" content="다양한 무료 온라인 추첨 게임을 즐기세요! 구슬 레이싱, 좀비 서바이벌, 빙고 등 7가지 게임으로 재미있게 추첨하세요.">
  <meta property="og:image" content="https://geniuskey.github.io/lottery/og-image.png">
  <meta property="og:url" content="https://geniuskey.github.io/lottery/">
  <meta property="og:site_name" content="추첨 게임 포털">
  <meta property="og:locale" content="ko_KR">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="추첨 게임 포털 - 무료 온라인 추첨 게임 모음">
  <meta name="twitter:description" content="다양한 무료 온라인 추첨 게임을 즐기세요! 설치 없이 브라우저에서 바로 플레이!">
  <meta name="twitter:image" content="https://geniuskey.github.io/lottery/og-image.png">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://geniuskey.github.io/lottery/">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎲</text></svg>">
  <link rel="apple-touch-icon" href="./apple-touch-icon.png">
  
  <!-- 구조화된 데이터 (JSON-LD) - 웹사이트 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "추첨 게임 포털",
    "description": "다양한 무료 온라인 추첨 게임 모음",
    "url": "https://geniuskey.github.io/lottery/",
    "author": {
      "@type": "Person",
      "name": "Euiyun Edwin Kim",
      "email": "geniuskey@gmail.com",
      "url": "https://github.com/geniuskey"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://geniuskey.github.io/lottery/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>
  
  <!-- 구조화된 데이터 (JSON-LD) - 게임 컬렉션 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "추첨 게임 목록",
    "description": "무료로 즐길 수 있는 온라인 추첨 게임 모음",
    "numberOfItems": 7,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebApplication",
          "name": "구슬 올림픽",
          "description": "구슬들이 다양한 트랙에서 경쟁하는 올림픽 스타일의 레이싱 추첨 게임",
          "url": "https://geniuskey.github.io/lottery/marble-olympics/",
          "applicationCategory": "GameApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "WebApplication",
          "name": "좀비 아레나",
          "description": "좀비들이 아레나에서 생존을 겨루는 배틀 기반 추첨 게임",
          "url": "https://geniuskey.github.io/lottery/zombie-arena/",
          "applicationCategory": "GameApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "WebApplication",
          "name": "단체 가위바위보",
          "description": "가위바위보 룰을 확장한 빠르고 직관적인 추첨 게임",
          "url": "https://geniuskey.github.io/lottery/rock-paper-scissors/",
          "applicationCategory": "GameApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "WebApplication",
          "name": "빙고",
          "description": "클래식 빙고를 현대적으로 재해석한 추첨 게임",
          "url": "https://geniuskey.github.io/lottery/bingo/",
          "applicationCategory": "GameApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "WebApplication",
          "name": "밤송이 서바이벌",
          "description": "무서운 밤송이들을 피하며 생존하는 스릴 넘치는 추첨 게임",
          "url": "https://geniuskey.github.io/lottery/chestnut-survival/",
          "applicationCategory": "GameApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "WebApplication",
          "name": "원판 밀치기",
          "description": "원형 아레나에서 밀려나지 않고 살아남는 서바이벌 추첨 게임",
          "url": "https://geniuskey.github.io/lottery/disk-shove/",
          "applicationCategory": "GameApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "WebApplication",
          "name": "펀치 서바이벌",
          "description": "링 위에서 펼쳐지는 난타전 복싱 서바이벌 추첨 게임",
          "url": "https://geniuskey.github.io/lottery/punch-survival/",
          "applicationCategory": "GameApplication"
        }
      }
    ]
  }
  </script>
  
  <!-- 구조화된 데이터 (JSON-LD) - 조직/개인 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Euiyun Edwin Kim",
    "email": "geniuskey@gmail.com",
    "url": "https://github.com/geniuskey",
    "sameAs": [
      "https://github.com/geniuskey",
      "https://buymeacoffee.com/euiyun"
    ]
  }
  </script>
  
  <!-- Copyright -->
  <!-- © 2025 Euiyun Edwin Kim. Licensed under the MIT License. -->
</head>
<body>
  <!-- 시맨틱 HTML 구조 -->
  <header role="banner">
    <h1>🎲 추첨 게임 포털</h1>
    <p>다양한 싱글 페이지 추첨 게임을 한 곳에서 즐기세요</p>
  </header>
  
  <main role="main">
    <section aria-labelledby="games-heading">
      <h2 id="games-heading">🕹️ 게임 선택</h2>
      
      <article class="card" aria-label="구슬 올림픽 게임">
        <!-- 게임 카드 내용 -->
      </article>
      
      <!-- 다른 게임 카드들... -->
    </section>
  </main>
  
  <footer role="contentinfo">
    <nav aria-label="외부 링크">
      <!-- 푸터 링크들 -->
    </nav>
    <p>© 2025 Euiyun Edwin Kim</p>
  </footer>
</body>
</html>
```

---

## 3. 추가 권장사항

### 3.1 OG 이미지 제작
각 게임별 OG 이미지 (1200x630px 권장):
```
/lottery/og-image.png              # 포털 메인
/lottery/marble-olympics/og-image.png
/lottery/zombie-arena/og-image.png
/lottery/rock-paper-scissors/og-image.png
...
```

### 3.2 sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://geniuskey.github.io/lottery/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://geniuskey.github.io/lottery/marble-olympics/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://geniuskey.github.io/lottery/zombie-arena/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://geniuskey.github.io/lottery/rock-paper-scissors/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://geniuskey.github.io/lottery/bingo/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://geniuskey.github.io/lottery/chestnut-survival/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://geniuskey.github.io/lottery/disk-shove/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://geniuskey.github.io/lottery/punch-survival/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3.3 robots.txt
```
User-agent: *
Allow: /

Sitemap: https://geniuskey.github.io/lottery/sitemap.xml
```

### 3.4 시스템 프롬프트 업데이트

게임 메타데이터에 SEO 필드 추가:

```json
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
  "seo": {
    "title": "구슬 올림픽 - 추첨 게임 포털",
    "description": "구슬들이 다양한 트랙에서 경쟁하는 올림픽 스타일의 레이싱 추첨 게임. 물리 엔진 기반의 박진감 넘치는 경주로 공정한 추첨을 즐기세요!",
    "keywords": ["추첨 게임", "구슬 레이싱", "랜덤 선택", "당첨자 추첨"]
  }
}
```

---

## 4. SEO 체크리스트

### 필수
- [ ] `<title>` 태그 (50-60자)
- [ ] `<meta name="description">` (150-160자)
- [ ] `<link rel="canonical">`
- [ ] Open Graph 태그 (og:title, og:description, og:image, og:url)
- [ ] `<html lang="ko">`
- [ ] 시맨틱 HTML (header, main, footer, article, section)
- [ ] h1 태그 1개만 사용
- [ ] 이미지 alt 속성

### 권장
- [ ] Twitter Card 태그
- [ ] JSON-LD 구조화 데이터
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] OG 이미지 (1200x630px)
- [ ] Favicon
- [ ] 모바일 최적화
- [ ] 페이지 로딩 속도 최적화

### 추가
- [ ] Google Search Console 등록
- [ ] Naver Search Advisor 등록
- [ ] 내부 링크 구조 최적화
- [ ] 404 페이지 구성
