import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const { 
    search, 
    setSearch, 
    suggestions 
  } = useSearch();
  
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      if (onClose) onClose();
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    if (onClose) onClose();
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search content, categories, or tags..."
            className="input pl-10 pr-10"
            aria-label="Search"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {/* Submit button - hidden visually but allows form submission */}
        <button type="submit" className="sr-only">
          Search
        </button>
      </form>

      {/* Suggestions dropdown */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 animate-fade-in">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <Search className="h-4 w-4 text-gray-400" />
                  <span>{suggestion}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;