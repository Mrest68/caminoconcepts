'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById('about-section');
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="about-section" className="bg-gray-100 py-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">About Camino Concepts</h1>
            <h2 className="text-2xl md:text-3xl text-red-600 font-semibold mb-8">Transforming Spaces, Building Dreams Since 2000</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Camino Concepts, we believe that every space has the potential to become something extraordinary. With over 15 years of experience in construction, remodeling, and design, we&apos;ve built our reputation on exceptional craftsmanship, attention to detail, and unwavering commitment to our clients&apos; visions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From concept to creation, we guide you through every step of your project. Our team of licensed professionals brings expertise in custom home construction, luxury remodeling, and comprehensive handyman services. We serve Houston with pride, delivering projects that exceed expectations and stand the test of time.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              What sets us apart is our dedication to transparent communication, on-time completion, and unparalleled quality. Whether you&apos;re dreaming of a gourmet kitchen, a spa-like bathroom, or a complete home transformation, we&apos;re here to make it happen with professional excellence and personal care.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Licensed & Insured</h4>
                  <p className="text-gray-600 text-sm">Fully bonded and insured for your peace of mind</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">15+ Years Experience</h4>
                  <p className="text-gray-600 text-sm">Proven track record of exceptional results</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">On-Time Delivery</h4>
                  <p className="text-gray-600 text-sm">Projects completed on schedule, every time</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Guarantee</h4>
                  <p className="text-gray-600 text-sm">Satisfaction guaranteed on every project</p>
                </div>
              </div>
            </div>

            <button className="bg-red-600 text-white font-bold py-4 px-8 hover:bg-red-700 transition-all duration-300 transform hover:scale-105">LEARN MORE ABOUT US</button>
          </div>

          {/* Right Column */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <img src="/pablo1.jpg" alt="About Camino Concepts" className="rounded-3xl shadow-2xl h-[600px] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
