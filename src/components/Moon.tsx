import React from 'react';

const Moon: React.FC = () => {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute w-full h-full rounded-full bg-gray-200 shadow-lg overflow-hidden">
        {/* Кратеры на луне */}
        <div className="absolute w-8 h-8 rounded-full bg-gray-300 top-10 left-12"></div>
        <div className="absolute w-6 h-6 rounded-full bg-gray-300 top-20 left-32"></div>
        <div className="absolute w-10 h-10 rounded-full bg-gray-300 top-36 left-20"></div>
        
        {/* Тени на луне */}
        <div className="absolute w-full h-full rounded-full bg-black opacity-10"></div>
        <div className="absolute w-2/3 h-full left-0 rounded-l-full bg-black opacity-5"></div>
      </div>
    </div>
  );
};

export default Moon;
