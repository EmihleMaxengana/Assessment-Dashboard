const StatusFilter = ({ statusFilter, setStatusFilter }) => {
  const statusOptions = ["All", "Not Started", "In Progress", "Completed"];

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
        Status
      </label>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="px-3 py-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 hover:border-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-20 transition-all duration-200 text-slate-700 dark:text-slate-200 text-sm cursor-pointer"
      >
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;