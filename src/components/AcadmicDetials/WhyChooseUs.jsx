import React from "react";
import chooseImg from "../../assets/AcadmicDetails/whychoose.png";

const FIGMA_WCU_TARGET =
  "https://www.figma.com/design/Fh3NvzFFdF4Hc5FxHPYcBa/p?t=fX3R5CvxfXnKZSct-4"; // replace with exact node if needed

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Libre+Baskerville:wght@700&display=swap');

        .wc-container {
          position: relative;
          min-height: 480px;
          box-sizing: border-box;
          background: #fff;
          padding-top: 0px;
        }

        .wc-leftFrame {
          position: absolute;
          width: 461px;
          height: 595.25px;
          top: 0px;
          left: 95px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .wc-title {
          font-family: "Libre Baskerville", serif;
          font-weight: 700;
          font-size: 26px;
          color: #222222;
          margin: 0 0 8px 0;
          text-align: left;
        }

        .wc-underline {
          width: 60px;
          height: 4px;
          background: #1D69B5;
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .wc-features {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 8px;
          font-family: "Inter", sans-serif;
          color: #222222;
        }

        .wc-highlightBox {
          background: #EAF4FF;
          padding: 16px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #0F1724;
          box-shadow: inset 6px 0 0 0 rgba(29,105,181,0.08);
          max-width: 420px;
        }

        .wc-featureText {
          margin: 0;
          font-size: 16px;
          line-height: 26px;
          max-width: 420px;
          font-weight: 400;
          color: #222222;
        }

        .wc-imageWrap {
          position: absolute;
          width: 500px;
          height: 400px;
          top: 5px;
          left: 727px;
          border-radius: 14.91px;
          overflow: hidden;
          background: #eee;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.02);
        }

        .wc-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .wc-badge {
          position: absolute;
          left: 28px;
          bottom: 28px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #FFD233;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.10);
        }

        .wc-badgeNumber {
          font-family: "Inter", sans-serif;
          font-weight: 800;
          font-size: 30px;
          color: #111827;
          margin-bottom: 4px;
        }

        .wc-badgeText {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #111827;
        }

        /* Tablet/desktop stacking (unchanged) */
        @media (max-width: 1200px) {
          .wc-imageWrap, .wc-leftFrame {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
          }
          .wc-imageWrap { height: 420px; border-radius: 12px; }
          .wc-leftFrame { height: auto; }
          .wc-container { min-height: auto; padding: 48px 24px; }
        }

        /* Mobile – match requested order: title -> image -> content */
        @media (max-width: 767px) {
          .wc-container {
            padding: 20px 16px 28px;
            display: flex;              /* enable ordering */
            flex-direction: column;
          }
          /* Flatten the left frame so children can be ordered with the image */
          .wc-leftFrame {
            position: static;
            width: 100%;
            display: contents;          /* makes its children flow at container level */
          }

          /* Anchor that wraps title + underline */
          .wc-head {
            order: 1;
            align-self: center;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }

          .wc-title {
            text-align: center;
            font-size: 26px;
            margin-bottom: 6px;
          }
          .wc-underline {
            width: 96px;
            height: 6px;
            margin: 0 auto 14px auto;
            border-radius: 9999px;
          }

          /* Image comes after heading */
          .wc-imageWrap {
            order: 2;
            position: relative;
            width: 100%;
            height: 220px;
            margin: 0 0 14px 0;
            border-radius: 16px;
            overflow: hidden;
          }
          .wc-badge {
            width: 88px;
            height: 88px;
            left: 14px;
            bottom: 14px;
          }

          /* Features/content after image */
          .wc-features {
            order: 3;
            width: 100%;
            gap: 16px;
            margin-top: 8px;
          }
          .wc-highlightBox {
            position: relative;
            width: 100%;
            max-width: 100%;
            background: #E7F2FF;
            border-radius: 12px;
            padding: 14px 16px 14px 20px;
            font-size: 16px;
            line-height: 22px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          }
          .wc-highlightBox::before {
            content: "";
            position: absolute;
            left: 8px;
            top: 10px;
            bottom: 10px;
            width: 6px;
            background: #1D69B5;
            border-radius: 4px;
            box-shadow: 2px 0 0 rgba(29,105,181,0.15);
          }
          .wc-featureText {
            max-width: 100%;
            font-size: 15px;
            line-height: 24px;
            color: #222;
          }
        }
      `}</style>

      <section className="wc-container" aria-label="Why choose us section">
        <div className="wc-leftFrame">
          <a
            href={FIGMA_WCU_TARGET}
            target="_blank"
            rel="noopener noreferrer"
            className="wc-head"
            aria-label="Open Figma (Why Choose Us)"
          >
            <h2 className="wc-title">Why Choose Us</h2>
            <div className="wc-underline" />
          </a>

          <div className="wc-features">
            <a
              href={FIGMA_WCU_TARGET}
              target="_blank"
              rel="noopener noreferrer"
              className="wc-highlightBox"
              aria-label="Open Figma (highlight card)"
            >
              Certified & globally benchmarked content.
            </a>

            <p className="wc-featureText">
              Flexible self-learning, accessible anytime, anywhere.
            </p>
            <p className="wc-featureText">
              Designed for both individual growth and organizational upskilling.
            </p>
            <p className="wc-featureText">
              Backed by 20+ years of expertise in education innovation.
            </p>
          </div>
        </div>

        <a
          href={FIGMA_WCU_TARGET}
          target="_blank"
          rel="noopener noreferrer"
          className="wc-imageWrap"
          aria-label="Open Figma (image card)"
        >
          <img src={chooseImg} alt="Why choose us" className="wc-image" />
          <div className="wc-badge" aria-hidden>
            <div className="wc-badgeNumber">200+</div>
            <div className="wc-badgeText">Courses</div>
          </div>
        </a>
      </section>
    </>
  );
}
