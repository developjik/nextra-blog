import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/**
 * 환경 변수 스키마 정의
 *
 * 이 파일은 t3-oss/env-nextjs를 사용하여 타입 안전한 환경 변수 관리를 제공합니다.
 * 환경 변수가 누락되거나 잘못된 타입일 경우 빌드 타임에 오류가 발생합니다.
 *
 * @see https://env.t3.gg/docs/getting-started
 */
export const env = createEnv({
  /**
   * 서버 사이드 환경 변수
   * NODE_ENV, DATABASE_URL 등 클라이언트에 노출되면 안 되는 값들
   */
  server: {
    // 향후 서버사이드 전용 환경 변수가 필요하면 여기에 추가
    // 예: DATABASE_URL: z.string().url(),
  },

  /**
   * 클라이언트 사이드 환경 변수
   * NEXT_PUBLIC_ 접두사가 붙은 값들로 브라우저에서 접근 가능
   */
  client: {
    // 사이트 URL - RSS 피드 및 SEO에 사용
    NEXT_PUBLIC_SITE_URL: z.string().default('http://localhost:3000'),

    // 댓글 기능 활성화 여부
    NEXT_PUBLIC_ENABLE_COMMENTS: z
      .enum(['true', 'false'])
      .transform((val) => val === 'true')
      .default(false),

    // Giscus 설정 값
    NEXT_PUBLIC_GISCUS_REPO_ID: z.string().optional(),
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: z.string().optional(),
  },

  /**
   * 런타임 검증
   * 개발 환경에서는 앱 시작 시 환경 변수를 검증하고,
   * 프로덕션에서는 빌드 타임에 검증합니다.
   */
  runtimeEnv: {
    // 클라이언트 환경 변수
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ENABLE_COMMENTS: process.env.NEXT_PUBLIC_ENABLE_COMMENTS,
    NEXT_PUBLIC_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,

    // 서버 환경 변수 (향후 추가용)
  },

  /**
   * 빌드 타임에 환경 변수를 노출할지 여부
   * true: 서버와 클라이언트 모두에서 접근 가능
   * false: 서버에서만 접근 가능
   */
  emptyStringAsUndefined: true,
})

/**
 * 환경 변수 타입 추출
 *
 * 사용 예시:
 * ```ts
 * import { env } from '~/env'
 *
 * // 타입 안전한 접근
 * const siteUrl = env.NEXT_PUBLIC_SITE_URL
 * const isCommentsEnabled = env.NEXT_PUBLIC_ENABLE_COMMENTS
 * ```
 */
export type Env = typeof env
