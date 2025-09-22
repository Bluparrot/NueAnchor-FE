import React from "react";

const Growth = () => (
  <section className="w-full bg-[#FAFAF7] py-8 md:py-[70px] px-4 flex justify-center">
    {/* Mobile (Figma exact) */}
    <div className="block md:hidden w-full">
      <div className="max-w-[360px] mx-auto bg-white rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.06)] px-5 py-6 transition-transform duration-300 ease-in-out hover:scale-105 animate-fade-in">
        <h2 className="font-baskerville font-bold text-[#222] text-[24px] leading-[1.25] text-center mb-3">
          A Legacy of Growth
        </h2>
        <p className="text-[#444] text-[13px] leading-[1.65] text-center">
          NeuAnchor Hospitality we believe that great food is not just nourishment — it’s an experience.
          Founded with a passion for high-quality, niche catering solutions, we specialize in offering
          thoughtfully curated dehydrated fruits, vegetables, canned products, and customized diet plans
          that cater to every taste and dietary need.
        </p>
      </div>
    </div>

    {/* Desktop/Tablet (unchanged layout) */}
    <div className="hidden md:flex w-full justify-center">
      <div className="max-w-[950px] text-center bg-white rounded-[16px] shadow-[0_2px_8px_rgba(16,24,40,0.08)] px-8 py-10 transition-transform duration-300 ease-in-out hover:scale-105 animate-fade-in">
        <h2 className="font-baskerville font-bold text-[#222] text-[36px] leading-[1.2] mb-6">
          A Legacy of Growth
        </h2>
        <p className="text-[#444] text-[18px] leading-[1.7]">
          At NeuAnchor Academies, we believe learning goes beyond textbooks. Our journey began with a
          simple vision: to bridge the gap between traditional etiquette and modern professional skills.
          For over 35 years, we’ve been helping students, young professionals, and organizations gain the
          knowledge, confidence, and certification they need to thrive in today’s competitive world. Our
          academies are more than just online classrooms—they are growth hubs where learners upgrade
          themselves, unlock opportunities, and gain global recognition.
        </p>
      </div>
    </div>
    <style>
      {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}
    </style>
  </section>
);

export default Growth;