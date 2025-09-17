import React from "react";
import bg from "../../assets/Healing/optimal-hero.png"; // replace with exported Figma image

const Optimal = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src={bg}
        alt="Functional medicine tools"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay (Figma look) */}
      <div className="absolute inset-0 bg-[#0D1B1E]/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 md:py-20 lg:py-24 min-h-[340px] md:min-h-[380px] flex flex-col items-center justify-center text-center">
        <h2
          className="text-white font-baskerville font-bold leading-tight mb-4 md:mb-5"
          style={{ fontSize: "36px" }}
        >
          Take the First Step Toward
          <br />
          Optimal Health
        </h2>

        <p className="text-white/85 text-sm md:text-base max-w-2xl mb-8">
          Join thousands of patients and practitioners who have discovered the power of functional
          medicine. Your journey to wellness starts here.
        </p>

        <a
          href="#visit"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#189C3E] font-semibold shadow-sm hover:bg-gray-100 transition"
        >
          Visit Site Now
        </a>
      </div>

      {/* Fixed height on large screens to match Figma proportions */}
      <div className="hidden lg:block" style={{ height: 0, paddingBottom: 0 }} />
    </section>
  );
};

export default Optimal;