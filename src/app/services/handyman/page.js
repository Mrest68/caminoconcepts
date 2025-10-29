
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export const metadata = {
  title: 'Handyman Services - Camino Concepts',
  description: 'Reliable handyman services for repairs, installations, and maintenance. Ask about our monthly handyman plans!'
};

export default function HandymanPage() {
  return (
    <div>
      <Navbar />
  <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <Image
            src="/handyman.png"
            alt="Handyman at work"
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
            priority
          />
          {/* Right: Text Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Handyman Services
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              From small repairs to installations, our handyman team is prompt, professional, and skilled. We handle everything from drywall and doors to fixtures and minor plumbing.
            </p>
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-semibold text-red-600 mb-2">Monthly Handyman Plan</h2>
              <p className="text-gray-700 mb-2">
                Enjoy peace of mind with our affordable monthly handyman subscription. Get priority scheduling, unlimited small repairs, and regular maintenance checks for your home or business.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-2">
                <li>Priority booking & same-day service</li>
                <li>Unlimited minor repairs (up to 1 hour each)</li>
                <li>Monthly maintenance visits</li>
                <li>Discounts on larger projects</li>
                <li>Cancel anytime</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">Common Jobs We Handle:</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                <li>Drywall repair</li>
                <li>Fixture installation</li>
                <li>Door & window adjustments</li>
                <li>Small electrical fixes</li>
                <li>Minor plumbing</li>
                <li>Furniture assembly</li>
                <li>Hanging shelves & art</li>
                <li>Caulking & sealing</li>
              </ul>
            </div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Contact Us About Handyman Plans
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
