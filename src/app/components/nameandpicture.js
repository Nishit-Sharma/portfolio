"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { nameDirection } from "../utils/page-utils";
import { scholarRegular, scholarItalic } from "../fonts";
import { SmoothAppear } from "../utils/animation-utils";
import NishitSharmaPicture from "../static/NishitSharma.png";
import MyKingPicture from "../static/myking.png";
import MyGoatsPicture from "../static/mygoats.png";

export default function NameAndPicture() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [NishitSharmaPicture, MyKingPicture, MyGoatsPicture];

  const cycleImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const variants = {
    enter: {
      scale: 1,
      x: 0,
      opacity: 1,
      zIndex: 0,
    },
    center: {
      scale: 1,
      x: 0,
      opacity: 1,
      rotate: 0,
      zIndex: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      scale: 1,
      x: "100%",
      rotate: 5,
      opacity: [1, 1, 0],
      zIndex: 2,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        opacity: {
          times: [0, 0.7, 1],
        },
      },
    },
  };

  const isLandscape = imageIndex === 2;

  return (
    <div className="relative w-full overflow-hidden bg-black-500">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 py-20 lg:flex-row lg:py-24">
          <SmoothAppear delay={0} direction={nameDirection}>
            <div className="space-y-8 lg:w-1/2 text-center lg:text-left">
              <h1
                className={`text-5xl font-bold tracking-wider leading-tight lg:text-7xl ${scholarRegular.className}`}
              >
                Hello, I&apos;m
                <span className="block mt-2">Nishit Sharma</span>
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-white-500 mx-auto lg:mx-0"
              />

              <p
                className={`text-xl lg:text-2xl tracking-wide leading-relaxed text-white-300 ${scholarItalic.className}`}
              >
                High-Velocity Engineer • AI/Desktop Specialist • Building Proactive Copilots
              </p>
            </div>
          </SmoothAppear>

          <SmoothAppear delay={2} direction="left">
            <div
              className={`relative h-72 lg:h-96 transition-all duration-500 ease-in-out ${
                isLandscape ? "aspect-video" : "w-72 lg:w-96"
              }`}
            >
              <div className="absolute inset-0 transform scale-95 bg-gradient-to-br from-white-500/20 to-transparent rounded-3xl rotate-6" />
              <motion.div
                className="relative h-full w-full cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={cycleImage}
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={imageIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full shadow-xl rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={images[imageIndex]}
                      alt="Nishit Sharma"
                      className="object-cover"
                      priority
                      fill
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </SmoothAppear>
        </div>
      </div>
    </div>
  );
}
