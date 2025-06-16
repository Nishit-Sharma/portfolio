export const projectsData = [
  {
    slug: "ai-voice-assistant-jarvis",
    title: "AI-Powered Voice Assistant (Jarvis)",
    category: "AI/ML & Automation",
    overview:
      "A sophisticated, voice-activated AI assistant designed to streamline user productivity by controlling desktop applications, managing information, and executing complex commands through natural language. Inspired by the fictional AI, this project emphasizes a secure, modular architecture and leverages a suite of modern APIs to provide a powerful and extensible personal assistant experience, with a focus on using free-tier services.",
    keyFeatures: [
      "Utilizes local wake-word detection and speech-to-text engines to enable hands-free operation.",
      "Executes tasks across the operating system and web browsers, from opening applications to automating online workflows.",
      "Seamlessly connects with Google services (Calendar, Gmail), Spotify, and weather APIs to manage daily tasks and information.",
      "Features a modular design that allows for the easy addition of new capabilities and integrations.",
    ],
    techStack: [
      "Python",
      "asyncio",
      "pydantic",
      "Google Gemini",
      "SpeechRecognition",
      "pyttsx3",
      "Whisper",
      "PyAutoGUI",
      "Playwright",
      "Selenium",
      "Google API Client",
      "Spotipy",
    ],
    technicalHighlight:
      "The project features a robust, security-first architecture with a dedicated `PermissionManager` that governs all actions. This system assigns risk levels to different operations, validates inputs to prevent injection attacks, and provides a sandboxed environment for execution, ensuring that the assistant operates safely and reliably, even when performing sensitive tasks.",
    status: "Completed",
  },
  {
    slug: "intelligent-ocr-document-processor",
    title: "Intelligent OCR Document Processor",
    category: "Desktop App",
    overview:
      "A powerful desktop application designed to streamline document workflows by converting images and PDFs into searchable text. It leverages Optical Character Recognition (OCR) to extract text and then intelligently categorizes the documents based on their content. This tool is ideal for individuals and businesses looking to digitize and organize paper-based information with speed and accuracy.",
    keyFeatures: [
      "Extracts text from various file types, including images (PNG, JPG) and multi-page PDFs.",
      "Automatically analyzes extracted text to sort documents into predefined categories like 'Invoice,' 'Receipt,' or 'Report.'",
      "Built with Electron and Next.js to provide a responsive, cross-platform user interface with real-time notifications.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Electron",
      "Tesseract.js",
      "PDF.js",
    ],
    technicalHighlight:
      "The application's core strength lies in its efficient, client-side document processing pipeline. It integrates the Tesseract.js OCR engine for in-app text recognition and a custom categorization service directly within an Electron-based desktop architecture, ensuring that all processing occurs locally on the user's machine for maximum privacy and performance.",
    status: "Completed",
  },
  {
    slug: "client-activity-tracker",
    title: "Client Activity and Communication Tracker",
    category: "Web App",
    overview:
      "A web-based client management tool designed for freelancers or small businesses to systematically log and monitor client interactions. It provides a centralized platform to track all client-related activities, communications, and tasks, ensuring no detail is missed and offering a clear overview of client engagement.",
    keyFeatures: [
      "Quickly record detailed client activities, including communication method, subject, status, and assigned team member.",
      "Effortlessly search and filter the activity log by client, date range, status, and other parameters.",
      "The activity dashboard updates in real-time without needing to refresh.",
      "Uses Firebase Authentication to ensure that only authorized users can access and manage client data.",
    ],
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Firebase Firestore",
      "Firebase Authentication",
    ],
    technicalHighlight:
      "The application's core strength lies in its dynamic and efficient data handling. A custom React hook (`useActivities`) was developed to construct complex, compound Firestore queries on the fly based on user-selected filters and sorting options. This hook also leverages Firestore's real-time `onSnapshot` listener, providing an instantly responsive user experience by pushing live data updates to the front end without manual intervention.",
    status: "Completed",
  },
  {
    slug: "valorant-strategy-analyzer",
    title: "Valorant Strategy Analyzer",
    category: "AI/ML",
    overview:
      "During a match of Valorant, teams have very clear tells on what they do. The point of the app is for the user to upload a video of a match that has the minimap showing and the app is able to predict what the enemies will do based on where they are. It will scan through every round of the game and generate a report of what a team likes to do during a map, how they like to execute sites, and who is in key areas of the map during the executes.",
    keyFeatures: [
      "Video analysis of Valorant gameplay.",
      "Predictive analysis of enemy team strategies.",
      "Round-by-round report generation.",
      "Identification of key player positions and site execution patterns.",
    ],
    techStack: ["Python", "OpenCV", "PyTorch/TensorFlow", "MoviePy"],
    technicalHighlight:
      "The core of this project will be a computer vision model trained to recognize agents, abilities, and map locations from the minimap in a Valorant gameplay video. It will use this data to build a state model of each round, identifying patterns and predicting enemy team behavior with a high degree of accuracy.",
    status: "Planned",
  },
  {
    slug: "coding-time-at-the-inventory",
    title: "C++ Labs: Coding Time at the Inventory",
    category: "C++",
    overview:
      "A C++ application developed to manage inventory data, demonstrating fundamental concepts of object-oriented programming, data structures, and file I/O. The project focuses on efficient data handling and a clean, console-based user interface.",
    keyFeatures: [
      "Create, read, update, and delete inventory records.",
      "Data persistence through file streaming.",
      "Implementation of custom data structures for inventory management.",
    ],
    techStack: ["C++", "File I/O"],
    technicalHighlight:
      "This project emphasizes robust error handling and memory management in C++, ensuring stability and reliability when processing inventory files.",
    status: "Completed",
  },
  {
    slug: "rise-of-the-minis",
    title: "C++ Labs: Rise of the Minis",
    category: "C++",
    overview:
      "A text-based adventure game built in C++, showcasing skills in algorithmic thinking, state management, and creative problem-solving. Players navigate a world, interact with characters, and make choices that affect the outcome of the story.",
    keyFeatures: [
      "Complex narrative branching based on user input.",
      "Dynamic event system to manage game state.",
      "Use of object-oriented principles to model game entities.",
    ],
    techStack: ["C++"],
    technicalHighlight:
      "The game features a modular design that allows for easy expansion of the story, characters, and game mechanics, demonstrating a forward-thinking approach to software architecture in a game development context.",
    status: "Completed",
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
    overview:
      "A personal portfolio website designed to showcase my skills, projects, and experience to potential employers and collaborators. The site is built with a focus on performance, modern design, and a clean user experience.",
    keyFeatures: [
      "Fully responsive design that works on all devices.",
      "Dynamic project and blog sections powered by local data.",
      "Optimized for performance with Next.js features like Server Components and Image Optimization.",
      "Interactive UI with animations using Framer Motion.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    technicalHighlight:
      "This website leverages Next.js App Router for a hybrid client/server rendering approach. Static pages are pre-generated for speed, while dynamic and interactive elements are handled by client components, creating a fast and seamless browsing experience.",
    status: "Completed",
  },
];
