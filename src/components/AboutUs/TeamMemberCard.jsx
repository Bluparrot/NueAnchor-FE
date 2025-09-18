import React from 'react';

const TeamMemberCard = ({
  imageUrl,
  name,
  designation,
  isActive = false,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center text-center group ${className}`}>
      <div className={`
        relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden
        ${isActive 
          ? 'ring-4 ring-[#1D69B5] ring-offset-4' 
          : 'ring-4 ring-gray-300 ring-offset-4'
        }
        transition-all duration-300 hover:ring-[#1D69B5] hover:scale-105 active:ring-[#1D69B5] active:scale-105
      `}>
        <img
          src={imageUrl}
          alt={`${name} - ${designation}`}
          className={`
            w-full h-full object-cover transition-all duration-300
            ${isActive ? '' : 'grayscale group-hover:grayscale-0 group-active:grayscale-0'}
          `}
        />
      </div>
      <div className="mt-4 space-y-1">
        <p className={`
          text-xs font-medium uppercase tracking-wider transition-colors duration-300
          ${isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500 group-active:text-gray-500'}
        `}>
          {designation}
        </p>
        <h3 className={`
          text-lg font-semibold transition-colors duration-300
          ${isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900 group-active:text-gray-900'}
        `}>
          {name}
        </h3>
      </div>
    </div>
  );
};

export default TeamMemberCard;