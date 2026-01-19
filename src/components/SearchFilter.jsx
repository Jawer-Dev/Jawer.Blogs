import React from "react";
import { Search } from "lucide-react";

const SearchFilter = ({
  search,
  setSearch,
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-100 dark:bg-slate-900 p-4 rounded-2xl">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white dark:bg-slate-800 pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
