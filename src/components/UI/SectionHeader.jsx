import React from 'react';

export const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl lg:text-[34px] font-bold font-baskerville text-title mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-slate-600 mb-4">{subtitle}</p>}
    <div className="w-20 h-1 bg-title mx-auto rounded-full"></div>
  </div>
);