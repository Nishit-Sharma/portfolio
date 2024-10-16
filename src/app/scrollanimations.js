import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useScrollAnimations() {
  const infoRef = useRef(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 750], [0, 1050]);
  const x = useTransform(scrollY, [750, 900], [0, -223]);
  const imageOpacity = useTransform(scrollY, [800, 950], [0, 1]);
  const textOpacity = useTransform(scrollY, [900, 1000], [0, 1]);
  const buttonOpacity = useTransform(scrollY, [1275, 1400], [0, 1]);

  return { infoRef, y, x, imageOpacity, textOpacity, buttonOpacity };
}