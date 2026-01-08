'use client'

import { useEffect, useState } from 'react'

/**
 * 스크롤 프로그레스 바 컴포넌트
 *
 * 페이지 상단에 위치하여 현재 스크롤 위치를 시각적으로 표시합니다.
 * 미니멀 스타일로 페이지 독(sticky) 형태로 부드럽게 따라옵니다.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(Math.min(scrollPercent, 100))
    }

    // requestAnimationFrame으로 스크롤 성능 최적화
    let rafId: number
    const throttledScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // 초기 상태 설정

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  // hydration mismatch 방지: 마운트 전에는 렌더링하지 않음
  if (!mounted) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          backgroundColor: 'var(--color-accent)',
        }}
      />
    </div>
  )
}
