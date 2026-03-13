function normalizeSlug(slug: string): string {
  return slug
    .trim()
    .replace(/^\/+|\/+$/g, '')
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/g, '')
}

export function buildPostPath(slug: string): string {
  const normalizedSlug = normalizeSlug(slug)
  return normalizedSlug === '' ? '/posts' : `/posts/${normalizedSlug}`
}

export function buildPostUrl(baseUrl: string, slug: string): string {
  return `${normalizeBaseUrl(baseUrl)}${buildPostPath(slug)}`
}
