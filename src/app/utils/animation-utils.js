import { motion } from "motion/react";

export const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const containerVariants = {
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

export const SmoothReveal = ({ children, delay, className }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SmoothAppear = ({ children, delay, direction = "up" }) => {
  const getInitialY = () => {
    switch (direction) {
      case "up":
        return 50;
      case "down":
        return -50;
      case "left":
        return 0;
      case "right":
        return 0;
      default:
        return 0;
    }
  };

  const getInitialX = () => {
    switch (direction) {
      case "left":
        return 50;
      case "right":
        return -50;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};