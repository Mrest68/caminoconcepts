import Navbar from '@/components/Navbar';

/**
 * About Us Page
 * Showcases company history, values, team, and achievements
 */
export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Camino Concepts</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building dreams and transforming spaces across South Florida and Houston for over 15 years
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Camino Concepts began as a small family-owned business with a simple mission: 
                to provide exceptional construction and handyman services that exceed our clients&apos; expectations. 
                What started as a local Miami operation has grown into a trusted name across South Florida and Houston.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey has been built on the foundation of quality craftsmanship, honest communication, 
                and treating every project as if it were our own home. We believe that construction is not just 
                about building structures – it's about creating spaces where memories are made and dreams come to life.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">2000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/pablo1.jpg" 
                alt="Construction team at work" 
                className="rounded-lg shadow-lg w-3/4 max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on materials, craftsmanship, or attention to detail
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Values</h3>
              <p className="text-gray-600">
                We treat every client like family and every project like our own home
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                Transparent, competitive pricing with no hidden fees or surprises
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Using the latest techniques and technology to deliver superior results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/working2.jpg" 
                alt="Modern kitchen renovation" 
                className="rounded-lg shadow-lg w-full max-w-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From complete home renovations to small handyman tasks, we handle projects of all sizes 
                with the same dedication to excellence. Our comprehensive services include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Kitchen Remodeling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Bathroom Renovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Home Additions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Electrical Work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Plumbing Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Handyman Tasks</span>
                </div>
              </div>
              
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Where We Serve</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Proudly serving communities across two major metropolitan areas
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-red-500 mb-4">South Florida</h3>
              <div className="space-y-2 text-gray-600">
                <p>Miami-Dade County</p>
                <p>Broward County</p>
                <p>Palm Beach County</p>
                <p>And surrounding areas</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-red-500 mb-4">Houston, TX</h3>
              <div className="space-y-2 text-gray-600">
                <p>Greater Houston Area</p>
                <p>Harris County</p>
                <p>Fort Bend County</p>
                <p>Montgomery County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life. Contact us today for a free consultation and quote.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'About Us - Camino Concepts | Premium Construction & Handyman Services',
  description: 'Learn about Camino Concepts - 15+ years of excellence in construction and handyman services across South Florida and Houston. Our story, values, and commitment to quality.',
  keywords: 'about camino concepts, construction company history, handyman services, south florida construction, houston construction, company values',
};