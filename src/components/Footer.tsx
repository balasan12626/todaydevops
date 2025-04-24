import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Horizon
            </h3>
            <p className="text-gray-400 max-w-xs">
              Empowering businesses to reach new heights through innovative solutions and strategic planning.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Digital Transformation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Product Innovation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Growth Marketing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>123 Business Avenue, Tech City, TC 10010, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>info@horizoncompany.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="#" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Horizon. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;