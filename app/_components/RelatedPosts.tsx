'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

interface Post {
  title: string
  description: string
  slug: string
  tags: readonly string[]
}

export function RelatedPosts() {
  const pathname = usePathname()
  const [allPosts, setAllPosts] = useState<Post[]>([])

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) {
          return
        }
        const data = (await response.json()) as Post[]
        setAllPosts(data)
      } catch {
        // 관련 포스트는 보조 기능이므로 실패 시 조용히 무시
      }
    }

    loadPosts()
  }, [])

  const currentPostSlug = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean)
    if (parts[0] !== 'posts' || !parts[1]) {
      return ''
    }
    return parts[1]
  }, [pathname])

  const currentPostTags = useMemo(() => {
    return allPosts.find((post) => post.slug === currentPostSlug)?.tags ?? []
  }, [allPosts, currentPostSlug])

  const postsToShow = useMemo(() => {
    if (!currentPostSlug || allPosts.length === 0) {
      return []
    }

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

    if (relatedPosts.length >= 3) {
      return relatedPosts
    }

    return allPosts.filter((post) => post.slug !== currentPostSlug).slice(0, 3)
  }, [allPosts, currentPostSlug, currentPostTags])

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
            <Link href={`/posts/${post.slug}`} className="block card-swiss group">
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
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
