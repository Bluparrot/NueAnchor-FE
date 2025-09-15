import React from "react";
import heroImg from "../../assets/AcadmicDetails/academics-hero.jpg";
import heroImgMobile from "../../assets/AcadmicDetails/academics-hero-mobile.png";

const AcademicsHero = () => (
  <section aria-label="NeuAnchor Academies hero" className="w-full mx-auto">
    {/* MOBILE (<= md): Figma exact */}
    <div className="block md:hidden w-full">
      {/* Top blue gradient block */}
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(358.67deg, rgba(0,113,220,0) -22.43%, rgba(0,113,220,0.8) -20.17%, rgba(0,83,161,0.9) 37.5%, #003D76 98.9%)",
          padding: "32px 20px",
        }}
      >
        <div className="max-w-[335px] mx-auto flex flex-col items-start text-left">
          <span
            className="inline-block bg-white text-[#1D69B5] font-medium text-[13px] px-4 py-2 rounded-full border border-white/60 shadow-sm mb-4"
            style={{
              background: "#F6F7F9",
              color: "#1D69B5",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            NeuAnchor Academies
          </span>
          <h1 className="mb-3 font-bold font-libre text-[24px] leading-[30px] text-white">
            Certified Online Courses
            <br />
            for Future-Ready
            <br />
            Learning
          </h1>
          <p className="text-[14px] leading-[20px] text-white font-medium mb-6">
            Self-paced, globally benchmarked programs designed for corporates,
            institutions, and elite households.
          </p>
          <a
            href="#"
            className="inline-block border border-[#1D69B5] text-[#1D69B5] font-semibold text-[15px] px-6 py-3 rounded-[8px] shadow transition bg-transparent hover:bg-[#eaf6ff] mb-2"
            style={{
              boxSizing: "border-box",
              fontFamily: "Inter, sans-serif",
              background: "#fff",
              color: "#1D69B5",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#1D69B5",
              fontWeight: 600,
            }}
          >
            Visit Now
          </a>
        </div>
      </div>
      {/* Mobile image below content block */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          width: "375px",
          height: "363px",
          margin: "0 auto",
          opacity: 1,
        }}
      >
        <img
          src={heroImgMobile}
          alt="Academic learning environment"
          className="absolute inset-0 object-cover"
          style={{
            width: "375px",
            height: "363px",
            objectPosition: "center top",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
          loading="lazy"
        />
      </div>
    </div>

    {/* DESKTOP (md+): Figma exact */}
    <div
      className="hidden md:flex w-full relative items-center justify-start overflow-hidden"
      style={{
        minHeight: "532px",
        background: `url(${heroImg}) center right/cover no-repeat`,
      }}
    >
      {/* Blue gradient overlay (left side, matches Figma) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #003D76 0%, #0053A1 28%, rgba(0,113,220,0.5) 44%, rgba(0,113,220,0.0) 60%)", // less blue, fades out earlier
          opacity: 0.92,
        }}
        aria-hidden
      />
      {/* Content block */}
      <div
        className="relative z-10 flex flex-col justify-center items-start"
        style={{
          minHeight: "632px",
          paddingLeft: "60px",
          maxWidth: "700px",
        }}
      >
        <span
          className="inline-block mb-6 px-5 py-2 rounded-full bg-white text-[#1D69B5] font-medium"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "15px",
            background: "#F6F7F9",
            color: "#1D69B5",
            fontWeight: 500,
            borderRadius: "100px",
            border: "1px solid #EAF6FF",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          NeuAnchor Academies
        </span>
        <h1
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "128%",
            color: "#fff",
            marginBottom: "18px",
            maxWidth: "594px",
            opacity: 1,
          }}
        >
          Certified Online Courses
          <br />
          for Future-Ready Learning
        </h1>
        <p
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "128%",
            color: "#fff",
            maxWidth: "433px",
            opacity: 1,
            marginBottom: "32px",
          }}
        >
          Self-paced, globally benchmarked programs designed for corporates,
          institutions, and elite households.
        </p>
        <a
          href="#"
          className="inline-block font-semibold rounded px-6 py-3 text-[18px] shadow transition"
          style={{
            background: "#FFD600",
            color: "#003D76",
            border: "none",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            borderRadius: "8px",
            width: "160px",
            textAlign: "center",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = "#003D76";
            e.currentTarget.style.color = "#FFD600";
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = "#FFD600";
            e.currentTarget.style.color = "#003D76";
          }}
        >
          Visit Site
        </a>
      </div>
    </div>
  </section>
);

export default AcademicsHero;