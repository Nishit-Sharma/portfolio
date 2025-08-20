import { motion } from "motion/react";
import { scholarRegular } from "../fonts";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center content-center justify-center mx-auto text-center bg-black-500">
      <div className="">
        <motion.h1
          className={`mx-auto mb-8 text-6xl font-bold ${scholarRegular.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          NS
        </motion.h1>

        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 border-4 rounded-full border-white-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 border-4 rounded-full border-t-white-500"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
