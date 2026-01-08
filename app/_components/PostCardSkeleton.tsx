export function PostCardSkeleton() {
  return (
    <div
      className="block card-swiss"
      style={{
        background:
          'linear-gradient(90deg, var(--swiss-light-gray) 25%, rgba(224, 224, 224, 0.5) 50%, var(--swiss-light-gray) 75%)',
        backgroundSize: '1000px 100%',
        animation: 'shimmer 2s infinite linear',
      }}
    >
      <div className="mb-4 h-12 w-8" />
      <div className="mb-2 h-10 w-3/4" />
      <div className="mb-4 h-6 w-1/2" />
      <div className="mb-2 h-4 w-full" />
      <div className="mb-4 flex gap-2">
        <div className="h-6 w-16" />
        <div className="h-6 w-16" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-20" />
      </div>
    </div>
  )
}
