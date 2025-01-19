import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SmoothAppear } from "../utils/smooth-appear";
import NishitSharmaPicture from "../static/NishitSharma.png";

// Define containerVariants outside the component to ensure stability
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Define animation properties for the underline effect
const underlineInitial = { width: 0 };
const underlineAnimate = { width: "100%" };
const underlineTransition = { duration: 1, delay: 0.8 };

// Define animation properties for the image hover effect
const imageHover = { scale: 1.02 };
const imageTransition = { duration: 0.3 };

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-40 w-full overflow-hidden bg-black-500"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 py-16 lg:flex-row lg:py-24">
          {/* Text Content Section */}
          <SmoothAppear delay={0.2}>
            <div className="space-y-6 lg:w-1/2">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                Hello, I'm
                <span className="block mt-2">Nishit Sharma</span>
              </h1>

              {/* Animated underline effect */}
              <motion.div
                initial={underlineInitial}
                animate={underlineAnimate}
                transition={underlineTransition}
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
              <div className="absolute inset-0 transform scale-95 bg-gradient-to-br from-white-500/20 to-transparent rounded-3xl rotate-6" />

              {/* Image container with hover effect */}
              <motion.div
                className="relative overflow-hidden shadow-xl rounded-3xl"
                whileHover={imageHover}
                transition={imageTransition}
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
