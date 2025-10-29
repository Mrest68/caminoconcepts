'use client';

import { useState, useEffect } from 'react';

/**
 * Reviews Section with Stack Animation and Fade Effects
 * Features simple cards with cool stacking animations and testimonials
 */
export default function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "Camino Concepts transformed our kitchen beyond our wildest dreams. The attention to detail and craftsmanship is absolutely incredible. They completed the project on time and within budget.",
      project: "Kitchen Remodeling",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Santa Monica, CA",
      rating: 5,
      text: "Outstanding work from start to finish. The team was professional, reliable, and delivered exceptional quality. Our bathroom renovation looks like it belongs in a luxury spa.",
      project: "Bathroom Renovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Manhattan Beach, CA",
      rating: 5,
      text: "From concept to creation, Camino Concepts exceeded every expectation. Their expertise in custom home construction is unmatched. We couldn't be happier with our new home.",
      project: "Custom Home Construction",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Pasadena, CA",
      rating: 5,
      text: "The handyman services are top-notch. Quick, reliable, and always done right the first time. They've become our go-to for all home maintenance and repairs.",
      project: "Handyman Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Lisa Williams",
      location: "Malibu, CA",
      rating: 5,
      text: "Working with Camino Concepts was a dream. They turned our outdated living space into a modern masterpiece. The design process was collaborative and fun.",
      project: "Interior Design",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "Redondo Beach, CA",
      rating: 5,
      text: "Our outdoor deck and patio project was completed flawlessly. The team's expertise in outdoor living spaces really shows. We now have the perfect entertaining area.",
      project: "Outdoor Living",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('reviews-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Auto-rotate reviews for stack animation
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, reviews.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-red-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section 
      id="reviews-section"
      className="bg-gray-100 py-20 px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied clients who have experienced the Camino Concepts difference.
          </p>
        </div>

        {/* Reviews Stack Container */}
        <div className="relative h-[500px] md:h-[400px] mb-16">
          {reviews.map((review, index) => {
            const position = (index - currentReview + reviews.length) % reviews.length;
            const isActive = position === 0;
            const isNext = position === 1;
            const isPrev = position === reviews.length - 1;
            
            return (
              <div
                key={review.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                } ${
                  isActive 
                    ? 'translate-x-0 translate-y-0 scale-100 z-30 opacity-100' 
                    : isNext 
                      ? 'translate-x-8 translate-y-4 scale-95 z-20 opacity-70'
                      : isPrev 
                        ? '-translate-x-8 translate-y-4 scale-95 z-20 opacity-70'
                        : 'translate-y-8 scale-90 z-10 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-between">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-red-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Review Text */}
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center mb-6">
                    {renderStars(review.rating)}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-red-200"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {review.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        {review.project}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className={`flex justify-center space-x-3 mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview 
                  ? 'bg-red-600 scale-125' 
                  : 'bg-gray-300 hover:bg-red-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">5.0★</div>
            <div className="text-gray-700 font-medium">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">150+</div>
            <div className="text-gray-700 font-medium">Happy Clients</div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium">Satisfaction Rate</div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">15+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
