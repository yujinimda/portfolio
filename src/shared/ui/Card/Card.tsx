import SkillBadge from "../Skill/SkillBadge";
import type { Project } from "../../../shared/types/project";
import { useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";

// Props 전용 인터페이스 정의
interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const formatSkillName = (name: string) =>
    name.toLowerCase().replace(/[\s. ]/g, "");

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* style2 */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="group relative cursor-pointer p-1 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:border-green-100"
      >
        <div className="bg-white p-8 rounded-[1.8rem] h-full shadow-sm group-hover:shadow-lg transition-all">
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

          <p className="text-sm text-slate-400 font-medium mb-8 leading-snug">
            {project.subTitle}
          </p>

          <div className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-50">
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
              <ul className="space-y-4 pl-4 group-hover/item:border-blue-100 transition-colors">
                {desc.item.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-slate-600 text-[15px] leading-relaxed relative pl-2"
                  >
                    <span className="absolute left-[-18px] top-[10px] w-1.5 h-1.5 rounded-full bg-slate-200" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
