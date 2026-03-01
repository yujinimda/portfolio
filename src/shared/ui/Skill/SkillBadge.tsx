interface SkillBadgeProps {
  size?: "sm" | "md";
  skill: string;
  isActive: boolean;
}

const SkillBadge = ({ size = "md", skill, isActive }: SkillBadgeProps) => {
  return (
    <div
      className={`
      relative group/skill flex flex-col items-center transition-all duration-500 
      ${
        isActive
          ? "opacity-100 scale-100 grayscale-0"
          : "opacity-20 scale-90 grayscale"
      }
      ${size === "sm" ? "w-8 h-8" : "w-12 h-12 md:w-14 md:h-14"}
    `}
    >
      <div className="w-full h-full">
        <img
          src={`/images/${skill}.svg`}
          alt={skill}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute -top-1 -translate-y-full left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white rounded text-sm font-medium invisible z-10 group-hover/skill:visible shadow-lg capitalize">
        {skill}
      </div>
    </div>
  );
};

export default SkillBadge;
