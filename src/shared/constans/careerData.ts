export const CAREER_DATA = [
  {
    title: "(주)넷트루 컨설팅 그룹",
    organization: "하나은행 기업뱅킹 선임",
    subTitle: "웹/앱 퍼블리싱",
    period: "2024.10 ~ 2025.05",
    hideLabel: "주요 업무 내용 가리기",
    description: [
      {
        item: [
          "웹/앱 퍼블리싱 및 UI 마크업 작업, 디자이너·개발자와 협업해 운영 화면 수정·개선 진행",
          "구조·라벨·포커스 이동·버튼 역할 중심의 웹 접근성 점검 및 개선 사항 반영",
        ],
      },
    ],
  },
  {
    title: "(주)넷피지 시스템즈",
    organization: "개발팀 사원",
    subTitle: "웹/모바일 퍼블리싱 및 프론트엔드 개발",
    period: "2021.08 ~ 2024.02",
    hideLabel: "주요 업무 내용 가리기",
    description: [
      {
        item: [
          "JSP/JSTL 기반 공통 컴포넌트·동적 콘텐츠 구현, Auth 관련 로직 개발 및 모바일 호환성 이슈 개선",
          "정부·공공기관 다수 프로젝트에서 웹/모바일 퍼블리싱 및 화면 개발 담당",
        ],
      },
    ],
  },
] as const;

export type CareerDataItem = (typeof CAREER_DATA)[number];