import React from 'react';
import { Users, FileUp as FileUser, GraduationCap } from 'lucide-react';

// Icon mapping for dynamic icon selection
const iconMap = {
  Users,
  FileUser,
  GraduationCap
};

const FeatureCard = ({ icon, title ,description}) => {

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight flex justify-center inline-block">
            {title}
            
          </h3>
          <p>{description && <span className="font-normal font-Figtree"> {description}</span>}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;