import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimations } from "./scrollanimations";

export default function BeforeScroll() {
  const [isMobile, setIsMobile] = useState(false);
  const { infoRef, y, x } = useScrollAnimations();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

  return isMobile ? (
    <></>
  ) : (
    <>
      <motion.div
        style={{
          x: x,
          y: y,
        }}
        animate={{ y: -20, opacity: 1 }}
        initial={{ y: 0, opacity: 0 }}
        className="container flex flex-col items-center content-center justify-center px-4 py-5 mx-auto text-2xl opacity-0 bg-black-500"
      >
        <div className="container w-auto px-10 py-6 mx-5 text-center duration-500 shadow-md opacity-100 rounded-3xl bg-black-600 hover:scale-105">
          <h1>Hello, My name is Nishit Sharma!</h1>
        </div>
      </motion.div>
      <motion.div
        className="items-center content-center justify-center mx-auto scroll"
        initial={{ opacity: 0 }}
        transition={{ delay: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <button
          type="button"
          className="opacity-0 scroll"
          onClick={() => {
            infoRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          onKeyDown={() => {
            infoRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </motion.div>
    </>
  );
}
