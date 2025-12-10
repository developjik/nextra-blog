import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { generateBlogPostingSchema, generateBreadcrumbSchema } from '@/lib/structuredData'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export async function generatePostMetadata(slug: string): Promise<Metadata> {
  const posts = await getAllPosts()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  const postUrl = `${SITE_URL}${post.route}`
  const ogImageUrl = `${SITE_URL}/og`

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog Posts', url: `${SITE_URL}/#posts` },
    { name: post.title, url: postUrl },
  ])

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags || [],
    authors: [{ name: 'developjik', url: 'https://github.com/developjik' }],
    creator: 'developjik',
    publisher: 'developjik',
    alternates: {
      canonical: post.route,
    },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      url: postUrl,
      title: post.title,
      description: post.description,
      siteName: "developjik's Dev Blog",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['developjik'],
      section: 'Technology',
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
      creator: '@developjik',
    },
    other: {
      'article:author': 'developjik',
      'article:section': 'Technology',
      'article:published_time': new Date(post.date).toISOString(),
      'article:modified_time': new Date(post.date).toISOString(),
      'article:tag': post.tags?.join(',') || '',
    },
  }
}

export async function generatePostStructuredData(slug: string) {
  const posts = await getAllPosts()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return null
  }

  const blogPostingSchema = generateBlogPostingSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog Posts', url: `${SITE_URL}/#posts` },
    { name: post.title, url: `${SITE_URL}${post.route}` },
  ])

  return {
    blogPosting: blogPostingSchema,
    breadcrumb: breadcrumbSchema,
  }
}