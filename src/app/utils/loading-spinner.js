import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center text-center content-center mx-auto justify-center bg-black-500">
      <div className="">
        <motion.h1 
          className="text-4xl font-bold mb-8 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          NS
        </motion.h1>
        
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 border-4 border-white-500/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-t-white-500 rounded-full"
            animate={{ 
              rotate: 360 
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;