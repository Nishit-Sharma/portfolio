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
          I am a high-velocity software engineer specializing in full-stack AI
          apps. I&apos;ve shipped production-grade tools in days—like an Electron OCR
          desktop app for real-time processing and a PyTorch pipeline for
          multimodal video analysis. As Robotics President, I led a 100+ team to
          hypergrowth (40% expansion, $10K raised) while mastering Java
          codebases in 24 hours. Passionate about human-computer interaction;
          let&apos;s build AI that predicts intent.
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
