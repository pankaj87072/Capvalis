import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  const [isFirstAnimationComplete, setIsFirstAnimationComplete] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Check screen size and update responsive design
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const letters = "APVALIS".split("");
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotate: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0, 
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: 1.75 
      } 
    }
  };

  // Determine responsive sizing and positioning
  const getResponsiveStyles = () => {
    if (screenSize.width < 640) { // Small screens
      return {
        cFontSize: 'clamp(3rem, 20vw, 6rem)',
        lettersFontSize: 'clamp(2rem, 10vw, 4rem)',
        cMarginRight: '-10vw',
        lettersMarginLeft: '10vw',
        cScale: [0.5, 1.2, 1.2],
      };
    } else if (screenSize.width < 1024) { // Medium screens
      return {
        cFontSize: 'clamp(4rem, 15vw, 8rem)',
        lettersFontSize: 'clamp(3rem, 8vw, 6rem)',
        cMarginRight: '-8vw',
        lettersMarginLeft: '8vw',
        cScale: [0.5, 1.5, 1.5],
      };
    } else { // Large screens
      return {
        cFontSize: 'clamp(2rem, 8vw, 8rem)',
        lettersFontSize: 'clamp(3rem, 8vw, 8rem)',
        cMarginRight: '-12vw',
        lettersMarginLeft: '12vw',
        cScale: [0.5, 2.5, 2.5],
      };
    }
  };

  const {
    cFontSize,
    lettersFontSize,
    cMarginRight,
    lettersMarginLeft,
    cScale
  } = getResponsiveStyles();

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black opacity-30 z-0" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex justify-center items-center">
        <div className="relative w-full flex justify-center items-center">
          {/* Animated 'C' */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ 
              opacity: 1, 
              scale: cScale,
              x: isFirstAnimationComplete ? cMarginRight : 0,
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
            className="text-blue-700 font-extrabold absolute font-[Velodrama] text-[58px]"
            style={{
              // fontSize: 2,
              position: 'relative',
              transform: 'translateX(-50%)',
            }}
          >
            C
          </motion.div>

          {/* Animated Letters */}
          <motion.div
  variants={containerVariants}
  initial="hidden"
  animate={isFirstAnimationComplete ? "visible" : "hidden"}
  className="flex absolute text-white hover:cursor-pointer left-[57%] sm:left-[58%] md:left-[55%] lg:left-[47%] top-[50%]"
  style={{
    fontFamily:'Montserrat',
    fontWeight: 800,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    marginLeft: lettersMarginLeft
  }}
>
  {letters.map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants}
      className="inline-block"
      style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        fontSize: lettersFontSize,
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40 z-0" />
    </div>
  );
};

export default AnimatedLogo;