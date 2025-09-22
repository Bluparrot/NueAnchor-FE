import React, { useState } from "react";
import whyChooseImg from "../../assets/Conferences/whychoose-img.png";

const features = [
  { text: "Certified & globally benchmarked content." },
  { text: "Flexible self-learning, accessible anytime, anywhere." },
  { text: "Designed for both individual growth and organizational upskilling." },
  { text: "Backed by 20+ years of expertise in education innovation." },
];

const WhyChoose = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="w-full bg-white py-[70px] px-4">
      {/* Mobile */}
      <div className="md:hidden mx-auto w-full max-w-[360px]">
        <h2 className="font-baskerville font-bold text-[#222] text-[22px] leading-[1.2] text-center mb-2">
          Why Choose Us
        </h2>
        <div className="w-[64px] h-[4px] bg-[#2563EB] rounded mx-auto mb-5" />

        <div className="w-full h-[190px] rounded-[16px] overflow-hidden mb-4">
          <img
            src={whyChooseImg}
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
        </div>

        <ul className="flex flex-col gap-5">
          {features.map((f, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left rounded-[10px] px-4 py-3 transition
                  ${activeIdx === idx
                    ? "bg-[#EAF2FF] border-l-[4px] border-[#2563EB] shadow-[0_1px_6px_rgba(37,99,235,0.18)] font-semibold text-[#1F2937]"
                    : "bg-transparent border-l-[4px] border-transparent text-[#1F2937]"
                  }`}
                style={{ fontSize: 15, lineHeight: 1.55 }}
              >
                {f.text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop/Tablet */}
      <div className="hidden md:flex mx-auto w-full max-w-[1120px] items-start justify-center gap-[56px]">
        <div className="w-full max-w-[460px]">
          <h2 className="font-baskerville font-bold text-[#222] text-[28px] leading-[1.2] mb-2">
            Why Choose Us
          </h2>
          <div className="w-[82px] h-[4px] bg-[#2563EB] rounded mb-6" />
          <ul className="flex flex-col space-y-[34px]">
            {features.map((f, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left rounded-[10px] px-4 py-3 transition
                    ${activeIdx === idx
                      ? "bg-[#EAF2FF] border-l-[4px] border-[#2563EB] shadow-[0_1px_6px_rgba(37,99,235,0.18)] font-semibold text-[#1F2937]"
                      : "bg-transparent border-l-[4px] border-transparent text-[#1F2937]"
                    }`}
                  style={{ fontSize: 16, lineHeight: 1.55 }}
                >
                  {f.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
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
};

export default WhyChoose;