'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Final Contact/Quote Section
 * Call-to-action section encouraging visitors to get a free quote or contact
 */
export default function FinalContactSection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('final-contact-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="final-contact-section"
      className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-20 px-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Don't wait to transform your space. Get a free, no-obligation quote today and see how 
            we can bring your vision to life with professional excellence.
          </p>
        </div>

        {/* Two-Column CTA Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Get Free Quote Card */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Get Your Free Quote
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Quick and easy quote process. No hidden fees, no surprises. 
                  Just honest pricing for quality work.
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Free consultation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Detailed project estimate</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">No obligation to proceed</span>
                  </li>
                </ul>
                <button 
                  onClick={() => router.push('/contact')}
                  className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  GET FREE QUOTE
                </button>
              </div>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Us Today
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have questions? Ready to discuss your project? 
                  We're here to help and provide expert guidance.
                </p>
                
                {/* Contact Methods */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 font-medium">(954) 715-0053</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 font-medium">caminoconcepts0@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">South Florida & Houston TX</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => router.push('/contact')}
                  className="w-full bg-gray-800 text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  CONTACT US NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Licensed, Bonded & Insured
            </h4>
            <p className="text-red-100 text-lg mb-6">
              Serving South Florida and Houston TX with professional excellence since 2008. 
              Your satisfaction is our guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-red-200 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-red-200 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-red-200 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-red-200 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
