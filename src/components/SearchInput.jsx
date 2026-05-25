import { useState, useEffect } from "react";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue, setSearchQuery]);

  return (
    <div className="relative flex-1">
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search by title or assigned person..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 hover:border-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-20 transition-all duration-200 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
      />
    </div>
  );
};

export default SearchInput;