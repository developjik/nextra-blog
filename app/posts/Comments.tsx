'use client'

export function Comments() {
  // Only show comments when properly configured
  // Set NEXT_PUBLIC_ENABLE_COMMENTS=true in .env.local to enable
  const isGiscusConfigured = process.env.NEXT_PUBLIC_ENABLE_COMMENTS === 'true'

  if (!isGiscusConfigured) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">댓글</h2>
        <div className="animate-pulse h-32 bg-gray-200 dark:bg-gray-700 rounded-lg">
          <p className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
            댓글 기능은 현재 비활성화되어 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
