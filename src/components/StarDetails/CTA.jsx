import React from "react";
import bgImage from "../../assets/StarsDetails/cat.png";
import img1 from "../../assets/StarsDetails/img1.png";
import img2 from "../../assets/StarsDetails/img2.png";
import img3 from "../../assets/StarsDetails/img3.png";
import img4 from "../../assets/StarsDetails/img4.png";
import img5 from "../../assets/StarsDetails/img5.png";
import img6 from "../../assets/StarsDetails/img6.png";

const images = [img1, img2, img3, img4, img5, img6];

const FIGMA_MOBILE_TARGET =
  "https://www.figma.com/design/Fh3NvzFFdF4Hc5FxHPYcBa/p?node-id=501-7402&t=3HTDEQSZEIJOTnab-4";

const CTA = () => (
  <section
    className="relative overflow-hidden min-h-[720px] md:min-h-[400px] py-12 md:py-16"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Mobile decorative circles (smaller + Figma-like positions) */}
    <div className="pointer-events-none select-none md:hidden">
      {/* Top-left (small) */}
      <img
        src={images[0]}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute rounded-full object-cover shadow-lg w-[72px] h-[72px]"
        style={{ left: -8, top: 64 }}   // moved up and outwards
      />
      {/* Top-center (largest) */}
      <img
        src={images[1]}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute left-1/2 -translate-x-1/2 rounded-full object-cover shadow-lg w-[104px] h-[104px]"
        style={{ top: 6 }}               // slightly higher
      />
      {/* Top-right (small) */}
      <img
        src={images[2]}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute rounded-full object-cover shadow-lg w-[72px] h-[72px]"
        style={{ right: -8, top: 64 }}   // moved up and outwards
      />
      {/* Bottom-left */}
      <img
        src={images[3]}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute rounded-full object-cover shadow-lg w-[76px] h-[76px]"
        style={{ left: 10, bottom: 118 }}
      />
      {/* Bottom-center */}
      <img
        src={images[4]}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute left-1/2 -translate-x-1/2 rounded-full object-cover shadow-lg w-[76px] h-[76px]"
        style={{ bottom: 48 }}
      />
      {/* Bottom-right (slightly larger) */}
      <img
        src={images[5]}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute rounded-full object-cover shadow-lg w-[84px] h-[84px]"
        style={{ right: 6, bottom: 92 }}
      />
    </div>

    {/* Desktop decorative circles (unchanged) */}
    <div className="hidden md:block">
      <img
        src={images[0]}
        alt="circle-1"
        className="absolute left-8 top-8 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      <img
        src={images[1]}
        alt="circle-2"
        className="absolute right-8 top-12 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      <img
        src={images[2]}
        alt="circle-3"
        className="absolute left-16 bottom-8 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      <img
        src={images[3]}
        alt="circle-4"
        className="absolute right-16 bottom-8 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      <img
        src={images[4]}
        alt="circle-5"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      <img
        src={images[5]}
        alt="circle-6"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-full object-cover shadow-lg"
      />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24 md:pt-0 pb-20 md:pb-0">
      {/* Semibold on mobile, bold on desktop */}
      <h3 className="text-[28px] leading-8 font-semibold md:font-bold text-[#111] md:text-4xl md:leading-normal mb-4">
        No family should walk the autism journey alone
      </h3>
      <p className="text-base leading-6 text-[#444] md:text-lg mb-8">
        Join our community of families, educators, and advocates who believe in the power of understanding, support, and shared experiences.
      </p>

      {/* Mobile buttons (smaller) */}
      <div className="flex flex-col items-center gap-3 md:hidden">
        <a
          href={FIGMA_MOBILE_TARGET}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[240px] mx-auto px-4 py-2.5 rounded-lg text-sm font-semibold bg-black text-[#FFD600] hover:bg-[#111] transition shadow-sm"
          aria-label="Visit Site Now"
        >
          Visit Site Now
        </a>
        <a
          href={FIGMA_MOBILE_TARGET}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[240px] mx-auto px-4 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#111] border border-gray-300 hover:bg-gray-50 transition"
          aria-label="Connect with Us"
        >
          Connect with Us
        </a>
      </div>

      {/* Desktop buttons (unchanged) */}
      <div className="hidden md:flex gap-4 justify-center">
        <a
          href="#contact"
          className="px-8 py-3 border border-gray-400 rounded-md font-semibold text-[#222] bg-white hover:bg-gray-50 transition"
        >
          Contact with us
        </a>
        <a
          href="#visit"
          className="px-8 py-3 rounded-md font-semibold text-[#144C84] transition"
          style={{ backgroundColor: "#FFD600" }}
        >
          Visit Site
        </a>
      </div>
    </div>
  </section>
);

export default CTA;