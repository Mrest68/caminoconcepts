'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * Modern Hero Section with two service options
 * Features red outline hover effects, responsive design, background image carousel, and on-load animations
 */
export default function HeroSection() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const carouselImages = [
    '/kitchen1.JPG',
    '/kitchen2.JPG',
    '/kitchen3.JPG',
    '/kitchen4.JPG',
    '/kitchen5.JPG',
    '/kitchen6.JPG',
    '/Kitchen7.JPG',
    '/kitchen8.JPG',
    '/Kitchen9.JPG',
    '/kitchen10.JPG',
    '/kitchen11.jpg',
    '/bathroom1.JPG',
    '/bathroom2.JPG',
    '/bathroom3.jpg',
  ];

  // Ensure component is mounted before running client-side effects
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // On-load animation trigger
  useEffect(() => {
    if (!isMounted) return;
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [isMounted]);

  // Auto-advancing carousel
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isMounted]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isMounted) {
    return null; // Don't render on server to prevent hydration mismatch
  }

  return (
    <section className="min-h-screen relative flex flex-col lg:flex-row overflow-hidden bg-white">
      {/* Left Half - Logo and Contact with Image Carousel */}
      <div className={`w-full lg:w-1/2 relative flex flex-col justify-center items-center p-6 sm:p-8 md:p-12 lg:p-16 transition-all duration-1000 overflow-hidden min-h-[50vh] lg:min-h-screen ${
        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}>
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Construction work ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Logo at top center of carousel */}
          <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
            <img 
              src="/logo.webp" 
              alt="Camino Concepts Logo" 
              className="w-48 h-20 sm:w-64 sm:h-24 md:w-80 md:h-32 lg:w-96 lg:h-40 object-contain opacity-60"
            />
          </div>
        </div>
        
        {/* Red Tint Overlay */}
        
        {/* Content */}
        <div className="text-center relative z-20">
          {/* Contact Us Now Button */}
          <button className="bg-white text-red-500 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 mb-6 sm:mb-8 text-sm sm:text-base " onClick={()=>router.push('/contact')}>
            Contact Us Now
          </button>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3 sm:space-x-4">
            {/* Facebook */}
            <Link 
              href="https://www.facebook.com/CaminoConcepts" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Facebook"
            >
            
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>

            {/* Instagram */}
            <Link 
              href="https://www.instagram.com/caminoconcepts/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@caminoconcepts" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Follow us on TikTok"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/camino-concepts" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Connect with us on LinkedIn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Half - Service Options */}
      <div className={`w-full lg:w-1/2 flex flex-col justify-center items-start p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-gray-50 to-white relative transition-all duration-1000 min-h-[50vh] lg:min-h-screen ${
        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-900/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-lg relative z-10 w-full mx-auto lg:mx-0">
          {/* Award Badge */}
          <div className="inline-flex items-center bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-red-100">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Licensed & Insured
          </div>

          {/* Main Heading */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Luxury
                <span className="text-red-500 block">Remodeling</span>
                <span className="text-gray-700">& Handyman</span>
              </h1>
            </div>
            {/* Handyman Image */}
            <div className="flex-shrink-0 hidden sm:hidden lg:block">
              <img
                src="/handyman.png"
                alt="Handyman"
                className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed text-center sm:text-left">
            Building dreams, one project at a time. 15+ years of excellence in South Florida & Houston TX.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="text-center p-2 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1">20+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-2 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Projects Done</div>
            </div>
            <div className="text-center p-2 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Support</div>
            </div>
          </div>
          
          {/* Service Buttons */}
          <div className="space-y-3 sm:space-y-4">
            <button
              type="button"
              onClick={() => router.push('/services/remodeling')}
              className="group w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 sm:py-4 md:py-5 px-6 sm:px-8 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Explore Remodeling Services
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
            </button>

            <button
              type="button"
              onClick={() => router.push('/services/handyman')}
              className="group w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold py-3 sm:py-4 md:py-5 px-6 sm:px-8 rounded-2xl hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Explore Handyman Services
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
            </button>
          </div>

          {/* Key Features */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center text-gray-600">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium">Free Estimates</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium">Quality Guarantee</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium">Fair Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
