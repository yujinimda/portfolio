import { CAREER_DATA } from "../../shared/constans/careerData";
import { CareerItem } from "../../shared/ui/Career/CareerItem";
import { motion } from "framer-motion";

const Career = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center py-30 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold">경력사항</h2>
      <p className="mt-3 text-[15px] md:text-base leading-relaxed text-zinc-500 mb-10">
        수행한 업무와 역할을 핵심만 정리했습니다.
      </p>
      <div className="space-y-4">
        {CAREER_DATA.map((item, index) => (
          <CareerItem key={index} item={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Career;
