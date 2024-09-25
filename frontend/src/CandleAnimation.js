import React from 'react';
import { motion } from 'framer-motion';

// Candlestick Component
const Candlestick = ({ type, open, close, high, low }) => {
  // Determine the color and height based on candlestick type
  const isBullish = close > open;
  const color = isBullish ? '#00b894' : '#d63031';
  const bodyHeight = Math.abs(close - open);
  const wickHeight = high - low;

  // Animation variants for the candlestick body and wick
  const bodyVariants = {
    hidden: { height: 0 },
    visible: { height: bodyHeight },
  };

  const wickVariants = {
    hidden: { height: 0 },
    visible: { height: wickHeight },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={wickVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          width: '4px',
          backgroundColor: color,
          position: 'relative',
          top: `${bodyHeight / 2}px`,
        }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bodyVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          width: '20px',
          backgroundColor: color,
          position: 'relative',
          top: `${wickHeight / 2}px`,
        }}
      />
    </div>
  );
};

// Main Component
const CandleAnimation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '200px' }}>
      {/* Example of a bullish candle */}
      <Candlestick type="bullish" open={100} close={150} high={160} low={90} />
      {/* Example of a bearish candle */}
      <Candlestick type="bearish" open={150} close={100} high={170} low={80} />
    </div>
  );
};

export default CandleAnimation;
