import React from "react";
import purposeImg from "../../assets/StarsDetails/OurPurpose.png";

const OurPurpose = () => (
  <>
    <section className="w-full bg-[#F6F8FA] py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Left: Text content */}
      <div className="max-w-xl flex-1">
        <h2 className="text-[32px] font-bold text-[#0b74a6] mb-4 font-libre">
          Our Purpose
        </h2>
        <p className="text-[16px] text-[#374151] font-figtree mb-6 leading-relaxed">
          What began as one parent's search for guidance has evolved into a trusted support system for families navigating the autism journey. We understand the challenges because we’ve lived them, and we know the hope that comes with the right support and community.
        </p>
        <div className="bg-white rounded-[12px] shadow p-5 border-l-4 border-[#0b74a6]">
          <p className="text-[#1F2937] text-[16px] font-medium mb-2">
            “Autism is manageable with the right care, guidance, and community support — and we are here to walk that journey with you.”
          </p>
          <span className="text-[#0b74a6] text-[14px] font-figtree font-semibold">
            — NeuAnchor Stars Team
          </span>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center purpose-img-container" tabIndex={0}>
        <img
          src={purposeImg}
          alt="Our Purpose"
          className="w-[380px] h-[260px] object-cover rounded-[18px] shadow purpose-img"
          style={{ transition: "transform 0.3s cubic-bezier(.4,0,.2,1)" }}
        />
      </div>
    </section>
    <style>{`
      .purpose-img-container:hover .purpose-img,
      .purpose-img-container:focus .purpose-img {
        transform: scale(1.06);
      }
      .purpose-img {
        transition: transform 0.3s cubic-bezier(.4,0,.2,1);
      }
    `}</style>
  </>
);

export default OurPurpose;