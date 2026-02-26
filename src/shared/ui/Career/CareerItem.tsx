import type { CareerDataItem } from "@/shared/constans/careerData";
import { useMemo, useState } from "react";

export const CareerItem = ({ item }: { item: CareerDataItem }) => {
  const [open, setOpen] = useState(false);

  const descriptionList = useMemo(
    () => item.description.flatMap((group) => group.item),
    [item.description],
  );

  return (
    <div className="px-6 transition-all duration-300 hover:bg-neutral-50/40">
      <div className="flex justify-between items-start gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm text-neutral-400 tracking-wide">
              {item.period}
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-neutral-900 mt-3 tracking-tight">
            {item.title}
          </h3>

          <p className="text-neutral-500 text-sm mt-1">{item.organization}</p>

          <p className="text-neutral-700 text-sm mt-3 leading-relaxed">
            {item.subTitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="shrink-0 inline-flex items-center gap-2 px-1 py-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-zinc-300 transition-colors cursor-pointer"
        >
          <span>{open ? "접기" : "주요 업무 보기"}</span>
          <svg
            className={`h-5 w-5 mt-[2px] transition-transform ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-xl bg-white border border-neutral-100 px-4 py-2">
          <ul className="space-y-3 text-neutral-600 leading-relaxed text-sm">
            {descriptionList.map((desc, i) => (
              <li key={`${desc}-${i}`} className="flex gap-3">
                <span className="mt-[7px] w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mx-auto mt-10 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </div>
  );
};
