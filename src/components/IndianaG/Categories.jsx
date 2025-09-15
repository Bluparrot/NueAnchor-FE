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

const Categories = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      {/* MOBILE — match Figma exactly; desktop untouched */}
      <div className="md:hidden max-w-[430px] mx-auto px-5">
        <h3
          className="text-center text-[24px] font-bold leading-[1.15] text-[#111827] mb-8"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Made for Every Gifting
          <br />
          Moment
        </h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {categories.map((c) => (
            <div key={c.title} className="flex flex-col items-center">
              <div
                className="rounded-full overflow-hidden bg-[#E5E7EB]"
                style={{ width: 88, height: 88 }}
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
                className="mt-3 text-center text-[#111827] font-semibold"
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.35",
                  letterSpacing: 0,
                }}
              >
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP — keep existing layout (unchanged) */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <h3
            className="text-[28px] md:text-[32px] font-bold mb-10"
            style={{ fontFamily: "Figtree, sans-serif", color: "#111827" }}
          >
            Made for Every Gifting Moment
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
            {categories.map((c) => (
              <div
                key={c.title}
                className="flex flex-col items-center cursor-pointer transition-transform duration-300"
                style={{ width: 150, height: 189, gap: 17 }}
              >
                <div
                  className="rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                  style={{
                    width: 100,
                    height: 100,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>

                <div
                  className="text-center mt-4 transition-colors duration-300 hover:text-[#AE1A1E]"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "20px",
                    color: "#1F2937",
                  }}
                >
                  {c.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
