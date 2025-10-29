import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Camino Concepts',
  description: 'Get in touch with Camino Concepts for remodeling, handyman, and consultation services.'
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900">Contact Camino Concepts</h1>
            <p className="mt-2 text-gray-600">Have a project in mind? Send us a message and we&apos;ll get back to you shortly.</p>
          </div>

          <section className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Form (takes 2 cols on large screens) */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-xl">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a message</h2>
                  <p className="text-sm text-gray-600 mb-6">Tell us about your project goals, timeline, and any questions — we typically reply within one business day.</p>
                  <ContactForm />
                </div>
              </div>

              {/* Right: Contact info */}
              <aside className="space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                  <p className="mt-3 text-gray-600">Prefer to call or email? We&apos;re here to help.</p>

                  <ul className="mt-4 space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <div className="text-gray-600">(954) 715-0053</div>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-gray-600">caminoconcepts0@gmail.com</div>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Serving Areas</div>
                        <div className="text-gray-600">South Florida & Houston</div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                    <div className="font-medium text-gray-900">Office Hours</div>
                    <div className="mt-1">Mon - Sat: 8:00am – 5:00pm</div>
                  </div>
                </div>

              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
