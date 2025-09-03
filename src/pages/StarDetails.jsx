import React, { useState } from 'react';

import HeroSection from '../components/StarDetails/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SubHeader from '../components/UI/SubHeader.jsx';
import BrandsHeader from '../components/StarDetails/BrandHeaders.jsx';
import WhatWeOffer from '../components/StarDetails/WhatWeOffer.jsx';
import WhyItMatters from '../components/StarDetails/WhyItMatters.jsx';
import Trust from '../components/StarDetails/Trust.jsx';
import ProgramsSection from '../components/StarDetails/ProgramsAndSession.jsx';

const StarDetails = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
const [showBrandsHeader, setShowBrandsHeader] = useState(false);
  return (
    <section>
        <Header />
            
                <BrandsHeader />
                <HeroSection />
                <ProgramsSection />

         <Footer />
    </section>
  );
};

export default StarDetails;