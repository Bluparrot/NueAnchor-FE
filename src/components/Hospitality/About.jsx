import React from "react";
import aboutImg from "../../assets/Hospitality/about-img.png"; // Use your exported Figma image

const About = () => (
  <section className="w-full bg-white py-18 px-10">
    {/* Mobile layout (Figma) */}
    <div className="block md:hidden">
      <div className="max-w-[360px] mx-auto">
        <h2 className="font-baskerville font-bold text-[21px] text-[#FFD600] text-center mb-4">
          About NeuAnchor Hospitality
        </h2>

        <div className="w-full rounded-[16px] overflow-hidden mb-4">
          <img
            src={aboutImg}
            alt="NeuAnchor Hospitality"
            className="w-full h-[220px] object-cover"
          />
        </div>

        <p className="text-[#444] text-[13px] leading-[1.6] font-medium">
          NeuAnchor Hospitality we believe that great food is not just nourishment
          — it’s an experience. Founded with a passion for high-quality, niche
          catering solutions, we specialize in offering thoughtfully curated
          dehydrated fruits, vegetables, canned products, and customized diet
          plans that cater to every taste and dietary need.
        </p>
      </div>
    </div>

    {/* Tablet/Desktop layout (unchanged) */}
    <div className="hidden md:block">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left image */}
        <div
          className="w-full lg:w-[592px] h-[388px] rounded-[32px] overflow-hidden flex-shrink-0"
          style={{
            width: "592px",
            height: "388px",
            borderRadius: "32px",
            opacity: 1,
          }}
        >
          <img
            src={aboutImg}
            alt="NeuAnchor Hospitality"
            className="w-full h-full object-cover"
            style={{
              borderRadius: "32px",
              width: "592px",
              height: "388px",
              transform: "rotate(0deg)",
              opacity: 1,
            }}
          />
        </div>
        {/* Right text */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{
            width: "549px",
            height: "207px",
            opacity: 1,
            borderRadius: "0px",
            transform: "rotate(0deg)",
          }}
        >
          <h2 className="font-baskerville font-bold text-[21px] lg:text-[28px] text-[#FFD600] mb-4">
            About NeuAnchor Hospitality
          </h2>
          <p className="text-[#444] text-[15px] lg:text-[17px] leading-relaxed font-medium">
            NeuAnchor Hospitality we believe that great food is not just nourishment
            — it’s an experience. Founded with a passion for high-quality, niche
            catering solutions, we specialize in offering thoughtfully curated
            dehydrated fruits, vegetables, canned products, and customized diet
            plans that cater to every taste and dietary need.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;