import 'server-only'

import { readFileSync } from 'fs'
import { glob } from 'glob'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  description: string
  slug: string
  tags: readonly string[]
  date: string
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await glob('**/page.mdx', { cwd: 'app/posts' })

  const posts = files.map((file) => {
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
    } satisfies PostMeta
  })

  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}
