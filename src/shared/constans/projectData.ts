import type { Project } from "@/shared/types/project";

const data: Project[] = [
  {
    title: `개발자 공방`,
    subTitle: `코드 영향도 분석 및 문서 작성 자동화 서비스 개발`,
    info: {
      period: "2026.01 ~ 2026.03",
      skills: ["nextjs", "typescript", "tailwind", "supabase", "zustand", "tanstack-query", "github", "n8n", "figma"],
    },
    description: [
      {
        title: "GitHub PR 기반 자동화 파이프라인 구축",
        item: [
          {
            text: "Webhook으로 n8n 워크플로우를 트리거하고 REST API로 변경 파일·일반 댓글·라인 리뷰 댓글을 한 번에 수집",
            image: "/public/images/devcraft_01.png",
          },
          "Merge + JS 노드로 타입 분리·평탄화·HTML 제거 등 전처리, GitHub GraphQL 묶음 조회로 의존성 맵 생성 및 ECharts 리포트 시각화",
          "웹훅·GitHub API·모델 호출을 단계별로 분리해 실패 지점을 명확히 하고 에러 응답을 일관된 형태로 반환",
        ],
      },
      {
        title: "프롬프트 엔지니어링으로 문서 생성 품질 개선",
        item: [
          {
            text: "문서 종류·말투·글 구조·독자 타겟을 필터로 분리하고 통과/실패 예시와 자기검증 체크리스트를 포함해 결과 편차 최소화",
            code: [
              "너는 “PR 기반 문서/블로그 생성기”다.",
              "입력으로 주어진 {{ $json.allFilesDiff }}와 {{ $json.conversation.filters }} 값(키)을 근거로, 실제로 쓸 수 있는 Markdown 문서 1편을 만든다.",
              "",
              "",
              "절대 규칙",
              "- 추측 금지: PR diff / 입력에 없는 파일·기능·동작을 만들어내지 않는다.",
              "- 확인 불가한 내용은 “추가로 확인할 점” 섹션에 질문으로만 남긴다.",
              "- 출력은 Markdown 한 편만 (메타 코멘트, 안내문, 사족 금지)",
              "- {STACK}이 없거나 비어 있으면 특정 프레임워크/라이브러리 이름을 단정해서 끼워 넣지 않는다.",
              "- 글자수는 반드시 최대 2000자를 넘기지 않는다.",
              "",
              "입력(그대로 사용)",
              "pr내용: {{ $json.allFilesDiff }}",
              "문서 종류: {{ $json.conversation.filters.documentType }}",
              "글 목적: {{ $json.conversation.filters.purpose }}",
              "설명 수준: {{ $json.conversation.filters.explanationDepth }}",
              "독자 타겟: {{ $json.conversation.filters.targetLevel }}",
              "말투: {{ $json.conversation.filters.toneStyle }}",
              "글 구조: {{ $json.conversation.filters.contentStructure }}",
              "스타일 옵션: {{ $json.conversation.filters.styleOptions }}",
              "PR 기반 옵션: {{ $json.conversation.filters.prOptions }}",
              "",
              "필터 해석 규칙(중요)",
              "- 위 필터 값은 문자열 또는 배열일 수 있다.",
              "  - 배열이면 “선택된 키 목록”으로 해석한다.",
              "  - 비어 있거나 null이면 “선택 없음”으로 간주하고 기본값으로 작성한다.",
              "",
              "1) 문서 종류(documentType)",
              "- blog: 사람 냄새 나는 개발 블로그 톤. “내가 겪은 흐름(오해→막힘→해결)”을 기본 뼈대로 쓴다.",
              "- readme: 실사용자 문서 톤. 간결하고 구조적으로, 실행 가능한 정보(설치/사용/구성)를 우선한다.",
              "",
              "2) 글 목적(purpose) — 1개 선택",
              "- overview: 전체 개요/핵심 기능/목표/대상",
              "- setupGuide: 설치/환경변수/실행 순서/주의사항",
              "- usage: 실제 사용 방법/예시/시나리오",
              "- architecture: 폴더/모듈/레이어/데이터 흐름",
              "- techDecision: 기술 선택 이유/대안 비교/트레이드오프",
              "- concept: 핵심 개념 정의 + 왜 필요한지 + PR에서 어떻게 쓰였는지",
              "- troubleshooting: 문제→원인→해결, 재현/증상/검증 과정을 강조",
              "- tutorial: 따라하기(단계) 중심, 단계별 결과가 보이게",
              "- prReview: 변경점 분석/영향 범위/핵심 diff 해석 중심",
              "- retrospective: 배운 점/아쉬운 점/다음 액션 중심 (과장 금지)",
              "",
              "3) 설명 수준(explanationDepth) — 1~2개 선택",
              "- lineByLine: 중요한 변경 구간을 골라 라인 단위로 짧게 해설(전체 다 하지 말고 상위 3~5개 변경만)",
              "- keyCode: 핵심 코드/핵심 diff만 발췌해서 설명",
              "- flowBased: 파일 나열 대신 “흐름(요청→처리→저장/응답)” 중심으로 설명",
              "- beforeAfter: 가능하면 diff의 삭제/추가를 이용해 Before/After 비교 섹션을 만든다",
              "",
              "4) 독자 타겟(targetLevel) — 1개 선택",
              "- beginner: 용어 정의 먼저, 왜 필요한지부터 설명",
              "- intermediate: 배경 설명 최소, 실무 포인트/함정/선택 이유 강조",
              "- advanced: 트레이드오프/확장성/경계 조건/리스크 중심",
              "",
              "5) 말투(toneStyle)",
              "- plain: 군더더기 없이 짧게",
              "- natural: 자연스러운 문장, 너무 교과서 톤 금지",
              "- senior: 선배가 맥락 잡아주듯(불필요한 훈계 금지)",
              "- lecture: 강의처럼 목차/정의/정리 구조를 선명하게",
              "",
              "6) 글 구조(contentStructure)",
              "- summaryFirst: 맨 위에 TL;DR/요약 먼저",
              "- conclusionFirst: 맨 위에 결론(무엇이 바뀌었고 왜 중요한지) 먼저",
              "- problemCauseSolution: 전체 흐름을 문제→원인→해결로 고정",
              "- stepByStep: 단계 1,2,3… 형태로 진행",
              "- onePointPerParagraph: 한 문단에 한 포인트만(문단 3~5문장)",
              "",
              "7) 스타일 옵션(styleOptions)",
              "- noEmoji: 이모지 0개",
              "- minEmoji: 이모지 최대 2개",
              "- table: 최소 1개 표 포함(예: 변경 요약 표, 영향 범위 표, 설정 표)",
              "- codeHeavy: 코드 블록 많이(3개 이상 권장, 단 억지 금지)",
              "- codeLight: 코드 블록 최소(1개 이하 권장, 필요할 때만)",
              "",
              "충돌 처리",
              "- noEmoji가 있으면 minEmoji 무시(이모지 0)",
              "- codeHeavy와 codeLight가 동시에 있으면 codeHeavy 우선",
              "- summaryFirst와 conclusionFirst가 동시에 있으면 conclusionFirst 우선",
              "",
              "8) PR 기반 옵션(prOptions) — 1~3개 선택",
              "선택된 키는 반드시 “별도 섹션 제목”으로 포함한다.",
              "- changeSummary: 변경 요약(무엇이 바뀌었는지 5~10줄)",
              "- majorChanges: 주요 수정 사항(핵심 파일/핵심 로직 3~7개)",
              "- risks: 리스크 및 주의사항(부작용/엣지케이스/롤백 포인트)",
              "- learnings: PR에서 배운 점(사실 기반)",
              "- mistakes: 실수 정리(왜 실수했는지 + 예방책)",
              "- reviewFeedback: 리뷰 피드백 반영 과정(입력에 근거 있을 때만)",
              "- ifRedo: 다시 한다면 이렇게(개선안/대안/다음 액션)",
              "",
              "[출력 제한 규칙]",
              "- 무조건 핵심만. 배경 설명/정의/튜토리얼식 장문 금지.",
              "- 총 12줄 이내(줄바꿈 기준). 한 줄은 한 문장만.",
              "- 섹션은 아래 4개만 출력:",
              "  1) 요약: 3줄",
              "  2) 변경: 최대 6줄(파일/기능 단위로 “무엇이 바뀜”만)",
              "  3) 리뷰/댓글: 최대 3줄(있으면 핵심만, 없으면 “없음” 1줄)",
              "  4) 체크: 최대 3줄(리스크/추가확인)",
              "- PR diff/댓글에 없는 내용은 추측하지 말 것.",
              "",
              "이제 위 입력을 바탕으로 Markdown 문서 1편을 출력해라.",
              "(출력은 문서 본문만, 추가 안내/설명 금지)",
            ].join("\n"),
          },
          "Gemini·GPT 등 여러 모델 비교 테스트 후 Gemini 2.5 Pro로 정착, 워크플로우에 모델 노드 결합해 자동 생성 흐름 완성",
        ]
      },
      {
        title: "Supabase + GitHub OAuth 인증 및 유저 데이터 연동",
        item: [
          "GitHub 로그인 시 자체 토큰 발급 후 유저 테이블에 저장, 유저별 문서 생성 옵션을 별도 테이블로 관리해 재방문 시 이전 설정 유지",
          "민감한 API Key 노출 방지를 위해 서버 사이드에서 먼저 처리하고 보안 강화된 데이터만 클라이언트에 전달",
        ],
      },
      {
        title: "피드백 기반 지속 개선 및 Kakao Adfit 광고 운영",
        item: [
          "Google Form으로 실사용자 피드백을 수집하고 개선 이슈를 추가해 지속적으로 업데이트 중",
          "서비스 흐름을 방해하지 않는 위치에 Kakao Adfit 광고 배치, 실제 광고 운영 경험",
        ],
      },
    ],
    links: [
      {
        label: "개발자 공방 Github",
        url: "https://github.com/YY-Studios/dev-craft/",
      },
       {
        label: "개발자 공방 website",
        url: "https://dev-craft-lake.vercel.app/",
      },
         {
        label: "개발자 공방 website",
        url: "https://dev-craft-lake.vercel.app/",
      },
    ],
  },
   {
    title: `체험한입`,
    subTitle: `체험 상품 탐색부터 예약까지 이어지는 서비스 개발`,
    info: {
      period: "2025.11 ~ 2026.01",
      skills: ["nextjs", "typescript", "tailwind", "zustand", "tanstack-query", "github"],
    },
    description: [
      {
        title: "FSD + DDD 기반 아키텍처 설계",
        item: [
          "FSD 레이어(app/pages/widgets/features/entities/shared) 기준으로 UI 조합·비즈니스 로직·도메인 모델의 경계를 분리, 도메인 단위(Activity/Reservation/User/Review/Notification)로 Bounded Context 설정",
          "entities는 상태·결과만 책임지고, 역할·권한·흐름 판단은 features(Use Case)에서 처리하는 원칙으로 레이어 간 책임 경계를 명확히 정의",
          "shared → entities → features → widgets → app 방향의 단방향 의존성 규칙을 ESLint로 강제하고 CI에서 위반 시 PR 차단되도록 구성",
        ],
      },
      {
        title: "API 표준 규칙 수립 및 에러 처리 일원화",
        item: [
          "clientApi/serverApi 계층 분리와 스키마 검증 기반 응답 처리로 런타임 타입 불일치 문제를 줄이고 실행 환경별 호출 패턴을 고정",
          "공통 ApiError 타입으로 에러를 정규화해 컴포넌트·훅·서버 라우트에서 동일한 방식으로 처리, 디버깅 및 유지보수 속도 향상",
        ],
      },
      {
        title: "로그인 인증 플로우 설계",
        item: [
          "인증 판단은 BFF(API Route) + Middleware 서버 영역에서 수행, 토큰은 HttpOnly Cookie로만 관리해 클라이언트에 노출하지 않음",
          "Middleware는 쿠키 존재 여부만으로 접근 제어·리다이렉트를 처리하고, Layout(Server Component)에서 /users/me를 프리패치해 React Query Hydration으로 하위 컴포넌트에 사용자 정보를 공유",
          "Zustand는 인증 책임을 완전히 분리해 UI 상태 전용으로만 사용, '보안은 서버에서 · 데이터는 Query에서 · UI는 Zustand에서' 원칙으로 각 레이어의 책임 경계를 명확히 설계",
        ],
      },
      {
        title: "Server-First(RSC) 구조로 성능·SEO·접근성 최적화",
        item: [
          "데이터 조회·초기 렌더링은 서버 컴포넌트에서 처리하고 상호작용 영역만 클라이언트로 분리해 번들 크기와 하이드레이션 부담을 최소화",
          "시맨틱 태그·heading 계층(h1~h3)·OG 메타데이터를 페이지 성격에 맞게 관리하고 RSC 구조와 결합해 초기 HTML 기반 콘텐츠 노출로 크롤링 친화적인 구조 구성",
          "키보드 탐색 흐름·모달 포커스 관리(열림/닫힘 시점)·이미지 대체 텍스트·폼 label 연결 등 접근성 기본 규칙 적용",
        ],
      },
      {
        title: "Zustand + Stack 기반 전역 모달 시스템",
        item: [
          "Zustand로 모달 전역 제어 로직을 관리하고 Stack 기반 매니저로 중첩 모달 상태를 안정적으로 처리",
          "Portal 렌더링으로 z-index 충돌을 방지하고 ESC 닫기·포커스 복귀·스크롤 잠금 등 모달 UX 기본 동작을 공통 컴포넌트로 정리",
          "컴포넌트 외부에서도 모달을 제어할 수 있도록 Promise 기반 명령형 API 설계, await modal.confirm()으로 사용자 응답을 비동기로 받는 흐름 구현",
        ],
      },
     {
        title: "GitHub 기반 프로젝트 관리 및 CI 설정",
        item: [
          "Milestones·Issues로 개발 진행도를 시각화, 우선순위를 유연하게 조정하며 데드라인 준수",
          "PR 생성·업데이트 시 린트·타입체크·빌드 검증을 자동 실행, pnpm 캐시 전략으로 검사 시간 단축",
        ],
      },
    ],
   links: [
      {
        label: "체험 한입 Github",
        url: "https://github.com/FE19-Team3/global_nomad",
      },
       {
        label: "체험 한입 website",
        url: "https://global-nomad-rust.vercel.app/main",
      },
        {
        label: "체험 한입 notion",
        url: "https://www.notion.so/PART4-3-2c3add99c042807a8361cc2c30517cf0",
      },
    ],
  },
   {
    title: "하나은행 기업뱅킹팀",
    subTitle: "웹/앱 퍼블리싱",
    info: {
      period: "2024.10 ~ 2025.05",
      skills: ["html", "css", "javascript"],
    },
    description: [
      {
        title: "기업뱅킹 서비스 UI 운영 및 개선",
        item: [
          "웹/앱 퍼블리싱 및 UI 마크업 작업 수행, 디자이너·개발자와 협업해 운영 화면 수정·개선 진행",
          "구조·라벨·포커스 이동·버튼 역할 중심의 접근성 점검 및 개선 사항 반영",
        ],
      },
    ],
    links: [],
  },
   {
    title: "온회의",
    subTitle: "웹 홈페이지·영상회의 페이지 개발 / 행정안전부 · 넷피지 시스템즈",
    info: {
      period: "2022.01 ~ 2023.12",
      skills: ["html", "css", "javascript"],
    },
    description: [
      {
        title: "정부 협업 플랫폼 시범·본서비스 구축",
        item: [
          "JSP/JSTL 기반 공통 컴포넌트·동적 콘텐츠 구현, Auth 관련 로직 개발 및 모바일 호환성 이슈 개선",
          "참가자 리스트·녹화·채팅·웨비나·SFU 환경 영상회의 페이지 퍼블리싱 및 오디오 장치 설정 페이지 구현",
        ],
      },
    ],
    links: [ {
        label: "온회의 website",
        url: "https://meet.onnara.go.kr/",
      }],
  },
  {
    title: "어촌개발사업업무지원사업",
    subTitle: "해양수산부 · 넷피지 시스템즈",
    info: {
      period: "2024.01 ~ 2024.02",
      skills: ["html", "css", "javascript"],
    },
    description: [
      {
        title: "주소 유효성 검사 기능 개발",
        item: [
          "주소 API 기반 유효성 검사 기능 개발, 올바른 입력 흐름이 동작하도록 화면 로직 반영해 데이터 품질 개선",
        ],
      },
    ],
    links: [],
  },
  {
    title: "리라유치원",
    subTitle: "넷피지 시스템즈",
    info: {
      period: "2022.07 ~ 2023.12",
      skills: ["html", "css", "javascript"],
    },
    description: [
      {
        title: "웹사이트 유지보수 및 개선",
        item: [
          "국제 사용자를 위한 영문 페이지 제작, 모바일 최적화 작업으로 영문 접근성·모바일 사용성 개선",
        ],
      },
    ],
    links: [{
        label: "리라유치원 website",
        url: "https://www.lilakinder.co.kr/",
      }],
  },
  {
    title: "창신글로벌",
    subTitle: "넷피지 시스템즈",
    info: {
      period: "2023.03 ~ 2023.07",
      skills: ["html", "css", "javascript"],
    },
    description: [
      {
        title: "Figma 기반 화면 구현 및 모바일 최적화",
        item: [
          "Figma 프로토타입 기반 화면 구현, 체크박스 기반 유효성 검사 개발 및 모바일 전용 퍼블리싱 적용",
        ],
      },
    ],
    links: [],
  },
  {
    title: "연근해어장생산성개선지원사업",
    subTitle: "한국어촌어항공단 · 넷피지 시스템즈",
    info: {
      period: "2023.12 ~ 2024.01",
      skills: ["html", "css", "javascript"],
    },
    description: [
      {
        title: "모바일 중심 페이지 재구성",
        item: [
          "노후화된 웹페이지를 모바일 환경 중심으로 재구성, UI/UX 디자인 기획·수정 작업으로 모바일 접근성·사용성 개선",
        ],
      },
    ],
    links: [],
  },
];

export default data;