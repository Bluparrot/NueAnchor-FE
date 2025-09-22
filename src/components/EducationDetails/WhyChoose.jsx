import React, { useState } from "react";
import growthImg from "../../assets/EducationDetailspage/growth.png";
import policyImg from "../../assets/EducationDetailspage/policy.png";
import uspImg from "../../assets/EducationDetailspage/usp.png";
import expertiseImg from "../../assets/EducationDetailspage/experties.png";

const cards = [
  {
    title: "Faster Growth with Expert Guidance",
    desc:
      "Accelerate your institution’s development with our proven methodologies and strategic insights gained from 20+ years of experience.",

    img: growthImg,
  },
  {
    title: "Policy-Compliant Frameworks",
    desc:
      "Navigate complex regulations effortlessly with our comprehensive compliance solutions and up-to-date policy frameworks.",
    bg: "#fff",
    img: policyImg,
  },
  {
    title: "Unique USPs for Every School",
    desc:
      "Develop distinctive value propositions that set your institution apart in the competitive educational landscape.",
    bg: "#fff",
    img: uspImg,
  },
  {
    title: "20+ Years of Proven Expertise",
    desc:
      "Benefit from our extensive track record of successful transformations and deep understanding of educational challenges.",
    bg: "#fff",
    img: expertiseImg,
  },
];

const WhyChoose = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Remove greenish background, only show green left border for selected tab
  const activeTabClass = "bg-[#2563EB] shadow-lg text-white border-none";

  return (
    <section className="px-6 lg:px-24 py-16 bg-white">
      {/* Heading + subtext (desktop/tablet) */}
      <h2
        className="hidden md:block text-center"
        style={{
          fontFamily: "'Figtree', sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          color: "#4e8b4eff",
          lineHeight: "120%",

          marginBottom: "16px",
        }}
      >
        Why Choose NeuAnchor Education?
      </h2>
      <p
        className="hidden md:block text-center"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "128%",
          color: "#222",
          color: "#090a09ff",
          marginBottom: "48px",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Partner with us to unlock your institution's full potential and create
        lasting educational impact.
      </p>

      {/* Mobile heading + subtext */}
      <div className="md:hidden text-center">
        <h2 className="text-[26px] leading-[32px] font-bold text-[#3A7F4B] mb-2">
          Why Choose NeuAnchor Education?
        </h2>
        <p className="text-[12px] leading-[16px] text-[#6B7280] max-w-[260px] mx-auto mb-4">
          Partner with us to unlock your institution&apos;s full potential and
          create lasting educational impact.
        </p>
      </div>

      {/* Mobile: vertical cards */}
      <div className="md:hidden flex flex-col items-center gap-8 mt-2">
        {cards.map((c, i) => (
          <button
            key={i}
            className={`w-full max-w-[360px] rounded-[12px] p-4 transition
              ${activeIdx === i ? activeTabClass : ""}
            `}
            style={{
              outline: "none",
              background: activeIdx === i ? "#91b299ff" : c.bg,
              boxShadow:
                activeIdx === i
                  ? "0 4px 16px rgba(37,99,235,0.15)"
                  : "none",
              color: activeIdx === i ? "#fff" : "#222",
            }}
            onClick={() => setActiveIdx(i)}
            type="button"
          >
            {/* Icon */}
            <div
              className={`mx-auto flex items-center justify-center rounded-[12px] ${
                i === 0 ? "bg-white/70" : "bg-[#F3F6F2]"
              }`}
              style={{ width: 56, height: 56 }}
            >
              <img
                src={c.img}
                alt={c.title}
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Title */}
            <h3
              className="text-center mt-3"
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "130%",
                color: activeIdx === i ? "#fff" : "#222",
              }}
            >
              {c.title}
            </h3>

            {/* Description */}
            <p
              className="text-center mt-2 mx-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "150%",
                color: activeIdx === i ? "#fff" : "#222",
                maxWidth: 300,
              }}
            >
              {c.desc}
            </p>
          </button>
        ))}
      </div>

      {/* Desktop/tablet grid with clickable cards */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mt-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="whychoose-card rounded-[16px] flex flex-col items-start p-6"
            style={{
              minWidth: "220px",
              maxWidth: "260px",
              height: "100%",
              outline: "none",
              cursor: "pointer",
              color: "#222",
            }}
          >
            <div className="mb-4">
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  objectFit: "cover",
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "130%",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "140%",
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
      <style>
        {`
  .whychoose-card {
    transition: transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1), background 0.3s cubic-bezier(.4,0,.2,1);
    will-change: transform;
    background: #fff;
  }
  .whychoose-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 32px rgba(37,99,235,0.12);
    background: #e6f0ea;
    z-index: 2;
  }
`}
      </style>
    </section>
  );
};

export default WhyChoose;