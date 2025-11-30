import { getAllTags, getAllPosts } from '@/lib/posts'
import { TagBadge } from '../components/TagBadge'

export const metadata = {
  title: 'Tags - Nextra Blog',
  description: 'Browse all tags'
}

export default async function TagsPage() {
  const tags = await getAllTags()
  const allPosts = await getAllPosts()

  // Count posts per tag
  const tagCounts = tags.map(tag => ({
    tag,
    count: allPosts.filter(post => post.tags?.includes(tag)).length
  })).sort((a, b) => b.count - a.count) // Sort by count descending

  const totalPosts = allPosts.length

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          All Tags
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore {tags.length} topics across {totalPosts} posts
        </p>
      </div>

      {/* Popular Tags */}
      {tagCounts.filter(t => t.count >= 2).length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Popular Tags
          </h2>
          <div className="flex flex-wrap gap-3">
            {tagCounts.filter(t => t.count >= 2).map(({ tag, count }) => (
              <TagBadge key={tag} tag={tag} count={count} size="lg" />
            ))}
          </div>
        </div>
      )}

      {/* All Tags */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {tagCounts.filter(t => t.count >= 2).length > 0 ? 'All Tags' : 'Tags'}
        </h2>
        <div className="flex flex-wrap gap-3">
          {tagCounts.map(({ tag, count }) => (
            <TagBadge key={tag} tag={tag} count={count} size="md" />
          ))}
        </div>
      </div>

      {/* Empty State */}
      {tags.length === 0 && (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              No tags yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tags will appear here when you add them to your posts
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
