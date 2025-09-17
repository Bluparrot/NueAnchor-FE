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

const WhyChoose = () => (
  <section className="w-full bg-white py-8 px-4 md:py-30 md:px-30">
    {/* Mobile layout */}
    <div className="block md:hidden">
      <div className="max-w-[340px] mx-auto flex flex-col items-center">
        <h2 className="font-Poppins font-bold text-[#FFD600] text-[22px] text-center mb-8 leading-[1.2]">
          Why Choose
          <br />
          NeuAnchor
          <br />
          Hospitality?
        </h2>
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center mb-8 last:mb-0">
            <span className="inline-flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#FFF6D1] mb-4">
              <img src={f.icon} alt="" className="w-8 h-8" />
            </span>
            <div className="text-center text-[15px] font-semibold text-[#222] leading-[1.3] break-words max-w-[260px]">
              {f.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Desktop/Tablet layout (unchanged) */}
    <div className="hidden md:block">
      <h2 className="text-center font-baskerville font-bold text-[#FFD600] text-[28px] mb-12">
        Why Choose NeuAnchor Hospitality?
      </h2>
      <div className="flex flex-row justify-center items-start gap-[80px]">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center w-[220px]">
            <span className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#FFF6D1]">
              <img src={f.icon} alt="" className="w-8 h-8" />
            </span>
            <div className="text-center text-[16px] font-semibold text-[#222] mt-5">
              {f.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;