import { buildPostPath } from '~/app/lib/routes'

export type FeaturedPostLink = {
  slug: string
  title: string
  description: string
}

const featuredPostLinks: readonly FeaturedPostLink[] = [
  {
    slug: 'frontend-performance-budget-release-gate',
    title: '프론트엔드 성능 예산을 릴리즈 게이트로 운영하는 법',
    description: 'Core Web Vitals와 번들 예산을 PR 판단 기준으로 연결한 글',
  },
  {
    slug: 'frontend-accessibility-regression-checklist',
    title: '접근성 회귀를 막는 프론트엔드 PR 체크리스트',
    description:
      '키보드, 포커스, 이름, 상태, 에러 메시지를 PR 리뷰로 고정한 글',
  },
  {
    slug: 'ai-assisted-frontend-pr-workflow-case-study',
    title: 'AI-assisted 프론트엔드 PR workflow 사례 정리',
    description:
      '입력 계약, 변경 범위, 검증 명령, 리뷰 로그를 하나로 묶은 사례',
  },
]

export const FEATURED_POSTS = featuredPostLinks.map((post) => ({
  ...post,
  href: buildPostPath(post.slug),
}))
