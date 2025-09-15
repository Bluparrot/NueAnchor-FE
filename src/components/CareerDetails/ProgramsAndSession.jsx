import React from 'react';
import Button from '../UI/Button';
import SessionCard from '../UI/SessionCard';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "1:1 consultation - For Students & families",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: ""
    },
    {
      id: 2,
      title: "Group workshops & seminars",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: ""
    },
    {
      id: 3,
      title: "Motivational talks and global speakings.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: ""
    }
  ];

  return (
    <section className="py-16 px-4 md:px-16 programs-section">
      {/* Mobile-only adjustments */}
      <style>{`
        @media (max-width: 767px) {
          .programs-section {
            background-color: #FEE368;  /* yellow background on mobile */
          }
          .programs-mobile {
            max-width: 375px;        /* width: 375 */
            min-height: 1480px;      /* height: 1480 */
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 10px;               /* gap: 10px */
            opacity: 1;              /* opacity: 1 */
          }
          .programs-mobile .cards-grid {
            gap: 10px;               /* tighter spacing on mobile */
          }
          .programs-mobile .card-wrap {
            max-width: 343px;        /* keep cards neatly inside 375px */
            margin: 0 auto;          /* center card */
            width: 100%;
          }
          .programs-mobile .card-wrap img {
            width: 100%;             /* make card images responsive */
            height: 100;
            object-fit: cover;
            display: block;
            border-radius: 16px;
          }
          .programs-mobile .visit-btn {
            width: 240px;            /* larger mobile button */
            height: 50px;
            font-size: 16px;
            border-radius: 12px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto programs-mobile">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] font-baskerville font-bold text-[#1D69B5] mb-2">
            Programs & Sessions
          </h2>
          <div className="w-30 h-[6px] bg-title mx-auto rounded-full mb-8"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 cards-grid">
          {programs.map((program) => (
            <div key={program.id} className="card-wrap">
              <SessionCard
                image={program.image}
                title={program.title}
                description={program.description}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          {/* Mobile: big button */}
          <button
            type="button"
            className="visit-btn md:hidden inline-flex items-center justify-center bg-[#3B3B3B] text-white font-semibold shadow-[0_6px_18px_rgba(0,0,0,0.12)]"
          >
            Visit Site
          </button>

          {/* Desktop: original button */}
          <div className="hidden md:inline-block">
            <Button variant="secondary" size="md">
              Visit Site
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;