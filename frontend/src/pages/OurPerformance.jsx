import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import g1 from '../g1.png';
import g2 from '../g2.png';
import g3 from '../g3.png';
const OurPerformance = () => {

  // const totalProfitLoss = stockData.reduce((acc, stock) => acc + stock.change, 0);
  // const isNetProfit = totalProfitLoss > 0;
  return (
    <div className="min-h-[60vh] w-full bg-black p-6">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Performance
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Trajectory Of Last Six Months Trades
        </p>
      </div>
      <div className="flex gap-6 h-full">
        {/* Left Chart */}
        <div className="w-1/3 h-90 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <img className='h-full  border rounded-lg' src={g1} alt='Graph1'/>
        </div>
        <div className="w-1/3 h-90 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
        <img className='h-full border rounded-lg' src={g2} alt='Graph1'/>
        </div>
        <div className="w-1/3 h-90 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
        <img className='h-full  border rounded-lg' src={g3} alt='Graph1'/>
          </div>
        </div>
        
     </div>        
  );
};

export default OurPerformance;