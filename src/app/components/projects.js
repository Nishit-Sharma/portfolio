import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SmoothReveal,
  fadeInVariants,
  containerVariants,
  hoverVariants,
} from "../utils/animation-utils";

const ProjectCard = ({ title, description, onClick }) => (
  <motion.div
    variants={fadeInVariants}
    whileHover="hover"
    whileTap="tap"
    // variants={hoverVariants}
    className="container px-10 py-6 mx-5 text-center shadow-md rounded-3xl bg-black-600"
    onClick={onClick}
  >
    <h1 className="text-xl">{title}</h1>
    <p className="mt-4">{description}</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      View Details
    </motion.button>
  </motion.div>
);

const ProjectModal = ({ isOpen, project, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 bg-black-500"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="p-10 mx-4 text-center w-96 bg-white-500 text-black-500 rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {project}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const [modalContent, setModalContent] = useState(null);

  const projects = useMemo(() => [
    {
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
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View on GitHub
            </motion.button>
          </a>
        </>
      ),
    },
    {
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
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View on GitHub
            </motion.button>
          </a>
        </>
      ),
    },
    {
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
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              View on GitHub
            </motion.button>
          </a>
        </>
      ),
    },
  ], []);

  const handleOpenModal = useCallback((details) => {
    setModalContent(details);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalContent(null);
  }, []);

  return (
    <SmoothReveal delay={0}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 py-12 mx-auto"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              onClick={() => handleOpenModal(project.details)}
            />
          ))}
        </div>

        <ProjectModal
          isOpen={modalContent !== null}
          project={modalContent}
          onClose={handleCloseModal}
        />
      </motion.div>
    </SmoothReveal>
  );
};

export default React.memo(Projects);
