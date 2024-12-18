import { useState, useEffect, lazy, Suspense } from "react";

const DynamicInformation = lazy(() => import('./information'));
const DynamicProjects = lazy(() => import('./projects'));
const DynamicNameAndPicture = lazy(() => import('./nameandpicture'));

export default function AfterScroll() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

  return (
    <div className={`container flex flex-col items-center content-center justify-center px-4 mx-auto bg-black-500 ${!isMobile && 'pt-96'}`}>
      <Suspense fallback={<div>Loading Name and Picture...</div>}>
        <DynamicNameAndPicture />
      </Suspense>
      <Suspense fallback={<div>Loading Information...</div>}>
        <DynamicInformation />
      </Suspense>
      <Suspense fallback={<div>Loading Projects...</div>}>
        <DynamicProjects />
      </Suspense>
    </div>
  );
}