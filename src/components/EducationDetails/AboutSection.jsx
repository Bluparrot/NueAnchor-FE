import React from "react";
import AboutImg from "../../assets/EducationDetailspage/AboutNeuAnchor.png";

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-24 py-16 bg-white">
      <style>
        {`
          .about-img-frame {
            transition: box-shadow 0.3s cubic-bezier(.4,0,.2,1);
          }
          .about-img-frame:hover .about-img {
            transform: scale(1.06);
            box-shadow: 0 8px 32px rgba(37,99,235,0.12);
          }
          .about-img {
            transition: transform 0.35s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1);
            will-change: transform;
          }
          .about-text-block {
            transition: color 0.3s cubic-bezier(.4,0,.2,1), text-shadow 0.3s cubic-bezier(.4,0,.2,1);
          }
          .about-text-block:hover h2,
          .about-text-block:hover p {
            color: #25643b;
            text-shadow: 0 2px 12px rgba(37,99,235,0.10);
          }
        `}
      </style>
      {/* Mobile heading above image */}
      <h2 className="block lg:hidden text-[26px] leading-[34px] font-bold text-[#3A7F4B] mb-4 font-baskerville text-center">
        About NeuAnchor Education
      </h2>

      {/* Image (with zoom effect) */}
      <div
        className="about-img-frame relative block w-full max-w-[592px] overflow-hidden rounded-[20px] lg:rounded-[32px] shadow-sm"
        style={{ aspectRatio: "592 / 388" }}
        aria-label="NeuAnchor About section image"
      >
        <img
          src={AboutImg}
          alt="NeuAnchor Education campus"
          className="about-img w-full h-full object-cover"
        />

        {/* Stat Cards: visible on desktop/tablet only */}
        <div className="hidden md:flex absolute left-3 bottom-3 md:left-6 md:bottom-6 gap-2 md:gap-4">
          <div className="bg-[#FFE7B2] rounded-[12px] md:rounded-[16px] px-3 py-2 md:px-5 md:py-3 shadow border border-[#F5D9A6]">
            <div className="font-bold text-lg md:text-xl text-[#1D69B5] leading-none">
              20+
            </div>
            <div className="text-[10px] md:text-xs text-black font-semibold mt-1 leading-snug">
              Years in Education Consulting
            </div>
          </div>
          <div className="bg-[#FFE7B2] rounded-[12px] md:rounded-[16px] px-3 py-2 md:px-5 md:py-3 shadow border border-[#F5D9A6]">
            <div className="font-bold text-lg md:text-xl text-[#1D69B5] leading-none">
              100+
            </div>
            <div className="text-[10px] md:text-xs text-black font-semibold mt-1 leading-snug">
              Teachers Trained
            </div>
          </div>
        </div>
      </div>

      {/* Text Content (with effect) */}
      <div className="about-text-block max-w-[520px] w-full">
        {/* Desktop/tablet heading (hidden on mobile) */}
        <h2 className="hidden lg:block text-[26px] leading-[34px] lg:text-3xl font-bold text-[#3A7F4B] mb-4 font-baskerville text-left">
          About NeuAnchor Education
        </h2>

        <p className="text-[14px] leading-6 lg:text-lg text-black mb-4 font-Figtree text-center lg:text-left">
          NeuAnchor Education supports schools, trusts, and institutions in building
          comprehensive educational ecosystems that prepare students for tomorrow’s
          challenges.
        </p>
        <p className="text-[14px] leading-6 lg:text-lg text-black mb-4 font-Figtree text-center lg:text-left">
          With over two decades of experience, we’ve guided countless institutions
          through transformational journeys, helping them establish robust foundations,
          scale effectively, and innovate continuously.
        </p>
        <p className="text-[14px] leading-6 lg:text-lg text-black font-Figtree text-center lg:text-left">
          Our holistic approach combines strategic consulting, operational excellence,
          and educational innovation to create lasting impact in the communities we serve.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;