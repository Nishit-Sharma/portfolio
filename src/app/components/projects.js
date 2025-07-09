"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { SmoothAppear } from "../utils/animation-utils";
import {
  manropeRegular,
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

  return (
    <SmoothAppear direction="up">
      <Script id="project-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projectsData.map((project, index) => ({
            "@type": "SoftwareSourceCode",
            position: index + 1,
            name: project.title,
            description: project.overview,
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
