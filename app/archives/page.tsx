'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react'

interface Post {
  title: string
  description: string
  slug: string
  tags: readonly string[]
  date: string
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

function normalizeSearchText(value: string): string {
  return value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[-_./]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function compactSearchText(value: string): string {
  return normalizeSearchText(value).replace(/\s+/g, '')
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block"
      style={{
        animation: `swiss-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        animationDelay: `${index * 0.05}s`,
        opacity: 0,
      }}
    >
      <article className="card-swiss group">
        <div className="number-swiss mb-4 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 ease-out">
          {number}
        </div>

        <h2 className="text-h2 mb-4 font-[var(--font-heading)] group-hover:text-[var(--color-accent)] transition-all duration-300 ease-out group-hover:tracking-tight">
          {post.title}
        </h2>

        <p
          className="text-meta mb-3 font-[var(--font-mono)]"
          style={{ color: 'var(--color-text-meta)' }}
        >
          {formatDate(post.date)}
        </p>

        <p
          className="text-body mb-6 line-clamp-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="tag-swiss transition-all duration-300 ease-out"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-meta group-hover:gap-4 transition-all duration-300 ease-out mt-6">
          <span className="text-meta">READ MORE</span>
          <svg
            aria-hidden="true"
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </article>
    </Link>
  )
}

function SearchInput({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="relative mb-8">
      <input
        type="search"
        placeholder="검색어 입력..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        className="w-full px-6 py-6 border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-mono)] text-xl uppercase tracking-wider focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 placeholder:text-[var(--color-text-meta)]"
        aria-label="포스트 검색"
      />
    </div>
  )
}

function TagFilter({
  allTags,
  selectedTags,
  onToggleTag,
}: {
  allTags: readonly string[]
  selectedTags: readonly string[]
  onToggleTag: (tag: string) => void
}) {
  const handleClearAll = () => {
    selectedTags.forEach((tag) => onToggleTag(tag))
  }

  return (
    <div className="mb-8">
      <p
        className="text-meta mb-4 font-[var(--font-mono)] uppercase tracking-wider"
        style={{ color: 'var(--color-text-meta)' }}
      >
        필터링
      </p>

      {selectedTags.length > 0 && (
        <div className="mb-4 p-4 border border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="flex items-center justify-between mb-3">
            <p
              className="text-sm font-[var(--font-mono)] uppercase tracking-wider"
              style={{ color: 'var(--color-accent)' }}
            >
              활성 필터 ({selectedTags.length})
            </p>
            <button
              type="button"
              onClick={handleClearAll}
              className="text-xs font-[var(--font-mono)] uppercase tracking-wider px-3 py-1 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200"
              aria-label="모든 필터 제거"
            >
              초기화
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onToggleTag(tag)}
                className="tag-swiss cursor-pointer transition-all duration-200 !bg-[var(--color-accent)] !text-[var(--swiss-white)] !border-[var(--color-accent)] !font-bold !px-5 shadow-lg hover:shadow-xl hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)] hover:scale-105 active:scale-95"
                aria-label={`${tag} 태그 필터 제거`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag)
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggleTag(tag)}
              className={`tag-swiss cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'bg-[var(--color-accent)] text-[var(--swiss-white)] border-[var(--color-accent)] font-bold px-5 shadow-md hover:shadow-lg hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)] hover:scale-105 active:scale-95'
                  : 'hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[rgba(230,57,70,0.05)]'
              }`}
              aria-pressed={isSelected}
              aria-label={`${tag} 태그 필터`}
            >
              {tag}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function EmptyState({ hasSearchOrFilter }: { hasSearchOrFilter: boolean }) {
  return (
    <div className="py-20 text-center">
      <div className="number-swiss mb-6" style={{ fontSize: '6rem' }}>
        00
      </div>
      <h3 className="text-h2 mb-4 font-[var(--font-heading)] uppercase">
        {hasSearchOrFilter ? '결과 없음' : '포스트 준비 중'}
      </h3>
      <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
        {hasSearchOrFilter
          ? '검색어나 필터 조건을 변경해 보세요.'
          : '곧 새로운 포스트가 추가될 예정입니다.'}
      </p>
    </div>
  )
}

function PostCardSkeleton() {
  return (
    <div
      className="block card-swiss"
      style={{
        background:
          'linear-gradient(90deg, var(--swiss-light-gray) 25%, rgba(224, 224, 224, 0.5) 50%, var(--swiss-light-gray) 75%)',
        backgroundSize: '1000px 100%',
        animation: 'shimmer 2s infinite linear',
      }}
      aria-live="polite"
    >
      <div className="mb-4 h-16 w-12" />
      <div className="mb-4 h-8 w-3/4" />
      <div className="mb-4 h-5 w-1/3" />
      <div className="mb-6 h-6 w-full" />
      <div className="mb-4 flex flex-wrap gap-2">
        <div className="h-6 w-20" />
        <div className="h-6 w-16" />
        <div className="h-6 w-24" />
      </div>
    </div>
  )
}

function PostsPageContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<readonly string[]>([])

  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  useEffect(() => {
    const query = searchParams.get('q') ?? ''
    const tags = (searchParams.get('tags') ?? '')
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)

    setSearchQuery(query)
    setSelectedTags(tags)
  }, [searchParams])

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      try {
        const response = await fetch('/api/posts', {
          signal: controller.signal,
        })
        if (!response.ok) {
          throw new Error('Failed to load posts')
        }
        const data = (await response.json()) as Post[]
        setAllPosts(data)
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return
        }
        console.error('Error loading posts:', err)
        setError('포스트를 불러오는데 실패했습니다.')
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()

    return () => {
      controller.abort()
    }
  }, [])

  const allTags = useMemo(() => {
    const tagCount = new Map<string, number>()
    allPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagCount.set(tag, (tagCount.get(tag) ?? 0) + 1)
      })
    })

    return [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ko'))
      .map(([tag]) => tag)
  }, [allPosts])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (debouncedSearchQuery.trim() === '') {
      params.delete('q')
    } else {
      params.set('q', debouncedSearchQuery.trim())
    }

    const validTags = selectedTags.filter((tag) => allTags.includes(tag))
    if (validTags.length === 0) {
      params.delete('tags')
    } else {
      params.set('tags', validTags.join(','))
    }

    const nextQuery = params.toString()
    const currentQuery = searchParams.toString()
    if (nextQuery !== currentQuery) {
      router.replace(nextQuery === '' ? pathname : `${pathname}?${nextQuery}`, {
        scroll: false,
      })
    }
  }, [
    debouncedSearchQuery,
    selectedTags,
    allTags,
    router,
    pathname,
    searchParams,
  ])

  const filteredPosts = useMemo(() => {
    const normalizedQuery = normalizeSearchText(debouncedSearchQuery)
    const compactQuery = compactSearchText(debouncedSearchQuery)

    return allPosts.filter((post) => {
      const searchableText = [
        post.title,
        post.description,
        post.slug,
        ...post.tags,
      ]
        .map(normalizeSearchText)
        .join(' ')

      const compactSearchableText = compactSearchText(searchableText)

      const matchesSearch =
        normalizedQuery === '' ||
        searchableText.includes(normalizedQuery) ||
        (compactQuery !== '' && compactSearchableText.includes(compactQuery))

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((selectedTag) => post.tags.includes(selectedTag))

      return matchesSearch && matchesTags
    })
  }, [debouncedSearchQuery, selectedTags, allPosts])

  const handleToggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }, [])

  const hasSearchOrFilter =
    debouncedSearchQuery !== '' || selectedTags.length > 0

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-hero mb-4 font-[var(--font-hero)] uppercase tracking-wider">
            ALL POSTS
          </h1>
          <div className="divider-swiss-full" />
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p
              className="text-body"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-live="polite"
            >
              {filteredPosts.length}개 중 {allPosts.length}개 표시됨
            </p>
            {selectedTags.length > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <span style={{ color: 'var(--color-text-meta)' }}>
                  활성 필터:
                </span>
                <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>
                  {selectedTags.join(', ')}
                </span>
              </div>
            )}
          </div>
        </header>

        <SearchInput value={searchQuery} onChange={setSearchQuery} />

        <TagFilter
          allTags={allTags}
          selectedTags={selectedTags}
          onToggleTag={handleToggleTag}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <PostCardSkeleton key={`skeleton-${i}`} />
            ))}
          </div>
        ) : error ? (
          <div className="py-20 text-center">
            <h3 className="text-h2 mb-4 font-[var(--font-heading)] uppercase">
              오류
            </h3>
            <p
              className="text-body"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {error}
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <EmptyState hasSearchOrFilter={hasSearchOrFilter} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function PostsPage() {
  return (
    <Suspense fallback={null}>
      <PostsPageContent />
    </Suspense>
  )
}
