"use client";

import { motion, AnimatePresence } from "motion/react";
import { SmoothAppear } from "../utils/animation-utils";
import { InfoCard, DocumentViewer, IconButton } from "../utils/page-utils";
import { useDocument } from "../contexts/DocumentContext";
import ResumeIcon from "../static/resume.png";

import Resume from "../static/NishitSharmaResume.png";

export default function Information() {
  function checkMobile() {
    if (typeof window !== "undefined") {
      return window.innerHeight < 764;
    }
  }

  const phoneDelay = checkMobile() ? 0 : 2.5;

  const { activeDocument, handleResumeClick, resumeClick } = useDocument();

  const content = {
    summary: (
      <InfoCard>
        <p className="space-y-4">
          <span className="block">
            Freelance full-stack developer and SWE intern building production web experiences for travel and retail. I move fast from design systems to deployment with Next.js, TypeScript, Tailwind, Motion, and modern auth/payments.
          </span>
          <span className="block">
            Recently redesigned Citius Holidays&apos; corporate travel/MICE site with Sanity CMS, Motion-powered sections, contact automation, and analytics instrumentation.
          </span>
          <span className="block">
            Building a B2C payment platform for Citius Holidays with Next.js  , TypeScript, Drizzle/PostgreSQL, BetterAuth, and Razorpay orchestration for checkout, receipts, and itinerary visibility. Freshman Rep at Stevens Blueprint, shadowing the executive board and leading internal development initiatives for the student-run product studio.
          </span>
        </p>
      </InfoCard>
    ),
    resume: <DocumentViewer src={Resume} alt="Resume" />,
  };

  return (
    <SmoothAppear direction="up" delay={phoneDelay}>
      <motion.div initial="hidden" className="container px-4 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDocument}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {content[activeDocument]}
          </motion.div>
        </AnimatePresence>

        <motion.div className="flex justify-center mx-auto mt-8">
          <IconButton
            src={ResumeIcon}
            alt="View Resume"
            onClick={handleResumeClick}
            aria-label="Toggle Resume View"
            aria-pressed={resumeClick}
            data-cursor-zone="view-resume"
          />
        </motion.div>
      </motion.div>
    </SmoothAppear>
  );
}
