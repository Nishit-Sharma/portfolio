import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimations } from './scrollanimations';
import NishitSharmaPicture from './static/NishitSharma.png';

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image src={src} alt={alt} />
));

export default function NameAndPicture() {
  const [isMobile, setIsMobile] = useState(false);
  const { infoRef, imageOpacity } = useScrollAnimations();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

  const mobileAnimationProps = useMemo(() => ({
    animate: { y: 20, opacity: 1 },
    initial: { y: 0, opacity: 0 },
    transition: { delay: 0.5 }
  }), []);

  const mobileImageAnimationProps = useMemo(() => ({
    animate: { y: 40, opacity: 1 },
    initial: { y: 60, opacity: 0 },
    transition: { delay: 1.5 }
  }), []);

  const desktopImageStyle = useMemo(() => ({
    opacity: imageOpacity
  }), [imageOpacity]);

  return isMobile ? (
    <div className="container z-50 flex flex-col items-center content-center justify-center px-4 bg-black-500">
      <motion.div
        {...mobileAnimationProps}
        className="container flex flex-col items-center content-center justify-center px-4 mx-auto text-2xl opacity-0 bg-black-500"
      >
        <div className="container w-auto px-10 py-6 mx-5 text-center duration-500 shadow-md opacity-100 rounded-3xl bg-black-600 hover:scale-105">
          <h1>Hello, My name is Nishit Sharma!</h1>
        </div>
      </motion.div>

      <motion.div
        {...mobileImageAnimationProps}
        className="container flex flex-col items-center content-center justify-center w-auto px-10 py-6 mx-5 text-2xl shadow-md opacity-0 rounded-3xl bg-black-600 hover:scale-105"
      >
        <div className="mx-auto overflow-hidden rounded-3xl w-80 h-80">
          <MemoizedImage src={NishitSharmaPicture} alt="Nishit Sharma" />
        </div>
      </motion.div>
    </div>
  ) : (
    <motion.div
      ref={infoRef}
      className="container flex flex-row items-center content-center justify-center px-4 py-6 bg-black-500"
    >
      <div className="container w-auto px-10 py-6 mx-5 my-5 text-2xl text-center duration-500 shadow-md opacity-0 rounded-3xl bg-black-600 hover:scale-105">
        <h1>Hello, My name is Nishit Sharma!</h1>
      </div>
      <motion.div
        style={desktopImageStyle}
        className="container z-40 w-auto px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105"
      >
        <div className="mx-auto overflow-hidden rounded-3xl w-80 h-80">
          <MemoizedImage src={NishitSharmaPicture} alt="Nishit Sharma" />
        </div>
      </motion.div>
    </motion.div>
  );
}
