const StatCard = ({ title, value, icon: Icon, description }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">

      <div className="flex items-center justify-between gap-3">

        <p className="text-sm font-medium text-neutral-500">
          {title}
        </p>

        <div className="w-11 h-11 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">

          <Icon size={21} />

        </div>

      </div>

      <h3 className="text-3xl font-bold text-neutral-900 mt-4">
        {value}
      </h3>

      <p className="text-xs text-neutral-400 mt-3">
        {description}
      </p>

    </div>
  );
};

export default StatCard;