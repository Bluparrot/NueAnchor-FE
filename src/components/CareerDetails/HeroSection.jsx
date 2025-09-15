import React from 'react';
import Badge from '../EducationDetails/Badge.jsx';
import Heroimg from '../../assets/CareerHero.png';
import Button from '../UI/Button';

const HeroSection = () => {
  return (
    <section className="w-full mx-auto">
      {/* MOBILE VERSION */}
      <div className="block md:hidden w-full bg-[#F6F5F1]">
        {/* Content block */}
        <div
          className="w-full"
          style={{
            background: "#F0ECE4",
            padding: "32px 20px",
          }}
        >
          <div className="max-w-[335px] mx-auto flex flex-col items-start text-left">
            <span className="inline-block bg-[#EAF6FF] text-[#1D69B5] px-4 py-2 rounded-full text-[13px] font-bold tracking-wide mb-4">
              NeuAnchor Careers
            </span>
            <h1
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontWeight: 700,
                fontSize: "29px",
                lineHeight: "128%",
                color: "#1F2937",
                marginBottom: "8px",
              }}
            >
              Guiding Students and <br />
              Young Adults
            </h1>
            <h2
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontWeight: 700,
                fontSize: "29px",
                lineHeight: "128%",
                color: "#1D69B5",
                marginBottom: "16px",
              }}
            >
              Towards Clarity & Purpose
            </h2>
            <p className="text-[16px] text-[#334155] font-medium mb-6">
              From subject selection to building global-ready profiles, NeuAnchor Careers helps students and families make confident, informed choices.
            </p>
            <a
              href="#"
              className="inline-block bg-[#1D69B5] text-white px-6 py-3 rounded-[8px] shadow font-bold text-[16px]"
              aria-label="Visit Site"
              style={{ marginBottom: "16px", transition: "background 0.2s, color 0.2s" }}
              onMouseOver={e => {
                e.currentTarget.style.background = "#155a96";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "#1D69B5";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Visit Site
            </a>
          </div>
        </div>
        {/* Image below content block */}
        <div className="w-full flex justify-center overflow-hidden" style={{ height: "216px" }}>
          <img
            src={Heroimg}
            alt="Career guidance group"
            className="block"
            style={{
              width: "375px",
              height: "216px",
              objectFit: "cover",
              objectPosition: "110% center", // more right center
              opacity: 1,
              transform: "rotate(0deg)",
              maxWidth: "100%",
            }}
            loading="lazy"
          />
        </div>
        <style>
          {`
            @media (max-width: 767px) {
              a[aria-label="Visit Site"]:hover {
                background: #155a96 !important;
                color: #fff !important;
              }
            }
          `}
        </style>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:flex relative min-h-[600px] items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Heroimg})` }}
        >
          <div className="absolute inset-0 bg-opacity-20"></div>
        </div>
        {/* Content Container */}
        <div className="relative z-10 w-[634px] px-4 sm:px-6 lg:px-16">
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl p-[40px] shadow-xl">
              <div className="mb-2">
                <Badge variant="primary">NeuAnchor Careers</Badge>
              </div>
              <h1 className="text-4xl lg:text-3xl font-bold text-black font-baskerville mb-2 leading-tight ">
                Guiding Students and <br />
                <span>Young Adults</span>
              </h1>
              <h2 className="text-3xl lg:text-3xl font-bold text-title font-baskerville mb-4 leading-tight">
                Towards Clarity & Purpose
              </h2>
              <p className="text-lg text-black font-Figtree mb-8 leading-relaxed">
                From subject selection to building global-ready profiles, NeuAnchor Careers helps students and families make confident, informed choices.
              </p>
              <Button variant="primary" size="lg">
                Visit Site
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;