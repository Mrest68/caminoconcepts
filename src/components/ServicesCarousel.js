'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Services Carousel Section
 * Features animated carousel showcasing all services with cool animations
 */
export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a culinary masterpiece with custom designs, premium appliances, and expert craftsmanship.",
      image: "kitchen5.JPG",
      features: ["Custom Cabinets", "Premium Countertops", "Modern Appliances", "Lighting Design"],
      href: "/services/remodeling",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v4M16 1v4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Bathroom Renovation",
      description: "Create a spa-like sanctuary with luxury fixtures, modern tiles, and thoughtful design that enhances your daily routine.",
      image: "bathroom1.JPG",
      features: ["Luxury Fixtures", "Custom Tiles", "Spa Features", "Smart Storage"],
      href: "/services/renovation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    },
    {
      id: 3,
      title: "New Construction",
      description: "Build your dream home from the ground up with our comprehensive new construction services and expert project management.",
      image: "/working1.jpg",
      features: ["Custom Design", "Project Management", "Quality Materials", "Timeline Adherence"],
      href: "/services/new-construction",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Handyman Services",
      description: "Professional maintenance and repair services for all your home improvement needs with reliable, quality workmanship.",
      image: "/working2.jpg",
      features: ["Quick Repairs", "Maintenance", "Licensed & Insured", "Same Day Service"],
      href: "/services/handyman",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Maintenance Services",
      description: "Keep your property in perfect condition with our comprehensive maintenance services and preventive care programs.",
      image: "/handyman.png",
      features: ["Preventive Care", "Regular Inspections", "Emergency Repairs", "Seasonal Maintenance"],
      href: "/services/maintenance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Permits & Planning",
      description: "Navigate the permitting process seamlessly with our expert knowledge of local regulations and professional planning services.",
      image: "/working1.jpg",
      features: ["Permit Applications", "Code Compliance", "Plan Reviews", "Regulatory Guidance"],
      href: "/services/permits",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gray-100 py-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to creation, we bring your vision to life with professional excellence and attention to detail
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full scale-95' 
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="max-w-2xl ml-8 md:ml-16 text-white">
                    {/* Icon with animation */}
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110 hover:bg-red-500">
                      {service.icon}
                    </div>
                    
                    {/* Title with slide-in animation */}
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-700 delay-200">
                      {service.title}
                    </h3>
                    
                    {/* Description with slide-in animation */}
                    <p className="text-lg md:text-xl mb-8 leading-relaxed transform transition-all duration-700 delay-400">
                      {service.description}
                    </p>
                    
                    {/* Features with staggered animation */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center transform transition-all duration-500"
                          style={{ transitionDelay: `${600 + featureIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link href={service.href} className="inline-block">
                      <button className="bg-red-600 text-white font-bold py-4 px-8 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-red-400 scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Service Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                index === currentSlide 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  {service.icon}
                </div>
                <span className="text-sm font-medium">{service.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
