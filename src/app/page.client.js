"use client";

import { useState, useEffect, lazy, Suspense } from "react";

const DynamicBeforeScroll = lazy(() => import("./beforescroll"));
const DynamicAfterScroll = lazy(() => import("./afterscroll"));

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

  return (
    <main className="flex flex-col items-center content-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <div className={isMobile ? '' : 'py-big'}>
          <DynamicBeforeScroll />
        </div>
        <DynamicAfterScroll />
      </Suspense>
    </main>
  );
}
