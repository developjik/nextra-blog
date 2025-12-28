import { env } from '~/env'

export interface BlogPostingMetadata {
  title: string
  description: string
  date?: string
  slug: string
  author?: string
  tags?: string[]
}

/**
 * 블로그 포스트용 JSON-LD 구조화된 데이터 생성
 *
 * Google 검색 결과에서 리치 스니펫으로 표시될 수 있습니다.
 *
 * @see https://schema.org/BlogPosting
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */
export function generateBlogPostingJsonLd(
  metadata: BlogPostingMetadata
): Record<string, unknown> {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL
  const url = `${baseUrl}/posts/${metadata.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: metadata.title,
    description: metadata.description,
    datePublished: metadata.date || new Date().toISOString(),
    dateModified: metadata.date || new Date().toISOString(),
    url,
    inLanguage: 'ko-KR',
    isPartOf: {
      '@type': 'Blog',
      name: 'developjik 블로그',
      url: baseUrl,
    },
    author: {
      '@type': 'Person',
      name: metadata.author || 'developjik',
      url: 'https://github.com/developjik',
    },
    publisher: {
      '@type': 'Organization',
      name: 'developjik 블로그',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      url,
    },
    ...(metadata.tags && {
      keywords: metadata.tags.join(', '),
    }),
  }
}
