import React from "react";
import transformBg from "../../assets/Conferences/transform-bg.png"; // replace with your exported Figma image

const Transform = () => {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center h-[360px] md:h-[380px]">
      {/* Background image */}
      <img
        src={transformBg}
        alt="Conference audience"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />

      {/* Navy gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(8,34,71,0.92) 0%, rgba(8,34,71,0.88) 60%, rgba(8,34,71,0.86) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[920px] px-4 text-center">
        <h2
          className="text-white font-baskerville font-semibold md:font-bold leading-[1.2] mb-6"
          style={{ fontSize: "35px" }}
        >
          Transform Your Future with
          <br />
          Expert Led Learning
        </h2>

        <p className="text-white/80 text-[15px] md:text-[16px] leading-[1.6] max-w-[680px] mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim
        </p>

        <a
          href="#visit"
          className="inline-flex items-center justify-center bg-white text-[#1E4FBF] font-semibold rounded-[10px] shadow-sm transition"
          style={{ height: "48px", padding: "0 28px", fontSize: "16px" }}
        >
          Visit Site Now
        </a>
      </div>
    </section>
  );
};

export default Transform;