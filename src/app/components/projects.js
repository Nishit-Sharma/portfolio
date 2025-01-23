import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  SmoothReveal,
  fadeInVariants,
  containerVariants,
  hoverVariants,
  SmoothAppear
} from "../utils/animation-utils";

const ProjectCard = ({ title, description, onClick }) => (
  <motion.div
    variants={{ ...hoverVariants, ...fadeInVariants }}
    whileHover="hover"
    whileTap="tap"
    className="container px-10 py-6 mx-5 text-center shadow-md rounded-3xl bg-black-600"
    onClick={onClick}
  >
    <h1 className="text-xl">{title}</h1>
    <p className="mt-4">{description}</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 mt-4 font-bold text-white rounded"
    >
      View Details
    </motion.button>
  </motion.div>
);

const headerBlur = 8;
const ProjectModal = ({ isOpen, project, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 bg-black-500"
        onClick={onClose}
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-auto p-10 mx-4 text-center lg:w-6/12 bg-white-500 text-black-500 rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {project}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Projects() {
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    {
      id: "alpha-personal-assistant",
      title: "A.L.P.H.A Personal Assistant",
      description:
        "A personal assistant designed to make life easier. Designed with React and Python",
      details: (
        <>
          <h1 className="text-xl">A.L.P.H.A Personal Assistant</h1>
          <p className="mt-4">
            This was a collaborative project was submitted for the NJTSA
            Software Development competition. It is a personal assistant that
            was designed to make ordinary tasks easier. Telling the time, date,
            weather, googling things are all possible with A.L.P.H.A. It was
            designed with React and Python, where React was used for the front
            end and Python was used for the backend. I primarily worked on the
            connection between React and Python, and the Python file itself.
          </p>
          <a
            href="https://github.com/Nishit-Sharma/NJTSA-Software-Development-LocalHost"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 font-bold text-white rounded"
            >
              View on GitHub
            </motion.button>
          </a>
        </>
      ),
    },
    {
      id: "frc-charged-up-robot",
      title: "FRC Charged Up Robot",
      description:
        "The code for MCST's FRC Robot during the Charged Up Year, 2023",
      details: (
        <>
          <h1 className="text-xl">FRC Charged Up Robot</h1>
          <p className="mt-4">
            This was also a collaborative project where I worked with my team to
            program our bot for the 2023 FRC season. We used Java to program the
            robot, and I primarily worked on the autonomous code and the drive
            code. This was the first big project I worked on as a team and I
            took a lot away from it.
          </p>
          <a
            href="https://github.com/mcstrobotics/ChargedUp8588"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 font-bold text-white rounded"
            >
              View on GitHub
            </motion.button>
          </a>
        </>
      ),
    },
    {
      id: "my-portfolio",
      title: "My Portfolio",
      description: "This Portfolio Website!",
      details: (
        <>
          <h1 className="text-xl">My Portfolio</h1>
          <p className="mt-4">
            This portfolio website was my first time using Next.js, and I
            learned a lot about React and the thought process of a Web Designer.
            I used Tailwind CSS for styling and Framer Motion for animations,
            which were also two new frameworks for me. I also used Vercel for
            deployment to make sure that my website was easily accessible. I
            learned a lot about web development, React, and Next.js from this
            project and it changed my perspective on web development in a
            positive way
          </p>
          <a
            href="https://github.com/Nishit-Sharma/portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 font-bold text-white rounded"
            >
              View on GitHub
            </motion.button>
          </a>
        </>
      ),
    },
  ];

  return (
    <SmoothAppear>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container flex flex-col items-center justify-center w-8/12 gap-4 px-4 py-12 mx-auto lg:flex-row lg:gap-12 lg:w-auto"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            onClick={() => setModalContent(project.details)}
          />
        ))}
        <ProjectModal
          isOpen={modalContent !== null}
          project={modalContent}
          onClose={() => setModalContent(null)}
        />
      </motion.div>
    </SmoothAppear>
  );
}
