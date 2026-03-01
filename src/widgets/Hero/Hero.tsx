export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center -translate-y-[50px]">
      <div className="max-w-2xl flex flex-col items-center">
        {/* 구직 상태 */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-black/10 rounded-full backdrop-blur-sm">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#4FBF8A]" />
              <span
                className="absolute -inset-2.5 rounded-full animate-pulse
    bg-[radial-gradient(circle,rgba(79,191,138,0.28),rgba(79,191,138,0)_60%)]
    blur-[1px] [animation-duration:1.8s]"
              />
            </span>
            <span className="text-xs tracking-wide text-black/50">구직중</span>
          </div>
        </div>

        {/* 타이틀 */}
        <div className="mb-6">
          <p className="text-xl text-black/40 mb-3">안녕하세요,</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black leading-[1.2]">
            프론트엔드 개발자
            <br />
            박유진입니다.
          </h1>
        </div>

        {/* 설명 */}
        <p className="text-base md:text-lg text-black/50 leading-relaxed mb-10">
          화면을 ‘그리는’ 단계에서 ‘동작시키는’ 단계까지,
          <br />
          전체 흐름을 설계하는 개발자입니다.
        </p>

        {/* 버튼 그룹 */}
        <div className="flex items-center gap-6">
          <a
            href="#project"
            className="text-sm text-black hover:opacity-60 transition-opacity"
          >
            프로젝트 보기
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/yujinimda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/40 hover:text-black transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:s0912135@gmail.com"
              className="text-black/40 hover:text-black transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
