import React from "react";
import { Link, useLocation } from "react-router-dom";

const BrandHeader = () => {
  const location = useLocation();
  const subNavItems = [
    { name: "NeuAnchor Careers", path: "/brands" },
    { name: "Education", path: "/education" },
    { name: "Academies", path: "/academies" },
    { name: "Conferences", path: "/conferences" },
    { name: "Healing", path: "/healing" },
    { name: "Hospitality", path: "/hospitality" },
    { name: "NeuAnchor Stars", path: "/stars" },
    { name: "INDIANA G", path: "/indiana-g" },
  ];

  return (
    <div className="bg-gray-50 border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 h-14 overflow-x-auto">
          {subNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm whitespace-nowrap transition-all duration-200 pb-4 pt-4 border-b-2 ${
                  isActive
                    ? "text-blue-600 font-semibold border-blue-600"
                    : "text-gray-600 hover:text-blue-600 border-transparent hover:border-blue-300"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
