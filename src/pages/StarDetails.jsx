import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandHeader from "../components/StarDetails/BrandHeaders";
import HeroSection from "../components/StarDetails/HeroSection";
import OurPurpose from "../components/StarDetails/OurPurpose";
import Services from "../components/StarDetails/Services";
import HowWeHelp from "../components/StarDetails/HowWeHelp";
import Stories from "../components/StarDetails/Stories";
import CTA from "../components/StarDetails/CTA";
import PricingPlan from "../components/UI/PricingPlan";

const StarDetailPage = () => {
	return (
		<>
			<Header />
			<BrandHeader />
			<main className="bg-white">
				<HeroSection />
				<OurPurpose />
				<Services />
				<HowWeHelp />
				<Stories />
				<PricingPlan />
				<CTA />
			</main>
			<Footer />
		</>
	);
};

export default StarDetailPage;
