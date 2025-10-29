"use client";

import { useState, useEffect } from 'react';

const projects = [
  { id: 1, title: 'Modern Kitchen Remodel', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 2, title: 'Bathroom Refresh', img: 'https://images.unsplash.com/photo-1583511655946-87a9b7eec7f3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2' },
  { id: 3, title: 'Open Living Space', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3' },
  { id: 4, title: 'Custom Built-ins', img: 'https://images.unsplash.com/photo-1542317854-65ddf0f0a7b3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4' },
  { id: 5, title: 'Outdoor Patio Upgrade', img: 'https://images.unsplash.com/photo-1505691723518-36a9f2f6b2e9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5' },
  { id: 6, title: 'Basement Renovation', img: 'https://images.unsplash.com/photo-1542317854-9e7f4a9b7c8b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6' }
];

export default function RenovationGallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setActive(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="group block w-full text-left rounded-lg overflow-hidden shadow-lg bg-white transform hover:-translate-y-1 transition"
            aria-label={`Open project ${p.title}`}
          >
            <div className="relative h-56 w-full">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute left-4 bottom-4 text-white">
                <h4 className="text-lg font-semibold drop-shadow">{p.title}</h4>
                <span className="text-sm opacity-90">View project</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <div className="max-w-5xl w-full p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl transform transition-all scale-100" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 z-50 bg-white/80 rounded-full p-2 hover:bg-white">×</button>
              <img src={active.img} alt={active.title} className="w-full h-[520px] object-cover" />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{active.title}</h3>
                  <p className="mt-2 text-gray-600">Project details and short description — materials, timeline, and highlights.</p>
                </div>
                <a href="/contact" className="bg-red-600 text-white px-5 py-2 rounded shadow">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
