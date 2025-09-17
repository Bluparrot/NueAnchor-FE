import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandHeader from "../components/Healing/BrandHeader"; // optional subnav
import Hero from "../components/Healing/Hero";
import WhyChoose from "../components/Healing/WhyChoose";
import OurServices from "../components/Healing/OurServices";
import WhyFunction from "../components/Healing/WhyFunction";
import OurApproch from "../components/Healing/OurApproch";
import Optimal from "../components/Healing/Optimal";




const HealingPage = () => {
  return (
    <>
      <Header />
      <BrandHeader />
      <main className="bg-white">
        <Hero />
        <WhyChoose />
        <OurServices />
        <WhyFunction />
        <OurApproch />
        <Optimal />

        
        
      </main>
      <Footer />
    </>
  );
};

export default HealingPage;
