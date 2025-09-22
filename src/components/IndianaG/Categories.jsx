// src/components/IndianaG/Categories.jsx
import React from "react";
import cat1 from "../../assets/IndianaG/cat1.png";
import cat2 from "../../assets/IndianaG/cat2.png";
import cat3 from "../../assets/IndianaG/cat3.png";
import cat4 from "../../assets/IndianaG/cat4.png";
import cat5 from "../../assets/IndianaG/cat5.png";
import cat6 from "../../assets/IndianaG/cat6.png";

const categories = [
  { title: "Corporate Gifts", img: cat1 },
  { title: "Personal Care", img: cat2 },
  { title: "Home & Decor", img: cat3 },
  { title: "Wellness & Beauty", img: cat4 },
  { title: "Festive Sets", img: cat5 },
  { title: "Gourmet Treats", img: cat6 },
];

// Repeat enough times for seamless scroll
const scrollCategories = [...categories, ...categories, ...categories];

const Categories = () => (
  <section className="py-12 md:py-16 bg-white">
    <h3
      className="text-center text-[24px] md:text-[32px] font-bold leading-[1.15] text-[#111827] mb-8 md:mb-10"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      Made for Every Gifting
      <br className="md:hidden" />
      Moment
    </h3>

    {/* Add gap between heading and images */}
    <div className="h-5 md:h-8"></div>

    {/* Infinite horizontal scroll for both mobile and desktop */}
    <div className="relative overflow-hidden w-full" style={{ paddingTop: "32px" }}>
      <div className="infinite-scroll-track flex items-center gap-8" style={{ whiteSpace: "nowrap" }}>
        {scrollCategories.map((c, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer transition-transform duration-300 group"
            style={{ width: 160, minWidth: 160, display: "inline-block" }} // Larger container, no negative margin
          >
            <div
              className="rounded-full overflow-visible bg-[#E5E7EB] flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 group-active:scale-105 shadow-md hover:shadow-xl"
              style={{ width: 128, height: 128 }}
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p
              className="mt-4 text-center text-[#111827] font-semibold transition-colors duration-300 group-hover:text-[#AE1A1E]"
              style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "17px",
                lineHeight: "1.35",
                letterSpacing: 0,
              }}
            >
              {c.title}
            </p>
          </div>
        ))}
      </div>
      <style>
        {`
          .infinite-scroll-track {
            animation: scrollX 32s linear infinite;
          }
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}
      </style>
    </div>
  </section>
);

export default Categories;
