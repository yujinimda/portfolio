import type { BlogItem } from "../../constans/blogData";

interface BlogCardProps {
  blog: BlogItem;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="h-full rounded-2xl border border-zinc-200 bg-white p-6 md:p-5 flex flex-col">
      {/* 상단 메타 */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-zinc-400">
          <span>{blog.period ?? blog.date}</span>
        </div>

        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600 transition-colors shrink-0"
          aria-label={`${blog.title} 벨로그 글 보기`}
        >
          벨로그 보기
          <svg
            className="h-3.5 w-3.5 mt-[2px] transition-transform group-hover:translate-x-0.5"
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

      {/* 썸네일 */}
      {blog.thumbnail ? (
        <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
          <img
            src={blog.thumbnail}
            alt={`${blog.title} 썸네일`}
            className="h-44 w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      {/* 본문 */}
      <div className="mt-3 flex-1">
        <h3 className="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-zinc-900 break-keep">
          {blog.title}
        </h3>

        <p className="mt-3 text-sm md:text-base leading-6 text-zinc-500 break-keep">
          {blog.summary}
        </p>
      </div>

      {/* 하단 정보 박스 */}
      <div className="mt-auto pt-5">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 md:px-5 md:py-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {blog.tags?.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs text-zinc-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-zinc-400">{blog.date}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
