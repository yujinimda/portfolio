export type BlogItem = {
  id: string;
  title: string;
  summary: string;
  date: string; // "2026.02.25"
  period?: string; // 선택: "2026.02"
  link: string;
  tags?: string[];
  thumbnail?: string;
};

export const BLOGS: BlogItem[] = [
  {
    id: "dev-craft-hackathon",
    title: "개발자 공방: 문서 쓰기 싫어서 만든 문서 자동화 도구 (조코딩 해커톤)",
    summary:
      "GitHub PR 하나로 블로그 글과 README를 자동 생성하는 서비스를 만든 과정과, 해커톤에서의 개발 경험을 정리한 글입니다.",
    date: "2026.02.21",
    link: "https://velog.io/@s0912135/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EA%B3%B5%EB%B0%A9-%EB%AC%B8%EC%84%9C-%EC%93%B0%EA%B8%B0-%EC%8B%AB%EC%96%B4%EC%84%9C-%EB%A7%8C%EB%93%A0-%EB%AC%B8%EC%84%9C-%EC%9E%90%EB%8F%99%ED%99%94-%EB%8F%84%EA%B5%AC-%EC%A1%B0%EC%BD%94%EB%94%A9-%ED%95%B4%EC%BB%A4%ED%86%A4",
    tags: ["OpenAI", "n8n", "개발자 공방", "사이드프로젝트", "조코딩", "해커톤"],
    thumbnail: "/images/blog1.png",
  },
  {
    id: "use-state-implementation",
    title: "useState를 구현해봅시다1 (간단한 최소 구현 + 클로저 활용)",
    summary:
      "React의 useState 동작 원리를 이해하기 위해 상태 저장 구조와 클로저를 활용한 최소 구현 버전을 만들어본 과정과 개념을 정리한 글입니다.",
    date: "2025.12.14",
    link: "https://velog.io/@s0912135/useState%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B4%85%EC%8B%9C%EB%8B%A41%EA%B0%84%EB%8B%A8%ED%95%9C-useState-%EC%B5%9C%EC%86%8C-%EA%B5%AC%ED%98%84-%EB%B2%84%EC%A0%84-%EC%B6%94%EA%B0%80-%ED%81%B4%EB%A1%9C%EC%A0%80-%ED%99%9C%EC%9A%A9", 
    tags: ["React", "JavaScript", "Hook", "Closure"],
    thumbnail: "/images/blog2.png",
  },
  {
    id: "compound-component-pattern",
    title: "컴파운드 컴포넌트 패턴이란?",
    summary:
      "복잡한 UI를 작은 컴포넌트 단위로 분리하고 조합하는 Compound Component 패턴의 개념과 React에서의 활용 방법을 정리한 글입니다.",
    date: "2025.12.06",
    link: "https://velog.io/@s0912135/%EC%BB%B4%ED%8C%8C%EC%9A%B4%EB%93%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80", 
    tags: ["React", "Component Design", "UI Architecture"],
     thumbnail: "/images/blog3.png",
  },
];
