import React from "react";
import whyChooseImg from "../../assets/Conferences/whychoose-img.png";

const features = [
  { text: "Certified & globally benchmarked content.", highlight: true },
  { text: "Flexible self-learning, accessible anytime, anywhere.", highlight: false },
  { text: "Designed for both individual growth and organizational upskilling.", highlight: false },
  { text: "Backed by 20+ years of expertise in education innovation.", highlight: false },
];

const WhyChoose = () => (
  <section className="w-full bg-white py-[70px] px-4">
    {/* Mobile (Figma exact) */}
    <div className="md:hidden mx-auto w-full max-w-[360px]">
      <h2 className="font-baskerville font-bold text-[#222] text-[22px] leading-[1.2] text-center mb-2">
        Why Choose Us
      </h2>
      <div className="w-[64px] h-[4px] bg-[#2563EB] rounded mx-auto mb-5" />

      {/* Image on top */}
      <div className="w-full h-[190px] rounded-[16px] overflow-hidden mb-4">
        <img
          src={whyChooseImg}
          alt="Why Choose Us"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Features list */}
      <ul className="flex flex-col gap-5">
        {features.map((f, idx) => (
          <li key={idx}>
            {f.highlight ? (
              <div className="flex items-start rounded-[10px] bg-[#EAF2FF] border-l-[4px] border-[#2563EB] px-4 py-3 shadow-[0_1px_2px_rgba(16,24,40,0.06)]">
                <p className="text-[#1F2937] text-[15px] leading-[1.55] font-semibold">
                  {f.text}
                </p>
              </div>
            ) : (
              <p className="text-[#1F2937] text-[15px] leading-[1.55]">
                {f.text}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* Desktop/Tablet (unchanged) */}
    <div className="hidden md:flex mx-auto w-full max-w-[1120px] items-start justify-center gap-[56px]">
      {/* Left: Text */}
      <div className="w-full max-w-[460px]">
        <h2 className="font-baskerville font-bold text-[#222] text-[28px] leading-[1.2] mb-2">
          Why Choose Us
        </h2>
        <div className="w-[82px] h-[4px] bg-[#2563EB] rounded mb-6" />
        <ul className="flex flex-col space-y-[34px]">
          {features.map((f, idx) => (
            <li key={idx}>
              {f.highlight ? (
                <div className="flex items-start rounded-[10px] bg-[#EAF2FF] border-l-[4px] border-[#2563EB] px-4 py-3 shadow-[0_1px_2px_rgba(16,24,40,0.06)]">
                  <p className="text-[#1F2937] text-[16px] leading-[1.55] font-semibold">
                    {f.text}
                  </p>
                </div>
              ) : (
                <p className="text-[#1F2937] text-[16px] leading-[1.55]">
                  {f.text}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Image */}
      <div className="flex-shrink-0 w-[460px] h-[360px] rounded-[18px] overflow-hidden">
        <img
          src={whyChooseImg}
          alt="Why Choose Us"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default WhyChoose;