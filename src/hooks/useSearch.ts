import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { fetchItems } from '../data/data';
import type { Item, SearchResult } from '../types';

interface UseSearchProps {
  initialSearch?: string;
  initialCategory?: string;
  initialTags?: string[];
  debounceMs?: number;
}

export const useSearch = ({
  initialSearch = '',
  initialCategory = '',
  initialTags = [],
  debounceMs = 300
}: UseSearchProps = {}) => {
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [tags, setTags] = useState<string[]>(initialTags);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [results, setResults] = useState<SearchResult>({
    items: [],
    total: 0,
    page: 1,
    limit
  });
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Debounced search function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((search: string, category: string, tags: string[], page: number) => {
      setLoading(true);
      
      try {
        const result = fetchItems(search, category, tags, page, limit);
        setResults(result);
        
        // If search has content, generate suggestions
        if (search) {
          const allWords = [...new Set(
            result.items.flatMap(item => 
              [item.title, ...item.tags, ...item.description.split(' ')]
            )
          )];
          
          // Filter for words that include the search term but aren't exactly it
          const suggestions = allWords
            .filter(word => 
              word.toLowerCase().includes(search.toLowerCase()) && 
              word.toLowerCase() !== search.toLowerCase()
            )
            .slice(0, 5);
            
          setSuggestions(suggestions);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    }, debounceMs),
    [limit]
  );

  // Execute search when params change
  useEffect(() => {
    debouncedSearch(search, category, tags, page);
    
    // Cleanup function
    return () => {
      debouncedSearch.cancel();
    };
  }, [search, category, tags, page, debouncedSearch]);

  // Reset pagination when search criteria change
  useEffect(() => {
    setPage(1);
  }, [search, category, tags]);

  // Add a tag to the filter
  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  // Remove a tag from the filter
  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  // Clear all filters
  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setTags([]);
    setPage(1);
  };

  return {
    search,
    setSearch,
    category,
    setCategory,
    tags,
    addTag,
    removeTag,
    page,
    setPage,
    results,
    loading,
    suggestions,
    clearFilters
  };
};