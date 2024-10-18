import Image from "next/image";
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  React,
  inView,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimations } from "./scrollanimations";

import ResumeIcon from "./static/resume.png";
import TranscriptIcon from "./static/transcript.png";
import MyResume from "./static/NishitSharmaResume.jpg";
import MyTranscript from "./static/NishitSharmaTranscript.jpg";

const MemoizedImage = memo(
  ({ src, alt, width, height, onClick, className }) => (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    />
  )
);

const Summary = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-black-600 hover:scale-105 w-96"
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
});

const Resume = memo(
  ({ resumeClick, transcriptClick, handleTranscriptClick }) => {
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
  },
  (prevProps, nextProps) =>
    prevProps.resumeClick === nextProps.resumeClick &&
    prevProps.transcriptClick === nextProps.transcriptClick
);

const Transcript = memo(() => {
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
});

export default function Information() {
  const [isMobile, setIsMobile] = useState(false);
  const [resumeClick, setResumeClick] = useState(false);
  const [transcriptClick, setTranscriptClick] = useState(false);
  const [summaryHasBeenSeen, setSummaryHasBeenSeen] = useState(false);
  const { textOpacity, buttonOpacity } = useScrollAnimations();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

  const handleResumeClick = useCallback(() => {
    if (transcriptClick) {
      handleTranscriptClick();
      handleSummarySeen();
    }
    setResumeClick(!resumeClick);
  }, [transcriptClick, resumeClick]);

  const handleTranscriptClick = useCallback(() => {
    if (resumeClick) {
      handleResumeClick();
      handleSummarySeen();
    }
    setTranscriptClick(!transcriptClick);
  }, [resumeClick, transcriptClick, handleResumeClick]);

  function handleSummarySeen() {
    setSummaryHasBeenSeen(true);
  }

  const informationStyle = useMemo(() => {
    return !inView ? { opacity: textOpacity } : undefined;
  }, [textOpacity]);

  const buttonsStyle = useMemo(() => {
    return !inView ? { opacity: buttonOpacity } : undefined;
  }, [buttonOpacity]);

  return isMobile ? (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: summaryHasBeenSeen ? 1 : 2.5,
        }}
        className="container flex flex-col items-center content-center justify-center px-4 py-6 pt-20 bg-black-500"
      >
        {resumeClick ? (
          <Resume
            key="resume"
            resumeClick={resumeClick}
            transcriptClick={transcriptClick}
            handleTranscriptClick={handleTranscriptClick}
          />
        ) : transcriptClick ? (
          <Transcript key="transcript" />
        ) : (
          <Summary key="summary" />
        )}

        <div className="container flex flex-row items-center content-center justify-center py-6 pb-10 mx-auto text-center w-96">
          <MemoizedImage
            src={ResumeIcon}
            alt="Resume"
            width={24}
            height={24}
            onClick={handleResumeClick}
            className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-md bg-white-500 rounded-3xl hover:scale-105"
          />
          <MemoizedImage
            src={TranscriptIcon}
            alt="Transcript"
            width={24}
            height={24}
            onClick={handleTranscriptClick}
            className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-md bg-white-500 rounded-3xl hover:scale-105"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <AnimatePresence mode="wait">
      <motion.div
        key="information"
        initial={inView ? { opacity: 0 } : false}
        animate={inView ? { opacity: 1 } : false}
        exit={inView ? { opacity: 0 } : false}
        style={informationStyle}
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
          initial={inView ? { opacity: 0 } : false}
          animate={inView ? { opacity: 1 } : false}
          exit={inView ? { opacity: 0 } : false}
          style={buttonsStyle}
          className="container flex flex-row items-center content-center justify-center py-6 pb-10 mx-auto text-center w-96"
        >
          <MemoizedImage
            src={ResumeIcon}
            alt="Resume"
            width={24}
            height={24}
            onClick={handleResumeClick}
            className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-md bg-white-500 rounded-3xl hover:scale-105"
          />
          <MemoizedImage
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
