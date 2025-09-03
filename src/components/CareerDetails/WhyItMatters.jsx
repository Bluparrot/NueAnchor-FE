import React from 'react';
import FeatureCard from '../UI/FeatureCard';
import { whyItMattersData } from '../../Data/WhyItMattersdData';

const WhyItMatters = () => {
  return (
    <section className="py-20 px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[36px]  font-baskerville font-bold text-[#1D69B5] mb-2">
            Why It Matters
          </h2>
          <div className="w-30 h-[6px] bg-title  mx-auto rounded-full mb-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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