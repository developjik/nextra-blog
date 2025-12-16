'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function Giscus() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    // TODO: Giscus 설정을 위해 아래 값들을 업데이트해야 합니다
    // https://giscus.app 에서 repo를 연결하고 설정값을 받으세요
    scriptElem.setAttribute('data-repo', 'developjik/nextra-blog') // 여기에 GitHub repo 입력
    scriptElem.setAttribute('data-repo-id', 'YOUR_REPO_ID') // repo ID 입력
    scriptElem.setAttribute('data-category', 'General') // 카테고리 입력
    scriptElem.setAttribute('data-category-id', 'YOUR_CATEGORY_ID') // 카테고리 ID 입력
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'top')
    scriptElem.setAttribute('data-theme', theme)
    scriptElem.setAttribute('data-lang', 'ko')
    scriptElem.setAttribute('data-loading', 'lazy')

    ref.current.appendChild(scriptElem)
  }, [theme])

  // 테마 변경 시 Giscus 테마도 업데이트
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame'
    )
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app'
    )
  }, [theme])

  return <div ref={ref} className="mt-8" />
}

// Add default export for dynamic importing
export default Giscus
