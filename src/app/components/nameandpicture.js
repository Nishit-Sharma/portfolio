import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SmoothAppear } from "../utils/smooth-appear";
import NishitSharmaPicture from "../static/NishitSharma.png";

export default function NameAndPicture() {
  // Track viewport size for responsive design
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check for mobile viewport
    setIsMobile(window.innerWidth < 1025);

    // Add resize listener for responsive updates
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define animation sequence for staggered children
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // Delay each child's animation by 0.2s
        staggerChildren: 0.2,
        // Wait 0.3s before starting animations
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full overflow-hidden bg-black-500"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 py-16 lg:py-24">
          {/* Text Content Section */}
          <SmoothAppear delay={0.2}>
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Hello, I'm
                <span className="block mt-2">Nishit Sharma</span>
              </h1>

              {/* Animated underline effect */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-white-500"
              />

              <p className="text-lg lg:text-xl text-white-300">
                Student • Robotics Enthusiast • Developer
              </p>
            </div>
          </SmoothAppear>

          {/* Image Section with decorative effects */}
          <SmoothAppear delay={0.4} direction="left">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white-500/20 to-transparent rounded-3xl transform rotate-6 scale-95" />

              {/* Image container with hover effect */}
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={NishitSharmaPicture}
                  alt="Nishit Sharma"
                  className="object-cover"
                  priority
                  layout="responsive"
                />
              </motion.div>
            </div>
          </SmoothAppear>
        </div>
      </div>
    </motion.div>
  );
}
