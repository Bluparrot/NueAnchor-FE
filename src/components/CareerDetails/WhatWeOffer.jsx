import React from 'react';
import OfferItem from '../UI/OfferCard';
import whereImg from '../../assets/Where.png';
import where2Img from '../../assets/Where2.png';
import where3Img from '../../assets/Where3.png';
import where1Img from '../../assets/Where1.png';

// Updated content to match the Figma cards (order and text)
const offers = [
	{
		title: 'Career clarity for students & young adults',
		description: 'Subject choices, career paths, higher education direction.',
		imageSrc: whereImg,
		alt: 'Student holding books',
	},
	{
		title: 'Profile building',
		description:
			'CAS, CSR, creativity, sports, debates, writing, publishing, personal branding.',
		imageSrc: where2Img,
		alt: 'Young adults collaborating',
	},
	{
		title: 'Guidance for parents',
		description:
			'To better support children’s academic & career journeys.',
		imageSrc: where3Img,
		alt: 'Parents guidance discussion',
	},
	{
		title: 'Motivation & leadership development',
		description: 'For college students and youth.',
		imageSrc: where1Img,
		alt: 'Students in classroom',
	},
];

const WhatWeOffer = () => (
	<section className="ww-offer py-16 md:px-16 px-4 text-center">
		<style>{`
      .ww-offer .title {
        font-family: 'Libre Baskerville', serif;
      }
      .ww-offer .underline-bar {
        height: 6px;
        width: 120px;
        background: #1D69B5;
        border-radius: 9999px;
        margin: 0 auto 32px auto;
      }
      @media (max-width: 767px) {
        .ww-offer { padding-top: 24px; padding-bottom: 24px; }
        .ww-offer .title { font-size: 26px; line-height: 1.2; }
        .ww-offer .underline-bar { width: 96px; margin-bottom: 20px; }
        .ww-offer .grid-wrap { gap: 20px; }
      }
    `}</style>

		<h2 className="title text-[34px] md:text-[34px] font-bold text-title mb-2">
			What We Offer
		</h2>

		<div className="underline-bar" />

		<div className="grid-wrap grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16 py-4">
			{offers.map((offer, idx) => (
				<div key={idx} className="block">
					<OfferItem {...offer} />
				</div>
			))}
		</div>
	</section>
);

export default WhatWeOffer;
