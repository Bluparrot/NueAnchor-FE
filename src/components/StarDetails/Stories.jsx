import React from 'react';
import ranveerAward from '../../assets/StarsDetails/ranveer_saini_award.png';

// Mobile: text card first, image last (exactly like Figma).
// Desktop: keep your current two-column layout unchanged.

const Stories = () => (
  <section id="stories" className="px-6 py-12">
    {/* MOBILE VERSION (match Figma: centered heading/content, controlled image height) */}
    <div className="md:hidden max-w-[430px] mx-auto px-4">
      <h2
        className="text-[22px] font-extrabold leading-[1.25] mb-3 text-center"
        style={{ fontFamily: 'Nunito, sans-serif', color: '#2196C9' }}
      >
        Stories That Inspire
      </h2>

      {/* Remove shaded/boxed background on mobile */}
      <div className="text-center max-w-[320px] mx-auto">
        <h3
          className="font-semibold text-[16px] text-[#111827] mb-2"
          style={{ fontFamily: 'Figtree, sans-serif' }}
        >
          Breaking Barriers, Building Dreams
        </h3>

        <a
          href="#"
          className="text-[12.5px] font-medium  text-[#F7B500] mb-3 inline-block"
          style={{ fontFamily: 'Figtree, sans-serif', lineHeight: '1.45' }}
        >
          The story of Ranveer Singh Saini — India’s first autistic golfer to win
          Gold at the Special Olympics.
        </a>

        <div className="space-y-3">
          <p
            className="text-[12.5px] text-[#374151]"
            style={{ fontFamily: 'Figtree, sans-serif', lineHeight: '1.55' }}
          >
            Ranveer Singh Saini’s journey is a shining example of what determination, family
            support, and inclusion can achieve. Diagnosed with autism at a young age, Ranveer found
            strength and purpose through sports. With the right guidance, structured training, and
            unwavering belief from his family, he rose to become a world champion.
          </p>
          <p
            className="text-[12.5px] text-[#374151]"
            style={{ fontFamily: 'Figtree, sans-serif', lineHeight: '1.55' }}
          >
            At just 14 years old, he made history by winning a Gold medal in Golf at the 2015
            Special Olympics World Games in Los Angeles, becoming the first Indian golfer with
            autism to achieve this milestone. His achievement has inspired countless families and
            individuals to see autism not as a limitation, but as a different path to greatness.
          </p>
          <p
            className="text-[12.5px] text-[#374151] mb-1"
            style={{ fontFamily: 'Figtree, sans-serif', lineHeight: '1.55' }}
          >
            Ranveer’s successes paired with awareness, guidance, and encouragement continue to
            create possibilities for families, schools and communities to embrace inclusion and
            unlock potential.
          </p>
        </div>
      </div>

      {/* Image at bottom (mobile) with controlled height like Figma */}
      <div className="mt-4 rounded-[16px] overflow-hidden max-w-[320px] mx-auto">
        <img
          src={ranveerAward}
          alt="Ranveer Singh Saini receiving award"
          className="w-full object-cover block"
          style={{ height: '320px' }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    {/* DESKTOP VERSION (unchanged layout) */}
    <div className="hidden md:block max-w-7xl mx-auto">
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center"
        style={{ gap: '40px' }}
      >
        {/* Left Side: Story Text */}
        <div>
          <h2
            className="mb-4"
            style={{
              width: '543px',
              height: '51px',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '40px',
              lineHeight: '128%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: '#2196C9',
              opacity: 1,
            }}
          >
            Stories That Inspire
          </h2>
          <h3 className="text-lg font-semibold mb-2">Breaking Barriers, Building Dreams</h3>
          <p className="text-[#F7B500] font-medium mb-2">
            The story of Ranveer Singh Saini — India’s first autistic golfer to win Gold at the Special Olympics.
          </p>
          <p className="text-gray-700 mb-4">
            Ranveer Singh Saini’s journey is a shining example of what determination, family support, and inclusion can achieve.
            Diagnosed with autism at a young age, Ranveer found strength and purpose through sports. With the right guidance,
            informed training, and unwavering belief from his family, he rose to become a world champion.
          </p>
          <p className="text-gray-700 mb-4">
            At just 14 years old, he made history by winning a Gold medal in Golf at the 2015 Special Olympics World Games in
            Los Angeles, becoming the first Indian golfer with autism to achieve this milestone. His achievement has inspired
            countless families and individuals to see autism not as a limitation, but as a different path to greatness.
          </p>
          <p className="text-gray-700">
            Ranveer’s successes paired with their awareness, guidance, and encouragement continue to create possibilities for
            families, schools and communities to embrace inclusion and unlock potential.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={ranveerAward}
            alt="Ranveer Singh Saini receiving award"
            style={{
              width: '100%',
              maxWidth: '500px',
              height: '580px',
              borderRadius: '32px',
              objectFit: 'cover',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
            className="shadow-lg md:max-w-[592px] md:h-[500px] max-w-[543px] h-[440px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Stories;