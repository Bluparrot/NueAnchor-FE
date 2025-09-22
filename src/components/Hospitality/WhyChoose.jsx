import React from "react";
import heartIcon from "../../assets/Hospitality/heart.png";
import gearIcon from "../../assets/Hospitality/gear.png";
import starIcon from "../../assets/Hospitality/star.png";
import leafIcon from "../../assets/Hospitality/leaf.png";

const features = [
  {
    icon: heartIcon,
    label: "Curated Products for Health-Conscious Lifestyles",
  },
  {
    icon: gearIcon,
    label: "Customizable Catering Services for Every Event",
  },
  {
    icon: starIcon,
    label: "Trusted by Hundreds of Happy Clients",
  },
  {
    icon: leafIcon,
    label: "Passion for Sustainability & Quality",
  },
];

// Duplicate features for infinite scroll illusion
const scrollingFeatures = [...features, ...features];

const WhyChoose = () => (
  <section className="w-full bg-white py-8 px-4 md:py-30 md:px-30">
    <h2 className="text-center font-baskerville font-bold text-[#FFD600] text-[28px] mb-12">
      Why Choose NeuAnchor Hospitality?
    </h2>
    {/* Infinite horizontal scroll */}
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-[80px] animate-scroll-x"
        style={{
          minWidth: "100%",
          width: "max-content",
        }}
      >
        {scrollingFeatures.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center w-[220px]">
            <span className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#FFF6D1] transition-transform duration-500 ease-in-out hover:scale-110 active:scale-95 overflow-visible p-3">
              <img
                src={f.icon}
                alt=""
                className="w-8 h-8 transition-transform duration-500 ease-in-out hover:scale-125 active:scale-95"
                style={{ marginTop: "3px" }}
              />
            </span>
            <div className="text-center text-[16px] font-semibold text-[#222] mt-5">
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
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 18s linear infinite;
        }
      `}
    </style>
  </section>
);

export default WhyChoose;