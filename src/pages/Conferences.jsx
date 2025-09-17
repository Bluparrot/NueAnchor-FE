import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandHeader from "../components/Healing/BrandHeader";
import Hero from   "../components/Conferences/Hero";
import Growth from "../components/Conferences/Growth";
import OurMission from "../components/Conferences/OurMission";
import WhyChoose from "../components/Conferences/WhyChoose";
import Transform from "../components/Conferences/Transform";




const ConferencesPage = () => {
  return (
    <>
      <Header />
      <BrandHeader />
      <main className="bg-white">
        <Hero />
        <Growth />
        <OurMission />
        <WhyChoose />
        <Transform />

        
        
      </main>
      <Footer />
    </>
  );
};

export default ConferencesPage;
