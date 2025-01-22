import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { SmoothAppear, containerVariants } from "../utils/animation-utils";
import NishitSharmaPicture from "../static/NishitSharma.png";

export default function NameAndPicture() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full overflow-hidden bg-black-500"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 py-16 lg:flex-row lg:py-24">
          <SmoothAppear delay={0.2}>
            <div className="space-y-6 lg:w-1/2">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                Hello, I'm
                <span className="block mt-2">Nishit Sharma</span>
              </h1>

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

          <SmoothAppear delay={0.4} direction="left">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 transform scale-95 bg-gradient-to-br from-white-500/20 to-transparent rounded-3xl rotate-6" />
              <motion.div
                className="relative overflow-hidden shadow-xl rounded-3xl"
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
