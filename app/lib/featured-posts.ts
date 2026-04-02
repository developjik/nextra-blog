import { buildPostPath } from '~/app/lib/routes'

export type FeaturedPostLink = {
  slug: string
  title: string
  description: string
}

const featuredPostLinks: readonly FeaturedPostLink[] = [
  {
    slug: 'cloudfront-hidden-power-without-cache',
    title: 'CloudFront의 숨은 힘: 캐싱 없이도 좋아지는 프론트엔드 성능',
    description: 'CDN/전송 계층 관점에서 성능·비용 최적화를 설명한 글',
  },
  {
    slug: 'remove-branching-improve-testability',
    title:
      '문을 없애고 테스트하기: 프론트엔드 코드 품질을 올리는 리팩터링 관점',
    description: '분기 축소와 책임 분리로 테스트 가능성을 높이는 실전 접근',
  },
  {
    slug: 'types-boundary-over-enum',
    title:
      '좋은 타입은 선언 수가 아니라 경계에서 나온다: enum 남용에서 벗어나기',
    description: 'API/도메인/UI 경계 분리를 중심으로 타입 설계를 정리한 글',
  },
]

export const FEATURED_POSTS = featuredPostLinks.map((post) => ({
  ...post,
  href: buildPostPath(post.slug),
}))
