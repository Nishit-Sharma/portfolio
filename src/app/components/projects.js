"use client"

import { motion, useMotionTemplate, useSpring, useTransform, useVelocity } from "motion/react"
import { useEffect, useRef, useState, useMemo, useCallback } from "react"
import Script from "next/script"
import { SmoothAppear } from "../utils/animation-utils"

// Updated font import to use local fonts file
import { scholarRegular } from "../fonts"
import { projectsData } from "../static/data/projectsData"
import { ProjectCard, ProjectModal } from "../utils/page-utils"

const categoryColors = {
  All: "#a0a0a0",
  AI: "#4a2d3a",
  "Desktop Apps": "#2a4a3c",
  "Web App": "#2d3a4a",
  Robotics: "#3a2d4a",
}

const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted
}

const calculateViewX = (difference, containerWidth) => {
  return difference * (containerWidth * 0.75) * -1
}

const View = ({ children, containerWidth, viewIndex, activeIndex }) => {
  const [difference, setDifference] = useState(activeIndex - viewIndex)
  const x = useSpring(calculateViewX(difference, containerWidth), {
    stiffness: 400,
    damping: 60,
  })

  const xVelocity = useVelocity(x)

  const opacity = useTransform(x, [-containerWidth * 0.6, 0, containerWidth * 0.6], [0, 1, 0])

  const blur = useTransform(xVelocity, [-1000, 0, 1000], [4, 0, 4], {
    clamp: false,
  })

  useEffect(() => {
    const newDifference = activeIndex - viewIndex
    setDifference(newDifference)
    const newX = calculateViewX(newDifference, containerWidth)
    x.set(newX)
  }, [activeIndex, containerWidth, viewIndex, x])

  const isActive = viewIndex === activeIndex

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        padding: 8,
        transformOrigin: "center",
        transform: "translate3d(0, 0, 0)",
        willChange: "transform, filter",
        isolation: "isolate",
        pointerEvents: isActive ? "auto" : "none",
        x,
        opacity,
        filter: useMotionTemplate`blur(${blur}px)`,
      }}
    >
      <div className="w-full h-full p-4 md:p-8 box-border text-wrap-balance flex flex-col gap-6 md:gap-12 overflow-y-auto">
        {children}
      </div>
    </motion.div>
  )
}

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <ul
      className="border border-[#1d2628] bg-[var(--layer-transparent)] backdrop-blur-[10px] rounded-xl flex p-0 w-full m-0"
      aria-label="Project categories"
    >
      {tabs.map((tab, idx) => (
        <motion.li
          key={tab.id}
          className="flex flex-grow"
          role="presentation"
          style={{
            padding: idx === 0 ? "4px 0px 4px 4px" : idx === tabs.length - 1 ? "4px 4px 4px 0px" : 4,
          }}
        >
          <motion.button
            className="relative w-full p-2 flex justify-center items-center text-sm rounded-lg focus:outline-none transition-colors"
            whileFocus={{
              outline: "2px solid var(--accent)",
            }}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            style={{
              color: activeTab === tab.id ? "#f5f5f5" : "var(--feint-text)",
            }}
          >
            <span
              className="z-10"
              style={{
                color: activeTab === tab.id ? "#f5f5f5" : "var(--feint-text)",
              }}
            >
              {tab.label}
            </span>

            {tab.id === activeTab ? (
              <motion.span
                layoutId="activeTab"
                id="activeTab"
                transition={{
                  type: "spring",
                  stiffness: 600,
                  damping: 40,
                }}
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundColor: tab.color,
                }}
              />
            ) : null}
          </motion.button>
        </motion.li>
      ))}
    </ul>
  )
}

const ProjectCategoryContent = ({ category, onProjectClick }) => {
  const filteredProjects = useMemo(() => {
    return category === "All" ? projectsData : projectsData.filter((project) => project.category === category)
  }, [category])

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-fr"
      role="tabpanel"
      id={`panel-${category}`}
      aria-labelledby={`tab-${category}`}
    >
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          description={project.overview}
          category={project.category}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All")
  const [modalProject, setModalProject] = useState(null)
  const projectsRef = useRef(null)

  const isMounted = useMounted()

  const viewsContainerRef = useRef(null)
  const [viewsContainerWidth, setViewsContainerWidth] = useState(0)

  const categories = useMemo(() => ["All", ...new Set(projectsData.map((p) => p.category))], [])

  const tabs = useMemo(
    () =>
      categories.map((category) => ({
        id: category,
        label: category,
        color: categoryColors[category] || "#a0a0a0",
        description: `Projects in ${category} category`,
      })),
    [categories],
  )

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab)
  }, [])

  useEffect(() => {
    if (window.location.hash === "#projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    let timeoutId

    const updateWidth = () => {
      if (viewsContainerRef.current) {
        const width = viewsContainerRef.current.getBoundingClientRect().width
        setViewsContainerWidth(width)
      }
    }

    const debouncedUpdateWidth = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateWidth, 100)
    }

    updateWidth()
    window.addEventListener("resize", debouncedUpdateWidth)

    return () => {
      window.removeEventListener("resize", debouncedUpdateWidth)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target.closest('[role="tablist"]')) {
        const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
        let newIndex = currentIndex

        switch (event.key) {
          case "ArrowLeft":
            event.preventDefault()
            newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
            break
          case "ArrowRight":
            event.preventDefault()
            newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
            break
          case "Home":
            event.preventDefault()
            newIndex = 0
            break
          case "End":
            event.preventDefault()
            newIndex = tabs.length - 1
            break
        }

        if (newIndex !== currentIndex) {
          setActiveTab(tabs[newIndex].id)
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [activeTab, tabs])

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

      <section ref={projectsRef} id="projects" className="py-20 text-center">
        <h1 className={`mt-8 mb-12 text-4xl md:text-7xl tracking-tight ${scholarRegular.className}`}>My Projects</h1>

        <div className="relative flex flex-col gap-8 justify-center items-center min-w-[280px] w-[clamp(280px,90dvw,10000px)] h-full">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
          <div
            id="views-container"
            ref={viewsContainerRef}
            className="overflow-hidden relative w-full min-h-[800px] h-auto max-h-[80vh] bg-[var(--layer-transparent)] backdrop-blur-[10px] rounded-xl"
            style={{
              height: "clamp(800px, 60vh, 800px)",
            }}
          >
            {isMounted &&
              tabs.map((tab, idx) => (
                <View
                  key={tab.id}
                  containerWidth={viewsContainerWidth}
                  viewIndex={idx}
                  activeIndex={tabs.findIndex((t) => t.id === activeTab)}
                >
                  <ProjectCategoryContent category={tab.id} onProjectClick={setModalProject} />
                </View>
              ))}
          </div>
        </div>

        <ProjectModal isOpen={modalProject !== null} project={modalProject} onClose={() => setModalProject(null)} />
      </section>
    </SmoothAppear>
  )
}
