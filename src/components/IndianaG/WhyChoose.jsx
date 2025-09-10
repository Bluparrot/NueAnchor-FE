import React from "react";
import whychoosePhoto from "../../assets/IndianaG/whychoose.png"; // ensure this exists

const features = [
  {
    title: "Curated With Care",
    desc: "Every gift is handpicked and designed for meaning, not just aesthetics.",
    highlight: true,
  },
  {
    title: "Personalized Experiences",
    desc: "From names & notes to custom sets, every gift feels unique.",
  },
  {
    title: "Tradition Meets Modernity",
    desc: "Rooted in cultural heritage yet curated for today's lifestyle.",
  },
  {
    title: "Effortless Gifting",
    desc: "Beautiful packaging and convenient delivery, ready to delight.",
  },
];

const HeartWhite = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 21s-8-5.5-8-11.5C4 6.46 6.46 4 9.5 4c1.57 0 2.5 1.43 2.5 3 0-1.57.93-3 2.5-3C17.54 4 20 6.46 20 9.5 20 15.5 12 21 12 21z"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WhyChoose() {
  return (
    <section
      // Section frame matches Figma frame width (max 1440). Height in figma is page height; we keep content-driven height.
      style={{
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        background: "#FFFFFF",
        padding: "64px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* Wrapper that keeps left and right on one horizontal row on desktop */}
      <div
        style={{
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "nowrap", // keep on one line on desktop
        }}
      >
        {/* LEFT group exactly sized per Figma */}
        <div
          style={{
            width: 612.0087890625,
            height: 351.308349609375,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          {/* Heading — exact Figma text properties and forced to single line */}
          <h3
            style={{
              margin: 0,
              marginBottom: 16,
              fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "28px",
              lineHeight: "100%", // 1:1
              letterSpacing: "0",
              color: "#111827",
              width: "max-content",
              whiteSpace: "nowrap",
              // optional width/height frame from figma:
              // width: 292,
              // height: 34,
            }}
          >
            Why Choose Indiana G
          </h3>

          {/* Features grid (2 columns) */}
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
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: 16,
                  borderRadius: 6,
                  backgroundColor: f.highlight ? "#FFF7E8" : "#FFFFFF",
                  border: f.highlight ? "1px solid #F5D7B9" : "1px solid #F3F4F6",
                  width: 298, // two fit inside 612 with gaps
                  height: 121,
                  boxSizing: "border-box",
                  boxShadow: f.highlight ? "0 2px 8px rgba(202,108,56,0.08)" : "none",
                }}
              >
                {/* Vector (icon box) exact Figma size & color */}
                <div
                  style={{
                    width: 23.333332061767578,
                    height: 23.333332061767578,
                    background: "#AE1A1E",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    padding: 0,
                    boxSizing: "border-box",
                  }}
                  aria-hidden
                >
                  {HeartWhite}
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

        {/* RIGHT image rectangle exact Figma size */}
        <div
          style={{
            flex: "0 0 auto",
            width: 643,
            height: 385,
            borderRadius: 14.95,
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={whychoosePhoto}
            alt="Hands wrapping a gift"
            style={{
              width: 643, // exact width as given
              height: 385, // exact height as given
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Responsive rules: on smaller screens stack & make items fluid */}
      <style>{`
        @media (max-width: 1150px) {
          /* stack the left and right into one column */
          div[style*="flex-wrap: nowrap"] {
            flex-wrap: wrap !important;
            gap: 24px !important;
          }

          /* left block becomes full width and auto height */
          div[style*="width: 612.0087890625"] {
            width: 100% !important;
            height: auto !important;
          }

          /* feature cards become full width */
          div[style*="width: 298"] {
            width: 100% !important;
            height: auto !important;
          }

          /* right image becomes responsive */
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
      `}</style>
    </section>
  );
}
