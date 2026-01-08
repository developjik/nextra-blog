interface Post {
  title: string
  description: string
  slug: string
  tags: readonly string[]
}

interface RelatedPostsProps {
  currentPostTags: readonly string[]
  allPosts: Post[]
  currentPostSlug: string
}

export function RelatedPosts({
  currentPostTags,
  allPosts,
  currentPostSlug,
}: RelatedPostsProps) {
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentPostSlug)
    .map((post) => ({
      ...post,
      relatedScore: post.tags.filter((tag) => currentPostTags.includes(tag))
        .length,
    }))
    .filter((post) => post.relatedScore > 0)
    .sort((a, b) => b.relatedScore - a.relatedScore)
    .slice(0, 3)

  const fallbackPosts = allPosts
    .filter((post) => post.slug !== currentPostSlug)
    .slice(0, 3)

  const postsToShow = relatedPosts.length >= 3 ? relatedPosts : fallbackPosts

  if (postsToShow.length === 0) {
    return null
  }

  return (
    <section
      className="section-swiss"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="grid-swiss">
        <div className="col-span-12">
          <div className="text-meta mb-2">RELATED</div>
          <h2 className="text-h2 mb-6">YOU MIGHT ALSO LIKE</h2>
          <div className="divider-swiss" />
        </div>

        {postsToShow.map((post, index) => (
          <div key={post.slug} className="col-span-12 md:col-span-4 mb-8">
            <a href={`/posts/${post.slug}`} className="block card-swiss group">
              <div className="number-swiss mb-4">0{index + 1}</div>
              <h3 className="text-h3 mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </h3>
              <div
                className="text-body mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {post.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-swiss">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-meta">
                <span>READ MORE</span>
                <span style={{ color: 'var(--color-text-meta)' }}>→</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
