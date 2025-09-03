import React from 'react';
import FeatureCard from '../UI/FeatureCard';
// import { whyItMattersData } from '../../Data/WhyItMattersdData';
const whyItMattersData = [
  {
    id: 1,
    icon: "src/assets/Why1.png",
    title: "Ensures schools are future-ready and policy-compliant.",
    description: "Clear guidance helps students make informed decisions about their future path."
  },
  {
    id: 2,
    icon: "src/assets/Why2.png",
    title: "Helps institutions stand out with unique USPs.",
    description: "Comprehensive development creates competitive university applications."
  },
  {
    id: 3,
    icon: "src/assets/Why3.png",
    title: "Expert guidance that helps you move faster and smarter.",
    description: "Personalized guidance that goes deeper than standard counseling services."
  }
];

const WhyItMatters = () => {
  return (
    <section className="py-20 px-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[34px] text-title font-bold  font-baskerville mb-4">
            Why It Matters
          </h2>
          <div className="w-30 h-[6px] bg-gradient-to-r from-title to-title mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center ">
          {whyItMattersData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;