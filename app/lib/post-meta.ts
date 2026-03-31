export interface PostMeta {
  title: string
  description: string
  slug: string
  tags: readonly string[]
  date: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function parsePostMetaArray(value: unknown): PostMeta[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .flatMap((item) => {
      if (!isRecord(item)) {
        return []
      }

      const title = typeof item.title === 'string' ? item.title.trim() : ''
      const description =
        typeof item.description === 'string' ? item.description.trim() : ''
      const slug = typeof item.slug === 'string' ? item.slug.trim() : ''
      const date = typeof item.date === 'string' ? item.date.trim() : ''
      const tags = Array.isArray(item.tags)
        ? [...new Set(item.tags.filter((tag): tag is string => typeof tag === 'string'))]
        : []

      if (
        title === '' ||
        description === '' ||
        slug === '' ||
        date === '' ||
        tags.length === 0
      ) {
        return []
      }

      return [
        {
          title,
          description,
          slug,
          date,
          tags,
        } satisfies PostMeta,
      ]
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
