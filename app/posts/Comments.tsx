'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import Giscus component for better code splitting
const Giscus = dynamic(() => import('@/components/Giscus'), {
  loading: () => <div className="animate-pulse h-32 bg-gray-200 dark:bg-gray-700 rounded-lg" />,
  ssr: false
})

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
        <Suspense fallback={<div className="animate-pulse h-32 bg-gray-200 dark:bg-gray-700 rounded-lg" />}>
          <Giscus />
        </Suspense>
      </div>
    </div>
  )
}
