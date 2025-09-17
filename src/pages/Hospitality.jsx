import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandHeader from "../components/Healing/BrandHeader"; // optional subnav
import Hero from   "../components/Hospitality/Hero";
import About from "../components/Hospitality/About";
import OurMission from "../components/Hospitality/OurMission";
import WhyChoose from "../components/Hospitality/WhyChoose";
import JoinUs from "../components/Hospitality/JoinUs";
//import WhyChoose from "../components/Healing/WhyChoose";
//import OurServices from "../components/Healing/OurServices";
//import WhyFunction from "../components/Healing/WhyFunction";
//import OurApproch from "../components/Healing/OurApproch";
//import Optimal from "../components/Healing/Optimal";




const HospitalityPage = () => {
  return (
    <>
      <Header />
      <BrandHeader />
      <main className="bg-white">
        <Hero />
        <About />
        <OurMission />
        <WhyChoose />
        <JoinUs />

        
        
      </main>
      <Footer />
    </>
  );
};

export default HospitalityPage;
