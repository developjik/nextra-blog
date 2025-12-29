'use client'

import Image from 'next/image'
import type { ComponentProps } from 'react'

type OptimizedImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
} & Omit<ComponentProps<typeof Image>, 'width' | 'height'>

/**
 * 최적화된 이미지 컴포넌트
 *
 * MDX에서 사용할 수 있도록 `next/image`를 래핑한 컴포넌트입니다.
 *
 * 특징:
 * - 자동 이미지 최적화 (WebP/AVIF 변환)
 * - 반응형 크기 조정
 * - 지연 로딩 (lazy loading)
 * - 캡션 지원
 * - 접근성 고려 (alt 필수)
 *
 * @example
 * ```mdx
 * <OptimizedImage src="/images/example.jpg" alt="예시 이미지" width={800} height={600} />
 * ```
 *
 * @see https://nextjs.org/docs/api-reference/next/image
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  caption,
  ...props
}: OptimizedImageProps) {
  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="shadow-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
