import Image from 'next/image';

/**
 * TestimonialSection Component
 * Displays client testimonials with before and after images
 */
export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformations we've helped bring to life
          </p>
        </div>

        <div className="space-y-20">
          {/* Project with Before & After Images */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Kitchen Renovation</h3>
              <p className="text-gray-600">A stunning transformation from start to finish</p>
            </div>

            {/* Before & After Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Before
                </div>
                <Image
                  src="/WhatsApp Image 2025-10-04 at 09.37.01.jpeg"
                  alt="Before renovation - view 1"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                />
              </div>
              <div className="relative">
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Before
                </div>
                <Image
                  src="/WhatsApp Image 2025-10-04 at 09.37.01 (1).jpeg"
                  alt="Before renovation - view 2"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                />
              </div>
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  After
                </div>
                <Image
                  src="/WhatsApp Image 2025-10-04 at 09.30.05.jpeg"
                  alt="After renovation - view 1"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                />
              </div>
              
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  After
                </div>
                <Image
                  src="/WhatsApp Image 2025-10-04 at 09.30.05 (1).jpeg"
                  alt="After renovation - view 2"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="flex items-start gap-6 max-w-4xl mx-auto">
              
              <div>
               
               
                
              </div>
            </div>
          </div>

          {/* Video Testimonial */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Video Testimonial</h3>
              <p className="text-gray-600">Hear directly from our satisfied clients</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <video
                  controls
                  className="w-full h-auto"
                  poster="/handyman.png"
                >
                  <source src="/WhatsApp Video 2025-10-04 at 09.25.17.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Testimonial Content */}
              <div>
                <div className="flex items-center mb-6">
                  <svg className="w-12 h-12 text-red-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 font-semibold">Verified Video Review</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic mb-4">
                  "Couldn't be happier with the results! They took care of all the paperwork and permits, making the entire process stress-free. The final outcome is exactly what we envisioned. Watch our video to see the amazing work they did!"
                </p>
                <p className="text-gray-900 font-semibold">— Satisfied Customer</p>
                
                <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verified Project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Completed 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
