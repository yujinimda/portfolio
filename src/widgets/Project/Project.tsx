import CardList from "../../shared/ui/Card/CardList";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center py-30 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold">프로젝트</h2>
      <p className="mt-3 text-[15px] md:text-base leading-relaxed text-zinc-500 mb-10">
        구현한 프로젝트를 간단히 정리했습니다.
      </p>
      <CardList />
    </motion.section>
  );
};

export default Project;
