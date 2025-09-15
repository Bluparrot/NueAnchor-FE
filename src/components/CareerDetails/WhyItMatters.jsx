import React from 'react';
import avoidIcon from '../../assets/Why1.png';
import profileIcon from '../../assets/Why2.png';
import mentorIcon from '../../assets/Why3.png';

const whyItMattersData = [
  { id: 1, icon: avoidIcon, text: 'Avoids confusion and wrong career choices.' },
  { id: 2, icon: profileIcon, text: 'Builds strong, well-rounded profiles for top universities.' },
  { id: 3, icon: mentorIcon, text: 'Provides mentorship beyond traditional career counseling.' },
];

const WhyItMatters = () => (
  <section className="py-20 px-4 md:px-0 bg-[#EAF5FF]">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-[26px] md:text-[38px] font-baskerville font-bold text-[#1D69B5] mb-2">
          Why It Matters
        </h2>
        <div className="w-24 h-[6px] md:w-32 md:h-[5px] bg-[#1D69B5] mx-auto rounded-full" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 place-items-center md:place-items-stretch">
        {whyItMattersData.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[360px] md:max-w-none bg-white rounded-[16px] shadow-[0_4px_24px_rgba(29,105,181,0.08)] flex flex-row items-center gap-4 md:gap-5 px-4 py-4 md:px-7 md:py-8"
          >
            <div className="shrink-0 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#D6E9FF] shadow-[0_2px_8px_rgba(29,105,181,0.10)]">
              <img src={item.icon} alt="" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
            </div>
            <p className="text-[#222] text-[16px] md:text-[18px] font-figtree font-semibold md:font-medium leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItMatters;