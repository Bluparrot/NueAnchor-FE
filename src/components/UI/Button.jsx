import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 ';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white mb-6 hover:bg-blue-700  focus:ring-blue-500 shadow-md hover:shadow-lg',
    secondary: 'bg-black text-white hover:bg-gray-700  shadow-md hover:shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-28 py-2 text-sm',
    lg: 'px-16 py-2 text-base',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;