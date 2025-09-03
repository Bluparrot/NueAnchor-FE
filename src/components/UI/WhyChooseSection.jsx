import React, { useState } from 'react';
import { choiceOptionsData } from '../../Data/choiceOptions.js';
import { SectionHeader } from './SectionHeader';
import { OptionsList } from './OptionsList';
import { FeaturedImage } from './FeaturedImage';

export const WhyChooseSection = ({ 
  title = "Why Choose Us", 
  subtitle = "",
  options = choiceOptionsData,
  defaultSelected = "curated"
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected);
  const selectedChoice = options.find(option => option.id === selectedOption) || options[0];

  return (
    <section className="min-h-screen bg-white py-16 px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <OptionsList 
            options={options}
            selectedOption={selectedOption}
            onOptionSelect={setSelectedOption}
          />
          
          <FeaturedImage selectedChoice={selectedChoice} />
        </div>
      </div>
    </section>
  );
};
