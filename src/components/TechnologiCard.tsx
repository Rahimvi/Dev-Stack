import type { TechItem } from "../type/type";

export interface TecnologiCardProps {
  tech: TechItem;
}

export default function TecnologiCard({ tech }: TecnologiCardProps) {
  console.log(tech, "Card");
  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Top Header: Icon & Badge */}
      <div className="flex items-center justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-10 w-10 object-contain"
        />
        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-500">
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
      <button className="mt-5 w-full rounded-xl bg-[#090d16] py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-slate-800 active:scale-[0.99]">
        Add to Stack
      </button>
    </div>
  );
}
