import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
const AnimatedLogo = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Hide after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='animatedpagebg h-screen w-screen flex justify-center items-center bg-black'>
    {/* // style={{ background: 'linear-gradient(135deg, #1f1c2c, #928DAB)' }} */}
    <motion.div
    className='image '
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 3.5 : 0, scale: isVisible ? 2.5 :2.5}}
      transition={{ duration: 1.25, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: '45%',
        left: '45%',
        transform: 'translate(-50%, -50%)',
        fontSize: '48px',
        fontWeight: 'bold',
        fontFamily:'-moz-initial',
        color:'white',
      }}
    >
      Strike Price Pro
    </motion.div>
    </div>
  );
};

export default AnimatedLogo;