'use client'

import { env } from '~/env'

export function Comments() {
  // 타입 안전한 환경 변수 접근
  const isCommentsEnabled = env.NEXT_PUBLIC_ENABLE_COMMENTS

  // Giscus 설정 정보 - 타입 안전하게 접근
  const giscusConfig = {
    repo: 'developjik/nextra-blog', // GitHub 저장소
    repoId: env.NEXT_PUBLIC_GISCUS_REPO_ID ?? '',
    category: 'General', // Discussions 카테고리
    categoryId: env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? '',
    mapping: 'pathname', // 페이지-댓글 매핑 방식
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme', // 자동 다크/라이트 모드
    lang: 'ko', // 한국어
  }

  // 환경 변수가 설정되지 않은 경우의 안내 메시지
  if (!isCommentsEnabled) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">댓글</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <p className="text-yellow-800 dark:text-yellow-200 text-center">
              💡 댓글 기능을 활성화하려면 다음 단계를 따르세요:
            </p>
            <ol className="mt-4 text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
              <li>1. GitHub 저장소에서 Discussions 기능 활성화</li>
              <li>
                2. Giscus 앱 설치:{' '}
                <a
                  href="https://github.com/apps/giscus"
                  className="underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/apps/giscus
                </a>
              </li>
              <li>
                3. Giscus 설정:{' '}
                <a
                  href="https://giscus.app/ko"
                  className="underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  giscus.app/ko
                </a>
              </li>
              <li>4. .env.local 파일에 환경 변수 설정</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">댓글</h2>

        {/* Giscus 댓글 컴포넌트 */}
        <div className="giscus-container">
          <script
            src="https://giscus.app/client.js"
            data-repo={giscusConfig.repo}
            data-repo-id={giscusConfig.repoId}
            data-category={giscusConfig.category}
            data-category-id={giscusConfig.categoryId}
            data-mapping={giscusConfig.mapping}
            data-strict={giscusConfig.strict}
            data-reactions-enabled={giscusConfig.reactionsEnabled}
            data-emit-metadata={giscusConfig.emitMetadata}
            data-input-position={giscusConfig.inputPosition}
            data-theme={giscusConfig.theme}
            data-lang={giscusConfig.lang}
            data-loading="lazy"
            crossOrigin="anonymous"
            async
          />
        </div>
      </div>
    </div>
  )
}
