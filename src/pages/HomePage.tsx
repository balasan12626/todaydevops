import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, ArrowDown } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import ItemCard from '../components/ItemCard';
import FilterPanel from '../components/FilterPanel';
import { categories, getCategoryIcon } from '../data/data';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Get search params from URL or default values
  const initialSearch = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialTags = searchParams.getAll('tag');
  
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
    initialSearch,
    initialCategory,
    initialTags,
  });
  
  // Update URL when search params change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (search) params.set('q', search);
    if (category) params.set('category', category);
    tags.forEach(tag => params.append('tag', tag));
    
    const newSearch = params.toString() ? `?${params.toString()}` : '';
    
    // Update URL without triggering a navigation
    if (location.search !== newSearch) {
      navigate({ search: newSearch }, { replace: true });
    }
  }, [search, category, tags, navigate, location.search]);
  
  const [showFilters, setShowFilters] = useState(false);

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
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-4">
              <Globe className="h-16 w-16 text-primary-300" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Beautiful Creative Content
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Explore our curated collection of stunning visuals, artistic inspirations, and creative works from around the world.
            </p>
            
            {/* Search in hero */}
            <div className="max-w-2xl mx-auto">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (search) navigate(`/search?q=${encodeURIComponent(search)}`);
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search content, categories, or tags..."
                  className="w-full py-3 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 p-2.5 rounded-full transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="mt-16 hidden md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6 mx-auto text-primary-200" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Category Showcase */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover creative content across a wide range of categories and find your next inspiration.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, index) => {
              const CategoryIcon = getCategoryIcon(cat.icon);
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <button
                    onClick={() => {
                      setCategory(cat.id);
                      navigate(`/?category=${cat.id}`);
                    }}
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl p-5 h-full w-full shadow-sm border border-gray-200 dark:border-gray-700 transition-colors text-center group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-2.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors">
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-medium mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      {cat.description}
                    </p>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Content Grid Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured Content
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Discover our handpicked selection of exceptional creative works.
              </p>
            </div>
            
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="mt-6 md:hidden px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center gap-2"
            >
              Filters
              <ArrowDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Filters (desktop sidebar, mobile accordion) */}
            <div className={`md:col-span-3 ${showFilters ? 'block' : 'hidden md:block'}`}>
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
                    <Globe className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn btn-primary"
                  >
                    Clear filters
                  </button>
                </div>
              )}
              
              {/* Results grid */}
              {!loading && results.items.length > 0 && (
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
              )}
              
              {/* Pagination */}
              {!loading && results.total > results.limit && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className={`p-2 rounded-lg border ${
                      page === 1
                        ? 'text-gray-400 border-gray-200 dark:border-gray-700 cursor-not-allowed'
                        : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    aria-label="Previous page"
                  >
                    <ArrowRight className="h-5 w-5 rotate-180" />
                  </button>
                  
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Page {page} of {Math.ceil(results.total / results.limit)}
                  </span>
                  
                  <button
                    onClick={() => setPage(Math.min(Math.ceil(results.total / results.limit), page + 1))}
                    disabled={page >= Math.ceil(results.total / results.limit)}
                    className={`p-2 rounded-lg border ${
                      page >= Math.ceil(results.total / results.limit)
                        ? 'text-gray-400 border-gray-200 dark:border-gray-700 cursor-not-allowed'
                        : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    aria-label="Next page"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;