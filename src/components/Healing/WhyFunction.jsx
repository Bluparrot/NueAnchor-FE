import React from "react";
import functionImg from "../../assets/Healing/integrative1.png";

const points = [
  "Comprehensive Assessment",
  "Personalized Protocols",
  "Lifestyle Integration",
  "Ongoing Support",
  "Evidence-Based Solutions",
];

const WhyFunction = () => (
  <section className="bg-white py-12 lg:py-16">
    <div
      className="
        mx-auto
        flex flex-col lg:flex-row items-stretch
        px-4 lg:px-0
        lg:gap-[33px]
        lg:w-[1044px] lg:h-[356px]
      "
    >
      {/* Left green card */}
      <div className="bg-[#189C3E] text-white rounded-[16px] lg:w-[356px] h-full px-6 lg:px-8 py-8 lg:py-10 flex flex-col justify-center">
        <h2 className="font-baskerville font-bold text-[24px] leading-snug mb-3">
          Why Functional Medicine Matters
        </h2>
        <h3 className="font-semibold text-[15px] mb-2">
          The Healthcare Revolution India Needs
        </h3>
        <p className="text-[14px] leading-relaxed">
          In a world where chronic diseases are on the rise and traditional treatments often fall short, functional medicine offers hope. By focusing on prevention and root-cause analysis, we’re not just treating illness — we’re creating wellness.
        </p>
      </div>

      {/* Center points */}
      <div className="flex-1 h-full flex flex-col justify-center gap-5 lg:gap-6">
        {points.map((pt, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="w-[44px] h-[44px] rounded-full bg-[#E6F4EA] flex items-center justify-center font-bold text-[#189C3E] text-[20px]">
              {idx + 1}
            </span>
            <span className="text-[#111827] text-[16px] font-medium">
              {pt}
            </span>
          </div>
        ))}
      </div>

      {/* Right image (desktop) */}
      <div className="hidden lg:block rounded-[16px] overflow-hidden lg:w-[356px] lg:h-[356px]">
        <img
          src={functionImg}
          alt="Functional medicine"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image below content (mobile only) */}
      <div className="lg:hidden mt-6 rounded-[16px] overflow-hidden w-full" style={{ aspectRatio: "328 / 280" }}>
        <img
          src={functionImg}
          alt="Functional medicine"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default WhyFunction;