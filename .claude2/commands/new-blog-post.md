---
description: 블로그 포스트 자동 생성 (태그 추천, 날짜 자동 추가, slug 생성)
allowed-tools: Write(*.mdx), Read(*.mdx), Glob(**/*.mdx), Glob(app/posts/**/*)
---

사용자가 입력한 글 내용을 바탕으로 Nextra 블로그 포스트를 자동 생성합니다.

## 작업 흐름

1. **내용 분석**: 사용자 입력 글의 주제, 기술 스택, 핵심 개념을 분석
2. **태그 추천**: 내용을 바탕으로 적절한 태그 3-7개 추천 (기존 태그와 중복 최소화)
3. **slug 생성**: 제목을 URL-safe한 kebab-case로 변환 (영어 우선, 한글 포스트는 음역 또는 영어 번역)
4. **날짜 추가**: 오늘 날짜를 'YYYY-MM-DD' 형식으로 추가
5. **파일 생성**: `app/posts/[slug]/page.mdx` 형식으로 파일 생성

## 포스트 형식

frontmatter:
```yaml
---
title: '제목'
date: 'YYYY-MM-DD'
description: '2-3문장으로 된 글 요약'
tags: ['태그1', '태그2', '태그3', ...]
---
```

본문 시작 부분에 JsonLd 컴포넌트 추가:
```jsx
import { JsonLd } from '~/app/_components'

<JsonLd
  metadata={{
    title: '제목',
    description: '요약',
    date: 'YYYY-MM-DD',
    slug: 'slug',
    tags: ['태그1', '태그2', ...],
  }}
/>
```

## slug 생성 규칙

- 영어 제목: 소문자 kebab-case (예: `React Concurrent Rendering` → `react-concurrent-rendering`)
- 한글 제목: 음역 또는 영어 번역 (예: '이벤트 스토밍' → `event-storming`)
- 특수문자 제거, 공백은 하이픈(-)으로 변환

## 태그 추천 가이드

### 이 블로그에서 사용한 태그 (실제 데이터)
- JavaScript: Event Loop, Prototype, this, Hoisting, Async, Promise, AsyncAwait, Callback, Concurrency
- React: Concurrent Rendering, startTransition, Suspense, 성능 최적화
- Next.js/Nextra: Nextra, MDX, 문서화, SSG
- DDD/설계: DDD, Event Storming, 설계, 워크숍, 마이크로서비스
- 기타: Web Development, Programming Concepts, Inheritance, 객체지향, 프로그래밍, 코딩, binding, guide, 소개, Blog, 개발

### 태그 분류

**기술 스택 태그 (필수)**
- JavaScript, React, Next.js, TypeScript, Node.js
- CSS, HTML, Git, Docker, AWS

**개념 태그**
- React: useState, useEffect, useCallback, useMemo, Context, Redux, Recoil
- Next.js: App Router, Server Components, RSC, SSR, SSG, ISR
- JavaScript: Event Loop, Prototype, this, Hoisting, Closure, Promise, Async/Await
- TypeScript: 제네릭, 타입 추론, 유틸리티 타입, Conditional Types

**카테고리 태그**
- 성능 최적화, 렌더링, 상태 관리, 비동기 처리
- 가이드, 튜토리얼, 완벽 가이드, Best Practices
- 문서화, 테스트, 배포, CI/CD

## 출력 형식

파일 생성 전 사용자에게 확인 요청:
1. 생성할 slug 경로
2. 추천 태그 목록
3. 생성할 파일 경로

확인 후 파일 생성 및 Git 변경 사항 요약

## 사용자 입력

사용자 입력은 {{args}}로 전달됩니다. 이것이 글의 전체 내용입니다.
