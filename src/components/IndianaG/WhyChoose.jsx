import React from "react";
import whychoosePhoto from "../../assets/IndianaG/whychoose.png"; // ensure this exists

const features = [
  {
    title: "Curated With Care",
    desc: "Every Gift Is Handpicked And Designed For Meaning, Not Just Aesthetics.",
  },
  {
    title: "Personalized Experiences",
    desc: "From Names & Notes To Custom Sets, Every Gift Feels Unique.",
  },
  {
    title: "Tradition Meets Modernity",
    desc: "Rooted In Cultural Heritage Yet Crafted For Today's Lifestyle.",
  },
  {
    title: "Effortless Gifting",
    desc: "Beautiful Packaging And Convenient Delivery, Ready To Delight.",
  },
];

const HeartWhite = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 21s-8-5.5-8-11.5C4 6.46 6.46 4 9.5 4c1.57 0 2.5 1.43 2.5 3 0-1.57.93-3 2.5-3C17.54 4 20 6.46 20 9.5 20 15.5 12 21 12 21z"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartRedOutline = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 21s-8-5.5-8-11.5C4 6.46 6.46 4 9.5 4c1.57 0 2.5 1.43 2.5 3 0-1.57.93-3 2.5-3C17.54 4 20 6.46 20 9.5 20 15.5 12 21 12 21z"
      stroke="#AE1A1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WhyChoose() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        background: "#FFFFFF",
        padding: "64px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* MOBILE */}
      <div className="md:hidden max-w-[430px] mx-auto px-5">
        <h3
          className="text-[24px] font-bold text-[#111827] mb-5"
          style={{ fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', Roboto, Arial" }}
        >
          Why Choose Indiana G
        </h3>

        <div className="space-y-5">
          {features.map((f, idx) => (
            <article
              key={f.title}
              className={`whychoose-card-mobile flex items-start gap-3 rounded-[10px] border p-4 bg-white border-[#F3F4F6] transition-all duration-200`}
              tabIndex={0}
            >
              {/* Icon */}
              <div className="whychoose-icon-mobile w-[28px] h-[28px] flex items-center justify-center shrink-0 rounded-md transition-all duration-200 bg-transparent">
                {HeartRedOutline}
              </div>
              {/* Text */}
              <div>
                <h4
                  className="text-[#111827] font-semibold text-[16px] leading-5 mb-1"
                  style={{ fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', Roboto, Arial" }}
                >
                  {f.title}
                </h4>
                <p
                  className="text-[#4B5563] text-[13px] leading-[18px]"
                  style={{ fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', Roboto, Arial" }}
                >
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        {/* Bottom image */}
        <div className="mt-6 rounded-[14px] overflow-hidden whychoose-img-mobile">
          <img
            src={whychoosePhoto}
            alt="Hands wrapping a gift"
            className="w-full h-auto object-cover block whychoose-img"
            style={{ aspectRatio: "328 / 244", transition: "transform 0.3s cubic-bezier(.4,0,.2,1)" }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="hidden md:flex"
        style={{
          gap: 32,
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "nowrap",
        }}
      >
        {/* LEFT group */}
        <div
          style={{
            width: 612.0087890625,
            height: 351.308349609375,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              margin: 0,
              marginBottom: 16,
              fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "28px",
              lineHeight: "100%",
              letterSpacing: "0",
              color: "#111827",
              width: "max-content",
              whiteSpace: "nowrap",
            }}
          >
            Why Choose Indiana G
          </h3>

          <div
            style={{
              marginTop: 8,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px 12px",
            }}
          >
            {features.map((f, idx) => (
              <article
                key={f.title}
                aria-label={f.title}
                className="whychoose-card-desktop"
                tabIndex={0}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: 16,
                  borderRadius: 6,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #F3F4F6",
                  width: 298,
                  height: 121,
                  boxSizing: "border-box",
                  boxShadow: "none",
                  transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                  cursor: "pointer",
                }}
              >
                {/* Icon */}
                <div
                  className="whychoose-icon-desktop"
                  style={{
                    width: 23.33,
                    height: 23.33,
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    padding: 0,
                    boxSizing: "border-box",
                    background: "transparent",
                    transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                  }}
                  aria-hidden
                >
                  {HeartRedOutline}
                </div>
                {/* Text */}
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      margin: 0,
                      marginBottom: 6,
                      fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#111827",
                      lineHeight: "20px",
                    }}
                  >
                    {f.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
                      fontWeight: 400,
                      fontSize: 13,
                      color: "#4B5563",
                      lineHeight: "18px",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* RIGHT image */}
        <div
          className="whychoose-img-desktop"
          style={{
            flex: "0 0 auto",
            width: 643,
            height: 385,
            borderRadius: 14.95,
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            transition: "box-shadow 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <img
            src={whychoosePhoto}
            alt="Hands wrapping a gift"
            className="whychoose-img"
            style={{
              width: 643,
              height: 385,
              objectFit: "cover",
              display: "block",
              transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
            }}
          />
        </div>
      </div>

      {/* Responsive + Hover styles */}
      <style>{`
        @media (max-width: 1150px) {
          div[style*="flex-wrap: nowrap"] {
            flex-wrap: wrap !important;
            gap: 24px !important;
          }
          div[style*="width: 612.0087890625"] {
            width: 100% !important;
            height: auto !important;
          }
          div[style*="width: 298"] {
            width: 100% !important;
            height: auto !important;
          }
          div[style*="width: 643"] {
            width: 100% !important;
            height: auto !important;
            border-radius: 12px !important;
          }
          div[style*="width: 643"] img {
            width: 100% !important;
            height: auto !important;
          }
        }
        /* Desktop card hover */
        .whychoose-card-desktop:hover, .whychoose-card-desktop:focus {
          background: #FFF7E8 !important;
          border: 1px solid #F5D7B9 !important;
          box-shadow: 0 2px 8px rgba(202,108,56,0.08) !important;
          transform: scale(1.04);
        }
        .whychoose-card-desktop:hover .whychoose-icon-desktop,
        .whychoose-card-desktop:focus .whychoose-icon-desktop {
          background: #AE1A1E !important;
        }
        .whychoose-card-desktop:hover .whychoose-icon-desktop svg path,
        .whychoose-card-desktop:focus .whychoose-icon-desktop svg path {
          stroke: #fff !important;
        }
        /* Mobile card hover */
        .whychoose-card-mobile:hover, .whychoose-card-mobile:focus {
          background: #FFF7E8 !important;
          border: 1px solid #F5D7B9 !important;
          box-shadow: 0 2px 8px rgba(202,108,56,0.08) !important;
          transform: scale(1.04);
        }
        .whychoose-card-mobile:hover .whychoose-icon-mobile,
        .whychoose-card-mobile:focus .whychoose-icon-mobile {
          background: #AE1A1E !important;
        }
        .whychoose-card-mobile:hover .whychoose-icon-mobile svg path,
        .whychoose-card-mobile:focus .whychoose-icon-mobile svg path {
          stroke: #fff !important;
        }
        /* Image zoom in/out effect */
        .whychoose-img-desktop:hover .whychoose-img,
        .whychoose-img-desktop:focus .whychoose-img,
        .whychoose-img-mobile:hover .whychoose-img,
        .whychoose-img-mobile:focus .whychoose-img {
          transform: scale(1.06);
        }
        .whychoose-img {
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </section>
  );
}
