export default {
  // =====================================================
  //   SWISS-INTERNATIONAL COLOR SYSTEM
  //   극도로 단순화된 색상 팔레트
  // =====================================================
  color: {
    hue: 0, // Red (Swiss Style의 유일한 악센트)
    saturation: 90,
    lightness: {
      dark: 55,
      light: 45,
    },
  },
  backgroundColor: {
    dark: '5, 5, 5', // 거의 검정
    light: '255, 255, 255', // 순백
  },

  // =====================================================
  //   SWISS BRANDING - 간결한 로고
  // =====================================================
  faviconGlyph: '■',

  logo: (
    <>
      <span
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          fontFamily: 'var(--font-hero), Space Grotesk, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
        }}
      >
        <span style={{ color: 'rgb(230, 57, 70)' }}>●</span>
        <span style={{ marginLeft: '0.5em' }}>developjik</span>
      </span>
    </>
  ),
  logoLink: '/',

  // =====================================================
  //   SEO & 메타데이터
  // =====================================================
  head: ({ title, meta, locale }) => {
    const siteTitle = 'developjik 블로그'
    const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
    const description =
      meta.description || '웹 개발에 대한 경험과 학습을 기록하는 기술 블로그'

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        {meta.tag && <meta name="keywords" content={meta.tag} />}
        {meta.author && <meta name="author" content={meta.author} />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph 태그 */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content={locale || 'ko_KR'} />

        {/* Twitter Card 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />

        {/* Swiss Red Theme Color */}
        <meta name="theme-color" content="#e63946" />
        <meta name="application-name" content={siteTitle} />
        <meta name="apple-mobile-web-app-title" content={siteTitle} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </>
    )
  },

  readMore: 'READ MORE →',
  postFooter: null,
  darkMode: true,

  // =====================================================
  //   검색 설정 - Swiss Style
  // =====================================================
  search: {
    placeholder: 'SEARCH...',
    loading: 'LOADING...',
    noResult: 'NO RESULTS',
    error: 'ERROR',
    emptyResult: 'TYPE TO SEARCH',
  },

  navigation: {
    prev: true,
    next: true,
  },
  newNextLinkBehavior: true,

  // =====================================================
  //   목차 (TOC) 설정 - Swiss Minimal
  // =====================================================
  toc: {
    backToTop: true,
    extraContent: (
      <div className="search-keyboard-hint">
        <p>
          PRESS <kbd>K</kbd> TO SEARCH THE BLOG
        </p>
      </div>
    ),
  },

  // =====================================================
  //   프로젝트 링크
  // =====================================================
  project: {
    link: 'https://github.com/developjik/nextra-blog',
    icon: (
      <svg
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },

  // =====================================================
  //   네비게이션 메뉴 - 대문자, 간결
  // =====================================================
  navs: [
    {
      url: '/',
      name: 'HOME',
    },
    {
      url: '/tags',
      name: 'TAGS',
    },
    {
      url: 'https://github.com/developjik',
      name: 'GITHUB',
    },
    {
      url: '/feed.xml',
      name: 'RSS',
    },
  ],

  // =====================================================
  //   사이드바 설정
  // =====================================================
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
    toggleButton: true,
  },

  // =====================================================
  //   문서 저장소
  // =====================================================
  docsRepositoryBase: 'https://github.com/developjik/nextra-blog/tree/main',

  editLink: {
    text: 'EDIT PAGE →',
    pattern: 'https://github.com/developjik/nextra-blog/edit/main/{filePath}',
  },
  feedback: {
    content: 'REPORT ISSUE →',
    useLink: () => 'https://github.com/developjik/nextra-blog/issues/new',
  },

  // =====================================================
  //   커뮤니티 링크 - Swiss 간결 스타일
  // =====================================================
  chat: {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M7 8h10M7 12h10M7 16h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    link: 'https://discord.gg/vQcWpzGJtB',
  },
}
