import Image from 'next/image';

/**
 * LogoSection Component
 * Displays partner/review platform logos
 */
export default function LogoSection() {
  const logos = [
    {
      src: '/logos/google-reviews-logo.png',
      alt: 'Google Reviews',
      width: 150,
      height: 50,
    },
    {
      src: '/logos/Yelp_Logo.svg.png',
      alt: 'Yelp',
      width: 120,
      height: 50,
    },
    {
      src: '/logos/angies-list.svg',
      alt: "Angie's List",
      width: 130,
      height: 50,
    },
    {
      src: '/logos/ab-seal-blue-hero-657x414.png',
      alt: 'Accredited Business',
      width: 80,
      height: 50,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Trusted & Verified On
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
