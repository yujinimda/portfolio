import SkillBadge from "./SkillBadge";

export const SKILL_DATA = [
  { id: "react", category: "frontend" },
  { id: "typescript", category: "frontend" },
  { id: "nextjs", category: "frontend" },
  { id: "javascript", category: "frontend" },
  { id: "tailwind", category: "frontend" },
  { id: "styledcomponents ", category: "frontend" },
  { id: "git", category: "tool" },
  { id: "supabase", category: "tool" },
  { id: "figma", category: "design" },
];

interface SkillListProps {
  activeCategory: string;
}

const SkillList = ({ activeCategory }: SkillListProps) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-6">
      {SKILL_DATA.map((item) => (
        <SkillBadge
          key={item.id}
          skill={item.id}
          isActive={
            activeCategory === "all" || item.category === activeCategory
          }
        />
      ))}
    </div>
  );
};

export default SkillList;
