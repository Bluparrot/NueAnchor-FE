import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-black mb-8 font-Figtree  font-bold text-4xl">About NeuAnchor</p>
        <h2 className="text-3xl lg:text-4xl font-bold font-baskerville text-[#1D69B5] mb-8 ">
          Anchoring Change. Navigating Growth
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className=" text-black text-[18px] mb-8 font-Figtree font-normal ">
            At NeuAnchor, we believe progress is built on connection, compassion, and creativity. Our family of brands 
            spans education, healthcare, careers, hospitality, and beyond — all driven by our purpose to create 
            experiences enriching and impactful.
          </p>
          <p className="text-black text-[18px] mb-8 font-Figtree ">
            We are more than a parent company — we are a force for change. Through our eight brands, 
            NeuAnchor delivers solutions that inspire, heal, and empower.
          </p>
          <a 
            href="#brands" 
            className="inline-flex items-center justify-center px-16 py-3 border-1 border-[#1D69B5] text-[#1D69B5] font-medium rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 no-underline"
          >
            Know more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;