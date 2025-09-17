import React from "react";
import heroImg from "../../assets/Conferences/her-bg2.png"; // Use your exported Figma image

const Hero = () => (
  <section className="relative w-full h-[560px] md:h-[600px] flex items-center overflow-hidden">
    {/* Background Image */}
    <img
      src={heroImg}
      alt="Conference"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: 1 }}
    />

    {/* Mobile overlay (top-to-bottom) */}
    <div
      className="absolute inset-0 md:hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 42%, rgba(0,0,0,0.00) 85%)",
        zIndex: 2,
      }}
    />
    {/* Desktop/Tablet overlay (left-to-right) */}
    <div
      className="absolute inset-0 hidden md:block"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.00) 100%)",
        zIndex: 2,
      }}
    />

    {/* Desktop/Tablet content (unchanged) */}
    <div className="relative z-10 hidden md:flex flex-col items-start justify-center h-full pl-[60px] max-w-[650px]">
      <span className="inline-block px-6 py-2 rounded-full bg-[#E6F0FF] text-[#2563EB] font-semibold text-[16px] mb-8 shadow">
        NueAnchor Conferences
      </span>
      <h1
        className="font-baskerville font-bold text-white text-[48px] leading-[1.15] mb-7"
        style={{ fontWeight: 700, lineHeight: "1.15" }}
      >
        Empowering the Future of<br />
        Education Through<br />
        Curated Conferences
      </h1>
      <p className="text-white text-[18px] font-normal leading-[1.5] mb-10 max-w-[540px]">
        Join Eduset’s premier platform where thought leaders, educators, and innovators come together to explore cutting-edge ideas, share insights, and shape the future of learning.
      </p>
      <a
        href="#visit"
        className="inline-flex items-center justify-center px-8 h-14 rounded-[10px] bg-white text-[#2563EB] text-[20px] font-semibold shadow transition hover:bg-[#F3F6FA]"
      >
        Visit Site
      </a>
    </div>

    {/* Mobile content (Figma-exact) */}
    <div className="absolute inset-x-0 top-0 z-10 md:hidden px-4 pt-6">
      <div className="max-w-[340px]">
        <span className="inline-block px-3 py-1 rounded-full bg-[#E6F0FF] text-[#2563EB] font-semibold text-[12px] mb-5 shadow">
          NueAnchor Conferences
        </span>

        <h1 className="font-baskerville font-bold text-white text-[24px] leading-[1.2] mb-4">
          Empowering the Future of
          <br />
          Education Through
          <br />
          Curated Conferences
        </h1>

        <p className="text-white/90 text-[13px] leading-[1.55] mb-5">
          Join Eduset’s premier platform where thought leaders, educators, and innovators come together to explore cutting-edge ideas, share insights, and shape the future of learning.
        </p>

        <a
          href="#visit"
          className="inline-flex items-center justify-center h-10 px-4 rounded-[10px] bg-white text-[#2563EB] text-[14px] font-semibold shadow-sm"
        >
          Visit Site
        </a>
      </div>
    </div>
  </section>
);

export default Hero;