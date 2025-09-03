import React from 'react';
import OfferItem from '../UI/OfferCard';

const offers = [
  {
    title: 'End-to-end consultancy for setting up new schools ',
    description: 'procedures, compliances, business plans, curriculum selection.',
    imageSrc: 'src/assets/EducationDetailspage/What1.png',
    alt: 'Student holding books',
  },
  {
    title: 'Advisory on infrastructure, operations, teacher recruitment, training, and leadership building.',
    description: '',
    imageSrc: 'src/assets/EducationDetailspage/What2.png',
    alt: 'Young adults collaborating',
  },
  {
    title: 'Strategic guidance on revenue models, partnerships, pricing, and marketing.',
    description: '',
    imageSrc: 'src/assets/EducationDetailspage/What3.png',
    alt: 'Student holding books',
  },
  {
    title: 'Inclusive education design',
    description: 'special needs integration, extracurriculars, sports infra',
    imageSrc: 'src/assets/EducationDetailspage/What4.png',
    alt: 'Young adults collaborating',
  },
];

const WhatWeOffer = () => (
  <section className="py-16 px-16 text-center ">
    <h2 className="text-4xl font-baskerville text-title font-bold mb-4">What We Offer</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-title to-title mx-auto rounded-full mb-8"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16 py-8">
      {offers.map((offer, idx) => (
        <OfferItem key={idx} {...offer} />
      ))}
    </div>
  </section>
);

export default WhatWeOffer;
