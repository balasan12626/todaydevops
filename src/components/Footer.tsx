import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  ArrowRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-12">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 lg:col-span-1">
            <Link 
              to="/"
              className="flex items-center gap-2 text-xl font-display font-bold text-primary-600 dark:text-primary-400"
            >
              <Globe className="h-7 w-7" />
              <span>VisionVerse</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Discover and explore beautiful creative content from around the world. Your gateway to visual inspiration and artistic excellence.
            </p>
            
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/explore" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link 
                  to="/featured" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/help" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stay updated with the latest content and news.
            </p>
            
            <form className="space-y-2">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="ml-2 p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
            
            {/* Contact info */}
            <div className="mt-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:contact@visionverse.com" 
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  contact@visionverse.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {year} VisionVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;