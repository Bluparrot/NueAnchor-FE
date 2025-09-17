import React from "react";

const services = [
  {
    title: "Comprehensive Functional Medicine Solutions",
    items: [
      "Certification Programs",
      "Continuing Education",
      "Hands-on Training",
    ],
    link: "#",
    linkText: "Learn More",
  },
  {
    title: "Expert Consultancy Services",
    items: [
      "Practice Setup Guidance",
      "Protocol Development",
      "Implementation Support",
    ],
    link: "#",
    linkText: "Book Consultation",
  },
  {
    title: "Advanced Therapeutic Services",
    items: [
      "Gut Healing Programs",
      "Detoxification Protocols",
      "Personalized Nutrition Plans",
    ],
    link: "#",
    linkText: "View All Therapies",
  },
  {
    title: "Strategic Partnerships",
    items: [
      "Clinic Partnerships",
      "Educational Collaborations",
      "Technology Integration",
    ],
    link: "#",
    linkText: "Partner With Us",
  },
];

const OurServices = () => (
  <section className="bg-[#F5FAF7] py-14">
    <h2 className="text-center text-[32px] font-baskerville font-bold text-[#189C3E] mb-12">
      Our Services
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-4">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-white rounded-[18px] shadow-sm px-7 py-8 flex flex-col justify-between h-full"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-4">{service.title}</h3>
          <ul className="mb-6 list-disc list-inside text-gray-700 text-[15px] space-y-1">
            {service.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <a
            href={service.link}
            className="inline-flex items-center text-[#189C3E] font-semibold text-[15px] hover:underline"
          >
            {service.linkText}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default OurServices;