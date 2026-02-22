import { NextResponse } from 'next/server'
import { getAllPosts } from '~/app/lib/posts'

export async function GET() {
  try {
    const posts = await getAllPosts()
    return NextResponse.json(posts, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error loading posts:', error)
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 })
  }
}
