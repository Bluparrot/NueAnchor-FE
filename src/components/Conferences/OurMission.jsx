import React from "react";
import missionImg from "../../assets/Conferences/mission-img1.png";

const OurMission = () => (
  <section className="w-full bg-[#FCF8ED] px-4 py-[70px]">
    {/* Mobile (Figma exact) */}
    <div className="md:hidden max-w-[360px] mx-auto animate-fade-in">
      <div className="transition-transform duration-300 ease-in-out hover:scale-105">
        <h2 className="font-baskerville font-bold text-[#222] text-[24px] leading-[1.25] mb-3 transition-transform duration-300 ease-in-out hover:scale-105">
          Our mission
        </h2>
        <p className="text-[#444] text-[14px] leading-[1.6] mb-3 transition-transform duration-300 ease-in-out hover:scale-105">
          To make healthy, sustainable, and delicious food accessible and effortless
          for every occasion, from intimate gatherings to large-scale corporate events.
        </p>
        <p className="text-[#444] text-[14px] leading-[1.6] mb-4 transition-transform duration-300 ease-in-out hover:scale-105">
          Whether you’re planning a wedding, a corporate lunch, or a special dietary
          event, our expert team crafts every menu with precision and care, ensuring
          you get not only exceptional flavors but also peace of mind.
        </p>
      </div>
      <div className="w-full rounded-[16px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          src={missionImg}
          alt="Conference Mission"
          className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>

    {/* Desktop/Tablet (unchanged layout) */}
    <div className="hidden md:flex justify-center items-center animate-fade-in">
      <div className="flex flex-row items-center justify-center max-w-[1100px] w-full gap-[56px] mx-auto">
        {/* Image */}
        <div className="flex-shrink-0 w-[400px] h-[230px] rounded-[32px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <img
            src={missionImg}
            alt="Conference Mission"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col justify-center max-w-[520px] transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="font-baskerville font-bold text-[#222] text-[28px] mb-5 transition-transform duration-300 ease-in-out hover:scale-105">
            Our mission
          </h2>
          <p className="text-[#444] text-[15px] leading-[1.7] mb-3 transition-transform duration-300 ease-in-out hover:scale-105">
            To make healthy, sustainable, and delicious food accessible and effortless
            for every occasion, from intimate gatherings to large-scale corporate
            events.
          </p>
          <p className="text-[#444] text-[15px] leading-[1.7] transition-transform duration-300 ease-in-out hover:scale-105">
            Whether you’re planning a wedding, a corporate lunch, or a special dietary
            event, our expert team crafts every menu with precision and care, ensuring
            you get not only exceptional flavors but also peace of mind.
          </p>
        </div>
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

export default OurMission;