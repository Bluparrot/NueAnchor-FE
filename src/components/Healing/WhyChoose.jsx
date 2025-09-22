import React from "react";
import careImg from "../../assets/Healing/Care.png";
import rootImg from "../../assets/Healing/root.png";
import preventiveImg from "../../assets/Healing/preventive.png";
import integrativeImg from "../../assets/Healing/integrative.png";
import wellnessImg from "../../assets/Healing/wellness.png";

const features = [
  {
    icon: careImg,
    label: "Personalized Care",
  },
  {
    icon: rootImg,
    label: "Root Cause Analysis",
  },
  {
    icon: preventiveImg,
    label: "Preventive Focus",
  },
  {
    icon: integrativeImg,
    label: "Integrative Approach",
  },
  {
    icon: wellnessImg,
    label: "Long-term Wellness",
  },
];

// Duplicate features for infinite scroll illusion
const scrollingFeatures = [
  ...features,
  ...features,
  ...features, // Add more if you want a longer scroll
];

const WhyChoose = () => (
  <section className="bg-white py-12">
    <h2 className="text-center text-[28px] md:text-[32px] font-baskerville font-bold text-[#189C3E] mb-10">
      Why Choose Functional Medicine?
    </h2>
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-12 animate-scroll-x"
        style={{
          minWidth: "100%",
          width: "max-content",
        }}
      >
        {scrollingFeatures.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center w-[120px]">
            <span className="bg-[#189C3E] rounded-full flex items-center justify-center w-[64px] h-[64px] mb-3 transition-transform duration-500 ease-in-out hover:scale-110 active:scale-95 overflow-visible">
              <img
                src={f.icon}
                alt={f.label}
                className="w-8 h-8 transition-transform duration-500 ease-in-out hover:scale-125 active:scale-95"
              />
            </span>
            <div className="text-center text-[15px] font-medium text-gray-900 leading-tight">
              {f.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>
      {`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-x {
          animation: scroll-x 18s linear infinite;
        }
      `}
    </style>
  </section>
);

export default WhyChoose;