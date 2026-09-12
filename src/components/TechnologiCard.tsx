import type { TechItem } from "../type/type";

export interface TecnologiCardProps {
  tech: TechItem;
  addStack: TechItem[];
  onAddToStack: (tech: TechItem) => void;
}

const badgeColorMap: Record<string, string> = {
  Popular: "bg-rose-50 text-rose-600 border-rose-200",
  Trending: "bg-violet-50 text-violet-600 border-violet-200",
  Essential: "bg-sky-50 text-sky-600 border-sky-200",
  "Most Loved": "bg-pink-50 text-pink-600 border-pink-200",
  Standard: "bg-slate-100 text-slate-700 border-slate-300",
  "Fast API": "bg-orange-50 text-orange-600 border-orange-200",
  "Top NoSQL": "bg-teal-50 text-teal-600 border-teal-200",
  "Top SQL": "bg-blue-50 text-blue-600 border-blue-200",
  "Modern ORM": "bg-purple-50 text-purple-600 border-purple-200",
  "Industry Standard": "bg-blue-50 text-blue-700 border-blue-300",
  "Must Have": "bg-emerald-50 text-emerald-700 border-emerald-300",
  BaaS: "bg-amber-50 text-amber-600 border-amber-200",

  // Difficulty Levels
  "Beginner-Friendly": "bg-emerald-50 text-emerald-600 border-emerald-200",
  Intermediate: "bg-amber-50 text-amber-600 border-amber-200",
  Advanced: "bg-rose-50 text-rose-600 border-rose-200",
};

export default function TecnologiCard({
  tech,
  addStack,
  onAddToStack,
}: TecnologiCardProps) {
  const isSelected = addStack.find((item) => item.id === tech.id);
  const badgeStyle =
    badgeColorMap[tech.badge] || "bg-slate-100 text-slate-600 border-slate-200";
  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Top Header: Icon & Badge */}
      <div className="flex items-center justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-10 w-10 object-contain"
        />
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyle}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {tech.description}
        </p>
      </div>

      {/* Metadata Row */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4 text-xs font-medium text-slate-500">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <div className="flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          <span>{tech.rating}</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onAddToStack(tech)}
        disabled={!!isSelected}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-150 ${
          isSelected
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-[#090d16] text-white hover:bg-slate-800 active:scale-[0.99]"
        }`}
      >
        Add to Stack
      </button>
    </div>
  );
}
