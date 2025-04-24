import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Star,
  ArrowLeft, 
  Share2, 
  Heart, 
  Bookmark, 
  Tag
} from 'lucide-react';
import { getItemById, getRelatedItems, getCategoryIcon } from '../data/data';
import type { Item } from '../types';
import ItemCard from '../components/ItemCard';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [item, setItem] = useState<Item | null>(null);
  const [relatedItems, setRelatedItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Fetch item and related items
  useEffect(() => {
    setLoading(true);
    
    if (id) {
      const foundItem = getItemById(id);
      
      if (foundItem) {
        setItem(foundItem);
        // Get related items
        const related = getRelatedItems(id);
        setRelatedItems(related);
      }
    }
    
    setLoading(false);
  }, [id]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Handle share
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item?.title,
        text: item?.description,
        url: window.location.href,
      })
      .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
    }
  };

  // If loading or no item found
  if (loading) {
    return (
      <div className="container-custom py-16 flex justify-center">
        <div className="animate-pulse-slow h-12 w-12 rounded-full border-4 border-primary-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Item Not Found</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The item you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Go back to home
        </button>
      </div>
    );
  }

  // Get category icon
  const CategoryIcon = getCategoryIcon(item.category);

  return (
    <>
      {/* Hero section with image */}
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 mb-6 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              
              {/* Title and metadata */}
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-3">
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
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {item.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/80">
                  {item.author && (
                    <span className="flex items-center gap-1">
                      By: <span className="text-white">{item.author}</span>
                    </span>
                  )}
                  
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {formatDate(item.date)}
                  </span>
                  
                  <span className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-warning-400" />
                    {item.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content column */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Description */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-2">
                    <Tag className="h-5 w-5 mt-1 text-gray-500 dark:text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <button
                          key={index}
                          onClick={() => navigate(`/?tag=${tag}`)}
                          className="py-1.5 px-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional sections could go here */}
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Actions card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <h3 className="text-lg font-semibold mb-4">Actions</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleShare}
                    className="btn btn-outline w-full"
                  >
                    <Share2 className="h-5 w-5" />
                    Share
                  </button>
                  
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`btn w-full ${
                      isLiked 
                        ? 'bg-secondary-500 hover:bg-secondary-600 text-white' 
                        : 'btn-outline'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? 'Liked' : 'Like'}
                  </button>
                  
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`btn w-full col-span-2 ${
                      isBookmarked 
                        ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                        : 'btn-outline'
                    }`}
                  >
                    <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Saved' : 'Save for later'}
                  </button>
                </div>
                
                {/* Additional info */}
                {item.price && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600 dark:text-gray-400">Price:</span>
                      <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary w-full">
                      Purchase
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Related items */}
      {relatedItems.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">You might also like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((item, index) => (
                <ItemCard key={item.id} item={item} delay={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailPage;