import React from "react";
import SetupImg from "../../assets/EducationDetailspage/SetupSolutions.png";
import StrategyImg from "../../assets/EducationDetailspage/StrategicGuidance.png";
import InclusiveImg from "../../assets/EducationDetailspage/InclusiveDesign.png";
import WorkshopImg from "../../assets/EducationDetailspage/WorkshopsTraining.png";

const FIGMA_WWD_TARGET =
  "https://www.figma.com/design/Fh3NvzFFdF4Hc5FxHPYcBa/p?node-id=501-6963&t=fX3R5CvxfXnKZSct-4";

const cardData = [
  {
    img: SetupImg,
    title: "Complete Setup Solutions",
    desc:
      "End-to-end consultancy covering procedures, compliances, business plans, and curriculum development for new institutions.",
    bullets: [
      "Business Plan Development",
      "Regulatory Compliance",
      "Curriculum Design",
      "Infrastructure Planning",
    ],
    cardStyle: "border border-[#EAE7DE]",
  },
  {
    img: StrategyImg,
    title: "Strategic Guidance",
    desc:
      "Revenue model optimization, strategic partnerships, competitive pricing, and comprehensive marketing strategies.",
    bullets: [
      "Revenue Optimization",
      "Partnership Development",
      "Marketing Strategy",
      "Growth Planning",
    ],
    cardStyle: "border border-[#EAE7DE]",
  },
  {
    img: InclusiveImg,
    title: "Inclusive Education Design",
    desc:
      "Special needs integration, extracurricular program development, and comprehensive sports infrastructure planning.",
    bullets: [
      "Special Needs Support",
      "Activity Programs",
      "Sports Infrastructure",
      "Inclusive Policies",
    ],
    cardStyle: "border border-[#B6E2C6] bg-[#F7FBF9]",
  },
  {
    img: WorkshopImg,
    title: "Workshops & Training",
    desc:
      "Professional development programs designed for teachers, students, administrators, and educational leadership teams.",
    bullets: [
      "Teacher Development",
      "Leadership Training",
      "Student Programs",
      "Admin Workshops",
    ],
    cardStyle: "border border-[#EAE7DE]",
  },
];

const WhatWeDo = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Figtree:wght@600&display=swap');

      .wwd-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 32px;
        line-height: 128%;
        color: #3A7F4B;
        width: 200px;
        height: 41px;
        margin: 0 auto 16px auto;
        text-align: center;
        display: flex; align-items: center; justify-content: center;
      }

      /* NEW: desktop/tablet default for the subheading (centered) */
      .wwd-sub {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        line-height: 128%;
        color: #4B5563;
        max-width: 900px;
        margin: 0 auto 24px auto; /* centers the line */
        text-align: center;
      }

      .wwd-card-title {
        width: 100%;
        max-width: 100%;
        font-family: 'Figtree', sans-serif;
        font-weight: 600;
        font-size: 15px; /* desktop/tablet default */
        line-height: 134%;
        color: #222;
        margin-bottom: 10px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
      }
      .wwd-card-row {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 8px;
        scrollbar-width: thin;
      }
      .wwd-card-frame {
        width: 310px;
        min-width: 210px;
        max-width: 250px;
        height: 470px;
        border-radius: 12px;
        padding: 12px 12px 20px 12px;
        gap: 12px;
        background: #F7F7F7;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        transition: box-shadow 0.2s;
      }
      .wwd-card-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 12px;
      }
      .wwd-card-desc {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        color: #4B5563;
        margin-bottom: 10px;
        line-height: 1.55;
      }
      .wwd-card-list {
        list-style: none;
        padding-left: 0;
        margin: 0;
      }
      .wwd-card-list li {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 11px;
        line-height: 128%;
        color: #222;
        margin-bottom: 6px;
        display: flex;
        align-items: center;
      }
      .wwd-card-list li span.dot {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #222;
        border-radius: 50%;
        margin-right: 8px;
        margin-top: 5px;
        flex-shrink: 0;
      }

      /* Mobile-only overrides to match Figma */
      @media (max-width: 767px) {
        .wwd-title { font-size: 28px; margin-bottom: 8px; }
        .wwd-sub {
          font-size: 14px;
          line-height: 128%;
          max-width: 330px;
          margin: 0 auto 18px auto;
          color: #4B5563;
          text-align: center;
        }
        .wwd-card-row {
          flex-direction: column;
          gap: 16px;
          overflow: visible;
        }
        .wwd-card-frame {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          height: auto;
          padding: 16px;
          border-radius: 16px;
          background: #FFFFFF;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .wwd-card-frame.inclusive {
          background: #F7FBF9 !important;
          border-color: #B6E2C6 !important;
        }
        .wwd-card-img {
          height: 176px; /* Figma-like image height */
          border-radius: 12px;
          margin-bottom: 12px;
        }
        .wwd-card-title {
          font-size: 18px; /* Figma title size on mobile */
          white-space: normal;
          text-overflow: initial;
          margin-bottom: 8px;
        }
        .wwd-card-desc {
          font-size: 13px;
          margin-bottom: 10px;
        }
        .wwd-card-list li {
          font-size: 13px;
          margin-bottom: 10px;
        }
        .wwd-card-list li span.dot { width: 6px; height: 6px; }
      }
    `}</style>

    <section className="px-4 py-8 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="wwd-title">What We Do</h2>

      <p className="wwd-sub" >
        Comprehensive solutions to transform your educational institution and prepare students for tomorrow
      </p>

      <div className="wwd-card-row">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`wwd-card-frame ${card.cardStyle} ${idx === 2 ? "inclusive" : ""}`}
          >
            <a
              href={FIGMA_WWD_TARGET}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${card.title} (open Figma)`}
              style={{ display: "block", width: "100%" }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="wwd-card-img"
                style={{ border: idx === 2 ? "2px solid #B6E2C6" : "none" }}
              />
            </a>

            <a
              href={FIGMA_WWD_TARGET}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3 className="wwd-card-title">{card.title}</h3>
            </a>

            <p className="wwd-card-desc">{card.desc}</p>

            <ul className="wwd-card-list">
              {card.bullets.map((item, i) => (
                <li key={i}>
                  <span className="dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default WhatWeDo;