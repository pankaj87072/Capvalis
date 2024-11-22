import React from 'react';
import g1 from '../g1.png';
import g2 from '../g2.png';
import g3 from '../g3.png';

const OurPerformance = () => {
  return (
    <div className="min-h-[60vh] w-full bg-black p-4 md:p-6">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
          Our Performance
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
          Trajectory Of Last Six Months Trades
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
        {/* Graphs */}
        <div className="md:w-1/3 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 mb-4 md:mb-0">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              className='w-full h-full object-cover rounded-lg' 
              src={g1} 
              alt='Graph 1'
            />
          </div>
        </div>
        <div className="md:w-1/3 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 mb-4 md:mb-0">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              className='w-full h-full object-cover rounded-lg' 
              src={g2} 
              alt='Graph 2'
            />
          </div>
        </div>
        <div className="md:w-1/3 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              className='w-full h-full object-cover rounded-lg' 
              src={g3} 
              alt='Graph 3'
            />
          </div>
        </div>
      </div>
    </div>        
  );
};

export default OurPerformance;