import SkillBadge from "../Skill/SkillBadge";
import type { Project } from "../../../shared/types/project";
import { useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";

interface CardProps {
  project: Project;
}

const stripCodeFences = (raw: string) =>
  raw
    .replace(/^```[\w-]*\n?/, "")
    .replace(/\n?```$/, "")
    .trimEnd();

const Card = ({ project }: CardProps) => {
  const formatSkillName = (name: string) =>
    name.toLowerCase().replace(/[\s. ]/g, "");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFirstUrl = (raw: string) => {
    const m = raw.match(/https?:\/\/[^\s)]+/);
    return m?.[0];
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group relative h-full cursor-pointer p-1 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:border-green-100"
      >
        <div className="bg-white p-8 rounded-[1.8rem] h-full shadow-sm group-hover:shadow-lg transition-all flex flex-col">
          {/* 상단 영역 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-2 h-2 rounded-full ${
                  project.title === "개발자 공방"
                    ? "bg-green-400 animate-pulse"
                    : "bg-slate-300"
                }`}
              />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                {project.info.period}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-slate-500/60 font-medium mb-2 leading-snug">
              {project.subTitle}
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-1 py-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-zinc-300 transition-colors cursor-pointer"
              aria-label={`${project.title} 주요 내용 보기`}
            >
              <span>자세히 보기</span>
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
            </button>
          </div>

          {/* 스킬 박스: 항상 아래로 붙음 */}
          <div className="mt-auto pt-6">
            <div className="flex items-center gap-3 bg-slate-100/50 p-4 rounded-2xl border border-slate-200">
              {project.info.skills.slice(0, 5).map((skill: string) => (
                <SkillBadge
                  key={skill}
                  skill={formatSkillName(skill)}
                  isActive={true}
                  size="sm"
                />
              ))}
              {project.info.skills.length > 5 && (
                <span className="text-[10px] text-slate-400 font-bold ml-1">
                  +{project.info.skills.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header
          title={project.title}
          subTitle={project.subTitle}
          info={project.info}
          links={project.links}
        />
        <Modal.Body>
          {project.description?.map((desc, idx) => (
            <div key={idx} className="group/item">
              <h4 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-3">
                {desc.title}
              </h4>

              <ul className="space-y-4 pl-4">
                {desc.item.map((bullet: any, i: number) => {
                  const isRich =
                    typeof bullet === "object" &&
                    bullet !== null &&
                    "text" in bullet;

                  const text = isRich ? bullet.text : String(bullet);
                  const code = isRich
                    ? (bullet.code as string | undefined)
                    : undefined;
                  const image = isRich
                    ? (bullet.image as string | undefined)
                    : undefined;

                  return (
                    <li
                      key={i}
                      className="text-slate-600 text-[15px] leading-relaxed relative pl-2"
                    >
                      <span className="absolute left-[-18px] top-[10px] w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <div>{text}</div>

                      {/* 코드: 기본 숨김  */}
                      {code ? (
                        <details className="mt-3 rounded-xl border border-slate-200 bg-white">
                          <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-zinc-300">
                            코드 보기
                          </summary>
                          <div className="px-4 pb-4">
                            <pre className="overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-[13px] leading-relaxed text-slate-800">
                              <code>{stripCodeFences(code)}</code>
                            </pre>
                          </div>
                        </details>
                      ) : null}

                      {/* 이미지: 기본 숨김 */}
                      {image ? (
                        <details className="mt-3 rounded-xl border border-slate-200 bg-white">
                          <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-zinc-300">
                            이미지 보기
                          </summary>
                          <div className="px-4 pb-4">
                            <img
                              src={image}
                              alt=""
                              className="w-full rounded-lg border border-slate-200 object-cover"
                              loading="lazy"
                            />
                          </div>
                        </details>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
