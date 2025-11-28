import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  title: string
  date: string
  description?: string
  tags?: string[]
  slug: string
  route: string
}

export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'app/posts')

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const postFolders = fs.readdirSync(postsDirectory)
  const posts: Post[] = []

  for (const folder of postFolders) {
    const folderPath = path.join(postsDirectory, folder)
    const stat = fs.statSync(folderPath)

    if (stat.isDirectory()) {
      const mdxPath = path.join(folderPath, 'page.mdx')

      if (fs.existsSync(mdxPath)) {
        const fileContents = fs.readFileSync(mdxPath, 'utf8')
        const { data } = matter(fileContents)

        posts.push({
          title: data.title || folder,
          date: data.date || '',
          description: data.description || '',
          tags: data.tags || [],
          slug: folder,
          route: `/posts/${folder}`
        })
      }
    }
  }

  // Sort by date descending
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post =>
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const tagsSet = new Set<string>()

  allPosts.forEach(post => {
    post.tags?.forEach(tag => tagsSet.add(tag))
  })

  return Array.from(tagsSet).sort()
}
