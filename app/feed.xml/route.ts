import RSS from 'rss'
import { getAllPosts } from '@/lib/posts'

export async function GET() {
  const feed = new RSS({
    title: "developjik's Dev Blog",
    description: '웹 개발, 프론트엔드, 백엔드 기술에 대한 developjik의 개발 블로그',
    site_url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/feed.xml`,
    language: 'ko',
    pubDate: new Date().toUTCString(),
    copyright: `All rights reserved ${new Date().getFullYear()}, developjik`
  })

  const posts = await getAllPosts()

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description || '',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${post.route}`,
      date: post.date,
      categories: post.tags || []
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
}
