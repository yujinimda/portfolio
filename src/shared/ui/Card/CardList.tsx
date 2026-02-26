import { useMemo, useState } from "react";
import Card from "./Card";
import projectData from "../../constans/projectData";

const INITIAL_COUNT = 4;

const CardList = () => {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = useMemo(() => {
    if (expanded) return projectData;
    return projectData.slice(0, INITIAL_COUNT);
  }, [expanded]);

  const hasMore = projectData.length > INITIAL_COUNT;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {visibleProjects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 px-1 py-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-zinc-300 transition-colors cursor-pointer"
          >
            {expanded ? "접기" : "프로젝트 더보기"}
            <svg
              className={`h-3.5 w-3.5 transition-transform mt-[2px] ${
                expanded ? "rotate-180" : ""
              }`}
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
      )}
    </div>
  );
};

export default CardList;
