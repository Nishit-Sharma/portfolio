"use client";

import { lazy, Suspense} from "react";
import { motion } from "motion/react";
import LoadingSpinner from "./utils/loading-spinner";
import { LazyLoadWrapper } from "./utils/page-utils";

const DynamicNameAndPicture = lazy(() => import("./components/nameandpicture"));
const DynamicInformation = lazy(() => import("./components/information"));
const DynamicProjects = lazy(() => import("./components/projects"));

export default function Home() {
  return (
    <main className="flex flex-col items-center content-center justify-center mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLoadWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              <DynamicNameAndPicture />
              <DynamicInformation />
              <DynamicProjects />
          </motion.div>
        </LazyLoadWrapper>
      </Suspense>
    </main>
  );
}
