import React, { useEffect } from 'react';
import Header from '../components/Header';
import CAT from '../components/CTA';
import Footer from '../components/Footer';
import img from '../assets/LandingPage/Story.png';
import { Link } from 'react-router-dom';
import img2 from '../assets/LandingPage/Story2.png';

const NewsDetailPage = () => {
  useEffect(() => {
    document.title = 'News & Insights • NeuAnchor';
  }, []);

  return (
    <>
      <Header />

      <section className="bg-white py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Title + date */}
          <h1 className="font-baskerville font-bold text-[26px] leading-[1.25] md:text-[32px] md:leading-[1.25] text-[#0F172A]">
            From Classrooms to Careers: A Student Success Story
          </h1>
          <p className="mt-2 text-[13px] md:text-sm text-[#6B7280]">18 Aug, 2025</p>

          {/* Cover image (uses imported asset to match Figma) */}
          <figure className="mt-6 md:mt-8">
            <div className="w-full overflow-hidden rounded-[12px] md:rounded-[16px] shadow-[0_1px_2px_rgba(16,24,40,0.06)]">
              <img
                src={img}
                alt="Student success story cover"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16 / 9' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>

          {/* Body copy */}
          <article className="mt-6 md:mt-8 space-y-6">
            <p
              className="text-[#111827]"
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '1.7',
                letterSpacing: 0,
                opacity: 1,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p
              className="text-[#111827]"
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '1.7',
                letterSpacing: 0,
                opacity: 1,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </article>
        </div>
      </section>

      {/* More Stories to Read (matches Figma) */}
      <section className="bg-[#F8DC6E] py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-baskerville font-bold text-[22px] md:text-[28px] text-[#0F172A] mb-6 md:mb-8">
            More Stories to Read
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <Link
              to="/news/from-classrooms-to-careers-a-student-success-story"
              className="block bg-white rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D69B5]"
              aria-label="From Classrooms to Careers: A Student Success Story"
            >
              <div className="overflow-hidden rounded-[6px]">
                <img
                  src={img}
                  alt="From Classrooms to Careers"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '16 / 9' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 underline font-Figtree text-[14px] md:text-[16px] leading-[1.35] text-[#0F172A]">
                From Classrooms to Careers:
                <br className="hidden md:block" />
                A Student Success Story
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              to="/news/empowering-special-needs-families-through-workshops"
              className="block bg-white rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D69B5]"
              aria-label="Empowering Special Needs Families Through Workshops"
            >
              <div className="overflow-hidden rounded-[6px]">
                <img
                  src={img2}
                  alt="Empowering Special Needs Families Through Workshops"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '16 / 9' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 underline font-Figtree text-[14px] md:text-[16px] leading-[1.35] text-[#0F172A]">
                Empowering Special Needs Families
                <br className="hidden md:block" />
                Through Workshops
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CAT />
      <Footer />
    </>
  );
};

export default NewsDetailPage;