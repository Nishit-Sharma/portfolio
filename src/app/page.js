"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, stagger, useScroll, useTransform } from "framer-motion";

import Picture from "./static/NishitSharma.JPG";
import ResumeIcon from "./static/resume.png";
import TranscriptIcon from "./static/transcript.png";
import MyResume from "./static/NishitSharmaResume.jpg";
import MyTranscript from "./static/NishitSharmaTranscript.jpg";

export default function Home() {
  const [resumeClick, setResumeClick] = useState(false);
  const [transcriptClick, setTranscriptClick] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 750], [0, 850]);
  const x = useTransform(scrollY, [750, 900], [0, -223]);

  const imageOpacity = useTransform(scrollY, [750, 850], [0, 1]);
  const textOpacity = useTransform(scrollY, [800, 900], [0, 1]);
  const buttonOpacity = useTransform(scrollY, [1175, 1300], [0, 1]);

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

  function BeforeScroll() {
    return (
      <>
        <motion.div
          style={{
            x: x,
            y: y,
          }}
          animate={{ y: -20, opacity: 1 }}
          initial={{ y: 0, opacity: 0 }}
          className="container flex flex-col items-center content-center justify-center px-4 py-5 mx-auto text-2xl bg-black-500"
        >
          <div className="container w-auto px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
            <h1>Hello, My name is Nishit Sharma!</h1>
          </div>
        </motion.div>
        <motion.div
          className="items-center content-center justify-center mx-auto scroll"
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          whileInView={{opacity: 1}}
        />
      </>
    );
  }

  function AfterScroll() {
    return (
      <div className="container flex flex-col items-center content-center justify-center px-4 pt-56 mx-auto bg-black-500">
        <motion.div className="container flex flex-row items-center content-center justify-center px-4 py-6 bg-black-500">
          <div className="container w-auto px-10 py-6 mx-5 text-xl text-center duration-500 shadow-md opacity-0 rounded-3xl bg-black-600 hover:scale-105">
            <h1>Hello, My name is Nishit Sharma!</h1>
          </div>
          <motion.div
            style={{ opacity: imageOpacity }}
            className="container z-40 w-auto px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105"
          >
            <div className="mx-auto overflow-hidden rounded-3xl w-80 h-80">
              <Image src={Picture} alt="Nishit Sharma" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{ opacity: textOpacity }}
          className="flex-col items-center content-center justify-center"
        >
          {resumeClick ? (
            <Resume />
          ) : transcriptClick ? (
            <Transcript />
          ) : (
            <Summary />
          )}

          <motion.div
            style={{ opacity: buttonOpacity }}
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
      </div>
    );
  }

  function Summary() {
    return (
      <div className="container z-50 px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-black-600 hover:scale-105 w-96">
        <h1>
          I am a top-performing student at the Morris County School of
          Technology, with a 4.17 unweighted GPA, and I will be attending the
          County College of Morris in my senior year. I am passionate about Game
          Design, Robotics, and Video Games.
        </h1>
        <br></br>
        <h1>
          I earned a 4 on the AP CSP Test and maintained High Honor Roll status
          throughout high school. I have mastered Java, Python, and C++ and am
          expanding my knowledge to HTML, CSS, Javascript, and Next.js, which I
          used to code this website.
        </h1>
        <br></br>
        <h1>
          I am also involved in my school's robotics team, Team 8588, Tech
          Devils. As the President, I led the team to its most successful year
          to date, increasing membership by 40% and securing $10,000 in funding.
          I also volunteer at the Parsippany Library, where I teach coding
          workshops to over 30 elementary school students.
        </h1>
      </div>
    );
  }

  function Resume() {
    if (resumeClick && transcriptClick) {
      handleTranscriptClick();
    }
    return (
      <div className="container w-auto px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-white-500 hover:scale-105">
        <Image
          src={MyResume}
          alt="Resume"
          width={700}
          height={700}
          priority={true}
        />
      </div>
    );
  }

  function Transcript() {
    return (
      <div className="container w-auto px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-white-500 hover:scale-105">
        <Image
          src={MyTranscript}
          alt="Transcript"
          width={700}
          height={700}
          priority={true}
        />
      </div>
    );
  }

  return (
    <main className="">
      <div className="py-big">
        <BeforeScroll />
      </div>
      <AfterScroll />
    </main>
  );
}
