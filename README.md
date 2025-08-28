# 🌟 Tavi Leader Referral

선배님의 새로운 여정을 위한 특별한 터미널 기념비입니다.

## 📖 프로젝트 소개

이 프로젝트는 퇴사하는 선배에게 감사를 전하는 헌정 프로젝트입니다. 실제 터미널처럼 동작하는 인터랙티브 웹 CLI를 통해 선배의 업적과 여정을 탐험할 수 있는 디지털 기념비 역할을 합니다.

### 🎯 목적
- 외부적으로는 선배의 업적과 위상을 과시하고 추천
- 감동과 과시가 공존하는 디지털 기념비(Digital Monument) 구현

## ✨ 주요 기능

### 🖥️ 터미널 명령어
- `help` - 사용 가능한 모든 명령어 확인
- `about` - 선배님 소개 및 경력 확인
- `impact` - 조직에 남긴 대표적인 성과
- `achievements` - 세부적인 업적과 기여 내역
- `recommend` - 역량과 추천 사유
- `epilogue` - 후배로서 남기고 싶은 마지막 응원
- `portfolio` - 상세한 프로젝트 임팩트 내역

### 🎨 UI/UX 특징
- 실제 터미널과 유사한 인터랙티브 환경
- 별이 빛나는 우주 배경 (StarryBackground)
- 타이핑 효과 애니메이션
- Framer Motion을 활용한 부드러운 전환 효과
- 축하 콘페티 애니메이션

## 🛠️ 기술 스택

### Frontend
- **React 19.1.1** - UI 라이브러리
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Framer Motion 12.23.12** - 애니메이션
- **TypeScript** - 타입 안정성

### 주요 라이브러리
- `react-confetti-boom` - 축하 애니메이션
- `typed.js` - 타이핑 효과
- `figlet` - ASCII 아트
- `cli-spinners` - 터미널 로딩 스피너
- `string-width` - 문자열 너비 계산

### 개발 도구
- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 후처리
- **gh-pages** - GitHub Pages 배포

## 📁 프로젝트 구조

```
src/
├── features/referral_cli/
│   ├── ReferralCLI.jsx          # 메인 컴포넌트
│   ├── components/
│   │   ├── NumberedTypingEffect.jsx
│   │   ├── StarryBackground.jsx
│   │   ├── TerminalInput.jsx
│   │   ├── TerminalOutput.jsx
│   │   ├── TerminalWindow.jsx
│   │   └── TypingEffect.jsx
│   ├── constants/
│   │   ├── commands.jsx         # 터미널 명령어 정의
│   │   ├── devCommands.js
│   │   ├── impact.json          # 상세 임팩트 데이터
│   │   └── secretCommands.jsx
│   ├── hooks/
│   │   ├── useProgressiveReveal.jsx
│   │   └── useTerminal.jsx      # 터미널 로직
│   └── utils/
│       └── fonts.js
└── styles/
    ├── App.css
    └── index.css
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰 (빌드된 파일 확인)
npm run preview

# 코드 품질 검사
npm run lint
```

### 배포

```bash
# GitHub Pages에 배포
npm run deploy
```

## 🎮 사용 방법

1. 터미널이 로드되면 `help` 명령어로 시작하세요
2. 탭 키로 명령어 자동완성을 사용할 수 있습니다
3. 각 명령어를 실행하여 선배님의 여정을 탐험하세요

## 🌟 특별한 기능

### 반응형 타이핑 효과
- 실제 터미널과 같은 타이핑 애니메이션
- 줄바이줄 점진적 텍스트 노출
- 동적 로딩 애니메이션

### 우주 테마 배경
- 명령어에 따라 반응하는 별똥별 효과
- 그라디언트 배경 애니메이션
- 터미널 창의 네온 효과

### 데이터 기반 콘텐츠
- JSON 파일 기반의 체계적인 임팩트 데이터
- 카테고리별 성과 분류
- 정량적/정성적 지표 혼합

## 💡 주요 명령어 상세

### `impact` vs `portfolio`
- **impact**: 요약된 주요 성과 4개 카테고리
- **portfolio**: 세부 프로젝트별 상세 내역 (JSON 파일 기반)

### `recommend`
- 동료 평가 기반 역량 분석
- 5가지 핵심 강점 영역
- 실제 경험 기반 추천 사유

## 🔧 커스터마이징

### 새로운 명령어 추가
`src/features/referral_cli/constants/commands.jsx`에서 새로운 명령어를 추가할 수 있습니다.

### 임팩트 데이터 수정
`src/features/referral_cli/constants/impact.json`에서 프로젝트 성과 데이터를 수정할 수 있습니다.

### 스타일 변경
- Tailwind CSS 클래스를 통한 빠른 스타일링
- CSS 변수를 통한 테마 색상 조정 가능

## 📱 반응형 지원

- 데스크톱 우선 설계
- 모바일 터치 인터페이스 지원
- 다양한 화면 크기에 최적화된 레이아웃

## 🎨 디자인 철학

- **미니멀리즘**: 필수 요소에 집중
- **인터랙티브**: 사용자 참여 유도
- **감성적**: 따뜻한 메시지 전달
- **프로페셔널**: 업무적 성과 강조

## 📈 성능 최적화

- Vite의 빠른 HMR
- 번들 크기 최적화
- 레이지 로딩 적용
- 효율적인 리렌더링

## 🤝 기여하기

이 프로젝트는 특별한 의미가 있는 개인 프로젝트입니다. 
개선 제안이나 아이디어가 있으시면 이슈를 통해 공유해 주세요.

## 📄 라이선스

이 프로젝트는 개인적인 헌정 목적으로 제작되었습니다.

## 💝 마지막 한마디

> "선배님은 이미 충분히 대단한 분이고, 이번 경험들은 앞으로 더 큰 가능성을 쌓아가는 밑거름이 될 것이라 믿습니다."

---

**🛠️ 제작 정보**
- 기획 갈아엎기 3번, 디자인 전체 갈아엎기 2번, 컨셉 갈아엎기 5번
- 약 1년 6개월 만에 다시 만지는 React로 정성스럽게 제작
- 높은 완성도를 위한 지속적인 개선과 리팩토링

**🌐 배포 URL**: [https://Hyunju-it.github.io/tavi-leader-referral](https://Hyunju-it.github.io/tavi-leader-referral)
