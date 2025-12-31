'use client'

import { Footer as NextraFooter } from 'nextra-theme-blog'

/**
 * SwissFooter - Swiss-International Style 푸터
 *
 * 특징:
 * - 그리드 레이아웃 (12칼럼)
 * - 대문자만 사용하는 텍스트
 * - 얇은 디바이더
 * - 넉넉한 여백
 */
export function SwissFooter() {
  const currentYear = 2025

  return (
    <NextraFooter>
      <div className="section-swiss-compact border-t border-[var(--color-border)]">
        {/* Grid Layout */}
        <div className="grid-swiss">
          {/* Left Column - Brand Info */}
          <div className="col-span-12 md:col-span-6 space-swiss-md">
            <h4 className="text-h4 mb-2">DEVELOPIK</h4>
            <p
              className="text-body"
              style={{
                color: 'var(--color-text-secondary)',
                maxWidth: '400px',
              }}
            >
              웹 개발에 대한 경험과 학습을 기록하고 공유하는 공간입니다.
            </p>
            <div className="divider-swiss" />
            <p
              className="text-meta"
              style={{ color: 'var(--color-text-meta)' }}
            >
              © {currentYear} developjik. All rights reserved.
            </p>
          </div>

          {/* Right Column - Social Links */}
          <div className="col-span-12 md:col-span-6 md:text-right space-swiss-md">
            <h4 className="text-h4 mb-4">CONNECT</h4>
            <div className="flex flex-col md:items-end gap-2">
              <a
                href="https://github.com/developjik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-meta link-swiss"
              >
                GitHub
              </a>
              <a href="/feed.xml" className="text-meta link-swiss">
                RSS Feed
              </a>
              <a
                href="mailto:developjik@gmail.com"
                className="text-meta link-swiss"
              >
                Email
              </a>
            </div>
          </div>

          {/* Bottom Row - Legal */}
          <div className="col-span-12 mt-8 pt-8 border-t border-[var(--color-border)]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p
                className="text-meta"
                style={{ color: 'var(--color-text-meta)' }}
              >
                Content licensed under{' '}
                <a
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-swiss"
                >
                  CC BY-NC-SA 4.0
                </a>
              </p>

              <div className="flex items-center gap-4">
                <span
                  className="text-meta"
                  style={{ color: 'var(--color-text-meta)' }}
                >
                  Built with
                </span>
                <span className="text-meta font-bold">Next.js</span>
                <span style={{ color: 'var(--color-text-meta)' }}>+</span>
                <span className="text-meta font-bold">Nextra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextraFooter>
  )
}
