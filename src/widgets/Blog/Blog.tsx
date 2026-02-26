import { BLOGS } from "../../shared/constans/blogData";
import BlogCard from "../../shared/ui/Blog/BlogCard";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.section
      id="writing"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center py-30 px-6 max-w-6xl mx-auto"
    >
      <div className="mx-auto max-w-6xl">
        {/* 섹션 헤더 */}
        <div className="mb-8 md:mb-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Blog</h2>
            <p className="mt-3 text-[15px] md:text-base leading-relaxed text-zinc-500">
              학습과 문제 해결 과정을 기록했습니다.
            </p>
          </div>

          {/* md 이상: 아래 줄 오른쪽 정렬 */}
          <div className="mt-4 hidden md:flex justify-end">
            <a
              href="https://velog.io/@your-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-1 py-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-zinc-300 transition-colors"
            >
              전체 글 보기
              <svg
                className="h-3.5 w-3.5 mt-[2px]"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {BLOGS.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* 모바일 전체 링크 */}
        <div className="mt-6 md:hidden flex justify-center">
          <a
            href="https://velog.io/@your-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500 transition-colors"
          >
            전체 글 보기
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
