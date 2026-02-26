export const EDUCATION_DATA = [
   {
    type: "edu" as const,
    id: "codeit-sprint",
    title: "프론트엔드 엔지니어 부트캠프",
    organization: "코드잇 스프린트",
    period: "2025.07 ~ 2026.01",
  },
  {
    type: "edu" as const,
    id: "ezen-react",
    title: "React.js 프로그래밍",
    organization: "이젠아카데미 DX교육센터",
    period: "2023.08.21 ~ 2023.10.25",
  },
  {
    type: "edu" as const,
    id: "thejoeun-js",
    title: "JavaScript / jQuery",
    organization: "더조은컴퓨터아카데미",
    period: "2023.05.20 ~ 2023.07.29",
  },
  {
    type: "edu" as const,
    id: "ezen-uiux",
    title: "모바일 UI/UX 웹퍼블리셔(웹디자인)",
    organization: "이젠컴퓨터아트학원",
    period: "2021.01.20 ~ 2021.07.05",
  },
  {
    type: "cert" as const,
    id: "craftsman-computer-graphics-202107",
    title: "컴퓨터그래픽스운용기능사",
    status: "최종합격",
    date: "2021.07",
    issuer: "한국산업인력공단",
  },
  {
    type: "cert" as const,
    id: "craftsman-web-design-202107",
    title: "웹디자인기능사",
    status: "최종합격",
    date: "2021.07",
    issuer: "한국산업인력공단",
  },
  {
    type: "cert" as const,
    id: "gtq-1-202104",
    title: "GTQ(그래픽기술자격) 1급",
    status: "최종합격",
    date: "2021.04",
    issuer: "한국생산성본부",
  },
  {
    type: "cert" as const,
    id: "gtqi-1-202105",
    title: "GTQi(그래픽기술자격 일러스트) 1급",
    status: "최종합격",
    date: "2021.05",
    issuer: "한국생산성본부",
  },
 
] as const;

export type EducationDataItem = (typeof EDUCATION_DATA)[number];