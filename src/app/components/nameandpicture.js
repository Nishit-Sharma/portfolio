"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { motion } from "motion/react";
import { nameDirection } from "../utils/page-utils";
import { scholarRegular, scholarItalic } from "../fonts";
import { SmoothAppear } from "../utils/animation-utils";
import NishitSharmaPicture from "../static/NishitSharma.png";
import MyKing from "../static/myking.png";
import MyGoats from "../static/mygoats.png";

export default function NameAndPicture() {
  const portraits = useMemo(
    () => [
      {
        src: NishitSharmaPicture,
        alt: "Nishit Sharma portrait",
        width: NishitSharmaPicture.width,
        height: NishitSharmaPicture.height,
        mode: "cover",
      },
      {
        src: MyKing,
        alt: "Nishit Sharma with FNS",
        width: MyKing.width,
        height: MyKing.height,
        mode: "cover",
      },
      {
        src: MyGoats,
        alt: "Team photo with NRG roster",
        width: MyGoats.width,
        height: MyGoats.height,
        mode: "contain",
        sizeMultiplier: 1.4,
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const cyclePortrait = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % portraits.length);
  }, [portraits.length]);

  const activePortrait = portraits[activeIndex];
  const activeAspect =
    activePortrait?.width && activePortrait?.height
      ? activePortrait.width / activePortrait.height
      : 1;
  const sizeMultiplier = activePortrait?.sizeMultiplier ?? 1;

  const getLayerStyles = (index) => {
    const offset = (index - activeIndex + portraits.length) % portraits.length;
    // 0 = active, 1 = middle, 2 = back
    if (offset === 0) {
      return { scale: 1, y: 0, zIndex: 30, boxShadow: "0 25px 60px rgba(0,0,0,0.5)" };
    }
    if (offset === 1) {
      return { scale: 0.94, y: -12, zIndex: 20, opacity: 0.9 };
    }
    return { scale: 0.88, y: -24, zIndex: 10, opacity: 0.8 };
  };

  return (
    <div className="relative w-full overflow-hidden bg-black-500">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:flex-row lg:py-24">
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
                className={`text-xl tracking-wide leading-relaxed text-white-300 ${scholarItalic.className}`}
              >
                Freelance Full-Stack Developer • SWE Intern @ Citius Holidays • Shipping Next.js/Tailwind products
              </p>
            </div>
          </SmoothAppear>

          <SmoothAppear delay={2} direction="left">
            <motion.div
              onClick={cyclePortrait}
              className="relative focus:outline-none"
              style={{
                aspectRatio: activeAspect,
                width: `clamp(${18 * sizeMultiplier}rem, ${22 * sizeMultiplier}vw, ${24 * sizeMultiplier}rem)`,
                minHeight: `${18 * sizeMultiplier}rem`,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Cycle profile photos"
            >
              <div className="absolute inset-0 transform scale-95 bg-gradient-to-br from-white-500/20 to-transparent rounded-3xl rotate-6 pointer-events-none" />

              {portraits.map((portrait, index) => {
                const layer = getLayerStyles(index);
                return (
                  <motion.div
                    key={portrait.alt}
                    className="absolute inset-0 overflow-hidden rounded-3xl"
                    animate={layer}
                    initial={layer}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      zIndex: layer.zIndex,
                      opacity: layer.opacity ?? 1,
                    }}
                  >
                    <Image
                      src={portrait.src}
                      alt={portrait.alt}
                      className={portrait.mode === "contain" ? "object-contain" : "object-cover"}
                      priority={index === activeIndex}
                      fill
                      sizes={`(max-width: 1024px) ${18 * sizeMultiplier}rem, ${24 * sizeMultiplier}rem`}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </SmoothAppear>
        </div>
      </div>
    </div>
  );
}
