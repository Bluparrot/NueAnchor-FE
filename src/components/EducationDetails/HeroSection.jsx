import React from 'react';
import Badge from '../EducationDetails/Badge.jsx';

import Heroimg from '../../assets/EducationDetailspage/EducationHero.png';
import Button from '../UI/Button';


const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
     
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Heroimg})` }}
      >
        <div className="absolute inset-0  bg-opacity-20"></div>
      </div>

   
      <div className="relative z-10 w-[634px]   px-4 sm:px-6 lg:px-16">
        <div className="max-w-2xl">
    
          <div className="bg-white rounded-2xl p-[40px] shadow-xl">
            <div className="mb-2">
              <Badge variant="primary">NeuAnchor Education</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-[32px] font-bold text-black mb-2  font-baskerville  ">
              20+ Years of Experience in Building 
              <br />
              {/* <span>Young Adults</span> */}
            </h1>
            <h2 className="text-3xl lg:text-3xl font-bold text-[#1D69B5] mb-2  font-baskerville">
              Future-Ready Schools  
            </h2>
            
            <p className="text-lg text-black mb-8 leading-relaxed font-Figtree ">
                  NeuAnchor Education supports schools, trusts, and institutions in building, scaling, and reimagining education for the future.</p>
            
            <Button variant="primary" size="lg">
              Visit Site
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;