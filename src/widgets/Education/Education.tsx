import { EDUCATION_DATA } from "@/shared/constans/educationData";
import { EducationItem } from "@/shared/ui/Education/EducationItem";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      id="career"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center py-30 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold">경험 · 활동 · 교육</h2>
      <p className="mt-3 text-[15px] md:text-base leading-relaxed text-zinc-500 mb-10">
        직무 역량을 키운 교육·캠프 수료 내역을 정리했습니다.
      </p>

      <div className="w-full max-w-6xl space-y-4">
        {EDUCATION_DATA.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
