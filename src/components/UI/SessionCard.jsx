import React from 'react';

const SessionCard = ({ image, title, description, className = "" }) => {
  return (
    <div
      className={`bg-white w-[344px] h-[450px] p-6 rounded-2xl outline-2 outline-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="w-full h-[320px] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-xl font-semibold font-Figtree text-black leading-tight text-left mb-2">
          {title}
          
        </h3>
        <p>{description && <span className="font-normal font-Figtree text-[16px] mb-2 "> {description}</span>}</p>
      </div>
    </div>

  );
};

export default SessionCard;