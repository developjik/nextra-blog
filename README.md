# Nextra 블로그 (개인 기술 블로그)

[Next.js](https://nextjs.org)와 [Nextra](https://nextra.site)로 구축된 현대적인 개인 블로그입니다. MDX를 사용해 콘텐츠를 작성하고, Giscus를 통해 댓글 기능을 제공합니다.

## 🚀 주요 기능

- **Nextra v4.6.1**: MDX 기반의 빠른 정적 사이트 생성
- **Next.js 16**: 최신 App Router 아키텍처
- **Giscus 댓글**: GitHub Discussions 기반의 댓글 시스템
- **다크/라이트 모드**: 자동 테마 전환 지원
- **검색 기능**: Pagefind 기반의 전문 검색
- **한글 최적화**: 완벽한 한국어 지원
- **반응형 디자인**: 모든 기기에서 최적화된 경험

## 🛠️ 개발 환경 설정

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 시작

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 블로그를 확인하세요.

### 3. 빌드 및 배포

```bash
# 프로덕션 빌드
pnpm build

# 프로덕션 서버 시작
pnpm start
```

## 📝 블로그 포스트 작성

새 포스트는 `app/posts/[slug]/page.mdx` 형식으로 작성합니다:

```bash
mkdir app/posts/my-new-post
touch app/posts/my-new-post/page.mdx
```

`page.mdx` 파일 구조:

```mdx
---
title: '포스트 제목'
description: '간단한 설명'
tags: ['태그1', '태그2']
---

# 여기에 콘텐츠 작성

내용은 MDX 형식으로 작성합니다...
```

## 💬 댓글 시스템 설정 (Giscus)

댓글 기능을 활성화하려면 다음 단계를 따르세요:

### 1단계: GitHub 저장소 설정

1. [GitHub 저장소 설정](https://github.com/developjik/nextra-blog/settings/features)에서 **Discussions** 기능 활성화
2. [Giscus 앱 설치](https://github.com/apps/giscus) 후 저장소 권한 부여

### 2단계: Giscus 설정 생성

1. [Giscus 설정 페이지](https://giscus.app/ko) 방문
2. 저장소 선택: `developjik/nextra-blog`
3. 페이지 ↔ Discussion 매핑: `pathname` 선택
4. 카테고리: `General` 또는 `Announcements` 선택
5. 테마: `preferred_color_scheme` (자동 다크/라이트 모드)
6. 언어: `한국어` 선택

### 3단계: 환경 변수 설정

`.env.local` 파일에 Giscus 설정값 추가:

```bash
# .env.local
NEXT_PUBLIC_ENABLE_COMMENTS=true
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDOHyour-repo-id
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOHyour-category-id
```

> ⚠️ **중요**: `.env.local` 파일은 git에 커밋되지 않으니 안전하게 저장하세요.
>
> 💡 **타입 안전성**: 이 프로젝트는 `t3-oss/env-nextjs`를 사용하여 타입 안전한 환경 변수 관리를 제공합니다. 환경 변수가 누락되거나 잘못된 타입일 경우 빌드 타임에 오류가 발생하여 실수를 방지합니다.

## 🎨 코드 품질 관리

이 프로젝트는 Biome를 사용하여 코드 품질을 관리합니다:

```bash
# 코드 검사 및 자동 수정
pnpm check:fix

# 개별 실행
pnpm lint        # 린팅만 실행
pnpm format      # 포맷팅만 실행
```

## 📁 프로젝트 구조

```
app/
├── page.mdx              # 홈페이지
├── layout.tsx            # 루트 레이아웃
├── posts/
│   ├── [slug]/page.mdx   # 블로그 포스트
│   ├── layout.tsx        # 포스트 레이아웃
│   └── Comments.tsx      # Giscus 댓글 컴포넌트 (타입 안전한 환경 변수 사용)
├── about/page.tsx        # 소개 페이지
├── tags/page.mdx         # 태그 목록
└── robots.txt/route.ts   # robots.txt 생성 (환경 변수 사용)

_components/
├── Navbar.tsx           # 내비게이션 바
├── Footer.tsx           # 푸터
└── index.ts             # 컴포넌트 export

env.ts                   # 타입 안전한 환경 변수 스키마 (t3-oss/env-nextjs)
```

## 🚀 배포

### Vercel에 배포 (권장)

1. GitHub 저장소를 Vercel에 연결
2. 빌드 명령어: `pnpm build`
3. 환경 변수 설정:
   - `NEXT_PUBLIC_SITE_URL`: 배포된 사이트 URL
   - Giscus 관련 환경 변수들

### 다른 플랫폼에 배포

정적 사이트로 빌드되므로 Netlify, Cloudflare Pages 등 어떤 호스팅 서비스에도 배포할 수 있습니다.

## 🔧 유용한 명령어

```bash
# 개발 관련
pnpm dev                 # 개발 서버
pnpm build               # 프로덕션 빌드
pnpm start               # 프로덕션 서버

# 코드 품질
pnpm check               # 코드 검사
pnpm check:fix           # 자동 수정
pnpm format              # 코드 포맷팅

# 유틸리티
pnpm why [package]       # 의존성 확인
```

## 📚 추가 정보

- [Nextra 문서](https://nextra.site/docs)
- [Giscus 가이드](https://github.com/giscus/giscus/blob/main/README.ko.md)
- [Next.js 문서](https://nextjs.org/docs)
- [t3-oss/env-nextjs 문서](https://env.t3.gg/docs/getting-started) - 타입 안전한 환경 변수 관리

## 라이선스

MIT License
