import React, { useState, useEffect, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimations } from './scrollanimations';

const ProjectModal = memo(
  ({ isModalOpen, selectedProject, handleModalClose }) => {
    const projectContent = useMemo(() => {
      switch (selectedProject) {
        case "assistant":
          return (
            <div>
              <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
              <p>
                <br />
                This was a collaborative project was submitted for the NJTSA
                Software Development competition. It is a personal assistant
                that was designed to make ordinary tasks easier. Telling the
                time, date, weather, googling things are all possible with
                A.L.P.H.A. It was designed with React and Python, where
                React was used for the front end and Python was used for the
                backend. I primarily worked on the connection between React
                and Python, and the Python file itself.
              </p>
              <a
                href="https://github.com/Nishit-Sharma/NJTSA-Software-Development-LocalHost"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  View on GitHub
                </button>
              </a>
            </div>
          );
        case "robotics":
          return (
            <div>
              <h1 className="text-xl">FRC Charged Up Robot</h1>
              <p>
                <br />
                This was also a collaborative project where I worked with my
                team to program our bot for the 2023 FRC season. We used
                Java to program the robot, and I primarily worked on the
                autonomous code and the drive code. This was the first big
                project I worked on as a team and I took a lot away from it.
              </p>
              <a
                href="https://github.com/mcstrobotics/ChargedUp8588"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  View on GitHub
                </button>
              </a>
            </div>
          );
        case "web-development":
          return (
            <div>
              <h1 className="text-xl">My Portfolio</h1>
              <p>
                <br />
                This portfolio website was my first time using Next.js, and
                I learned a lot about React and the thought process of a Web
                Designer. I used Tailwind CSS for styling and Framer Motion
                for animations, which were also two new frameworks for me. I
                also used Vercel for deployment to make sure that my website
                was easily accessible. I learned a lot about web
                development, React, and Next.js from this project and it
                changed my perspective on web development in a positive way.
              </p>
              <a
                href="https://github.com/Nishit-Sharma/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  View on GitHub
                </button>
              </a>
            </div>
          );
        default:
          return null;
      }
    }, [selectedProject]);

    const MemoizedMotionDiv = memo(({ children }) => (
      <motion.div
        animate={{ y: -20, opacity: 1 }}
        initial={{ y: 0, opacity: 0 }}
        exit={{ y: 20, opacity: 0 }}
        className="p-10 text-center bg-white-500 text-black-500 rounded-3xl"
      >
        {children}
      </motion.div>
    ));

    return (
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed top-0 left-0 flex items-center justify-center w-full h-screen p-10 bg-opacity-50 bg-black-500"
            onClick={handleModalClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MemoizedMotionDiv>
              {projectContent}
            </MemoizedMotionDiv>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
  (prevProps, nextProps) =>
    prevProps.isModalOpen === nextProps.isModalOpen &&
    prevProps.selectedProject === nextProps.selectedProject
);

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const { buttonOpacity } = useScrollAnimations();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

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

  const style = useMemo(() => ({ opacity: buttonOpacity }), [buttonOpacity]);

  return isMobile ? (
    <div>
      <div className="container flex flex-col items-center content-center justify-center w-auto py-6 pb-10 mx-auto text-center">
        <div className="container px-10 py-6 mx-5 my-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
          <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
          <p>
            <br />A personal assistant designed to make life easier. Designed
            with React and Python
          </p>
          <button
            type="button"
            onClick={() => handleProjectClick("assistant")}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View Details
          </button>
        </div>
        <div className="container px-10 py-6 mx-5 my-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
          <h1 className="text-xl">FRC Charged Up Robot</h1>
          <p>
            <br />
            The code for MCST's FRC Robot during the Charged Up Year, 2023
          </p>
          <button
            type="button"
            onClick={() => handleProjectClick("robotics")}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View Details
          </button>
        </div>
        <div className="container px-10 py-6 mx-5 my-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
          <h1 className="text-xl">My Portfolio</h1>
          <p>
            <br />
            This Portfolio website!
          </p>
          <button
            type="button"
            onClick={() => handleProjectClick("web-development")}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View Details
          </button>
        </div>
      </div>

      <ProjectModal
        isModalOpen={isModalOpen}
        selectedProject={selectedProject}
        handleModalClose={handleModalClose}
      />
    </div>
  ) : (
    <div>
      <motion.div
        style={style}
        className="container flex flex-row items-center content-center justify-center w-auto py-6 pb-10 mx-auto text-center"
      >
        <div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
          <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
          <p>
            <br />A personal assistant designed to make life easier. Designed
            with React and Python
          </p>
          <button
            type="button"
            onClick={() => handleProjectClick("assistant")}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View Details
          </button>
        </div>
        <div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
          <h1 className="text-xl">FRC Charged Up Robot</h1>
          <p>
            <br />
            The code for MCST's FRC Robot during the Charged Up Year, 2023
          </p>
          <button
            type="button"
            onClick={() => handleProjectClick("robotics")}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View Details
          </button>
        </div>
        <div className="container px-10 py-6 mx-5 text-center duration-500 shadow-md rounded-3xl bg-black-600 hover:scale-105">
          <h1 className="text-xl">My Portfolio</h1>
          <p>
            <br />
            This Portfolio website!
          </p>
          <button
            type="button"
            onClick={() => handleProjectClick("web-development")}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View Details
          </button>
        </div>
      </motion.div>

      <ProjectModal
        isModalOpen={isModalOpen}
        selectedProject={selectedProject}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}
