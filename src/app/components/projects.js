"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Script from "next/script";
import { SmoothAppear } from "../utils/animation-utils";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "../utils/page-utils";
import { projectsData } from "../static/data/projectsData";
import { ProjectCard, ProjectModal } from "../utils/page-utils";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [modalProject, setModalProject] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = projectsData.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  const projects = [
    {
      id: "alpha-personal-assistant",
      title: "A.L.P.H.A Personal Assistant",
      description:
        "A personal assistant designed to make life easier. Designed with React and Python",
      url: "https://github.com/Nishit-Sharma/NJTSA-Software-Development-LocalHost",
      datePublished: "2023",
      programmingLanguage: ["React", "Python"],
      details: (
        <>
          <h1 className={`text-xl ${manropeSemiBold.className}`}>
            A.L.P.H.A Personal Assistant
          </h1>
          <p className={`mt-4 ${manropeRegular.className}`}>
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
              className={`px-4 py-2 font-bold text-white rounded-sm ${manropeSemiBold.className}`}
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
      url: "https://github.com/mcstrobotics/ChargedUp8588",
      datePublished: "2023",
      programmingLanguage: ["Java"],
      details: (
        <>
          <h1 className={`text-xl ${manropeSemiBold.className}`}>
            FRC Charged Up Robot
          </h1>
          <p className={`mt-4 ${manropeRegular.className}`}>
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
              className={`px-4 py-2 font-bold text-white rounded-sm ${manropeSemiBold.className}`}
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
      url: "https://github.com/Nishit-Sharma/portfolio",
      datePublished: "2023",
      programmingLanguage: ["JavaScript", "React", "Next.js"],
      details: (
        <>
          <h1 className={`text-xl ${manropeSemiBold.className}`}>
            My Portfolio
          </h1>
          <p className={`mt-4 ${manropeRegular.className}`}>
            This portfolio website was my first time using Next.js, and I
            learned a lot about React and the thought process of a Web Designer.
            I used Tailwind CSS for styling and Framer Motion for animations,
            which were also two new libraries for me. I also used Vercel for
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
              className={`px-4 py-2 font-bold text-white rounded-sm ${manropeSemiBold.className}`}
            >
              View on GitHub
            </motion.button>
          </a>
        </>
      ),
    },
  ];

  return (
    <SmoothAppear direction="up">
      <Script id="project-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "SoftwareSourceCode",
            position: index + 1,
            name: project.title,
            description: project.description,
            url: project.url,
            datePublished: project.datePublished,
            programmingLanguage: project.programmingLanguage,
            author: {
              "@type": "Person",
              name: "Nishit Sharma",
              url: "https://nishitsharma.vercel.app",
            },
          })),
        })}
      </Script>

      <section id="projects" className="py-20 text-center">
        <h1
          className={`mt-8 mb-12 text-7xl tracking-tight ${scholarRegular.className}`}
        >
          My Projects
        </h1>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-lg rounded-full transition-colors ${
                manropeRegular.className
              } ${
                filter === category
                  ? "bg-white-500 text-black-500 font-bold"
                  : "bg-black-600 hover:bg-black-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.overview}
              category={project.category}
              onClick={() => setModalProject(project)}
            />
          ))}
        </div>

        <ProjectModal
          isOpen={modalProject !== null}
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      </section>
    </SmoothAppear>
  );
}
