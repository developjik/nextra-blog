---
name: git-commit
description: Git 변경 사항을 분석하여 Conventional Commits 형식으로 커밋합니다. 변경 사항을 논리적 단위로 나누고, 한글 메시지로 커밋합니다.
---

# Git Commit 스킬

> Git 변경 사항을 분석하여 **Conventional Commits v1.0.0** 형식으로 커밋합니다.
> 변경 사항을 논리적 단위로 자동 분류하고, **한글 커밋 메시지**로 순차적으로 커밋합니다.

## 사용 방법

```
/git-commit
```

## 실행 절차

### 1. 변경 사항 수집
```bash
git status
git diff --stat
git diff
git diff --staged
```

### 2. 변경 사항 그룹화
논리적 단위로 그룹화:

**우선순위:**
1. 기능 단위 (가장 높음)
2. 모듈 단위
3. 파일 타입
4. 의존성
5. 독립성

**규칙:**
- 서로 다른 기능은 반드시 분리
- 같은 기능이라도 너무 많으면 하위 기능 단위로 분리
- 문서, 테스트는 독립적으로 분리 (가능한 경우)
- 설정, 라이브러리 업데이트는 별도 그룹

### 3. Type 결정
| Type | 기준 |
|------|------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서만 변경 |
| `style` | 포맷팅, 세미콜론, 들여쓰기 |
| `refactor` | 리팩토링 (새 기능/버그 수정 아님) |
| `perf` | 성능 개선 |
| `test` | 테스트 코드 추가/수정 |
| `build` | 빌드 시스템, 종속성 변경 |
| `ci` | CI 설정, 스크립트 변경 |
| `chore` | 기타 변경사항 |
| `revert` | 이전 커밋 되돌리기 |

### 4. Scope 결정 (선택)
- 모듈명: `auth`, `user`, `api`
- 계층: `backend`, `frontend`
- 파일 타입: `config`, `tests`

### 5. Description 작성 (필수)
**규칙:**
- **반드시 한국어**
- **what** 설명 + 필요시 **why**
- 소문자 시작
- 마침표(.) 금지
- 50자 이내 권장
- 여러 변경사항 합치지 말 것

**예시:**
```bash
feat: 사용자 인증 기능 추가
fix(api): 토큰 만료 버그 수정
docs: 설치 가이드 업데이트
```

### 6. Body 작성 (선택)
- **반드시 한국어**
- description 다음 빈 줄로 구분
- 한 줄당 72자 이내
- 복잡한 변경사항일 때만 작성

### 7. 커밋 순서
| 순서 | 커밋 종류 |
|------|-----------|
| 1 | build, chore |
| 2 | docs |
| 3 | refactor, style |
| 4 | test |
| 5 | fix |
| 6 | feat |
| 7 | perf |

### 8. 커밋 실행
```bash
# 각 그룹별로
git add <파일들>
git commit -m "<메시지>"
```

## 커밋 단위 예시

### 시나리오 1: 단일 기능
**파일:** `Login.tsx`, `auth.ts`, `Login.test.tsx`
```bash
feat(auth): 사용자 로그인 기능 추가
```

### 시나리오 2: 여러 기능
**파일:** `Login.tsx`, `Profile.tsx`, `README.md`
```bash
# 1번 커밋
feat(auth): 사용자 로그인 기능 추가

# 2번 커밋
feat(user): 사용자 프로필 기능 추가

# 3번 커밋
docs: README에 로그인, 프로필 기능 설명 추가
```

### 시나리오 3: 버그 수정 + 테스트 + 라이브러리
**파일:** `user.ts` (버그), `user.test.ts` (테스트), `package.json` (라이브러리)
```bash
# 1번 커밋
build: axios 버전 업데이트

# 2번 커밋
fix(api): 사용자 데이터 로딩 버그 수정

# 3번 커밋
test(api): 사용자 API 테스트 추가
```

## 출력 형식

### 분석 결과
```markdown
## 📊 변경 사항 분석

### 변경된 파일 (N개)
- `src/auth/Login.tsx` (+150)
- `src/api/auth.ts` (+45, -12)
- `README.md` (+20)

### 그룹화 결과 (M개 커밋)
1. feat(auth): 사용자 로그인 기능 추가
2. docs: README에 로그인 기능 설명 추가
```

### 커밋 진행
```markdown
## ✅ 커밋 진행 상황

### 1/N: feat(auth): 사용자 로그인 기능 추가
✅ 완료
```

### 최종 결과
```markdown
## 🎉 완료

총 N개 커밋 생성:

abc123 feat(auth): 사용자 로그인 기능 추가
def456 docs: README에 로그인 기능 설명 추가
```

## 주의사항
- **AI 코딩 co-author 메시지를 절대 포함하지 마세요** (`Co-authored-by:` 메시지 금지)
- 커밋 메시지에는 오직 변경 사항만 기술해야 합니다

## 예외 처리
- 변경 사항 없음: "커밋할 변경 사항이 없습니다."
- 이미 staged: 바로 커밋
- 충돌 발생: 사용자에게 안내

## 좋은 커밋 메시지 예시

```bash
feat: 파일 업로드 기능 추가

사용자가 프로필 이미지와 문서를 업로드할 수 있도록 함
최대 10MB 지원, 이미지 자동 리사이징

fix(api): 요청 타임아웃 버그 수정

타임아웃 30초 → 60초로 연장으로 무한 로딩 방지

docs: API 문서 업데이트

새로운 엔드포인트 추가에 따른 문서 갱신

refactor(auth): 인증 로직 중복 제거

공통 함수로 분리하여 유지보수성 개선
```

## 길이 제한
| 부분 | 최대 길이 |
|------|-----------|
| Description | 72자 |
| Body 줄당 | 72자 |
