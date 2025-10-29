'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Modern Navigation Bar Component
 * Features responsive design and mobile menu
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesCloseTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (servicesCloseTimeout.current) clearTimeout(servicesCloseTimeout.current);
    };
  }, []);

  function openServices() {
    if (servicesCloseTimeout.current) {
      clearTimeout(servicesCloseTimeout.current);
      servicesCloseTimeout.current = null;
    }
    setIsServicesOpen(true);
  }

  function scheduleCloseServices() {
    if (servicesCloseTimeout.current) clearTimeout(servicesCloseTimeout.current);
    servicesCloseTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
      servicesCloseTimeout.current = null;
    }, 180);
  }

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // keep Services as a top-level label; we'll render a dropdown for its children
    { name: 'Services',  children: [
      { name: 'New Construction', href: '/services/new-construction' },
      { name: 'Remodeling', href: '/services/remodeling' },
      { name: 'Handyman', href: '/services/handyman' },
      { name: 'Maintenance', href: '/services/maintenance' },
      { name: 'Permits Owner', href: '/services/permits' }
    ] },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.webp" 
                alt="Camino Concepts Logo" 
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                item.children ? (
                  <div key={item.name} className="relative" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-all duration-200 border-b-2 border-transparent hover:border-red-600 flex items-center"
                    >
                      {item.name}
                      <svg className="ml-1 h-4 w-4 text-gray-500 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Dropdown panel - controlled by isServicesOpen */}
                    <div onMouseEnter={openServices} onMouseLeave={scheduleCloseServices} className={`absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg transition-opacity ${isServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                      {item.children.map((child) => (
                        <a key={child.name} href={child.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600">{child.name}</a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-all duration-200 border-b-2 border-transparent hover:border-red-600"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors duration-200 transform hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md border-t border-white/20">
              {navigationItems.map((item) => (
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <a href={item.href} className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>{item.name}</a>
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <a key={child.name} href={child.href} className="text-gray-600 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>{child.name}</a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="/contact"
                className="bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-colors duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
