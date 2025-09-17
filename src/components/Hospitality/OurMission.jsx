import React from "react";
import missionImg from "../../assets/Hospitality/mission-img.png"; // Use your exported Figma image

const OurMission = () => (
  <section className="w-full bg-[#FCF8ED] py-8 px-4 md:py-30 md:px-24">
    {/* Mobile layout */}
    <div className="block md:hidden">
      <div className="max-w-[360px] mx-auto">
        <h2 className="font-baskerville font-bold text-[#FFD600] text-[28px] mb-4 text-left">
          Our mission
        </h2>
        <p className="text-[#444] text-[14px] leading-[1.6] font-medium mb-3">
          To make healthy, sustainable, and delicious food accessible and effortless
          for every occasion, from intimate gatherings to large-scale corporate
          events.
        </p>
        <p className="text-[#444] text-[14px] leading-[1.6] font-medium mb-4">
          Whether you’re planning a wedding, a corporate lunch, or a special dietary
          event, our expert team crafts every menu with precision and care, ensuring
          you get not only exceptional flavors but also peace of mind.
        </p>
        <div className="w-full rounded-[16px] overflow-hidden">
          <img
            src={missionImg}
            alt="Hospitality Mission"
            className="w-full h-[180px] object-cover"
          />
        </div>
      </div>
    </div>
    {/* Desktop/Tablet layout (unchanged) */}
    <div className="hidden md:block">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left text */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{
            minWidth: "340px",
          }}
        >
          <h2 className="font-baskerville font-bold text-[#FFD600] text-[32px] mb-4">
            Our mission
          </h2>
          <p className="text-[#444] text-[15px] lg:text-[17px] leading-relaxed font-medium mb-3">
            To make healthy, sustainable, and delicious food accessible and effortless
            for every occasion, from intimate gatherings to large-scale corporate
            events.
          </p>
          <p className="text-[#444] text-[15px] lg:text-[17px] leading-relaxed font-medium">
            Whether you’re planning a wedding, a corporate lunch, or a special dietary
            event, our expert team crafts every menu with precision and care, ensuring
            you get not only exceptional flavors but also peace of mind.
          </p>
        </div>
        {/* Right image */}
        <div
          className="w-full lg:w-[540px] h-[320px] rounded-[32px] overflow-hidden flex-shrink-0"
          style={{
            width: "540px",
            height: "320px",
            borderRadius: "32px",
            opacity: 1,
          }}
        >
          <img
            src={missionImg}
            alt="Hospitality Mission"
            className="w-full h-full object-cover"
            style={{
              borderRadius: "32px",
              width: "540px",
              height: "320px",
              transform: "rotate(0deg)",
              opacity: 1,
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurMission;