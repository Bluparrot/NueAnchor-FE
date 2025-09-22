import React from "react";
import centerImg from "../../assets/Healing/approach-center.png"; // replace with your exported Figma image

const Card = ({ icon, title, desc }) => (
  <div className="rounded-[14px] bg-[#F2F7F0] p-5 md:p-6 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(24,156,62,0.15)] active:scale-95">
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#189C3E] mb-3 transition-transform duration-300 ease-in-out hover:scale-110">
      {icon}
    </div>
    <h3 className="text-[16px] md:text-[18px] font-semibold text-[#0F172A] mb-2 transition-transform duration-300 ease-in-out hover:scale-105">
      {title}
    </h3>
    <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#4B5563] transition-transform duration-300 ease-in-out hover:scale-105">
      {desc}
    </p>
  </div>
);

const OurApproach = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <h2 className="text-center font-baskerville font-bold text-[#189C3E] text-[26px] md:text-[32px] mb-6 md:mb-10">
        Our Approach
      </h2>

      <div className="mx-auto w-full max-w-[1120px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 md:gap-7 items-start">
          {/* Left column (two stacked cards) */}
          <div className="grid gap-5 md:gap-6">
            <Card
              title="Comprehensive Assessment"
              desc="Detailed analysis of genetic, environmental, and lifestyle factors. Empowering you with deep insights to make informed choices for lasting health and well‑being."
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l8 4v6c0 5-4 8-8 8s-8-3-8-8V7l8-4z" stroke="#fff" strokeWidth="2" />
                  <circle cx="12" cy="13" r="3" fill="#fff" />
                </svg>
              }
            />
            <Card
              title="Lifestyle Integration"
              desc="Sustainable changes that fit your life. Practical, long‑term solutions designed to seamlessly integrate into your daily routine without overwhelm."
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h16M12 4v16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
          </div>

          {/* Center image */}
          <div className="order-first lg:order-none">
            <div
              className="
                w-full
                rounded-[16px]
                overflow-hidden
                aspect-[384/477]
                lg:aspect-auto
                lg:w-[384px]
                lg:h-[477px]
                transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(24,156,62,0.18)] active:scale-95
              "
              style={{ opacity: 1 }}
            >
              <img
                src={centerImg}
                alt="Healthy lifestyle ingredients"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ transform: "rotate(0deg)" }}
              />
            </div>
          </div>

          {/* Right column (two stacked cards) */}
          <div className="grid gap-5 md:gap-6">
            <Card
              title="Personalized Protocols"
              desc="Continuous monitoring and adaptive care paths. Stay on track with real‑time insights and recommendations that grow with your progress."
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="6" width="16" height="12" rx="2" stroke="#fff" strokeWidth="2" />
                  <path d="M8 10h8M8 14h5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
            <Card
              title="Evidence‑Based Solutions"
              desc="Backed by the latest research in functional medicine. Combining cutting‑edge science with personalized care to unlock your body’s full potential."
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 20V7l5-3 5 3v13" stroke="#fff" strokeWidth="2" />
                  <circle cx="12" cy="13" r="2.5" fill="#fff" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;