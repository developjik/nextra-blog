export default {
  // 테마 색상 및 디자인 설정
  color: {
    hue: 250, // 기본 색상 톤 (푸른색 계열)
    saturation: 80, // 채도 조정으로 시각적 안정감
    lightness: {
      dark: 60,
      light: 45,
    },
  },
  backgroundColor: {
    dark: '17, 24, 39', // 다크 모드 배경색 (RGB)
    light: '254, 252, 248', // 라이트 모드 배경색 (미미한 노란톤)
  },

  // 파비콘 설정 - 개발자 블로그 특화
  faviconGlyph: '👨‍💻',

  // 커스텀 로고 설정
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>developjik</span>
    </>
  ),
  logoLink: '/',

  // 향상된 SEO 및 메타데이터 설정
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

        {/* 추가 메타데이터 */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="application-name" content={siteTitle} />
        <meta name="apple-mobile-web-app-title" content={siteTitle} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </>
    )
  },

  readMore: '더 읽기 →',
  postFooter: null,
  darkMode: true,

  // 향상된 검색 기능
  search: {
    placeholder: '검색...',
    loading: '로딩 중...',
    noResult: '결과를 찾을 수 없습니다',
    error: '검색 오류가 발생했습니다',
    emptyResult: '검색 결과가 없습니다',
  },

  navigation: {
    prev: true,
    next: true,
  },
  newNextLinkBehavior: true,

  // 테이블 오브 콘텐츠 개선
  toc: {
    backToTop: true,
    extraContent: (
      <div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--bg-color)',
          borderRadius: '0.5rem',
          border: '1px solid var(--border-color)',
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
          💡 <strong>팁:</strong> 키보드 단축키{' '}
          <kbd
            style={{
              background: 'var(--bg-color)',
              padding: '2px 6px',
              borderRadius: '3px',
              border: '1px solid var(--border-color)',
            }}
          >
            K
          </kbd>
          를 눌러 검색할 수 있습니다.
        </p>
      </div>
    ),
  },

  // 프로젝트 링크 추가
  project: {
    link: 'https://github.com/developjik/nextra-blog',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },

  navs: [
    {
      url: '/',
      name: '홈',
    },
    {
      url: '/tags',
      name: '태그',
    },
    {
      url: 'https://github.com/developjik',
      name: 'GitHub',
    },
    {
      url: '/feed.xml',
      name: 'RSS',
    },
  ],

  // 사이드바 설정 개선
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
    toggleButton: true,
  },

  // 문서 저장소 링크
  docsRepositoryBase: 'https://github.com/developjik/nextra-blog/tree/main',

  editLink: {
    text: '페이지 편집 →',
    pattern: 'https://github.com/developjik/nextra-blog/edit/main/{filePath}',
  },
  feedback: {
    content: '문제를 발견했나요? GitHub에서 알려주세요 →',
    useLink: () => 'https://github.com/developjik/nextra-blog/issues/new',
  },

  body: {
    row: (
      <>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-jsx.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-tsx.min.js"></script>
      </>
    ),
  },

  chat: {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: 'https://discord.gg/vQcWpzGJtB',
  },
}
