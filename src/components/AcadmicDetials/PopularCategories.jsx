import React, { useRef, useEffect } from "react";
import marketingIcon from "../../assets/AcadmicDetails/marketing.png";
import businessIcon from "../../assets/AcadmicDetails/business.png";
import creativeIcon from "../../assets/AcadmicDetails/creative.png";
import aiIcon from "../../assets/AcadmicDetails/ai.png";
import financeIcon from "../../assets/AcadmicDetails/finance.png";
import intelligenceIcon from "../../assets/AcadmicDetails/intelligence.png";

const baseCategories = [
  { icon: marketingIcon, label: "Marketing & Branding" },
  { icon: businessIcon, label: "Business Development" },
  { icon: creativeIcon, label: "Creative & Design" },
  { icon: aiIcon, label: "AI, ML & Data Science" },
  { icon: financeIcon, label: "Finance & Accounting" },
  { icon: intelligenceIcon, label: "Business Intelligence" },
];

// Duplicate categories for infinite scroll illusion
const categories = [
  ...baseCategories,
  ...baseCategories,
  ...baseCategories,
];

const PopularCategories = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let animationFrame;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 3) {
          scrollAmount = 0; // Reset to start for infinite effect
        }
        scrollContainer.scrollLeft = scrollAmount;
        animationFrame = requestAnimationFrame(scrollStep);
      }
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      style={{
        background: "#fff",
        padding: "40px 0 32px 0",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "130%",
          color: "#222",
          marginBottom: "12px",
        }}
      >
        Popular Categories Across the Platform
      </h2>

      <div
        style={{
          width: "60px",
          height: "4px",
          background: "#1D69B5",
          borderRadius: "2px",
          margin: "0 auto 32px auto",
        }}
      />

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "32px",
          overflowX: "auto",
          whiteSpace: "nowrap",
          marginTop: "16px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="infinite-scroll"
      >
        {categories.map((cat, idx) => (
          <div
            key={cat.label + idx}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "164px",
              flex: "0 0 auto",
            }}
          >
            <div
              className="category-icon-zoom"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                border: "1px dotted #D9D9D9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
                background: "#fff",
                transition: "transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)",
              }}
            >
              <img
                src={cat.icon}
                alt={cat.label}
                style={{ width: "32px", height: "32px", objectFit: "contain" }}
              />
            </div>
            <span
              style={{
                fontFamily: "Inter, 'Figtree', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "18px",
                textTransform: "capitalize",
                color: "#222",
                width: "164px",
                height: "19px",
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                textAlign: "center",
                verticalAlign: "middle",
                boxSizing: "border-box",
              }}
            >
              {cat.label}
            </span>
          </div>
        ))}
      </div>
      <style>
        {`
          .infinite-scroll::-webkit-scrollbar {
            display: none;
          }
          .category-icon-zoom {
            transition: transform 0.4s cubic-bezier(.68,-0.55,.27,1.55);
          }
          .category-icon-zoom:hover {
            transform: scale(1.15);
          }
          .category-icon-zoom:active {
            transform: scale(0.92);
          }
        `}
      </style>
    </section>
  );
};

export default PopularCategories;
