// src/components/StarDetails/Hero.jsx
import React from "react";
import heroChild from "../../assets/StarsDetails/hero-child.png";

/**
 * StarDetails Hero
 * - MOBILE: Figma exact layout, image below content block, image properties: width 375, height 363, angle 0, opacity 1.
 * - DESKTOP: unchanged.
 */

const Hero = () => {
  return (
    <section aria-label="NeuAnchor Stars hero" className="w-full max-w-[1440px] mx-auto">
      {/* MOBILE & SMALL: Figma exact */}
      <div className="block md:hidden w-full bg-white">
        {/* Content block */}
        <div
          className="w-full"
          style={{
            background: "linear-gradient(180deg, #EAF6FF 0%, #FFFFFF 100%)",
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div className="max-w-[335px] mx-auto flex flex-col items-start text-left">
            <span className="inline-block bg-[#FFD600] text-[#1F2937] px-4 py-2 rounded-full text-[13px] font-bold tracking-wide mb-4">
              NeuAnchor Stars
            </span>
            <h1
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "128%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                width: "340px",
                height: "93px",
                opacity: 1,
                marginBottom: "12px",
                color: "#1F2937",
              }}
            >
              Empowering Families to
              <br />
              Navigate Autism with{" "}
              <span style={{ color: "#0b74a6" }}>Clarity & Confidence</span>
            </h1>
            <p className="text-[14px] text-[#334155] font-medium max-w-[335px] mb-6">
              Guiding families, schools, and communities with two decades of lived experience and proven solutions.
            </p>
            <a
              href="#"
              className="inline-block bg-[#0b74a6] hover:bg-[#095a85] text-white px-6 py-3 rounded-[8px] shadow font-bold text-[16px]"
              aria-label="Visit Site"
              style={{ marginBottom: "16px" }}
            >
              Visit Site
            </a>
          </div>
        </div>
        {/* Image below content block, Figma exact properties */}
        <div className="w-full flex justify-center overflow-hidden" style={{ height: "363px" }}>
          <img
            src={heroChild}
            alt="Children painting"
            className="block"
            style={{
              width: "375px",
              height: "363px",
              objectFit: "cover",
              objectPosition: "85% center",

              opacity: 1,
              transform: "rotate(0deg)",
              maxWidth: "100%",
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* DESKTOP: original hero unchanged */}
      <div className="hidden md:block relative w-full h-[590px] overflow-hidden">
        <img
          src={heroChild}
          alt="Children painting"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[#1F2937] opacity-[0.28]" />
        <div className="absolute inset-0 flex items-center px-[68px]">
          <div className="max-w-[600px] text-white">
            <span className="inline-block bg-[#FFD600] text-[#1F2937] px-4 py-2 rounded-full text-[13px] font-bold mb-6 tracking-wide">
              NeuAnchor Stars
            </span>
            <h1 className="mt-2 text-[48px] leading-[56px] font-bold font-libre text-white">
              Empowering Families to
              <br />
              Navigate Autism with <span className="text-[#0b74a6]">Clarity & Confidence</span>
            </h1>
            <p className="mt-6 text-[18px] text-white/90 max-w-[480px] font-medium">
              Guiding families, schools, and communities with two decades of lived experience and proven solutions.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="inline-block bg-[#0b74a6] hover:bg-[#095a85] text-white px-7 py-3 rounded-[8px] shadow font-bold text-[16px]"
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

export default Hero;
