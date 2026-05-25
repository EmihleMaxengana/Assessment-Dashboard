import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import SearchAndFiltersBar from "./components/SearchAndFiltersBar";
import MatterList from "./components/MatterList";
import EmptyState from "./components/EmptyState";
import LoadingState from "./components/LoadingState";
import { mockMatters } from "./data/mockMatters";
import "./App.css";

export default function App() {
  const [matters, setMatters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState(()=> {
    return localStorage.getItem('searchQuery') || '';
  });


  const [statusFilter, setStatusFilter] = useState(()=>{
    return localStorage.getItem('statusFilter') || 'All'
  });

  const [priorityFilter, setPriorityFilter] = useState(() =>{
    return localStorage.getItem('priorityFilter') || 'All'
  });


  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') ==='true';
  });

  //mockDATA LOADER

  useEffect(() => {
    const timer = setTimeout(() => {
      setMatters(mockMatters);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredAndSortedMatters = useMemo(() => {
    let filtered = [...matters];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (matter) =>
          matter.title.toLowerCase().includes(query) ||
          matter.assignedTo.toLowerCase().includes(query),
      );
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter((matter) => matter.status === statusFilter);
    }

    if (priorityFilter !== "All") {
      filtered = filtered.filter((matter) => matter.priority === priorityFilter);
    }

    filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    return filtered;
  }, [matters, searchQuery, statusFilter, priorityFilter]);


  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(()=> {
    localStorage.setItem('statusFilter', statusFilter);
  }, [statusFilter]);

  useEffect(() => {
    localStorage.setItem('priorityFilter',priorityFilter )
  },[priorityFilter]);


  useEffect(()=> {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode){
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

   if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SearchAndFiltersBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />
        {filteredAndSortedMatters.length === 0 && !loading ? (
          <EmptyState />
        ) : (
          <MatterList matters={filteredAndSortedMatters} />
        )}
      </main>
    </div>
  );
}


