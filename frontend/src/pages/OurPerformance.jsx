import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const OurPerformance = () => {
  // Sample static data for layout purposes
  const sampleData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 }
  ];
  const stockData = [
    {
      symbol: 'RELIANCE',
      current: 2456.75,
      change: +45.80,
      percentChange: +1.2,
      isProfit: true
    },
    {
      symbol: 'TCS',
      current: 3567.90,
      change: -23.45,
      percentChange: -0.65,
      isProfit: false
    },
    {
      symbol: 'INFY',
      current: 1543.60,
      change: +15.30,
      percentChange: +1.0,
      isProfit: true
    },
    {
      symbol: 'HDFC',
      current: 1678.25,
      change: -12.35,
      percentChange: -0.73,
      isProfit: false
    }
  ];

  const totalProfitLoss = stockData.reduce((acc, stock) => acc + stock.change, 0);
  const isNetProfit = totalProfitLoss > 0;
  return (
    <div className="min-h-[60vh] w-full bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="flex gap-6 h-full">
        {/* Left Chart */}
        <div className="w-1/3 h-fit bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <div className="p-4">
            <h3 className="text-gray-200 text-lg font-medium mb-2">Market Overview</h3>
            <div className="flex justify-between text-sm text-gray-400 mb-4">
              <span>NIFTY 50</span>
              <span className="text-green-400">+1.2%</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }} />
                  <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex flex-col gap-4">
          {/* Live Data Section */}
          <div className="flex-1 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-200 text-lg font-medium">Today's Live Data</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Last updated: 12:45 PM</span>
              </div>
            </div>

            <div className="space-y-4">
              {stockData.map((stock) => (
                <div key={stock.symbol} className="bg-gray-900/30 rounded-lg px-2 p-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg text-white font-medium">{stock.symbol}</div>
                      <div className="text-2xl font-bold text-white mt-1">₹{stock.current.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-medium ${stock.isProfit ? 'text-green-400' : 'text-red-400'}`}>
                        {stock.isProfit ? '+' : ''}{stock.change.toFixed(2)}
                      </div>
                      <div className={`text-sm ${stock.isProfit ? 'text-green-400' : 'text-red-400'}`}>
                        {stock.isProfit ? '+' : ''}{stock.percentChange}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Summary Section */}
          <div className="h-fit bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 p-4">
            <h3 className="text-gray-200 text-lg font-medium mb-2">Today's Summary</h3>
            <div className="flex justify-between items-center h-12">
              <div>
                <div className="text-sm text-gray-400">Net Position</div>
                <div className={`text-2xl font-bold ${isNetProfit ? 'text-green-400' : 'text-red-400'}`}>
                  {isNetProfit ? '+' : ''}₹{Math.abs(totalProfitLoss).toFixed(2)}
                </div>
              </div>
              <div className={`text-5xl font-bold ${isNetProfit ? 'text-green-400' : 'text-red-400'}`}>
                {isNetProfit ? '▲' : '▼'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Chart */}
        <div className="w-1/3 h-fit bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <div className="p-4">
            <h3 className="text-gray-200 text-lg font-medium mb-2">Volume Analysis</h3>
            <div className="flex justify-between text-sm text-gray-400 mb-4">
              <span>Today's Volume</span>
              <span>2.3M</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }} />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPerformance;