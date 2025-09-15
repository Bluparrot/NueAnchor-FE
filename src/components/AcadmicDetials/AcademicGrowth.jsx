import React from "react";

const AcademicGrowth = () => (
  <section className="academic-growth">
    <style>{`
      .academic-growth {
        background:#fff;
        padding:48px 16px 32px;
        text-align:center;
      }
      .acg-title {
        font-family:'Libre Baskerville', serif;
        font-weight:700;
        font-size:28px;
        line-height:130%;
        color:#222;
        margin:0 0 16px 0;
        position:relative;
        display:inline-block;
      }
      .acg-title a { color:inherit; text-decoration:none; }
      .acg-title::after{
        content:"";
        display:block;
        width:60px;
        height:4px;
        background:#1D69B5;
        border-radius:9999px;
        margin:8px auto 0;
      }
      .acg-desc{
        font-family:'Figtree', sans-serif;
        font-weight:400;
        font-size:16px;
        line-height:150%;
        color:#222;
        max-width:700px;
        margin:0 auto;
      }

      /* Mobile adjustments to match Figma */
      @media (max-width:767px){
        .academic-growth{ padding:36px 16px 28px; }
        .acg-title{
          font-size:26px;
          line-height:125%;
          margin-bottom:10px;
        }
        .acg-title::after{
          width:96px;
          height:6px;
          margin-top:8px;
        }
        .acg-desc{
          font-size:14px;
          max-width:340px;
        }
      }
    `}</style>

    <h2 className="acg-title">
      A Legacy of Growth
    </h2>

    <p className="acg-desc">
      At NeuAnchor Academies, we believe learning goes beyond textbooks. Our
      journey began with a simple vision: to bridge the gap between traditional
      etiquette and modern professional skills. For over 35 years, we’ve been
      helping students, young professionals, and organizations gain the knowledge,
      confidence, and certification they need to thrive in today’s competitive
      world. Our academies are more than just online classrooms—they are growth
      hubs where learners upgrade themselves, unlock opportunities, and gain
      global recognition.
    </p>
  </section>
);

export default AcademicGrowth;