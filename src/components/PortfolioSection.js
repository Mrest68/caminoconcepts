'use client';

import { useState, useEffect } from 'react';

/**
 * Portfolio Section with Masonry Layout and Cool Animations
 * Features unique grid layout, hover effects, and interactive animations
 */
export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "kitchen",
      image: "/kitchen8.JPG",
      description: "Complete kitchen transformation with custom cabinets and premium finishes",
      size: "large", // Different sizes for masonry effect
      year: "2024"
    },
    {
      id: 2,
      title: "Luxury Bathroom Spa",
      category: "bathroom",
      image: "/bathroom1.JPG",
      description: "Spa-like bathroom with marble tiles and modern fixtures",
      size: "medium",
      year: "2024"
    },
    {
      id: 3,
      title: "Contemporary Kitchen Design",
      category: "kitchen",
      image: "/kitchen1.JPG",
      description: "Sleek modern kitchen with state-of-the-art appliances",
      size: "small",
      year: "2024"
    },
    {
      id: 4,
      title: "Kitchen With Island",
      category: "kitchen",
      image: "/Kitchen9.JPG",
      description: "Modern living space with custom built-ins",
      size: "small",
      year: "2024"
    },
    {
      id: 5,
      title: "Elegant Kitchen Remodel",
      category: "kitchen",
      image: "/kitchen2.JPG",
      description: "Traditional style kitchen with modern functionality",
      size: "medium",
      year: "2024"
    },
    {
      id: 6,
      title: "Master Bathroom Suite",
      category: "bathroom",
      image: "/bathroom2.JPG",
      description: "Luxurious master bathroom with premium fixtures",
      size: "small",
      year: "2024"
    },
    {
      id: 7,
      title: "Chef's Kitchen Paradise",
      category: "kitchen",
      image: "/kitchen3.JPG",
      description: "Professional-grade kitchen for culinary enthusiasts",
      size: "small",
      year: "2024"
    },
    {
      id: 8,
      title: "Spa-Style Bathroom",
      category: "bathroom",
      image: "/bathroom3.jpg",
      description: "Relaxing bathroom retreat with modern amenities",
      size: "small",
      year: "2023"
    },
    {
      id: 9,
      title: "Gourmet Kitchen Space",
      category: "kitchen",
      image: "/kitchen4.JPG",
      description: "Open concept kitchen perfect for entertaining",
      size: "medium",
      year: "2023"
    },
    {
      id: 10,
      title: "Family Kitchen Hub",
      category: "kitchen",
      image: "/kitchen5.JPG",
      description: "Family-friendly kitchen with ample storage",
      size: "small",
      year: "2023"
    },
    {
      id: 11,
      title: "Custom Kitchen Design",
      category: "kitchen",
      image: "/kitchen6.JPG",
      description: "Bespoke kitchen tailored to client needs",
      size: "small",
      year: "2023"
    },
    {
      id: 12,
      title: "Modern Kitchen Masterpiece",
      category: "kitchen",
      image: "/Kitchen7.JPG",
      description: "Award-winning kitchen design with premium materials",
      size: "large",
      year: "2023"
    },
    {
      id: 13,
      title: "Complete Kitchen Transformation",
      category: "kitchen",
      image: "/kitchen10.JPG",
      description: "Full kitchen renovation with stunning results",
      size: "small",
      year: "2023"
    },
    {
      id: 14,
      title: "Contemporary Kitchen Style",
      category: "kitchen",
      image: "/kitchen11.jpg",
      description: "Minimalist kitchen design with maximum impact",
      size: "small",
      year: "2023"
    },
    {
      id: 15,
      title: "Custom Cabinet Installation",
      category: "interior",
      image: "/cabinets1.JPG",
      description: "Beautiful custom cabinetry for storage solutions",
      size: "medium",
      year: "2024"
    },
    {
      id: 16,
      title: "Professional Handyman Work",
      category: "interior",
      image: "/working1.jpg",
      description: "Quality craftsmanship in residential projects",
      size: "small",
      year: "2024"
    },
    {
      id: 17,
      title: "Expert Construction Services",
      category: "interior",
      image: "/working2.jpg",
      description: "Professional construction and renovation work",
      size: "small",
      year: "2024"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchens' },
    { id: 'bathroom', name: 'Bathrooms' },
  ];

  const filteredItems = currentFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === currentFilter);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('portfolio-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-96 md:h-[500px]';
      case 'medium':
        return 'md:col-span-1 md:row-span-2 h-80 md:h-96';
      case 'small':
        return 'md:col-span-1 md:row-span-1 h-64';
      default:
        return 'md:col-span-1 md:row-span-1 h-64';
    }
  };

  return (
    <section 
      id="portfolio-section"
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we transform spaces with exceptional craftsmanship and attention to detail
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setCurrentFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentFilter === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                } ${isVisible ? `opacity-100 translate-y-0 transition-delay-[${index * 100}ms]` : 'opacity-0 translate-y-4'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Masonry Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${getSizeClasses(item.size)} ${
                isVisible ? `opacity-100 translate-y-0 transition-delay-[${index * 150}ms]` : 'opacity-0 translate-y-8'
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-red-600 text-xs font-medium rounded-full uppercase tracking-wide">
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Floating Action Button */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        

        {/* Floating Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '15+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
