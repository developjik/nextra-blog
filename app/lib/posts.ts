import 'server-only'

import { readFileSync } from 'fs'
import { glob } from 'glob'
import matter from 'gray-matter'
import { cache } from 'react'

export interface PostMeta {
  title: string
  description: string
  slug: string
  tags: readonly string[]
  date: string
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

type ParsedPost = {
  meta: PostMeta
  sourceFile: string
  body: string
}

type JsonLdMeta = {
  title?: string
  description?: string
  slug?: string
  date?: string
  tags?: readonly string[]
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

  if (safeTitle !== raw.title || safeDescription !== raw.description) {
    console.warn(`[posts] 메타데이터 보정: ${sourceFile}`)
  }

  return {
    ...raw,
    title: safeTitle,
    description: safeDescription,
  }
}

function extractJsonLdMeta(body: string): JsonLdMeta | null {
  const jsonLdMetadataPattern =
    /<JsonLd[\s\S]*?metadata=\{\{([\s\S]*?)\}\}[\s\S]*?\/>/
  const metadataMatch = body.match(jsonLdMetadataPattern)

  if (!metadataMatch) {
    return null
  }

  const metadataObject = metadataMatch[1]

  const extractStringField = (field: string): string | undefined => {
    const pattern = new RegExp(`${field}\\s*:\\s*['"]([^'"]+)['"]`)
    return metadataObject.match(pattern)?.[1]?.trim()
  }

  const tagsMatch = metadataObject.match(/tags\s*:\s*\[([^\]]*)\]/)
  const tags = tagsMatch
    ? tagsMatch[1]
        .split(',')
        .map((rawTag) => rawTag.replace(/['"]/g, '').trim())
        .filter((tag) => tag !== '')
    : undefined

  return {
    title: extractStringField('title'),
    description: extractStringField('description'),
    slug: extractStringField('slug'),
    date: extractStringField('date'),
    tags,
  }
}

function validatePostMetadataConsistency(posts: readonly ParsedPost[]) {
  for (const post of posts) {
    const jsonLdMeta = extractJsonLdMeta(post.body)

    if (!jsonLdMeta) {
      continue
    }

    const mismatches: string[] = []

    if (jsonLdMeta.slug && jsonLdMeta.slug !== post.meta.slug) {
      mismatches.push(`slug(${jsonLdMeta.slug} !== ${post.meta.slug})`)
    }

    if (jsonLdMeta.title && jsonLdMeta.title !== post.meta.title) {
      mismatches.push('title')
    }

    if (jsonLdMeta.description && jsonLdMeta.description !== post.meta.description) {
      mismatches.push('description')
    }

    if (jsonLdMeta.date && jsonLdMeta.date !== post.meta.date) {
      mismatches.push('date')
    }

    if (jsonLdMeta.tags) {
      const normalizedJsonLdTags = [...jsonLdMeta.tags].sort()
      const normalizedMetaTags = [...post.meta.tags].sort()
      if (normalizedJsonLdTags.join('|') !== normalizedMetaTags.join('|')) {
        mismatches.push('tags')
      }
    }

    if (mismatches.length > 0) {
      throw new Error(
        `[posts] JsonLd/frontmatter 메타데이터 불일치: ${post.sourceFile} (${mismatches.join(', ')})`
      )
    }
  }
}

function validatePostLinks(posts: readonly ParsedPost[]) {
  const slugSet = new Set(posts.map((post) => post.meta.slug))
  const markdownPostLinkPattern =
    /\[[^\]]+\]\(\/posts\/([a-zA-Z0-9-]+)(\/)?(?:[?#][^)]*)?\)/g
  const jsxPostLinkPattern =
    /(?:href|to)\s*=\s*["']\/posts\/([a-zA-Z0-9-]+)(\/)?(?:[?#][^"']*)?["']/g
  const markdownPostsIndexPattern = /\[[^\]]+\]\(\/posts\/?(?:[?#][^)]*)?\)/
  const jsxPostsIndexPattern =
    /(?:href|to)\s*=\s*["']\/posts\/?(?:[?#][^"']*)?["']/

  const validateLink = (sourceFile: string, linkedSlug: string, hasTrailingSlash: boolean) => {
    if (hasTrailingSlash) {
      throw new Error(
        `[posts] 내부 링크 형식 불일치(후행 슬래시 금지): ${sourceFile} -> /posts/${linkedSlug}/`
      )
    }

    if (!slugSet.has(linkedSlug)) {
      throw new Error(`[posts] 깨진 내부 링크: ${sourceFile} -> /posts/${linkedSlug}`)
    }
  }

  for (const post of posts) {
    for (const match of post.body.matchAll(markdownPostLinkPattern)) {
      validateLink(post.sourceFile, match[1], match[2] === '/')
    }

    for (const match of post.body.matchAll(jsxPostLinkPattern)) {
      validateLink(post.sourceFile, match[1], match[2] === '/')
    }

    if (markdownPostsIndexPattern.test(post.body) || jsxPostsIndexPattern.test(post.body)) {
      throw new Error(
        `[posts] 아카이브 인덱스 링크는 /archives를 사용해야 합니다: ${post.sourceFile}`
      )
    }
  }
}

const loadAllPosts = async (): Promise<PostMeta[]> => {
  const files = await glob('**/page.mdx', { cwd: 'app/posts' })

  const parsedPosts = files.map((file) => {
    const filePath = `app/posts/${file}`
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const slug = file.replace('/page.mdx', '')
    if (slug === '') {
      throw new Error(`[posts] slug 누락: ${filePath}`)
    }

    if (!SLUG_PATTERN.test(slug)) {
      throw new Error(`[posts] slug 형식 오류(소문자-kebab-case): ${filePath} (${slug})`)
    }

    const frontmatterSlug = toStringOrEmpty(data.slug)
    if (frontmatterSlug !== '' && frontmatterSlug !== slug) {
      throw new Error(
        `[posts] slug 불일치: ${filePath} (frontmatter: ${frontmatterSlug}, path: ${slug})`
      )
    }

    const frontmatterTitle = toStringOrEmpty(data.title)
    const frontmatterDescription = toStringOrEmpty(data.description)
    const frontmatterDate = toStringOrEmpty(data.date)
    const frontmatterTags = normalizeTags(data.tags)

    if (frontmatterTitle === '') {
      throw new Error(`[posts] title 누락(frontmatter): ${filePath}`)
    }

    if (frontmatterDescription === '') {
      throw new Error(`[posts] description 누락(frontmatter): ${filePath}`)
    }

    if (frontmatterDate === '') {
      throw new Error(`[posts] date 누락(frontmatter): ${filePath}`)
    }

    if (!DATE_PATTERN.test(frontmatterDate)) {
      throw new Error(
        `[posts] date 형식 오류(YYYY-MM-DD): ${filePath} (${frontmatterDate})`
      )
    }

    if (Number.isNaN(new Date(frontmatterDate).getTime())) {
      throw new Error(`[posts] 유효하지 않은 date: ${filePath} (${frontmatterDate})`)
    }

    if (frontmatterTags.length === 0) {
      throw new Error(`[posts] tags 누락(frontmatter): ${filePath}`)
    }

    const post = {
      title: frontmatterTitle,
      description: frontmatterDescription,
      slug,
      tags: frontmatterTags,
      date: frontmatterDate,
    } satisfies PostMeta

    return {
      meta: toSafePostMeta(post, filePath),
      sourceFile: filePath,
      body: content,
    } satisfies ParsedPost
  })

  const slugSet = new Set<string>()
  for (const post of parsedPosts) {
    if (slugSet.has(post.meta.slug)) {
      throw new Error(`[posts] slug 중복: ${post.meta.slug}`)
    }
    slugSet.add(post.meta.slug)
  }

  validatePostMetadataConsistency(parsedPosts)
  validatePostLinks(parsedPosts)

  return parsedPosts
    .map((post) => post.meta)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
}

export const getAllPosts = cache(loadAllPosts)
