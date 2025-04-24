import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 mx-auto w-24 h-24 text-primary-500 dark:text-primary-400"
        >
          <Globe className="w-full h-full" />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Return Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;