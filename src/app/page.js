"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import Picture from "./static/NishitSharma.JPG";
import ResumeIcon from "./static/resume.png";
import TranscriptIcon from "./static/transcript.png";
import MyResume from "./static/NishitSharmaResume.jpg";
import MyTranscript from "./static/NishitSharmaTranscript.jpg";

export default function Home() {
  const [resumeClick, setResumeClick] = useState(false);
  const [transcriptClick, setTranscriptClick] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 750], [0, 1050]);
  const x = useTransform(scrollY, [750, 900], [0, -223]);

  const imageOpacity = useTransform(scrollY, [800, 950], [0, 1]);
  const textOpacity = useTransform(scrollY, [900, 1000], [0, 1]);
  const buttonOpacity = useTransform(scrollY, [1275, 1400], [0, 1]);

  const infoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
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

  function NameAndPicture() {
    return isMobile ? (
      <div className="container flex flex-col items-center content-center justify-center px-4 py-6 bg-black-500">
        <div className="container w-auto px-10 py-6 mx-5 my-5 text-2xl text-center duration-500 shadow-md opacity-100 rounded-3xl bg-black-600 hover:scale-105">
          <h1>Hello, My name is Nishit Sharma!</h1>
        </div>
        <div className="container w-auto px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
          <div className="mx-auto overflow-hidden rounded-3xl w-80 h-80">
            <Image src={Picture} alt="Nishit Sharma" />
          </div>
        </div>
      </div>
    ) : (
      <motion.div
        ref={infoRef}
        className="container flex flex-col items-center content-center justify-center px-4 py-6 bg-black-500 sm:flex-row"
      >
        <div className="container w-auto px-10 py-6 mx-5 my-5 text-2xl text-center duration-500 shadow-md opacity-100 rounded-3xl bg-black-600 hover:scale-105 sm:opacity-0 sm:my-0">
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
    );
  }

  function Information() {
    return isMobile ? (
      <div className="container flex flex-col items-center content-center justify-center px-4 py-6 bg-black-500">
        {resumeClick ? (
          <Resume />
        ) : transcriptClick ? (
          <Transcript />
        ) : (
          <Summary />
        )}
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
    );
  }

  function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
      setIsModalOpen(true);
      setSelectedProject(project);
    };

    const handleModalClose = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
    };

    return isMobile ? (
      <div>
        <div className="container flex flex-row items-center content-center justify-center w-auto py-6 pb-10 mx-auto text-center">
          <div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
            <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
            <p>
              <br></br>A personal assistant designed to make life easier.
              Designed with React and Python
            </p>
            <button
              onClick={() => handleProjectClick("assistant")}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
          <div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
            <h1 className="text-xl">FRC Charged Up Robot</h1>
            <p>
              <br></br>
              The code for MCST's FRC Robot during the Charged Up Year, 2023
            </p>
            <button
              onClick={() => handleProjectClick("robotics")}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
          <div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
            <h1 className="text-xl">My Portfolio</h1>
            <p>
              <br></br>
              This Portfolio website!
            </p>
            <button
              onClick={() => handleProjectClick("web-development")}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>

        {isModalOpen && (
            <div
              className="fixed top-0 left-0 flex items-center justify-center w-full h-screen p-10 bg-opacity-50 bg-black-500"
              onClick={handleModalClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                animate={{ y: -20, opacity: 1 }}
                initial={{ y: 0, opacity: 0 }}
                exit={{ y: 20, opacity: 0 }}
                className="p-10 text-center bg-white-500 text-black-500 rounded-3xl"
              >
                {selectedProject === "assistant" && (
                  <div>
                    <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
                    <p>
                      <br></br>
                      This was a collaborative project was submitted for the
                      NJTSA Software Development competition. It is a personal
                      assistant that was designed to make ordinary tasks easier.
                      Telling the time, date, weather, googling things are all
                      possible with A.L.P.H.A. It was designed with React and
                      Python, where React was used for the front end and Python
                      was used for the backend. I primarily worked on the
                      connection between React and Python, and the Python file
                      itself.
                    </p>
                    <a
                      href="https://github.com/Nishit-Sharma/NJTSA-Software-Development-LocalHost"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        View on GitHub
                      </button>
                    </a>
                  </div>
                )}
                {selectedProject === "robotics" && (
                  <div>
                    <h1 className="text-xl">FRC Charged Up Robot</h1>
                    <p>
                      <br></br>
                      This was also a collaborative project where I worked with
                      my team to program our bot for the 2023 FRC season. We
                      used Java to program the robot, and I primarily worked on
                      the autonomous code and the drive code. This was the first
                      big project I worked on as a team and I took a lot away
                      from it.
                    </p>
                    <a
                      href="https://github.com/mcstrobotics/ChargedUp8588"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        View on GitHub
                      </button>
                    </a>
                  </div>
                )}
                {selectedProject === "web-development" && (
                  <div>
                    <h1 className="text-xl">My Portfolio</h1>
                    <p>
                      <br></br>
                      This portfolio website was my first time using Next.js,
                      and I learned a lot about React and the thought process of
                      a Web Designer. I used Tailwind CSS for styling and Framer
                      Motion for animations, which were also two new frameworks
                      for me. I also used Vercel for deployment to make sure
                      that my website was easily accessible. I learned a lot
                      about web development, React, and Next.js from this
                      project and it changed my perspective on web development
                      in a positive way.
                    </p>
                    <a
                      href="https://github.com/Nishit-Sharma/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        View on GitHub
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
      </div>
    ) : (
      <div>
        <motion.div
          style={{ opacity: buttonOpacity }}
          className="container flex flex-row items-center content-center justify-center w-auto py-6 pb-10 mx-auto text-center"
        >
          <motion.div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
            <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
            <p>
              <br></br>A personal assistant designed to make life easier.
              Designed with React and Python
            </p>
            <button
              onClick={() => handleProjectClick("assistant")}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </motion.div>
          <motion.div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
            <h1 className="text-xl">FRC Charged Up Robot</h1>
            <p>
              <br></br>
              The code for MCST's FRC Robot during the Charged Up Year, 2023
            </p>
            <button
              onClick={() => handleProjectClick("robotics")}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </motion.div>
          <motion.div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
            <h1 className="text-xl">My Portfolio</h1>
            <p>
              <br></br>
              This Portfolio website!
            </p>
            <button
              onClick={() => handleProjectClick("web-development")}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed top-0 left-0 flex items-center justify-center w-full h-screen p-10 bg-opacity-50 bg-black-500"
              onClick={handleModalClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                animate={{ y: -20, opacity: 1 }}
                initial={{ y: 0, opacity: 0 }}
                exit={{ y: 20, opacity: 0 }}
                className="p-10 text-center bg-white-500 text-black-500 rounded-3xl"
              >
                {selectedProject === "assistant" && (
                  <div>
                    <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
                    <p>
                      <br></br>
                      This was a collaborative project was submitted for the
                      NJTSA Software Development competition. It is a personal
                      assistant that was designed to make ordinary tasks easier.
                      Telling the time, date, weather, googling things are all
                      possible with A.L.P.H.A. It was designed with React and
                      Python, where React was used for the front end and Python
                      was used for the backend. I primarily worked on the
                      connection between React and Python, and the Python file
                      itself.
                    </p>
                    <a
                      href="https://github.com/Nishit-Sharma/NJTSA-Software-Development-LocalHost"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        View on GitHub
                      </button>
                    </a>
                  </div>
                )}
                {selectedProject === "robotics" && (
                  <div>
                    <h1 className="text-xl">FRC Charged Up Robot</h1>
                    <p>
                      <br></br>
                      This was also a collaborative project where I worked with
                      my team to program our bot for the 2023 FRC season. We
                      used Java to program the robot, and I primarily worked on
                      the autonomous code and the drive code. This was the first
                      big project I worked on as a team and I took a lot away
                      from it.
                    </p>
                    <a
                      href="https://github.com/mcstrobotics/ChargedUp8588"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        View on GitHub
                      </button>
                    </a>
                  </div>
                )}
                {selectedProject === "web-development" && (
                  <div>
                    <h1 className="text-xl">My Portfolio</h1>
                    <p>
                      <br></br>
                      This portfolio website was my first time using Next.js,
                      and I learned a lot about React and the thought process of
                      a Web Designer. I used Tailwind CSS for styling and Framer
                      Motion for animations, which were also two new frameworks
                      for me. I also used Vercel for deployment to make sure
                      that my website was easily accessible. I learned a lot
                      about web development, React, and Next.js from this
                      project and it changed my perspective on web development
                      in a positive way.
                    </p>
                    <a
                      href="https://github.com/Nishit-Sharma/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        View on GitHub
                      </button>
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  function BeforeScroll() {
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
          <div className="container w-auto px-10 py-6 mx-5 text-center duration-500 shadow-md opacity-0 rounded-3xl bg-black-600 hover:scale-105 sm:opacity-100">
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
            className="opacity-0 scroll"
            onClick={() => {
              infoRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          ></button>
        </motion.div>
      </>
    );
  }

  function AfterScroll() {
    return (
      <div className="container flex flex-col items-center content-center justify-center px-4 mx-auto sm:pt-96 bg-black-500">
        <NameAndPicture />
        <Information />
        <Projects />
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center content-center justify-center">
      <div className="sm:py-big">
        <BeforeScroll />
      </div>
      <AfterScroll />
    </main>
  );
}
