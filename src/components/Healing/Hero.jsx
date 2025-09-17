import React from "react";
import heroImg from "../../assets/Healing/hero-bg1.png";

const HealingHero = () => (
  <section className="relative w-full overflow-hidden h-[560px] md:h-[520px] lg:h-[560px] flex items-stretch">
    {/* Background Image */}
    <img
      src={heroImg}
      alt="Functional Medicine"
      className="absolute inset-0 w-full h-full object-cover object-[50%_90%] md:object-center"
      style={{ zIndex: 1 }}
    />

    {/* Mobile vertical gradient (Figma) */}
    <div
      className="absolute inset-0 md:hidden"
      style={{
        zIndex: 2,
        background:
          "linear-gradient(180deg, rgba(24,156,62,0.92) 0%, rgba(24,156,62,0.88) 28%, rgba(24,156,62,0.72) 50%, rgba(24,156,62,0.42) 72%, rgba(24,156,62,0.18) 88%, rgba(24,156,62,0) 100%)",
      }}
    />
    {/* Desktop/Tablet left→right gradient (Figma) */}
    <div
      className="absolute inset-0 hidden md:block"
      style={{
        zIndex: 2,
        background:
          "linear-gradient(90deg, rgba(24,156,62,0.88) 0%, rgba(24,156,62,0.72) 35%, rgba(24,156,62,0.45) 60%, rgba(24,156,62,0.00) 100%)",
      }}
    />

    {/* Content */}
    <div className="relative z-10 w-full px-4 pt-8 pb-10 md:px-14 md:py-12 lg:pl-16 max-w-[720px]">
      {/* Pill */}
      <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#189C3E] font-semibold text-xs md:text-sm mb-5 shadow">
        NeuAnchor Healing
      </div>

      {/* Heading */}
      <h1 className="font-baskerville text-white leading-tight mb-4 text-[24px] md:text-[48px] lg:text-[56px] font-bold">
        Transform Your Health
        <br className="md:hidden" />
        Journey with Functional Medicine
      </h1>

      {/* Subcopy */}
      <p className="text-white/90 font-medium max-w-[360px] md:max-w-[560px] text-[13px] leading-6 md:text-[16px] md:leading-[1.6] mb-7">
        Discover the root causes of illness and unlock your body's natural healing
        potential through personalized, evidence‑based functional medicine approaches.
      </p>

      {/* CTA */}
      <a
        href="#visit"
        className="inline-flex items-center justify-center h-11 px-6 rounded-[10px] border border-white text-white text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-[#189C3E] transition"
      >
        Visit Site
      </a>
    </div>
  </section>
);

export default HealingHero;