import type { EducationDataItem } from "@/shared/constans/educationData";

export const EducationItem = ({ item }: { item: EducationDataItem }) => {
  const isCert = item.type === "cert";

  return (
    <div className="py-6 text-center">
      <p className="text-xs md:text-sm text-zinc-400 tracking-wide">
        {isCert ? item.date : item.period}
      </p>

      <h3 className="mt-1.5 text-[17px] md:text-lg font-semibold tracking-tight leading-snug text-zinc-900">
        {item.title}
      </h3>

      <p className="mt-1 text-sm text-zinc-600">
        {isCert ? item.issuer : item.organization}
      </p>

      <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </div>
  );
};
