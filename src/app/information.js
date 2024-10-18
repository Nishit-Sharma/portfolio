import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ResumeIcon from "./static/resume.png";
import TranscriptIcon from "./static/transcript.png";
import MyResume from "./static/NishitSharmaResume.jpg";
import MyTranscript from "./static/NishitSharmaTranscript.jpg";

const useHasBeenViewed = () => {
  const [ref, inView] = useInView();
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (inView && !hasBeenViewed) {
      setHasBeenViewed(true);
    }
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [inView, hasBeenViewed]);
  
  return [hasBeenViewed, isFirstRender.current, ref];
}

function Summary() {
  const [hasBeenViewed, isFirstRender, ref] = useHasBeenViewed();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay: isFirstRender ? 3 : 1}}
      className="container px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-black-600 hover:scale-105 w-96"
      ref={ref}
    >
      <h1>
        I am a top-performing student at the Morris County School of Technology,
        with a 4.17 unweighted GPA, and I will be attending the County College
        of Morris in my senior year. I am passionate about Game Design,
        Robotics, and Video Games.
      </h1>
      <br />
      <h1>
        I earned a 4 on the AP CSP Test and maintained High Honor Roll status
        throughout high school. I have mastered Java, Python, and C++ and am
        expanding my knowledge to HTML, CSS, Javascript, and Next.js, which I
        used to code this website.
      </h1>
      <br />
      <h1>
        I am also involved in my school's robotics team, Team 8588, Tech Devils.
        As the President, I led the team to its most successful year to date,
        increasing membership by 40% and securing $10,000 in funding. I also
        volunteer at the Parsippany Library, where I teach coding workshops to
        over 30 elementary school students.
      </h1>
    </motion.div>
  );
}

function Resume({ resumeClick, transcriptClick, handleTranscriptClick }) {
  if (resumeClick && transcriptClick) {
    handleTranscriptClick();
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container w-auto px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-white-500 hover:scale-105"
    >
      <Image
        src={MyResume}
        alt="Resume"
        width={700}
        height={700}
        priority={true}
      />
    </motion.div>
  );
}

function Transcript({ resumeClick, transcriptClick, handleResumeClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container w-auto px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-white-500 hover:scale-105"
    >
      <Image
        src={MyTranscript}
        alt="Transcript"
        width={700}
        height={700}
        priority={true}
      />
    </motion.div>
  );
}

export default function Information() {
  const [isMobile, setIsMobile] = useState(false);
  const [resumeClick, setResumeClick] = useState(false);
  const [transcriptClick, setTranscriptClick] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

  function handleResumeClick() {
    if (transcriptClick) {
      handleTranscriptClick();
    }
    setResumeClick(!resumeClick);
  }

  function handleTranscriptClick() {
    if (resumeClick) {
      handleResumeClick();
    }
    setTranscriptClick(!transcriptClick);
  }

  return isMobile ? (
    <div className="container flex flex-col items-center content-center justify-center px-4 py-6 pt-20 bg-black-500">
      <AnimatePresence mode="wait">
        {resumeClick ? (
          <Resume
            key="resume"
            resumeClick={resumeClick}
            transcriptClick={transcriptClick}
            handleTranscriptClick={handleTranscriptClick}
          />
        ) : transcriptClick ? (
          <Transcript
            key="transcript"
            resumeClick={resumeClick}
            transcriptClick={transcriptClick}
            handleResumeClick={handleResumeClick}
          />
        ) : (
          <Summary key="summary" />
        )}
      </AnimatePresence>
      <div className="container flex flex-row items-center content-center justify-center py-6 pb-10 mx-auto text-center w-96">
        <Image
          src={ResumeIcon}
          alt="Resume"
          width={24}
          height={24}
          onClick={handleResumeClick}
          className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-md bg-white-500 rounded-3xl hover:scale-105"
        />
        <Image
          src={TranscriptIcon}
          alt="Transcript"
          width={24}
          height={24}
          onClick={handleTranscriptClick}
          className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-md bg-white-500 rounded-3xl hover:scale-105"
        />
      </div>
    </div>
  ) : (
    <AnimatePresence mode="wait">
      <motion.div
        key="information"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-col items-center content-center justify-center"
      >
        {resumeClick ? (
          <Resume key="resume" />
        ) : transcriptClick ? (
          <Transcript key="transcript" />
        ) : (
          <Summary key="summary" />
        )}
        <motion.div
          key="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container flex flex-row items-center content-center justify-center py-6 pb-10 mx-auto text-center w-96"
        >
          <Image
            src={ResumeIcon}
            alt="Resume"
            width={24}
            height={24}
            onClick={handleResumeClick}
            className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-md bg-white-500 rounded-3xl hover:scale-105"
          />
          <Image
            src={TranscriptIcon}
            alt="Transcript"
            width={24}
            height={24}
            onClick={handleTranscriptClick}
            className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-md bg-white-500 rounded-3xl hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
