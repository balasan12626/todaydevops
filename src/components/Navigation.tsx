import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X,
  Sun,
  Moon,
  Globe,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SearchBar from './SearchBar';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchVisible(false);
  }, [location]);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen || searchVisible
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <nav className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-display font-bold text-primary-600 dark:text-primary-400"
          >
            <Globe className="h-8 w-8" />
            <span className="hidden sm:block">VisionVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link to="/explore" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Explore
            </Link>
            <Link to="/featured" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Featured
            </Link>
            <Link to="/about" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search toggle */}
            <button
              onClick={() => setSearchVisible(!searchVisible)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Search Bar */}
        {searchVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="py-3 px-4"
          >
            <SearchBar onClose={() => setSearchVisible(false)} />
          </motion.div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/explore" 
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link 
                  to="/featured" 
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navigation;