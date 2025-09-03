import React from 'react';
import OfferItem from '../UI/OfferCard';

const offers = [
  {
    title: 'Career clarity for students & young adults',
    description: 'Subject choices, career paths, higher education direction.',
    imageSrc: 'src/assets/Where.png',
    alt: 'Student holding books',
  },
  {
    title: 'Profile building',
    description: 'CAS, CSR, creativity, sports, debates, writing, publishing, personal branding.',
    imageSrc: 'src/assets/Where2.png',
    alt: 'Young adults collaborating',
  },
  {
    title: 'Career clarity for students & young adults',
    description: 'Subject choices, career paths, higher education direction.',
    imageSrc: 'src/assets/Where3.png',
    alt: 'Student holding books',
  },
  {
    title: 'Profile building',
    description: 'CAS, CSR, creativity, sports, debates, writing, publishing, personal branding.',
    imageSrc: 'src/assets/Where1.png',
    alt: 'Young adults collaborating',
  },
];

const WhatWeOffer = () => (
  <section className="py-16 px-16 text-center ">
    <h2 className="text-[34px] font-bold font-baskerville text-title mb-2 ">What We Offer</h2>
    <div className='h-[6px] w-30 bg-title rounded-3xl justify-center items-center inline-block mb-8'></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16 py-8">
      {offers.map((offer, idx) => (
        <OfferItem key={idx} {...offer} />
      ))}
    </div>
  </section>
);

export default WhatWeOffer;
