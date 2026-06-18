export const projectsData = [
  {
    slug: "citius-connect",
    title: "Citius Connect / Citius Holidays",
    category: "Web App",
    overview:
      "Citius Connect is a production CRM and operations portal for a travel company, built around real internal workflows across sales, contracting, operations, ticketing, finance, and leadership. I helped expand the public site and build staff-facing systems for leads, proposals, job cards, traveller operations, notifications, and secure data handling.",
    keyFeatures: [
      "Public travel and MICE site with CMS-driven content, blog/gallery, contact automation, analytics, and performance tooling.",
      "Staff portal workflows for sales, contracting, operations, ticketing, finance, HR, and leadership.",
      "CRM coverage for queries, leads, proposals, job cards, traveller records, passport/visa/ticketing, approvals, notifications, saved views, and activity logs.",
      "Sensitive traveller/passport handling with role-based access.",
      "Contact form validation, rate limiting, spam detection, and Turnstile support.",
    ],
    techStack: ["Next.js 16", "Convex", "BetterAuth", "Resend", "Razorpay", "Sanity CMS", "Vercel", "Tailwind", "Motion", "Biome"],
    technicalHighlight:
      "Convex-backed staff workflows connect lead intake, proposal work, traveller operations, notifications, and audit trails without exposing sensitive operational data broadly.",
    status: "Active",
  },
  {
    slug: "royals-and-radiant",
    title: "Royals & Radiant",
    category: "Web App",
    overview:
      "Royals & Radiant is a production e-commerce platform and admin dashboard for a jewelry and fashion brand. I built storefront, checkout, inventory, image upload, category, order, and admin workflows so nontechnical owners could manage the store without editing code.",
    keyFeatures: [
      "Product browsing with multi-level categories.",
      "Persistent cart and Stripe checkout flow.",
      "Protected admin dashboard for product, category, order, and user workflows.",
      "Bulk product uploads and Vercel Blob image uploads.",
      "Combo discounts, route protection, and user management scripts.",
    ],
    techStack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "BetterAuth", "Stripe", "Resend", "Vercel Blob", "Tailwind", "Motion"],
    technicalHighlight:
      "The storefront and protected admin flows share the same product, category, order, and image-management model so store operators can run day-to-day commerce without developer handoffs.",
    status: "Active",
  },
  {
    slug: "blueprint-tech-team",
    title: "Blueprint Tech Team",
    category: "Web App",
    overview:
      "As Blueprint Tech Team Lead, I designed and led a multi-week backend/API workshop sequence that helped students build project-team readiness through hands-on lessons, GitHub Classroom assignments, and mini-projects.",
    keyFeatures: [
      "Stevens Blueprint executive board role as VP of Operations and Tech Team Lead.",
      "Designed workshops for students across varying skill levels.",
      "Used GitHub Classroom assignments and mini-projects for hands-on practice.",
      "Covered FastAPI, REST APIs, request validation, Pydantic models, PostgreSQL, SQL CRUD, joins, SQLAlchemy, ORMs, sessions, and system design.",
      "Prepared students to apply for and contribute to nonprofit software project teams.",
    ],
    techStack: ["FastAPI", "REST APIs", "Pydantic", "PostgreSQL", "SQLAlchemy", "GitHub Classroom", "System Design"],
    technicalHighlight:
      "The curriculum builds from API fundamentals into database-backed services so students can reason about validation, persistence, relationships, and service boundaries before joining project work.",
    status: "Active",
  },
  {
    slug: "frc-charged-up-robot",
    title: "FRC Charged Up Robot",
    category: "Robotics",
    overview:
      "A competitive robot designed and built for the FIRST Robotics Competition 2023 season, 'Charged Up'. The robot was engineered to efficiently pick up, transport, and place game pieces (cones and cubes) onto various scoring locations on the game grid.",
    keyFeatures: [
      "Swerve drive base for high maneuverability and agility on the field.",
      "Custom-designed arm and gripper mechanism for precise game piece manipulation.",
      "Onboard camera system with computer vision for automated targeting and alignment.",
      "Autonomous routines developed to score points without driver intervention.",
    ],
    techStack: ["Java", "WPILib", "Computer Vision", "CAD (Onshape)"],
    technicalHighlight:
      "The robot's software featured a sophisticated state machine for managing complex arm movements, preventing collisions and enabling smooth, automated scoring sequences. The swerve drive odometry and PID controllers allowed for precise autonomous navigation and control.",
    status: "Completed",
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web App",
    url: "https://github.com/Nishit-Sharma/portfolio",
    overview:
      "A personal portfolio website designed to showcase my skills, projects, and experience to potential employers and collaborators. The site is built with a focus on performance, modern design, and a clean user experience.",
    keyFeatures: [
      "Fully responsive design that works on all devices.",
      "Dynamic project and blog sections powered by local data.",
      "Optimized for performance with Next.js features like Server Components and Image Optimization.",
      "Interactive UI with animations using Motion.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Motion",
      "JavaScript",
    ],
    technicalHighlight:
      "This website leverages Next.js App Router for a hybrid client/server rendering approach. Static pages are pre-generated for speed, while dynamic and interactive elements are handled by client components, creating a fast and seamless browsing experience.",
    status: "Completed",
  },
];
