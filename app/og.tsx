import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'developjik Dev Blog'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            maxWidth: 1000,
            padding: '0 40px',
            lineHeight: 1.2,
            marginBottom: 20,
            position: 'relative',
            zIndex: 1,
          }}
        >
          developjik
        </div>

        <div
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: 800,
            padding: '0 40px',
            lineHeight: 1.4,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Frontend Developer | 웹 개발과 기술에 대한 경험과 학습을 공유합니다
        </div>

        {/* Logo/Icon */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            width: 60,
            height: 60,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          D
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          devblog.jik.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}