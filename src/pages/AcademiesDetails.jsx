import React, { useState } from 'react';

import HeroSection from '../components/AcadmicDetials/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SubHeader from '../components/UI/SubHeader.jsx';
import BrandsHeader from '../components/AcadmicDetials/BrandHeaders.jsx';
import WhatWeOffer from '../components/AcadmicDetials/WhatWeOffer.jsx';
import ProgramsSection from '../components/AcadmicDetials/ProgramsAndSession.jsx';
import WhyItMatters from '../components/AcadmicDetials/WhyItMatters.jsx';
import { WhyChooseSection } from '../components/UI/WhyChooseSection.jsx';
import HeroSection1 from '../components/AcadmicDetials/HeroSection.jsx';


const AcademiesDetails = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [showBrandsHeader, setShowBrandsHeader] = useState(false);
  return (
    <section>
        <Header />
            
                <BrandsHeader />
                <HeroSection1 />
                <ProgramsSection />
                {/* <WhatWeOffer /> */}
                <WhyItMatters />
                <WhyChooseSection 
                    // options={customOptionsData}
                    title="Why Choose Indiana G"
                />


                
         <Footer />
    </section>
  );
};

export default AcademiesDetails;