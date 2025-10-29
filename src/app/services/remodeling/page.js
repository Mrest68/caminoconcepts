import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FinalContactSection from '@/components/FinalContactSection';

/**
 * Remodeling Services Page
 * Showcases home and commercial remodeling services
 */
export const metadata = {
  title: 'Remodeling Services | Camino Concepts',
  description: 'Professional remodeling services in South Florida & Houston TX. Transform your space with expert kitchen, bathroom, and whole-home remodeling.',
};

export default function RemodelingPage() {
  const remodelingServices = [
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern, functional space with custom cabinetry and design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z M3 6h18 M7 10h4 M7 14h.01" />
        </svg>
      ),
    },
    {
      title: 'Bathroom Remodeling',
      description: 'Create your dream bathroom with modern fixtures, tiles, and spa-like features',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: 'Whole Home Remodeling',
      description: 'Complete home transformation from concept to completion',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Basement Finishing',
      description: 'Convert your basement into a functional living space',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Room Additions',
      description: 'Expand your living space with seamless room additions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      title: 'Flooring Installation',
      description: 'Upgrade your floors with hardwood, tile, laminate, or luxury vinyl',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
    },
    {
      title: 'Custom Cabinetry',
      description: 'Design and install custom cabinets for any room',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: 'Interior Painting',
      description: 'Professional painting services to refresh your space',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Lighting & Electrical',
      description: 'Upgrade lighting fixtures and electrical systems',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Outdoor Living Spaces',
      description: 'Create beautiful patios, decks, and outdoor entertaining areas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Window & Door Replacement',
      description: 'Energy-efficient windows and stylish door installations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      title: 'Commercial Remodeling',
      description: 'Office and retail space renovations for businesses',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const remodelingProcess = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'Discuss your vision, needs, and budget with our experts',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Create detailed plans and 3D renderings of your new space',
    },
    {
      step: '03',
      title: 'Material Selection',
      description: 'Choose finishes, fixtures, and materials that match your style',
    },
    {
      step: '04',
      title: 'Demolition & Prep',
      description: 'Carefully remove old materials and prepare the space',
    },
    {
      step: '05',
      title: 'Construction',
      description: 'Expert craftsmanship brings your design to life',
    },
    {
      step: '06',
      title: 'Final Walkthrough',
      description: 'Ensure every detail meets your expectations',
    },
  ];

  const portfolioImages = [
    { src: '/kitchen1.JPG', alt: 'Modern kitchen remodel' },
    { src: '/kitchen2.JPG', alt: 'Custom kitchen cabinets' },
    { src: '/bathroom1.JPG', alt: 'Luxury bathroom renovation' },
    { src: '/kitchen3.JPG', alt: 'Contemporary kitchen design' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Full Width with Overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider/Collage */}
        <div className="absolute inset-0 grid grid-cols-4 gap-1">
          <div className="relative h-full">
            <Image src="/kitchen1.JPG" alt="Kitchen remodel" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/kitchen2.JPG" alt="Kitchen design" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/bathroom1.JPG" alt="Bathroom remodel" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/kitchen3.JPG" alt="Modern kitchen" fill className="object-cover" />
          </div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Expert Remodeling Services
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Space
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            From kitchens to whole-home renovations, we bring your remodeling vision to life with exceptional craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-xl"
            >
              Get Free Estimate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (954) 715-0053

            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Our Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality and craftsmanship in our completed remodeling projects
            </p>
          </div>

          {/* Masonry Gallery Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/kitchen1.JPG" 
                  alt="Modern kitchen remodel" 
                  width={600}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Modern Kitchen Remodel</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/bathroom1.JPG" 
                  alt="Luxury bathroom renovation" 
                  width={600}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Luxury Bathroom</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/kitchen2.JPG" 
                  alt="Custom kitchen cabinets" 
                  width={600}
                  height={700}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Custom Cabinetry</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/kitchen3.JPG" 
                  alt="Contemporary kitchen design" 
                  width={600}
                  height={650}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Contemporary Design</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/bathroom2.JPG" 
                  alt="Bathroom transformation" 
                  width={600}
                  height={750}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Bathroom Transformation</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/kitchen5.JPG" 
                  alt="Kitchen renovation" 
                  width={600}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Complete Kitchen Renovation</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/kitchen6.JPG" 
                  alt="White kitchen remodel" 
                  width={600}
                  height={700}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Bright Modern Kitchen</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/bathroom3.jpg" 
                  alt="Spa bathroom remodel" 
                  width={600}
                  height={650}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Spa-Style Bathroom</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image 
                  src="/kitchen8.JPG" 
                  alt="Kitchen island design" 
                  width={600}
                  height={750}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">Custom Island Design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
            >
              Start Your Remodel Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services List - Compact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Remodel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive remodeling solutions for every room in your home
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {remodelingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 mx-auto group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality and craftsmanship in our completed remodeling projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-6">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Full Portfolio
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Remodeling Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Remodeling Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven, step-by-step approach to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remodelingProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Camino Concepts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted remodeling partner in South Florida & Houston TX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your protection</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Competitive rates with no hidden fees</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-gray-600">Premium materials from trusted suppliers</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Completion</h3>
              <p className="text-gray-600">Projects finished on schedule, every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Our kitchen remodel exceeded all expectations. The team was professional, clean, and delivered exactly what we envisioned!"
              </p>
              <p className="font-semibold text-gray-900">- Sarah M.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Amazing work on our bathroom renovation! High quality materials and excellent attention to detail. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">- Michael R.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "From start to finish, the process was smooth. They completed our whole-home remodel on time and within budget!"
              </p>
              <p className="font-semibold text-gray-900">- Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and estimate. Let's bring your remodeling vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Estimate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <FinalContactSection />
    </div>
  );
}
