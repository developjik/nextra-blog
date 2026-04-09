export interface PostMeta {
  title: string
  description: string
  slug: string
  tags: readonly string[]
  date: string
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function normalizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) {
    return []
  }

  return [...new Set(tags.filter((tag): tag is string => typeof tag === 'string'))]
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '')
    .sort((a, b) => a.localeCompare(b, 'ko'))
}

function isValidDateString(value: string): boolean {
  if (!DATE_PATTERN.test(value)) {
    return false
  }

  return !Number.isNaN(new Date(value).getTime())
}

export function parsePostMetaArray(value: unknown): PostMeta[] {
  if (!Array.isArray(value)) {
    return []
  }

  const uniqueBySlug = new Map<string, PostMeta>()

  for (const item of value) {
    if (!isRecord(item)) {
      continue
    }

    const title = typeof item.title === 'string' ? item.title.trim() : ''
    const description =
      typeof item.description === 'string' ? item.description.trim() : ''
    const slug = typeof item.slug === 'string' ? item.slug.trim() : ''
    const date = typeof item.date === 'string' ? item.date.trim() : ''
    const tags = normalizeTags(item.tags)

    if (
      title === '' ||
      description === '' ||
      slug === '' ||
      !isValidDateString(date) ||
      tags.length === 0
    ) {
      continue
    }

    const current = {
      title,
      description,
      slug,
      date,
      tags,
    } satisfies PostMeta

    const prev = uniqueBySlug.get(slug)
    if (!prev || new Date(current.date).getTime() > new Date(prev.date).getTime()) {
      uniqueBySlug.set(slug, current)
    }
  }

  return [...uniqueBySlug.values()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
