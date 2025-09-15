// src/components/IndianaG/HeroSection.jsx
import React from "react";
import heroImg from "../../assets/IndianaG/indiana-hero.png";

/**
 * HeroSection (mobile-first)
 * - Badge will tightly wrap the text on mobile and grow slightly on desktop
 * - Mobile: single hero with top content overlay (342px) + visible image strip (363px) = 705px
 * - Desktop (md+): original hero (height 520px) unchanged
 */

const HeroSection = () => {
  return (
    <section
      aria-label="Indiana G hero"
      className="w-full max-w-[1440px] mx-auto"
    >
      {/* MOBILE & SMALL: unified hero */}
      <div className="block md:hidden relative w-full h-[705px] overflow-hidden">
        {/* Background image */}
        <img
          src={heroImg}
          alt="Gift being wrapped"
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Top overlay — 342px tall */}
        <div
          className="absolute left-0 top-0 w-full"
          style={{ height: "342px", backgroundColor: "rgba(17,24,39,0.92)" }}
          aria-hidden
        />

        {/* Content area within that overlay */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: 0,
            height: "342px",
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div className="max-w-[335px] mx-auto h-full flex flex-col items-start text-left">
            {/* Badge: tight on mobile, grows on desktop (md) */}
            <span className="inline-block w-auto max-w-max bg-[#FFD600] text-[#1F2937] px-2.5 py-1 rounded-full text-[12px] md:px-4 md:py-2 md:text-[13px] font-bold tracking-wide">
              Indiana G
            </span>

            {/* gap 16px */}
            <div style={{ height: "16px" }} />

            {/* Heading */}
            <h1 className="text-[22px] leading-[28px] font-bold text-white">
              Crafted with love,
              <br />
              delivered with sweetness.
            </h1>

            {/* gap 16px */}
            <div style={{ height: "16px" }} />

            {/* Paragraph */}
            <p className="text-[14px] text-white/90 font-medium max-w-[335px]">
              Personalized and thoughtful gifts designed for every occasion — blending tradition with modern elegance.
            </p>

            {/* Push CTA down */}
            <div style={{ flexGrow: 1 }} />

            <div>
              <a
                href="#"
                className="inline-block bg-[#AE1A1E] hover:bg-[#8C1518] text-white px-6 py-3 rounded-[8px] shadow font-bold text-[16px]"
                aria-label="Visit Site"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>

        {/* Lower visible image strip (363px) */}
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{ height: "363px", pointerEvents: "none" }}
          aria-hidden
        />
      </div>

      {/* DESKTOP: original hero unchanged */}
      <div className="hidden md:block relative w-full h-[520px] overflow-hidden">
        <img
          src={heroImg}
          alt="Gift wrapping hero"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[#1F2937] opacity-[0.28]" />

        <div className="absolute inset-0 flex items-center px-[68px]">
          <div className="max-w-[600px] text-white">
            {/* Desktop badge (bigger padding) */}
            <span className="inline-block bg-[#FFD600] text-[#1F2937] px-4 py-2 rounded-full text-[13px] font-bold mb-6 tracking-wide">
              Indiana G
            </span>

            <h1 className="mt-2 text-[48px] leading-[56px] font-bold text-white">
              Crafted with love,
              <br />
              delivered with sweetness.
            </h1>

            <p className="mt-6 text-[18px] text-white/90 max-w-[480px] font-medium">
              Personalized and thoughtful gifts designed for every occasion — blending tradition with modern elegance.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="inline-block bg-[#AE1A1E] hover:bg-[#8C1518] text-white px-7 py-3 rounded-[8px] shadow font-bold text-[16px]"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
