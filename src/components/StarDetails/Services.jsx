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
        --yellow: #EDC706;
        position: relative;
        background: #FFFFFF;                /* always white by default */
        border-radius: 16px;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        min-height: 220px;
        height: 220px;
        width: 101%;
        border: 1px solid #F3E3B8;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        transition:
          background .35s ease,
          box-shadow .35s ease,
          transform .35s ease;
        isolation: isolate;
        overflow: visible;
      }

      /* Hidden tilted layer (white) – shows only on hover for depth */
      .services-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: #FFFFFF;
        border-radius: 18px;
        transform: translate(10px,10px) rotate(-6deg) scale(.96);
        opacity: 0;
        transition:
          opacity .4s ease,
          transform .55s cubic-bezier(.19,1,.22,1),
          box-shadow .4s ease;
        z-index: -1;
        box-shadow: 0 10px 22px -8px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.08);
        pointer-events: none;
      }

      /* Hover/focus: card itself turns yellow; tilted white layer appears behind */
      .services-card:hover,
      .services-card:focus-visible {
        background: var(--yellow);          /* white -> yellow */
        box-shadow: 0 8px 26px -6px rgba(0,0,0,0.22), 0 3px 8px rgba(0,0,0,0.08);
        transform: translateY(-2px);
      }
      .services-card:hover::before,
      .services-card:focus-visible::before {
        opacity: 1;
        transform: translate(6px,6px) rotate(-4deg) scale(1);
      }

      /* Mobile keeps the same effect */
      .services-card--mobile {
        min-height:auto;
        height:auto;
        padding:16px 18px 18px;
        text-align:center;
        align-items:center;
      }

      @media (prefers-reduced-motion: reduce) {
        .services-card,
        .services-card::before { transition: none; }
      }

      .services-icon-img {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        margin-bottom: 12px;
        object-fit: cover;
        background: #e0dfd7ff;
        display: block;
      }
      .services-card-title {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 18px;
        color: #1f1c1c;
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

      .services-icon-img,
      .services-center-img {
        transition: transform 0.45s cubic-bezier(.19,1,.22,1);
      }
      .services-card:hover .services-icon-img,
      .services-card:focus-visible .services-icon-img,
      .services-center-img:hover,
      .services-center-img:focus-visible {
        transform: scale(1.08);
      }
      .services-card:active .services-icon-img,
.services-center-img:active {
  transform: scale(1.08);
}
    `}</style>

		<section id="services" className="bg-white">
			{/* MOBILE — exact order and styling per Figma; desktop remains unchanged */}
			<div className="block md:hidden px-4 py-8 max-w-[430px] mx-auto">
				<h2
					className="text-center font-bold text-[22px] leading-[1.28] mb-2"
					style={{ color: "#e3ae0fff", fontFamily: "Nunito, sans-serif" }}
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
						<div key={`img-${idx}`} className="rounded-2xl overflow-hidden my-3 ">
							<img
								src={servicesImg}
								alt="Services center"
								className="services-center-img w-full h-auto object-cover"
								style={{ aspectRatio: "328 / 244" }}
								loading="lazy"
								decoding="async"
							/>
						</div>
					) : (
						<article
							key={item.title}
							tabIndex={0}
							className="services-card services-card--mobile mb-3"
						>
							<img
								src={item.img}
								alt={item.title}
								className="services-icon-img w-10 h-10 rounded-[10px] object-contain mb-3"
								style={{ background: "#ebe9e1ff" }}
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
						<div className="services-card" tabIndex={0}>
							<img
								src={cardData[0].img}
								alt={cardData[0].title}
								className="services-icon-img"
							/>
							<div className="services-card-title">{cardData[0].title}</div>
							<div className="services-card-desc">{cardData[0].desc}</div>
						</div>
						<div className="services-card" tabIndex={0}>
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
						<div className="services-card" tabIndex={0}>
							<img
								src={cardData[2].img}
								alt={cardData[2].title}
								className="services-icon-img"
							/>
							<div className="services-card-title">{cardData[2].title}</div>
							<div className="services-card-desc">{cardData[2].desc}</div>
						</div>
						<div className="services-card" tabIndex={0}>
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