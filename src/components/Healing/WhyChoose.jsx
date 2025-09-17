import React from "react";
import careImg from "../../assets/Healing/Care.png";
import rootImg from "../../assets/Healing/root.png";
import preventiveImg from "../../assets/Healing/preventive.png";
import integrativeImg from "../../assets/Healing/integrative.png";
import wellnessImg from "../../assets/Healing/wellness.png";

const features = [
  {
    icon: <img src={careImg} alt="Personalized Care" className="w-8 h-8" />,
    label: "Personalized Care",
  },
  {
    icon: <img src={rootImg} alt="Root Cause Analysis" className="w-8 h-8" />,
    label: "Root Cause Analysis",
  },
  {
    icon: <img src={preventiveImg} alt="Preventive Focus" className="w-8 h-8" />,
    label: "Preventive Focus",
  },
  {
    icon: <img src={integrativeImg} alt="Integrative Approach" className="w-8 h-8" />,
    label: "Integrative Approach",
  },
  {
    icon: <img src={wellnessImg} alt="Long-term Wellness" className="w-8 h-8" />,
    label: "Long-term Wellness",
  },
];

const WhyChoose = () => (
  <section className="bg-white py-12">
    <h2 className="text-center text-[28px] md:text-[32px] font-baskerville font-bold text-[#189C3E] mb-10">
      Why Choose Functional Medicine?
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {features.map((f, idx) => (
        <div key={idx} className="flex flex-col items-center w-[120px]">
          <div className="bg-[#189C3E] rounded-full flex items-center justify-center w-[64px] h-[64px] mb-3">
            {f.icon}
          </div>
          <div className="text-center text-[15px] font-medium text-gray-900 leading-tight">
            {f.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChoose;