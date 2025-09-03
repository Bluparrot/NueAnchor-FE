import React from 'react';
import FeatureCard from '../UI/FeatureCard';
// import { whyItMattersData } from '../../Data/WhyItMattersdData';


const whyItMattersData =  [{
    id: 1,
    icon: "src/assets/Why1.png",
    title: "Enroll",
    description: "Choose from a library of certified online courses."
  },
  {
    id: 2,
    icon: "src/assets/Why2.png",
    title: "Learn",
    description: "Self-paced, multimedia-rich modules accessible anytime."
  },
  {
    id: 3,
    icon: "src/assets/Why3.png",
    title: "Achieve",
    description: "Earn certifications recognized by institutions & industry."
  }]

const WhyItMatters = () => {
  return (
    <section className="py-20 px-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItMattersData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;