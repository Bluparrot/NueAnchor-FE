import React from 'react';
import { Check } from 'lucide-react';
import { iconMap } from '../../utils/iconMap.js';

export const ChoiceOption = ({ option, isSelected, onSelect }) => {
  const Icon = iconMap[option.icon] || iconMap.Sparkles;
  
  return (
    <div
      onClick={() => onSelect(option.id)}
      className={`
        relative p-5 cursor-pointer transition-all duration-300
        ${isSelected 
          ? 'bg-white border-blue-300 ' 
          : 'bg-white border-2 border-gray-100  '
        }
      `}
    >
      {isSelected && (
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
          {/* <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"> */}
            {/* <Check className="w-4 h-4 text-white" /> */}
          {/* </div> */}
        </div>
      )}

      <div className="flex items-start gap-1">
        <div className={`transition-colors duration-300
          ${isSelected 
            ? 'bg-title text-white' 
            : 'bg-title text-title hover:bg-title'
          }
        `}>
          {/* <Icon className="w-6 h-6" /> */}
        </div>
        
        <div className="flex-1">
          <h3 className={`
            text-xl font-semibold mb-1 transition-colors duration-300
            ${isSelected ? 'text-black' : 'text-black hover:text-black'}
          `}>
            {option.title}
          </h3>
          <p className={`
            leading-relaxed transition-colors duration-300
            ${isSelected ? 'text-blue-700' : 'text-slate-600 hover:text-slate-700'}
          `}>
            {option.description}
          </p>
        </div>
      </div>

      <div className={`
        absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
        ${!isSelected ? 'hover:opacity-5 bg-blue-600' : ''}
      `}></div>
    </div>
  );
};
