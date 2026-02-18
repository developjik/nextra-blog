import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              안녕하세요! 사용자 경험과 성능 최적화를 중요하게 생각하는
              프론트엔드 개발자 developjik입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">소개</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              저는 사용자 경험을 중요하게 생각하며, 깔끔하고 유지보수하기 좋은
              코드를 작성하기 위해 노력하는 프론트엔드 개발자입니다. React와
              TypeScript를 주로 사용하며, 성능 최적화와 접근성을 고려한 웹
              애플리케이션 개발에 집중하고 있습니다. 새로운 기술을 배우는 것을
              즐기며, 배운 내용을 블로그에 정리하고 공유하는 것을 좋아합니다.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <h2 className="text-3xl font-bold mb-6">이직 포인트 요약</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• React/Next.js/TypeScript 중심의 프론트엔드 실무 역량</li>
              <li>• 성능 최적화, 접근성, 유지보수성을 고려한 설계 경험</li>
              <li>• 기술 학습 내용을 문서화하여 팀/커뮤니티와 공유하는 습관</li>
              <li>
                • 문제 정의 → 해결 → 회고의 흐름으로 프로젝트를 개선하는 방식
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">기술 스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Frontend
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    React / Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    React Native
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  State & APIs
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Zustand / Recoil
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    React Query / SWR
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    REST API / GraphQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Axios / Fetch API
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  Build & Testing
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Webpack / Vite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Jest / Vitest
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Testing Library
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Storybook
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Deployment & Tools
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Vercel / Netlify
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Git / GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Figma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    ESLint / Prettier
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">관심 분야</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-card text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-semibold mb-2">UI/UX</h3>
                <p className="text-sm text-muted-foreground">
                  사용자 경험을 개선하는 인터페이스 디자인
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2">성능 최적화</h3>
                <p className="text-sm text-muted-foreground">
                  빠르고 효율적인 웹 애플리케이션 구축
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <h3 className="font-semibold mb-2">아키텍처</h3>
                <p className="text-sm text-muted-foreground">
                  확장 가능하고 유지보수하기 좋은 구조 설계
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              최근 발행 글 (이직 포트폴리오)
            </h2>
            <div className="space-y-4">
              <a
                href="/posts/cloudfront-hidden-power-without-cache"
                className="block p-5 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold mb-2">
                  CloudFront의 숨은 힘: 캐싱 없이도 좋아지는 프론트엔드 성능
                </h3>
                <p className="text-sm text-muted-foreground">
                  CDN/전송 계층 관점에서 성능·비용 최적화를 설명한 글
                </p>
              </a>
              <a
                href="/posts/remove-branching-improve-testability"
                className="block p-5 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold mb-2">
                  문을 없애고 테스트하기: 프론트엔드 코드 품질을 올리는 리팩터링
                  관점
                </h3>
                <p className="text-sm text-muted-foreground">
                  분기 축소와 책임 분리로 테스트 가능성을 높이는 실전 접근
                </p>
              </a>
              <a
                href="/posts/types-boundary-over-enum"
                className="block p-5 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold mb-2">
                  좋은 타입은 선언 수가 아니라 경계에서 나온다: enum 남용에서
                  벗어나기
                </h3>
                <p className="text-sm text-muted-foreground">
                  API/도메인/UI 경계 분리를 중심으로 타입 설계를 정리한 글
                </p>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">연락하기</h2>
            <div className="p-6 rounded-lg border bg-card">
              <p className="text-lg text-muted-foreground mb-6">
                프로젝트 협업, 기술 문의, 또는 그냥 인사하고 싶으시다면 언제든
                연락주세요!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/developjik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="mailto:developjik@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border bg-background hover:bg-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border bg-background hover:bg-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  블로그 홈으로
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
