import Navbar from '@/components/Navbar';
import RenovationGallery from '@/components/RenovationGallery';

export const metadata = {
  title: 'Renovation Portfolio - Camino Concepts',
  description: 'Portfolio showcasing recent renovation projects by Camino Concepts.'
};

export default function RenovationPage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900">Our Renovation Portfolio</h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Browse a curated selection of recent projects to see our craftsmanship and design approach. Click any project to view details and get in touch.</p>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h3 className="font-semibold text-lg">Filter Projects</h3>
                  <p className="mt-2 text-sm text-gray-600">Filter by room or project type.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-sm">Kitchens</button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-sm">Bathrooms</button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-sm">Basements</button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-sm">Outdoor</button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                  <h3 className="font-semibold text-lg">Ready to start?</h3>
                  <p className="mt-2 text-sm text-gray-600">Contact us for a free consultation and estimate.</p>
                  <a href="/contact" className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded shadow">Contact Us</a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Showing <span className="font-medium">All Projects</span></p>
                </div>
                <div className="hidden sm:flex gap-2">
                  <button className="px-3 py-1 rounded-md bg-white border">Newest</button>
                  <button className="px-3 py-1 rounded-md bg-white border">Most Popular</button>
                </div>
              </div>

              <RenovationGallery />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
