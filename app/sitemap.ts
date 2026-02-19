import { getAllPosts } from '~/app/lib/posts'
import { env } from '~/env'

interface SitemapEntry {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
}

/**
 * Sitemap 생성 함수
 */
export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL

  // 정적 페이지 목록
  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // 블로그 포스트 목록
  const posts = await getAllPosts()
  const postPages: SitemapEntry[] = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...postPages]
}
