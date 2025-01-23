import Image from "next/image";
import { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  SmoothReveal,
  fadeInVariants,
  containerVariants,
  hoverVariants,
  SmoothAppear
} from "../utils/animation-utils";

import ResumeIcon from "../static/resume.png";
import TranscriptIcon from "../static/transcript.png";
import ResumeImage from "../static/NishitSharmaResume.jpg";
import TranscriptImage from "../static/NishitSharmaTranscript.jpg";

const InfoCard = ({ children }) => (
  <SmoothAppear>
    <motion.div
      variants={{ ...hoverVariants, ...fadeInVariants }}
      whileHover="hover"
      whileTap="tap"
      className="container px-10 py-6 mx-auto text-center shadow-2xl rounded-3xl bg-black-600 w-96"
    >
      {children}
    </motion.div>
  </SmoothAppear>
);

const DocumentViewer = memo(({ src, alt }) => useMemo(() => (
  <div>
    <motion.div
      variants={fadeInVariants}
      className="container w-auto max-w-3xl px-10 py-6 mx-auto text-center shadow-2xl rounded-3xl bg-white-500"
    >
      <Image
        src={src}
        alt={alt}
        width={700}
        height={700}
        priority={true}
        className="mx-auto rounded-lg"
      />
    </motion.div>
  </div>
), [src, alt]));

const IconButton = ({ src, alt, onClick }) => (
  <motion.div
    whileHover="hover"
    whileTap="tap"
    variants={hoverVariants}
    onClick={onClick}
    className="container w-auto px-5 py-6 mx-10 text-center shadow-md cursor-pointer bg-white-500 rounded-3xl"
  >
    <Image src={src} alt={alt} width={24} height={24} />
  </motion.div>
);

export default function Information() {
  const [activeDocument, setActiveDocument] = useState("summary");

  const [resumeClick, setResumeClick] = useState(false);
  const [transcriptClick, setTranscriptClick] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);

  const handleResumeClick = useCallback(() => {
    if (lastClicked === "resume") {
      setActiveDocument("summary");
      setResumeClick(false);
      setLastClicked(null);
    } else {
      if (transcriptClick) {
        setTranscriptClick(false);
      }
      setActiveDocument("resume");
      setResumeClick(true);
      setLastClicked("resume");
    }
  }, [lastClicked, transcriptClick]);

  const handleTranscriptClick = useCallback(() => {
    if (lastClicked === "transcript") {
      setActiveDocument("summary");
      setTranscriptClick(false);
      setLastClicked(null);
    } else {
      if (resumeClick) {
        setResumeClick(false);
      }
      setActiveDocument("transcript");
      setTranscriptClick(true);
      setLastClicked("transcript");
    }
  }, [lastClicked, resumeClick]);

  const content = {
    summary: (
      <InfoCard>
        <p className="space-y-4">
          I am a top-performing student at the Morris County School of
          Technology, with a 4.17 unweighted GPA, and I will be attending the
          County College of Morris in my senior year. I am passionate about Game
          Design, Robotics, and Video Games. I earned a 4 on the AP CSP Test and
          maintained High Honor Roll status throughout high school. I have
          mastered Java, Python, and C++ and am expanding my knowledge to HTML,
          CSS, Javascript, and Next.js, which I used to code this website. I am
          also involved in my school's robotics team, Team 8588, Tech Devils. As
          the President, I led the team to its most successful year to date,
          increasing membership by 40% and securing $10,000 in funding.
        </p>
      </InfoCard>
    ),
    resume: <DocumentViewer src={ResumeImage} alt="Resume" />,
    transcript: <DocumentViewer src={TranscriptImage} alt="Transcript" />,
  };

  return (
    <SmoothAppear delay={2.5}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 mx-auto"
      >
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
            alt="Resume"
            onClick={() => handleResumeClick()}
          />
          <IconButton
            src={TranscriptIcon}
            alt="Transcript"
            onClick={() => handleTranscriptClick()}
          />
        </motion.div>
      </motion.div>
    </SmoothAppear>
  );
}
