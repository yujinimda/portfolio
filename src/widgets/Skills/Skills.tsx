import { useState } from "react";
import SkillList from "../../shared/ui/Skill/SkillList";
import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "frontend", label: "프론트엔드" },
  { id: "tool", label: "도구" },
  { id: "design", label: "디자인" },
] as const;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center py-30 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold">기술 스택 및 도구</h2>
      <p className="mt-3 text-[15px] md:text-base leading-relaxed text-zinc-500 mb-10">
        구현 경험이 있는 기술만 담았습니다.
      </p>
      <div className="flex gap-3 mb-12 p-1.5 rounded-full border border-gray-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-white text-[#4FBF8A] shadow-sm ring-1 ring-black/5"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <SkillList activeCategory={activeCategory} />
    </motion.section>
  );
};

export default Skills;
