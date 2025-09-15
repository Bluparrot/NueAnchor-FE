import React from "react";
import servicesImg from "../../assets/StarsDetails/services-center.png";
import parentImg from "../../assets/StarsDetails/parent.png";
import studentImg from "../../assets/StarsDetails/student.png";
import schoolImg from "../../assets/StarsDetails/school.png";
import communityImg from "../../assets/StarsDetails/community.png";

const cardData = [
  {
    img: parentImg,
    title: "Parent Guidance",
    desc: "1:1 consultations, workshops, and comprehensive resources to support families at every stage of their autism journey.",
  },
  {
    img: studentImg,
    title: "Student Support",
    desc: "Academic & career guidance, life skills development, and personalized support plans for students with autism.",
  },
  {
    img: schoolImg,
    title: "School Partnerships",
    desc: "Teacher training, inclusion programs, and management advisory services to create supportive educational environments.",
  },
  {
    img: communityImg,
    title: "Community & Awareness",
    desc: "Inspiring talks, community events, and shared stories that build understanding and acceptance.",
  },
];

const Services = () => (
  <>
    {/* Desktop styles keep existing layout intact */}
    <style>{`
      .services-title {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 128%;
        letter-spacing: 0%;
        color: #CE9400;
        margin: 0 0 16px 0;
        text-align: center;
      }
      .services-desc {
        font-family: 'Figtree', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 128%;
        color: #374151;
        text-align: center;
        width: 912px;
        margin: 0 auto 40px auto;
        opacity: 1;
      }
      .services-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        max-width: 1080px;
        margin: 0 auto;
      }
      .services-col {
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
      }
      .services-card {
        background: #FFFBEA;
        border-radius: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        border: 1px solid #F6E7C1;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-height: 220px;
        height: 220px;
        width: 101%;
        justify-content: flex-start;
      }
      .services-icon-img {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        margin-bottom: 12px;
        object-fit: cover;
        background: #FFD600;
        display: block;
      }
      .services-card-title {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 18px;
        color: #1f1c1cff;
        margin-bottom: 8px;
      }
      .services-card-desc {
        font-family: 'Figtree', sans-serif;
        font-size: 15px;
        color: #374151;
        margin-bottom: 0;
      }
      .services-center-img {
        width: 384px;
        height: 457px;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        display: block;
      }
      @media (max-width: 1200px) {
        .services-desc { width: 100%; }
      }
    `}</style>

    <section id="services" className="bg-white">
      {/* MOBILE — exact order and styling per Figma; desktop remains unchanged */}
      <div className="block md:hidden px-4 py-8 max-w-[430px] mx-auto">
        <h2
          className="text-center font-bold text-[22px] leading-[1.28] mb-2"
          style={{ color: "#CE9400", fontFamily: "Nunito, sans-serif" }}
        >
          Services We Provide
        </h2>
        <p
          className="text-center mx-auto mb-5 text-[#374151]"
          style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 400,
            fontSize: "12.5px",
            lineHeight: "1.28",
            opacity: 1,
            maxWidth: 280,
          }}
        >
          Comprehensive support designed to empower families, students, schools, and
          communities in the autism journey.
        </p>

        {/* Card component (mobile) */}
        {[
          cardData[0],
          cardData[1],
          "image",
          cardData[2],
          cardData[3],
        ].map((item, idx) =>
          item === "image" ? (
            <div key={`img-${idx}`} className="rounded-2xl overflow-hidden my-3">
              <img
                src={servicesImg}
                alt="Services center"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "328 / 244" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <article
              key={item.title}
              className="bg-[#FFFBEA] border border-[#F6E7C1] rounded-[16px] p-4 mb-3 shadow-sm text-center flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 rounded-[10px] object-contain mb-3"
                style={{ background: "#FFD600" }}
                loading="lazy"
                decoding="async"
              />
              <h3
                className="text-[#1F1C1C] font-semibold mb-1"
                style={{ fontFamily: "Nunito, sans-serif", fontSize: "15px" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#374151]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12.5px",
                  lineHeight: "1.35",
                }}
              >
                {item.desc}
              </p>
            </article>
          )
        )}
      </div>

      {/* DESKTOP — original section untouched */}
      <div className="hidden md:block py-16">
        <h2 className="services-title">Services We Provide</h2>
        <p className="services-desc">
          Comprehensive support designed to empower families, students, schools, and
          communities in the autism journey.
        </p>

        <div className="services-row">
          {/* Left column */}
          <div className="services-col">
            <div className="services-card">
              <img
                src={cardData[0].img}
                alt={cardData[0].title}
                className="services-icon-img"
              />
              <div className="services-card-title">{cardData[0].title}</div>
              <div className="services-card-desc">{cardData[0].desc}</div>
            </div>
            <div className="services-card">
              <img
                src={cardData[1].img}
                alt={cardData[1].title}
                className="services-icon-img"
              />
              <div className="services-card-title">{cardData[1].title}</div>
              <div className="services-card-desc">{cardData[1].desc}</div>
            </div>
          </div>

          {/* Center image */}
          <div>
            <img
              src={servicesImg}
              alt="Services Center"
              className="services-center-img"
            />
          </div>

          {/* Right column */}
          <div className="services-col">
            <div className="services-card">
              <img
                src={cardData[2].img}
                alt={cardData[2].title}
                className="services-icon-img"
              />
              <div className="services-card-title">{cardData[2].title}</div>
              <div className="services-card-desc">{cardData[2].desc}</div>
            </div>
            <div className="services-card">
              <img
                src={cardData[3].img}
                alt={cardData[3].title}
                className="services-icon-img"
              />
              <div className="services-card-title">{cardData[3].title}</div>
              <div className="services-card-desc">{cardData[3].desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Services;