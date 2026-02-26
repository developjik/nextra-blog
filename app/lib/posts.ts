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

function toStringOrEmpty(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function normalizeTags(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return []
  }

  const unique = new Set<string>()

  for (const rawTag of value) {
    const tag = toStringOrEmpty(rawTag)
    if (tag !== '') {
      unique.add(tag)
    }
  }

  return [...unique]
}

function toTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((token) => token[0]?.toUpperCase() + token.slice(1))
    .join(' ')
}

function toSafePostMeta(raw: PostMeta, sourceFile: string): PostMeta {
  const safeTitle = raw.title === '' ? toTitleFromSlug(raw.slug) : raw.title
  const safeDescription = raw.description === '' ? safeTitle : raw.description

  const parsedDate = new Date(raw.date).getTime()
  const safeDate = Number.isNaN(parsedDate) ? '1970-01-01' : raw.date

  if (safeTitle !== raw.title || safeDescription !== raw.description) {
    console.warn(`[posts] 메타데이터 보정: ${sourceFile}`)
  }

  if (safeDate !== raw.date) {
    console.warn(`[posts] date 형식 보정: ${sourceFile} (${raw.date})`)
  }

  return {
    ...raw,
    title: safeTitle,
    description: safeDescription,
    date: safeDate,
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await glob('**/page.mdx', { cwd: 'app/posts' })

  const posts = files.map((file) => {
    const filePath = `app/posts/${file}`
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    const slug = file.replace('/page.mdx', '')
    if (slug === '') {
      throw new Error(`[posts] slug 누락: ${filePath}`)
    }

    const post = {
      title: toStringOrEmpty(data.title),
      description: toStringOrEmpty(data.description),
      slug,
      tags: normalizeTags(data.tags),
      date: toStringOrEmpty(data.date),
    } satisfies PostMeta

    return toSafePostMeta(post, filePath)
  })

  const slugSet = new Set<string>()
  for (const post of posts) {
    if (slugSet.has(post.slug)) {
      throw new Error(`[posts] slug 중복: ${post.slug}`)
    }
    slugSet.add(post.slug)
  }

  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}
