import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css'
// import backgroundImage from '../abstract-textured-backgound_1258-30471.avif';

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

  return (
    <div
      className="relative h-screen w-screen flex justify-center items-center overflow-hidden  bg-black"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex justify-center items-center">
        <div className="relative w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ 
              opacity: 1, 
              scale: [0.5, 2.5, 2.5],
              rotateY: 0,
              x: isFirstAnimationComplete ? '-12vw' : 0
            }}
            transition={{ 
              duration: 1.25, 
              ease: "easeOut",
              x: { delay: 1.25 },
              rotateY: { duration: 1.5 },
              scale: { times: [0, 0.8, 1], duration: 1.25 }
            }}
            onAnimationComplete={() => setIsFirstAnimationComplete(true)}
            className="mainanimationtext text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-700  md:left-[-15%] lg:left-[-10%]"
            style={{
              fontWeight: 'bold',
              // filter: 'drop-shadow(0 0 15px rgba(29, 78, 216, 0.5))',
              position: 'relative',
              
            }}
          >
            C
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFirstAnimationComplete ? "visible" : "hidden"}
            className="mainanimationtext flex absolute text-white top-1/2 transform -translate-y-1/2 sm:left-[60%] md:left-[35%] lg:left-[30%] hover:cursor-pointer" // Center "APVALIS" relative to "C"
            style={{
              fontWeight: 'bold',
              // filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
            }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
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
