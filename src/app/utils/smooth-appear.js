import { motion } from "framer-motion";

export const SmoothAppear = ({ children, delay = 0, direction = "up" }) => {
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
