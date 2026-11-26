const StatCard = ({ title, value, icon: Icon, description }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-3.5 hover:border-neutral-300 hover:shadow-sm transition-all duration-200">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide truncate">
          {title}
        </p>

        <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0">
          <Icon size={17} />
        </div>
      </div>

      <div className="mt-1 flex items-baseline gap-2">
        <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
          {value}
        </h3>
      </div>

      <p className="text-[11px] text-neutral-400 mt-0.5 truncate">
        {description}
      </p>
    </div>
  );
};

export default StatCard;
