const MatterCard = ({ matter }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "Completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Not Started":
        return "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400";
      case "Medium":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "Low":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isOverdue = (dateString) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(dateString);
    return dueDate < today;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden dark:bg-slate-800 dark:border-slate-700">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-slate-800 line-clamp-2 flex-1 mr-2 dark:text-slate-200">
            {matter.title}
          </h3>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium ${getPriorityColor(matter.priority)}`}>
              {matter.priority}
            </span>
        </div>
        
        <div className="m-4">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(matter.status)}`}
          >
            {matter.status}
          </span>
        </div>

        {}
        <div className="flex items-center gap-2 mb-3 text-sm text-slate-600 dark:text-slate-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>{matter.assignedTo}</span>
        </div>

        {}
        <div className="flex items-center gap-2 text-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span
            className={
              isOverdue(matter.dueDate)
                ? "text-rose-600 font-medium"
                : "text-slate-600"
            }
          >
            Due: {formatDate(matter.dueDate)}
            {isOverdue(matter.dueDate) && " ⚠️ Overdue"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default MatterCard;
