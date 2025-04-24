import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearch } from '../hooks/useSearch';
import ItemCard from '../components/ItemCard';
import FilterPanel from '../components/FilterPanel';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get('q') || '';
  
  const {
    search,
    setSearch,
    category,
    setCategory,
    tags,
    addTag,
    removeTag,
    results,
    loading,
    clearFilters,
    page,
    setPage,
  } = useSearch({
    initialSearch: queryParam,
  });
  
  // Update search term when URL query parameter changes
  useEffect(() => {
    if (queryParam !== search) {
      setSearch(queryParam);
    }
  }, [queryParam, setSearch, search]);
  
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="py-12 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Search Results
          </h1>
          {search && (
            <p className="text-gray-600 dark:text-gray-400">
              Showing results for: <span className="font-medium text-gray-800 dark:text-gray-200">"{search}"</span>
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Filters sidebar */}
          <div className="md:col-span-3">
            <FilterPanel
              selectedCategory={category}
              setCategory={setCategory}
              selectedTags={tags}
              addTag={addTag}
              removeTag={removeTag}
              clearFilters={clearFilters}
            />
          </div>
          
          {/* Results */}
          <div className="md:col-span-9">
            {/* Loading state */}
            {loading && (
              <div className="flex justify-center py-12">
                <div className="animate-pulse-slow h-10 w-10 rounded-full border-4 border-primary-500 border-t-transparent"></div>
              </div>
            )}
            
            {/* Empty state */}
            {!loading && results.items.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="mx-auto w-16 h-16 mb-4 text-gray-300 dark:text-gray-600">
                  <SearchIcon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  We couldn't find any results matching "{search}".
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setSearch('')}
                    className="btn btn-outline"
                  >
                    Clear search
                  </button>
                  <button
                    onClick={clearFilters}
                    className="btn btn-primary"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
            
            {/* Results grid */}
            {!loading && results.items.length > 0 && (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-gray-600 dark:text-gray-400">
                    Found {results.total} results
                  </p>
                  {/* Could add sorting options here */}
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {results.items.map((item, index) => (
                    <ItemCard key={item.id} item={item} delay={index} />
                  ))}
                </motion.div>
                
                {/* Pagination */}
                {results.total > results.limit && (
                  <div className="mt-10 flex justify-center">
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.ceil(results.total / results.limit) }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setPage(i + 1)}
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            page === i + 1
                              ? 'bg-primary-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;