import type { TechItem } from "../type/type";

interface StackItemCardProps {
  item: TechItem;
  onRemove: (id: string) => void;
}

export default function StackItemCard({ item, onRemove }: StackItemCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs transition-all duration-150 hover:border-slate-200">
      {/* Icon & Title Container */}
      <div className="flex items-center gap-3">
        <img
          src={item.icon}
          alt={item.name}
          className="h-8 w-8 object-contain"
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-bold leading-tight text-slate-800">
            {item.name}
          </h4>
          <span className="text-xs font-medium text-slate-400">
            {item.category}
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        aria-label={`Remove ${item.name}`}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
