import React, { useEffect } from 'react';
import FeatureBox from '../components/FeatureBox';
import { ArrowDown } from 'lucide-react';

const featureData = [
  {
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Strategic Consulting",
    description: "Our expert team provides actionable insights to help your business grow and thrive in a competitive marketplace.",
    link: "#strategic-consulting"
  },
  {
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions that drive efficiency and customer satisfaction.",
    link: "#digital-transformation"
  },
  {
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Product Innovation",
    description: "Create groundbreaking products that solve real problems and establish your brand as an industry leader.",
    link: "#product-innovation"
  },
  {
    image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Growth Marketing",
    description: "Implement data-driven marketing strategies that amplify your reach and convert prospects into loyal customers.",
    link: "#growth-marketing"
  }
];

const MainPage: React.FC = () => {
  useEffect(() => {
    // Add the keyframes for animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-20px);
        }
        60% {
          transform: translateY(-10px);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0" style={{ animation: 'fadeIn 1s ease-out' }}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Transforming Ideas Into 
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400 mt-2">
                  Digital Reality
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl">
                We help businesses innovate, grow, and succeed through strategic planning and digital excellence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Started
                </a>
                <a 
                  href="#" 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end" style={{ animation: 'fadeIn 1.5s ease-out' }}>
              <img 
                src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hero" 
                className="rounded-lg shadow-2xl max-w-full h-auto transform rotate-2 hover:rotate-0 transition-transform duration-500"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <a href="#features" className="flex flex-col items-center">
            <span className="mb-2 text-sm font-medium">Discover More</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions to help your business reach its full potential through innovation and strategic planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureData.map((feature, index) => (
              <FeatureBox 
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ animation: 'fadeInUp 0.8s ease-out', animationDelay: '200ms' }}>
            Join thousands of satisfied clients who have transformed their businesses with our expert guidance.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            style={{ animation: 'fadeInUp 0.8s ease-out', animationDelay: '400ms' }}
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default MainPage;