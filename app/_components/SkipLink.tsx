'use client'

/**
 * Skip to Content 링크 컴포넌트
 *
 * 키보드 사용자가 헤더와 네비게이션을 건너뛰고
 * 바로 메인 콘텐츠로 이동할 수 있게 합니다.
 *
 * WCAG 2.1 2.4.1 블록 우회 (Level A) 준수
 *
 * @see https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[100]
        rounded-lg bg-blue-600 px-4 py-2
        font-medium text-white
        transition-all
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        dark:bg-blue-500 dark:hover:bg-blue-600
      "
    >
      메인 콘텐츠로 바로가기
    </a>
  )
}
