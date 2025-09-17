import React from "react";
import joinImg from "../../assets/Hospitality/join-bg.png";

const JoinUs = () => (
  <section
    className="relative w-full overflow-hidden flex items-center justify-center"
    style={{
      width: "100%",
      height: "350px",
      minHeight: "250px",
      position: "relative",
    }}
  >
    {/* Background image */}
    <img
      src={joinImg}
      alt="Hospitality Join Us"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: 1 }}
    />

    {/* Overlay */}
    <div
      className="absolute inset-0"
      style={{ background: "rgba(0,0,0,0.38)", zIndex: 2 }}
    />

    {/* Desktop/Tablet content (unchanged) */}
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center hidden md:flex"
      style={{
        zIndex: 3,
        position: "absolute",
      }}
    >
      <h2
        className="text-white font-Poppins"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "48px",
          lineHeight: "1.28",
          letterSpacing: "0",
          textAlign: "center",
          verticalAlign: "middle",
          marginBottom: "20px",
        }}
      >
        Join us in redefining the way you
        <br />
        experience food
      </h2>
      <p
        className="text-white/90"
        style={{
          fontSize: "20px",
          lineHeight: "1.5",
          maxWidth: "760px",
          marginBottom: "40px",
          textAlign: "center",
          fontWeight: 400,
        }}
      >
        where taste meets health, and every order is a celebration of care.
      </p>
      <a
        href="#visit"
        className="inline-flex items-center justify-center font-semibold shadow transition"
        style={{
          background: "#FFD600",
          color: "#222",
          width: "190px",
          height: "48px",
          borderRadius: "8px",
          fontSize: "20px",
          fontWeight: 600,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        Visit Site
      </a>
    </div>

    {/* Mobile content (Figma exact) */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center md:hidden px-4">
      <h2
        className="text-white font-baskerville text-[22px] leading-[1.2] text-center mb-2"
        style={{
          fontFamily: "Baskerville, serif",
          fontWeight: 400,
        }}
      >
        Join us in redefining<br />
        the way you<br />
        experience food
      </h2>
      <p className="text-white/90 text-[13px] leading-[1.5] text-center mb-4 font-normal">
        where taste meets health, and every order is a celebration of care.
      </p>
      <a
        href="#visit"
        className="inline-flex items-center justify-center font-semibold shadow transition bg-[#FFD600] text-[#222] rounded-[8px] text-[15px] w-[160px] h-[40px]"
      >
        Visit Site Now
      </a>
    </div>
  </section>
);

export default JoinUs;