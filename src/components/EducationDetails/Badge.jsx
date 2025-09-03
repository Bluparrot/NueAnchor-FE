import React from 'react';

const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-[#D2E8FF]  border border-[#81BFFF] text-blue-800 mb-4 ',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;