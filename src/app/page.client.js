"use client";

import { lazy, Suspense } from "react";
import LoadingSpinner from "./utils/loading-spinner";

const DynamicNameAndPicture = lazy(() => import("./components/nameandpicture"));
const DynamicInformation = lazy(() => import("./components/information"));
const DynamicProjects = lazy(() => import("./components/projects"));

export default function Home() {
  return (
    <main className="flex flex-col items-center content-center justify-center w-full">
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicNameAndPicture />
        <DynamicInformation />
        <DynamicProjects />
      </Suspense>
    </main>
  );
}
