import React from "react";

const FIGMA_HIW_TARGET =
  "https://www.figma.com/design/Fh3NvzFFdF4Hc5FxHPYcBa/p?node-id=496-6410&t=fX3R5CvxfXnKZSct-4";

export default function HowItWorks() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Libre+Baskerville:wght@700&display=swap');

        .hiw-main {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 64px;
          padding: 0;
          background: #fff;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          width: 100%;
        }
        .hiw-left {
          background: linear-gradient(180deg, #0B4C8B 0%, #1D69B5 100%);
          border-radius: 8px;
          padding: 35px 40px;
          color: #fff;
          width: 496px;
          height: 286px;
          min-width: 496px;
          min-height: 286px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          gap: 18px;
          margin-left: 48px;
        }
        .hiw-leftTitle {
          font-family: "Libre Baskerville", serif;
          font-size: 1.9rem;
          font-weight: 700;
          line-height: 1.25;
          margin: 0;
        }
        .hiw-leftDesc {
          font-size: 1.05rem;
          font-weight: 400;
          margin: 0;
          line-height: 1.5;
          color: #F3F7FC;
        }
        .hiw-ctaBtn {
          background: #fff;
          color: #1D69B5;
          font-weight: 700;
          border-radius: 8px;
          padding: 10px 22px;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.2s;
          margin-top: 6px;
          align-self: flex-start;
        }
        .hiw-ctaBtn:hover { background: #eaf4ff; }

        .hiw-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 10px;
        }
        .hiw-title {
          font-family: "Libre Baskerville", serif;
          font-size: 2rem;
          font-weight: 700;
          color: #222;
          margin: 18px 0;
          text-align: left;
        }
        .hiw-stepsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 32px;
        }
        .hiw-step { display: flex; align-items: center; gap: 14px; }
        .hiw-stepNum {
          width: 36px; height: 36px; border-radius: 50%;
          font-weight: 700; font-size: 1.1rem;
          display: flex; align-items: center; justify-content: center;
        }
        .hiw-stepNum.step1 { background: #ECECFF; color: #6C63FF; }
        .hiw-stepNum.step2 { background: #FFEDE8; color: #FF6C63; }
        .hiw-stepNum.step3 { background: #FFEDE8; color: #FF6C63; }
        .hiw-stepNum.step4 { background: #E9F8EE; color: #16A34A; }
        .hiw-stepText { font-size: 1.08rem; color: #222; font-weight: 500; line-height: 1.5; }

        /* Tablet collapse */
        @media (max-width: 900px) {
          .hiw-main { flex-direction: column; gap: 32px; }
          .hiw-left { width: 100%; min-width: 0; height: auto; min-height: 0; margin-left: 0; }
          .hiw-right { padding-top: 0; }
          .hiw-stepsGrid { grid-template-columns: 1fr; gap: 18px; }
        }

        /* Mobile – match Figma layout exactly */
        @media (max-width: 767px) {
          .hiw-main { gap: 0; }
          .hiw-left {
            width: 100%;
            border-radius: 0;       /* full-width banner */
            padding: 24px 16px 28px;
            background: linear-gradient(180deg, #0B4C8B 0%, #1D69B5 100%);
          }
          .hiw-leftTitle { font-size: 26px; line-height: 1.25; }
          .hiw-leftDesc { font-size: 15px; color: #E8F2FC; }
          .hiw-ctaBtn { padding: 12px 18px; font-size: 16px; border-radius: 10px; }

          .hiw-right { padding: 0 16px 24px; }
          .hiw-title {
            text-align: center;      /* centered heading under banner */
            font-size: 30px;
            margin: 18px 0;
          }
          .hiw-stepsGrid { grid-template-columns: 1fr; gap: 16px; }
          .hiw-stepNum {
            width: 34px; height: 34px; font-size: 1rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          }
          .hiw-stepText { font-size: 16px; font-weight: 500; }
        }
      `}</style>

      <section className="hiw-main" aria-label="How It Works" style={{ marginBottom: "0px" }}>
        {/* Blue banner (links to Figma) */}
        <a
          href={FIGMA_HIW_TARGET}
          target="_blank"
          rel="noopener noreferrer"
          className="hiw-left"
          aria-label="Open Figma: Your Learning Journey in 4 Simple Steps"
        >
          <div className="hiw-leftTitle">
            Your Learning Journey in<br />4 Simple Steps
          </div>
          <div className="hiw-leftDesc">
            Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
          </div>
          <span className="hiw-ctaBtn">Join Now</span>
        </a>

        {/* Title + steps */}
        <div className="hiw-right">
          <div className="hiw-title">How It Works</div>
          <div className="hiw-stepsGrid">
            <div className="hiw-step">
              <div className="hiw-stepNum step1">1</div>
              <div className="hiw-stepText">Browse our courses</div>
            </div>
            <div className="hiw-step">
              <div className="hiw-stepNum step2">2</div>
              <div className="hiw-stepText">Enroll securely online</div>
            </div>
            <div className="hiw-step">
              <div className="hiw-stepNum step3">3</div>
              <div className="hiw-stepText">Learn through engaging modules &amp; practice</div>
            </div>
            <div className="hiw-step">
              <div className="hiw-stepNum step4">4</div>
              <div className="hiw-stepText">
                Earn a verified certificate<br />(digital &amp; physical)
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}