"use client";

import { motion, AnimatePresence } from "motion/react";
import { SmoothAppear } from "../utils/animation-utils";
import { InfoCard, DocumentViewer, IconButton } from "../utils/page-utils";
import { useDocument } from "../contexts/DocumentContext";
import ResumeIcon from "../static/resume.webp";
import Resume from "../static/NishitSharmaResume.webp";

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
            I&apos;m a Computer Science student at Stevens Institute of Technology and a full-stack engineer who builds software for real users.
          </span>
          <span className="block">
            I work across the stack, from UI and product polish to APIs, data models, auth, and deployment. Recently, I&apos;ve worked on Citius Connect, a Convex-backed travel operations portal for Citius Holidays, and Royals & Radiant, a production e-commerce/admin platform for a jewelry and fashion brand
          </span>
          <span className="block">
            I also spend time teaching and leading in student tech communities — running workshops, mentoring peers, and helping people get ready to ship on real teams.
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
