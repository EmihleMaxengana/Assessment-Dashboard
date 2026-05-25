import SearchInput from "./SearchInput";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";

const SearchAndFiltersBar = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 mb-6 border border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex gap-4">
          <div className="flex-1 md:w-40">
            <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
          </div>
          <div className="flex-1 md:w-40">
            <PriorityFilter priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFiltersBar;