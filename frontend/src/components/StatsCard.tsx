import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  icon?: ReactNode;
  trend?: string;
  trendUp?: boolean;
};

function StatsCard({
  title,
  value,
  icon,
  trend,
  trendUp,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-slate-500 text-sm font-medium tracking-wide mb-1">
            {title}
          </h3>
          <p className="text-3xl font-bold text-slate-800">
            {value}
          </p>
        </div>
        
        {icon && (
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            {icon}
          </div>
        )}
      </div>

      {trend && (
        <div className="flex items-center gap-2 text-sm mt-4">
          <span className={`font-semibold ${trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
            {trend}
          </span>
          <span className="text-slate-400">vs last month</span>
        </div>
      )}
    </div>
  );
}

export default StatsCard;