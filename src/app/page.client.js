"use client"

import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "./utils/loading-spinner";

const DynamicNameAndPicture = lazy(() => import("./components/nameandpicture"));
const DynamicInformation = lazy(() => import("./components/information"));
const DynamicProjects = lazy(() => import("./components/projects"));

const LazyLoadWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingSpinner key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="flex flex-col items-center content-center justify-center">
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLoadWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <DynamicNameAndPicture isMobile={isMobile} />
            <DynamicInformation />
            <DynamicProjects />
          </motion.div>
        </LazyLoadWrapper>
      </Suspense>
    </main>
  );
}