import React from 'react';

/* === Desktop specific brand images (replace paths with actual exported assets) === */
import deskAcademies from '../assets/LandingPage/academies.png';
import deskConferences from '../assets/LandingPage/conferences1.png';
import deskHealing from '../assets/LandingPage/healing1.png';
import deskHospitality from '../assets/LandingPage/hospitality1.png';
import deskCareers from '../assets/LandingPage/careers1.png';
import deskEducation from '../assets/LandingPage/education1.png';
import deskStars from '../assets/LandingPage/stars1.png';
import deskIndiana from '../assets/LandingPage/indiana1.png';

/* Use desktopBrands for both views */
const brands = [
  { title: 'NeuAnchor Academies', description: 'Learn at your own pace with globally recognized, certified online self-learning courses.', image: deskAcademies },
  { title: 'NeuAnchor Conferences', description: 'Hosting impactful conferences with global leaders, keynote sessions, and panel discussions on leadership & motivation.', image: deskConferences },
  { title: 'NeuAnchor Healing', description: 'Delivering holistic healing through FMMA courses, functional medicine, and advanced therapies.', image: deskHealing },
  { title: 'NeuAnchor Hospitality', description: 'Offering specialized catering with curated diets, dehydrated foods, and premium culinary solutions.', image: deskHospitality },
  { title: 'NeuAnchor Careers', description: 'Guiding students and professionals with career, leadership, and university counselling for a brighter tomorrow.', image: deskCareers },
  { title: 'NeuAnchor Education', description: 'Shaping the future of learning by building and auditing schools, with innovative marketing and franchising solutions.', image: deskEducation },
  { title: 'NeuAnchor Stars', description: 'Empowering special families through consultancy, counselling, workshops, and expert-led programs for inclusion and growth.', image: deskStars },
  { title: 'INDIANA G', description: 'Redefining corporate and personal gifting with unique retail and online gifting solutions.', image: deskIndiana },
];

/* Helper to bold last word (mobile titles) */
const renderTitleMobile = (title) => {
  const parts = title.split(' ');
  if (parts.length < 2) return title;
  const last = parts.pop();
  return (
    <>
      {parts.join(' ')} <span className="font-bold">{last}</span>
    </>
  );
};

/* Desktop helper: bold last word (to match Figma if required) */
const renderDesktopTitle = (title) => {
  const parts = title.split(' ');
  if (parts.length < 2) return title;
  const last = parts.pop();
  return (
    <>
      {parts.join(' ')} <span className="font-semibold">{last}</span>
    </>
  );
};

const Brands = () => {
  return (
    <section
      id="brands"
      className="bg-[#F5F5F5] bg-[url('assets/LandingPage/Anchor.png')] bg-center bg-contain bg-no-repeat"
    >
      {/* MOBILE VERSION (now uses desktop images) */}
      <div className="block lg:hidden px-4 pt-10 pb-14 max-w-[430px] mx-auto">
        <header className="text-center mb-6">
          <p className="text-[26px] font-semibold tracking-wide text-gray-600 mb-2">
            Our Brands
          </p>
          <h2 className="text-[30px] leading-snug font-baskerville font-bold bg-gradient-to-r from-[#1D69B5] via-[#7758a1] to-[#B62A88] bg-clip-text text-transparent">
            Discover the World of NeuAnchor
          </h2>
        </header>

        <ul className="flex flex-col gap-4">
          {brands.map((b, idx) => (
            <li
              key={idx}
              className="bg-white rounded-2xl px-4 pt-4 pb-5 shadow-sm border border-[#ECECEC] flex flex-col"
            >
              <h3 className="text-[13.5px] leading-snug font-semibold text-gray-900 mb-2">
                {b.title}
              </h3>
              <p
                className="mb-4"
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '15px',
                  lineHeight: '1.28',
                  letterSpacing: '0',
                  verticalAlign: 'middle',
                  width: '303px',
                  height: '57px',
                  opacity: 1,
                }}
              >
                {b.description}
              </p>
              <div
                className="relative w-full overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#FAFAFA] mb-3"
                style={{
                  width: "100%",
                  height: "120px", // smaller height for mobile
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-auto h-full object-contain"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>
              <button
                type="button"
                className="group inline-flex items-center gap-1 text-[11.5px] font-medium text-[#1D69B5]"
                aria-label={`Visit ${b.title}`}
              >
                Visit Now
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP VERSION (unchanged, uses same images) */}
      <div className="hidden lg:block py-20 px-16 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gray-700 font-Figtree text-sm font-semibold tracking-wide uppercase mb-3">
            Our Brands
          </p>
          <h2 className="font-baskerville font-bold text-[38px] leading-[1.15] text-gray-900">
            Discover the World of <span className="bg-gradient-to-r from-[#1D69B5] via-[#7758A1] to-[#B62A88] bg-clip-text text-transparent">NeuAnchor</span>
          </h2>
        </div>
        <div
          className="
            grid
            gap-x-8 gap-y-10
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            items-start
          "
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="
                group flex flex-col justify-between
                bg-white
                rounded-[16px]
                p-6
                shadow-sm
                border border-[#E6E6E6]
                hover:shadow-md
                transition-shadow
                duration-300
              "
              style={{
                width: '100%',
                minHeight: '373px',
                boxSizing: 'border-box',
              }}
            >
              <div className="mb-6">
                <h3 className="text-[14px] font-semibold text-gray-900 leading-snug mb-3">
                  {brand.title}
                </h3>
                <p
                  className="text-[#4A4A4A] text-[12px] leading-[1.45] font-normal font-Figtree"
                  style={{ letterSpacing: 0 }}
                >
                  {brand.description}
                </p>
              </div>
              <div className="mt-auto">
                <div
                  className="
                    relative
                    w-full
                    h-[190px]
                    border border-[#E4E4E4]
                    rounded-[12px]
                    flex flex-col items-center justify-center gap-5
                    bg-white
                    overflow-hidden
                  "
                >
                  <img
                    src={brand.image}
                    alt={brand.title}
                    className="h-[110px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    type="button"
                    className="text-[#1D69B5] text-[12px] font-medium inline-flex items-center gap-1 hover:underline"
                    aria-label={`Visit ${brand.title}`}
                  >
                    Visit Now
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;