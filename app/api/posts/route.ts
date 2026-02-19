import { NextResponse } from 'next/server'
import { getAllPosts } from '~/app/lib/posts'

export async function GET() {
  try {
    const posts = await getAllPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error loading posts:', error)
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 })
  }
}
