import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureBoxProps {
  image: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ image, title, description, link, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards' 
      }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </div>
    </div>
  );
};

export default FeatureBox;