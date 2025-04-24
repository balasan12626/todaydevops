import React from 'react';
import { X } from 'lucide-react';
import { categories, getPopularTags, getCategoryIcon } from '../data/data';

interface FilterPanelProps {
  selectedCategory: string;
  setCategory: (category: string) => void;
  selectedTags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  clearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategory,
  setCategory,
  selectedTags,
  addTag,
  removeTag,
  clearFilters
}) => {
  const popularTags = getPopularTags();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
        >
          Clear all
        </button>
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Categories
        </h4>
        <div className="space-y-2">
          {categories.map(category => {
            const CategoryIcon = getCategoryIcon(category.icon);
            return (
              <button
                key={category.id}
                onClick={() => 
                  setCategory(selectedCategory === category.id ? '' : category.id)
                }
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <CategoryIcon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Popular Tags */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => 
                selectedTags.includes(tag) ? removeTag(tag) : addTag(tag)
              }
              className={`py-1.5 px-3 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
      
      {/* Active Filters */}
      {(selectedCategory || selectedTags.length > 0) && (
        <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Active Filters
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <span className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-sm">
                {categories.find(c => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setCategory('')}
                  className="text-primary-800 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            )}
            
            {selectedTags.map((tag, index) => (
              <span 
                key={index}
                className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-sm"
              >
                #{tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="text-primary-800 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;