'use client';

import { useRouter } from 'next/navigation';

/**
 * Contact Us for Free Quote Section
 * Features white background, square buttons, and contact form
 */
export default function ContactSection() {
  const router = useRouter();
  
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headers */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Get Your Free Quote Today
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-12 font-medium">
          Transform Your Space with Professional Excellence
        </h2>

        {/* Contact Form */}
        <div className="mb-12">
          {/* Square Button */}
          <button
            type="button"
            className="bg-red-600 text-white font-bold py-6 px-16 hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 text-lg"
            onClick={() => router.push('/contact')}
          >
            REQUEST FREE QUOTE
          </button>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <a href="tel:+19547150053" className="text-gray-600 hover:text-red-600 hover:underline">
              (954) 715-0053
            </a>
          </div>

          <div>
            <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">info@caminoconcepts.com</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">Licensed & Insured<br />Serving Your Area</p>
          </div>
        </div>
      </div>
    </section>
  );
}
