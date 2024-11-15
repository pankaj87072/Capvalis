import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const AnimatedLogo = () => {
  const [isFirstAnimationComplete, setIsFirstAnimationComplete] = useState(false);
  
  const letters = "APVALIS".split("");
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotate: -10 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 1.75 } }
  };

  // Calculate dynamic position for 'C' based on screen size
  const getCPosition = () => {
    return {
      scale: [0.5, 2.5, 2.5],
      x: isFirstAnimationComplete ? [0, '-12vw'] : 0
    };
  };

  return (
    <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black opacity-30" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex justify-center items-center">
        <div className="relative w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ 
              opacity: 1, 
              ...getCPosition(),
              rotateY: 0
            }}
            transition={{ 
              duration: 1.25, 
              ease: "easeOut",
              x: { delay: 1.25 },
              rotateY: { duration: 1.5 },
              scale: { times: [0, 0.8, 1], duration: 1.25 }
            }}
            onAnimationComplete={() => setIsFirstAnimationComplete(true)}
            className="mainanimationtext font-extrabold text-blue-700"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              position: 'relative',
              fontSize: 'clamp(2rem, 8vw, 8rem)',
              transform: 'translateX(-50%)',
              marginRight: 'clamp(1rem, 3vw, 3rem)'
            }}
          >
            C
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFirstAnimationComplete ? "visible" : "hidden"}
            className="mainanimationtext flex absolute text-white hover:cursor-pointer"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              marginLeft: 'clamp(2rem, 6vw, 6rem)'
            }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                  fontSize: 'clamp(3rem, 8vw, 8rem)',
                  marginLeft: 'clamp(0.1rem, 0.3vw, 0.3rem)'
                }}
                whileHover={{ 
                  scale: 1.1, 
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40" />
    </div>
  );
};

export default AnimatedLogo;