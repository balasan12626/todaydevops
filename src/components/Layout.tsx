import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Live Wallpaper */}
      <div className="live-wallpaper bg-live-pattern" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          className="flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;