import React from 'react';
import image from '../assets/LandingPage/Hero.png';    // Desktop image
import image2 from '../assets/LandingPage/Hero2.png';  // Mobile image

export const Hero = () => {
  return (
    <section
      className={`
        bg-[#F4F3EF]      /* mobile */
        lg:bg-[#E2F4FF]   /* desktop */
        lg:h-[90vh]
      `}
    >
      <div className="mx-auto w-full max-w-7xl px-4 pt-6 pb-0  lg:pt-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 lg:h-[90vh] lg:items-center">

          {/* Left Content */}
          <div className="order-1 w-full lg:order-none">
            <div className="space-y-5 lg:space-y-8 lg:-mt-8">
              <div className="inline-flex items-center px-3 py-1.5 text-[11px] font-medium rounded-full border border-[#BFAA2C] bg-badge text-yellow-800 lg:px-4 lg:py-2 lg:text-sm">
                15 years of building a Legacy
              </div>
              <div className="space-y-4">
                <h1 className="font-baskerville font-bold text-[48px] leading-[1.25] md:text-[30px] md:leading-snug lg:text-[40px] lg:leading-tight text-gray-900">
                  <span className="block">Empowering Growth,</span>
                  <span className="text-[#1D69B5]">Wellness, and Community</span>
                </h1>
                <p className="font-Figtree font-medium text-[14px] leading-[1.55] md:text-[15px] lg:text-[17px] lg:leading-relaxed text-gray-600 max-w-[560px]">
                  <span className="block lg:hidden">
                    A family of brands delivering solutions in education, careers, healthcare, events, hospitality, and gifting.
                  </span>
                  <span className="hidden lg:block">
                    Welcome to NeuAnchor, your comprehensive destination for holistic growth and well-being. Offering specialised consultations for special needs, education, career guidance, leadership and motivational conferences, self-paced online life skills courses, bespoke gifting, and curated specialised meals, we bring together a diverse range of services under one trusted umbrella. Explore personalised solutions designed to support your journey and anchor your success across every facet of life.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Image (responsive) */}
          <div className="block lg:hidden order-2 mt-6">
            {/* Aspect-ratio wrapper (keeps original 375x363 = 0.968 ratio) */}
            <div className="relative w-full overflow-hidden"
                 style={{ aspectRatio: '375 / 363' }}>
              <img
                src={image}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Image (unchanged) */}
          <div className="hidden lg:flex order-2 lg:order-none justify-end">
            <div className="w-full h-[230px] sm:h-[250px] md:h-[300px] lg:h-[90vh] overflow-hidden">
              <img
                src={image}
                alt="Hero"
                className="w-full h-full object-cover lg:object-fill"
                style={{ objectPosition: 'center right' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;