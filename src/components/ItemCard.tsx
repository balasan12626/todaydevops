import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import type { Item } from '../types';
import { getCategoryIcon } from '../data/data';

interface ItemCardProps {
  item: Item;
  delay?: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, delay = 0 }) => {
  const CategoryIcon = getCategoryIcon(item.category);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link 
        to={`/item/${item.id}`} 
        className="block card overflow-hidden group h-full"
      >
        {/* Image container with overlay and hover effect */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Category and featured badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className="badge badge-primary capitalize flex items-center gap-1.5">
              <CategoryIcon className="h-3.5 w-3.5" />
              {item.category}
            </span>
            
            {item.featured && (
              <span className="badge bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200">
                Featured
              </span>
            )}
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold line-clamp-1 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {item.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
            {item.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                +{item.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* Footer info */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-warning-500" />
              <span>{item.rating.toFixed(1)}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{formatDate(item.date)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;