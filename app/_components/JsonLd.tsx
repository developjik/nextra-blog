import Script from 'next/script'
import type { BlogPostingMetadata } from '~/app/lib/json-ld'
import { generateBlogPostingJsonLd } from '~/app/lib/json-ld'

type JsonLdProps = {
  metadata: BlogPostingMetadata
}

/**
 * JSON-LD 구조화된 데이터 컴포넌트
 *
 * Next.js Script 컴포넌트를 사용하여 SEO에 최적화된 방식으로
 * JSON-LD를 페이지에 삽입합니다.
 */
export function JsonLd({ metadata }: JsonLdProps) {
  const jsonLd = generateBlogPostingJsonLd(metadata)

  return (
    <Script
      id="json-ld-blog-posting"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
