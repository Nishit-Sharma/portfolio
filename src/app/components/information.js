import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SmoothAppear } from "../utils/animation-utils";
import { InfoCard, DocumentViewer, IconButton } from "../utils/page-utils";
import ResumeIcon from "../static/resume.png";
import TranscriptIcon from "../static/transcript.png";
import Resume from "../static/NishitSharmaResume.jpg";
import Transcript from "../static/NishitSharmaTranscript.jpg";

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
    resume: <DocumentViewer src={Resume} alt="Resume" />,
    transcript: <DocumentViewer src={Transcript} alt="Transcript" />,
  };

  return (
    <SmoothAppear direction="up" delay={2.5}>
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
            onClick={() => handleResumeClick()}
            aria-label="Toggle Resume View"
            aria-pressed={resumeClick}
          />
          <IconButton
            src={TranscriptIcon}
            alt="View Transcript"
            onClick={() => handleTranscriptClick()}
            aria-label="Toggle Transcript View"
            aria-pressed={transcriptClick}
          />
        </motion.div>
      </motion.div>
    </SmoothAppear>
  );
}
