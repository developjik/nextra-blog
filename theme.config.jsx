export default {
  // =====================================================
  //   새로운 색상 시스템 - Emerald & Teal 기반
  // =====================================================
  color: {
    hue: 160, // Emerald/Teal 색상 톤
    saturation: 85, // 더 생생한 채도
    lightness: {
      dark: 55,
      light: 40,
    },
  },
  backgroundColor: {
    dark: '15, 23, 42', // Slate 950 기반 다크 배경
    light: '255, 255, 255', // 순백색 라이트 배경
  },

  // =====================================================
  //   브랜딩 설정
  // =====================================================
  faviconGlyph: '✨',

  logo: (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition-transform duration-300 hover:rotate-12"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          className="fill-emerald-500 dark:fill-emerald-400"
        />
        <path
          d="M2 17L12 22L22 17"
          className="stroke-emerald-500 dark:stroke-emerald-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          className="stroke-teal-500 dark:stroke-teal-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          marginLeft: '0.5em',
          fontWeight: 800,
          background: 'linear-gradient(135deg, rgb(16, 185, 129), rgb(20, 184, 166))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        developjik
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
      meta.description || '개발자 지식과 경험을 공유하는 기술 블로그'

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

        {/* 테마 색상 - Emerald */}
        <meta name="theme-color" content="#10b981" />
        <meta name="application-name" content={siteTitle} />
        <meta name="apple-mobile-web-app-title" content={siteTitle} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </>
    )
  },

  readMore: '더 보기 →',
  postFooter: null,
  darkMode: true,

  // =====================================================
  //   검색 설정
  // =====================================================
  search: {
    placeholder: '🔍 블로그 검색...',
    loading: '⏳ 검색 중...',
    noResult: '🔍 검색 결과가 없습니다',
    error: '❌ 검색 오류가 발생했습니다',
    emptyResult: '검색어를 입력해주세요',
  },

  navigation: {
    prev: true,
    next: true,
  },
  newNextLinkBehavior: true,

  // =====================================================
  //   목차 (TOC) 설정
  // =====================================================
  toc: {
    backToTop: true,
    extraContent: (
      <div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))',
          borderRadius: '0.75rem',
          border: '1px solid rgba(16, 185, 129, 0.2)',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '0.875rem',
            color: 'var(--text-color)',
            lineHeight: 1.5,
          }}
        >
          💡 <strong>검색 팁:</strong> 키보드 단축키{' '}
          <kbd
            style={{
              background: 'var(--bg-color)',
              padding: '3px 8px',
              borderRadius: '6px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              fontFamily: 'monospace',
              fontSize: '0.8rem',
            }}
          >
            K
          </kbd>
          를 눌러 빠르게 검색하세요!
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
  //   네비게이션 메뉴
  // =====================================================
  navs: [
    {
      url: '/',
      name: '🏠 홈',
    },
    {
      url: '/tags',
      name: '🏷️ 태그',
    },
    {
      url: 'https://github.com/developjik',
      name: '💻 GitHub',
    },
    {
      url: '/feed.xml',
      name: '📡 RSS',
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
    text: '📝 페이지 편집 →',
    pattern: 'https://github.com/developjik/nextra-blog/edit/main/{filePath}',
  },
  feedback: {
    content: '🐛 문제를 발견했나요? GitHub에서 알려주세요 →',
    useLink: () => 'https://github.com/developjik/nextra-blog/issues/new',
  },

  // =====================================================
  //   커뮤니티 링크
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
        <path
          d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z"
          fill="url(#shield-gradient)"
        />
        <defs>
          <linearGradient
            id="shield-gradient"
            x1="2"
            y1="2"
            x2="22"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="rgb(16, 185, 129)" />
            <stop offset="1" stopColor="rgb(20, 184, 166)" />
          </linearGradient>
        </defs>
      </svg>
    ),
    link: 'https://discord.gg/vQcWpzGJtB',
  },
}
