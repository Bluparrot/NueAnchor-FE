// src/components/EducationDetailspage/HeroSection.jsx
import React from "react";
import HeroimgDesktop from "../../assets/EducationDetailspage/EducationHero.jpg";
import HeroimgMobile from "../../assets/EducationDetailspage/EducationHeroMobile.png";

/**
 * Education Hero
 * - MOBILE: exact Figma layout (content block + new mobile image below)
 * - DESKTOP: unchanged
 * Adjust MOBILE_IMAGE_HEIGHT / MOBILE_CROP_WIDTH / MOBILE_SHIFT_X to fine‑tune.
 */

const MOBILE_IMAGE_HEIGHT = 363;    // updated per Figma (height 363px)
const MOBILE_CROP_WIDTH   = 375;    // exact width 375px (no horizontal overflow)
const MOBILE_SHIFT_X      = 0;
const MOBILE_OBJECT_POS   = "center top"; // or "center 20px"

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white">
      {/* MOBILE (<= md) */}
      <div className="block md:hidden w-full">
        {/* Content block */}
        <div
          style={{
            maxWidth: 375,
            margin: "0 auto",
            background: "#F6F7F9",
            padding: "32px 20px",
          }}
        >
          <div style={{ maxWidth: 335 }}>
            <span
              className="inline-block bg-[#FFE7B2] text-[#1D69B5] font-semibold text-[13px]"
              style={{
                borderRadius: 100,
                border: "1px solid #F5D9A6",
                padding: "6px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              NeuAnchor Education
            </span>

            <h1 className="text-[20px] leading-[28px] font-bold text-black font-baskerville mt-4 mb-2">
              20+ Years of Experience in Building
            </h1>
            <h2 className="text-[18px] leading-[24px] font-bold text-[#3A7F4B] font-baskerville mb-4">
              Future-Ready Schools
            </h2>

            <p className="text-[14px] text-[#334155] font-medium mb-6">
              NeuAnchor Education supports schools, trusts, and institutions in
              building, scaling, and reimagining education for the future.
            </p>

            <a
              href="#"
              className="inline-block bg-[#3A7F4B] text-white font-semibold rounded px-6 py-3 text-[15px] shadow hover:bg-[#2e633a] transition"
              aria-label="Visit NeuAnchor Education site"
            >
              Visit Site
            </a>
          </div>
        </div>

        {/* New mobile image block (exact crop) */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: MOBILE_IMAGE_HEIGHT,
            maxWidth: 375,
            margin: "0 auto",
          }}
        >
          <img
            src={HeroimgMobile || HeroimgDesktop}
            alt="Student in front of school building"
            className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
            style={{
              width: MOBILE_CROP_WIDTH,
              height: "100%",
              maxWidth: "100%",
              objectPosition: MOBILE_OBJECT_POS,
              transform: "none",
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* DESKTOP (unchanged) */}
      <div className="hidden md:flex relative min-h-[620px] items-center bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroimgDesktop})` }}
          aria-hidden
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.7) 65%, #EAE7DE 100%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-6 lg:px-24 py-12 w-full max-w-[600px]">
          <span
            className="inline-block bg-[#FFE7B2] text-[#1D69B5] font-semibold text-xs shadow-sm"
            style={{
              width: 200,
              height: 30,
              borderRadius: 100,
              border: "1px solid #F5D9A6",
              padding: "10px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            NeuAnchor Education
          </span>

            <h1 className="text-3xl lg:text-4xl font-bold text-black mb-2 leading-tight font-baskerville">
              20+ Years of Experience in Building
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#3A7F4B] mb-4 font-baskerville">
              Future-Ready Schools
            </h2>
            <p className="text-base lg:text-lg text-black mb-6 leading-relaxed">
              NeuAnchor Education supports schools, trusts, and institutions in
              building, scaling, and reimagining education for the future.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-[#3A7F4B] text-white font-semibold rounded px-6 py-2 text-base shadow hover:bg-[#2e633a] transition"
              >
                Visit Site
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
