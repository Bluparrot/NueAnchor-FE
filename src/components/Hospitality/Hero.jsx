import React from "react";
import heroImg from "../../assets/Hospitality/hero-bg2.png"; // Use your exported Figma image

const HospitalityHero = () => (
  <section className="relative w-full h-[590px] md:h-[520px] lg:h-[520px] flex items-start md:items-center overflow-hidden">
    {/* Background Image */}
    <img
      src={heroImg}
      alt="Curated Catering"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: 1 }}
    />

    {/* Mobile vertical gradient (Figma) */}
    <div
      className="absolute inset-0 md:hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,221,102,0.88) 0%, rgba(255,221,102,0.64) 42%, rgba(255,221,102,0.00) 100%)",
        zIndex: 2,
      }}
    />
    {/* Desktop/Tablet gradient (unchanged) */}
    <div
      className="absolute inset-0 hidden md:block"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,221,102,0.85) 0%, rgba(255,221,102,0.60) 40%, rgba(255,221,102,0.00) 70%)",
        zIndex: 2,
      }}
    />

    {/* Content */}
    <div className="relative z-10 w-full px-4 pt-4 pb-0 md:px-12 md:py-12 flex flex-col items-start">
      <div className="w-full max-w-[360px] md:max-w-2xl">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#BFAA2C] font-semibold text-[14px] md:text-sm mb-2 shadow">
          NeuAnchor Hospitality
        </div>

        <h1 className="font-baskerville font-bold text-[#222] text-[24px] leading-[1.2] mb-1 md:text-[40px] lg:text-[44px] md:leading-tight">
          Delight in Every Bite,<br />
          Curated Catering for<br />
          Every Occasion
        </h1>

        <p className="text-[#222] text-[14px] leading-[1.45] font-medium mb-3 md:text-lg md:leading-relaxed md:mb-7 max-w-[360px] md:max-w-lg">
          Healthy, delicious, and customized catering solutions made effortless. Perfect for events, special diets, and every craving in between.
        </p>

        <a
          href="#visit"
          className="inline-flex items-center justify-center px-5 h-11 rounded-md bg-[#189C3E] text-white text-[16px] font-semibold shadow-sm hover:bg-[#157a2c] transition md:px-6 md:h-auto md:py-2 md:text-base"
        >
          Visit Site
        </a>
      </div>
    </div>
  </section>
);

export default HospitalityHero;