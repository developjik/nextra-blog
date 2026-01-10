import { glob } from 'glob'
import matter from 'gray-matter'
import { readFileSync } from 'fs'
import { NextResponse } from 'next/server'

interface Post {
  title: string
  description: string
  slug: string
  tags: readonly string[]
  date: string
}

export async function GET() {
  try {
    const files = await glob('**/page.mdx', { cwd: 'app/posts' })

    const posts: Post[] = files.map((file) => {
      const filePath = `app/posts/${file}`
      const fileContent = readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)

      const slug = file.replace('/page.mdx', '')

      return {
        title: data.title as string,
        description: data.description as string,
        slug,
        tags: (data.tags as string[]) ?? [],
        date: data.date as string,
      }
    })

    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })

    return NextResponse.json(sortedPosts)
  } catch (error) {
    console.error('Error loading posts:', error)
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 })
  }
}
