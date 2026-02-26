import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 max-w-6xl mx-auto"
    >
      <div className="">
        <div className="rounded-2xl border border-zinc-200 bg-white px-8 py-12 md:px-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            감사합니다
          </h2>

          <p className="mt-4 text-[15px] md:text-base leading-relaxed text-zinc-500">
            끝까지 읽어주셔서 감사합니다.
            <br className="hidden md:block" />더 자세한 이야기는 편하게 연락
            주세요.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
            <a
              href="s0912135@email.com"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:text-zinc-900 transition-colors"
            >
              이메일
            </a>

            <a
              href="https://github.com/yujinimda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10 border-t border-zinc-100 pt-6">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} 박유진. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Thanks;
