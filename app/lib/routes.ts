export function buildPostPath(slug: string): string {
  return `/posts/${slug}`
}

export function buildPostUrl(baseUrl: string, slug: string): string {
  return `${baseUrl}${buildPostPath(slug)}`
}
