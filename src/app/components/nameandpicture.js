import Image from "next/image";
import { motion } from "motion/react";
import {
  scholarRegular,
  scholarItalic,
  nameDirection,
} from "../utils/page-utils";
import { SmoothAppear } from "../utils/animation-utils";
import NishitSharmaPicture from "../static/NishitSharma.png";

export default function NameAndPicture() {
  return (
    <div className="relative w-full overflow-hidden bg-black-500">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 py-20 lg:flex-row lg:py-24">
          <SmoothAppear delay={0} direction={nameDirection}>
            <div className="space-y-8 lg:w-1/2 text-center lg:text-left">
              <h1
                className={`text-5xl font-bold tracking-wider leading-tight lg:text-7xl ${scholarRegular.className}`}
              >
                Hello, I'm
                <span className="block mt-2">Nishit Sharma</span>
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-white-500 mx-auto lg:mx-0"
              />

              <p
                className={`text-xl lg:text-2xl tracking-wide leading-relaxed text-white-300 ${scholarItalic.className}`}
              >
                High-Velocity Engineer • AI/Desktop Specialist • Building Proactive Copilots
              </p>
            </div>
          </SmoothAppear>

          <SmoothAppear delay={2} direction="left">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 transform scale-95 bg-gradient-to-br from-white-500/20 to-transparent rounded-3xl rotate-6" />
              <motion.div
                className="relative overflow-hidden shadow-xl rounded-3xl h-full w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={NishitSharmaPicture}
                  alt="Nishit Sharma"
                  className="object-cover"
                  priority
                  fill
                />
              </motion.div>
            </div>
          </SmoothAppear>
        </div>
      </div>
    </div>
  );
}
