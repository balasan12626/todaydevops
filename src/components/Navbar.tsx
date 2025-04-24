import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Horizon
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                <div className="py-2 px-4 rounded-md bg-white">
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">Service One</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">Service Two</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">Service Three</a>
                </div>
              </div>
            </div>
            <a 
              href="#" 
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href="#" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full flex items-center hover:opacity-90 transition-opacity transform hover:scale-105 duration-200"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-3 py-2 mt-4 rounded-md text-base font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;