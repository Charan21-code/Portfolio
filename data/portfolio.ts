export type SystemCategory =
  | "AI/ML"
  | "Backend & Scale"
  | "Public Safety"
  | "Gamification";

export type SystemLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type PortfolioSystem = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  categoryTag: string;
  categories: SystemCategory[];
  problem?: string;
  solutionLabel: "The Solution" | "The System";
  solution: string;
  stack: string[];
  impact?: string;
  hook: string;
  summary: string;
  workflow: string[];
  implementation: string[];
  links: SystemLink[];
};

export const hero = {
  headline: "I build intelligent systems that solve complex, real-world problems.",
  subheadline:
    "Engineering AI pipelines, full-stack architectures, and robust backend infrastructure to bridge the gap between raw data and human decision-making."
};

export const philosophy = [
  {
    title: "Impact Over Complexity",
    body:
      "I don't build for the sake of using shiny frameworks. Whether it's preventing road accidents or routing pedestrians away from urban heat, I engineer solutions where technology directly improves human outcomes."
  },
  {
    title: "Systems, Not Just Models",
    body:
      "An AI model is just a component. I design end-to-end architectures from data pipelines and robust database scaling to user feedback loops and orchestrators ensuring the whole system works seamlessly in production environments."
  },
  {
    title: "The Human-in-the-Loop",
    body:
      "Automation should empower, not blindly replace. I design systems that augment human intelligence, bringing algorithms and human validation together for high-stakes decision-making."
  }
];

export const systems: PortfolioSystem[] = [
  {
    slug: "verdex",
    number: "System 01",
    title: "VERDEX",
    subtitle: "Coolest Path System",
    tag: "Hackathon Winner // Climate Tech & GIS",
    categoryTag: "CLIMATE TECH & GIS",
    categories: ["AI/ML"],
    problem:
      "Urban heat islands make daytime navigation hazardous. Standard mapping engines optimize purely for time, ignoring thermal stress.",
    solutionLabel: "The Solution",
    solution:
      "An intelligent routing engine that routes users along the coolest urban paths using satellite-fetched tree canopy data. It features a municipal dashboard recommending optimal tree-planting zones to combat urban heat.",
    stack: ["Python", "FastAPI", "Next.js", "QGIS/GeoPandas"],
    impact: "2nd Place at the Unnati Hackathon (Sustainability Domain).",
    hook:
      "An intelligent routing engine for cooler urban paths. The system pairs satellite-fetched canopy data with a municipal dashboard for tree-planting decisions.",
    summary:
      "A climate-tech routing system that reframes navigation as a human thermal safety problem.",
    workflow: [
      "Satellite canopy data",
      "QGIS and GeoPandas processing",
      "FastAPI routing service",
      "Next.js pedestrian interface",
      "Municipal planting dashboard"
    ],
    implementation: [
      "Python and GeoPandas handle spatial transforms where geospatial correctness matters more than interface polish.",
      "FastAPI exposes a lean routing layer that can be consumed by both pedestrian navigation and municipal planning views.",
      "Next.js keeps the user-facing route experience fast while leaving the geospatial workload on the backend.",
      "QGIS supports validation of tree canopy and heat-island assumptions before they are translated into routing weights."
    ],
    links: [
      { label: "Code Walkthrough", href: "/operator#contact" },
      { label: "Discuss VERDEX", href: "/operator#contact" }
    ]
  },
  {
    slug: "ai-driven-soar-platform",
    number: "System 02",
    title: "AI-Driven SOAR Platform",
    subtitle: "Cybersecurity Automation",
    tag: "Hackathon Winner // Cybersecurity",
    categoryTag: "CYBERSECURITY",
    categories: ["AI/ML", "Backend & Scale"],
    problem:
      "Network operators are overwhelmed by false positives and slow reaction times during cyber attacks.",
    solutionLabel: "The Solution",
    solution:
      "An end-to-end ML detection pipeline using XGBoost on network flow features. It automatically blocks high-confidence threats while routing borderline cases to an admin review dashboard. It includes a self-improving decision engine using SGD incremental updates and a Contextual Bandit approach.",
    stack: [
      "Python",
      "XGBoost",
      "Contextual Bandits",
      "LLaMA (Ollama)",
      "Sentence Transformers",
      "PostgreSQL"
    ],
    impact:
      "1st Place at the Cybersecurity & Intelligent Automation Hackathon among all competing teams.",
    hook:
      "A SOAR pipeline that separates confident threats from borderline cases. It combines XGBoost, human review, incremental learning, and a Contextual Bandit loop.",
    summary:
      "A cybersecurity automation platform built for faster triage without removing human judgment from the critical path.",
    workflow: [
      "Network flow features",
      "XGBoost threat scoring",
      "Confidence threshold router",
      "Auto-block or admin review",
      "SGD and Contextual Bandit updates"
    ],
    implementation: [
      "XGBoost handles structured network-flow features with fast, explainable scoring for operator workflows.",
      "PostgreSQL stores incidents, admin decisions, and feedback signals as durable operational history.",
      "LLaMA through Ollama and Sentence Transformers support analyst-facing context without making the model the final authority.",
      "SGD incremental updates and a Contextual Bandit approach let the decision engine improve from review outcomes."
    ],
    links: [
      { label: "Code Walkthrough", href: "/operator#contact" },
      { label: "Discuss SOAR", href: "/operator#contact" }
    ]
  },
  {
    slug: "gprime-offline-coding-engine",
    number: "System 03",
    title: "Offline Competitive Coding Engine",
    subtitle: "GPrime",
    tag: "Infrastructure // Backend Scale",
    categoryTag: "BACKEND SCALE",
    categories: ["Backend & Scale"],
    problem:
      "Tech clubs lack reliable platforms for coding contests, relying on third-party tools that fail without internet access.",
    solutionLabel: "The System",
    solution:
      "A fully offline, locally-hosted examination platform deployed on campus LAN with Docker containers for reproducible, conflict-free setup. It features a Redis-backed submission queue that buffers 100+ simultaneous code submissions, delivering instant acknowledgment while the judge processes entries.",
    stack: ["Socket.io", "PostgreSQL", "Redis", "Docker", "Ubuntu Server"],
    hook:
      "A campus-LAN coding engine designed to work without internet access. Redis buffers 100+ simultaneous submissions while Docker keeps judging reproducible.",
    summary:
      "An offline contest platform built for reliability under campus-scale pressure.",
    workflow: [
      "Contest clients on LAN",
      "Socket.io event channel",
      "Redis submission queue",
      "Dockerized judge workers",
      "PostgreSQL result ledger"
    ],
    implementation: [
      "Socket.io gives participants instant acknowledgment while slower judge work continues asynchronously.",
      "Redis absorbs traffic spikes from 100+ simultaneous code submissions without making the UI feel stuck.",
      "Docker keeps compiler and runtime environments reproducible across contest machines.",
      "PostgreSQL acts as the durable contest ledger for users, submissions, results, and audits."
    ],
    links: [
      { label: "Code Walkthrough", href: "/operator#contact" },
      { label: "Discuss GPrime", href: "/operator#contact" }
    ]
  },
  {
    slug: "cv-accident-detection-emergency-pipeline",
    number: "System 04",
    title: "CV Accident Detection & Emergency Pipeline",
    subtitle: "Public Safety Vision System",
    tag: "Computer Vision // Public Safety",
    categoryTag: "PUBLIC SAFETY",
    categories: ["AI/ML", "Public Safety"],
    problem:
      "Active driver-assistance systems are purely reactive, flagging danger only after a collision trajectory begins.",
    solutionLabel: "The Solution",
    solution:
      "A fine-tuned YOLOv8 model for real-time accident detection on live CCTV feeds. Upon detection, SMTP alerts are instantly dispatched to nearest hospitals, triggering a portal for emergency dispatch. It also monitors for driver distress signals and erratic lane shifts.",
    stack: ["Python", "YOLOv8", "OpenCV", "Mediapipe"],
    hook:
      "A real-time vision pipeline for detecting accidents from live CCTV feeds. SMTP alerts and an emergency portal convert detection into dispatch action.",
    summary:
      "A public-safety pipeline that connects computer vision inference to emergency response workflows.",
    workflow: [
      "Live CCTV stream",
      "OpenCV frame pipeline",
      "YOLOv8 accident detection",
      "SMTP hospital alert",
      "Emergency dispatch portal"
    ],
    implementation: [
      "YOLOv8 supplies real-time object detection performance for safety-critical video streams.",
      "OpenCV keeps frame ingestion, preprocessing, and inference handoff close to the camera feed.",
      "Mediapipe extends the pipeline toward driver distress signals and motion cues beyond collision detection.",
      "SMTP alerts and a dispatch portal make the system operational instead of stopping at model inference."
    ],
    links: [
      { label: "Code Walkthrough", href: "/operator#contact" },
      { label: "Discuss Safety Engine", href: "/operator#contact" }
    ]
  },
  {
    slug: "apex-productivity-app",
    number: "System 05",
    title: "Apex Productivity App",
    subtitle: "Gamified AI Habit System",
    tag: "Full-Stack // Gamified AI",
    categoryTag: "GAMIFIED AI",
    categories: ["AI/ML", "Gamification"],
    solutionLabel: "The System",
    solution:
      "A production-grade web app integrating the Gemini AI API for real-time habit coaching and motivation. It features an RPG-style progression engine where users earn XP and level up, backed by Firebase Firestore for live cross-session data sync.",
    stack: ["React", "Tailwind CSS", "Firebase", "Gemini AI API"],
    hook:
      "A production-grade habit app with real-time Gemini AI coaching. RPG-style XP and levels turn motivation into a persistent feedback loop.",
    summary:
      "A full-stack productivity system where AI coaching and game mechanics reinforce user consistency.",
    workflow: [
      "User habit events",
      "Gemini AI coaching prompt",
      "RPG XP progression",
      "Firebase Firestore sync",
      "Cross-session motivation loop"
    ],
    implementation: [
      "React and Tailwind CSS keep the habit interface responsive, direct, and easy to iterate.",
      "Gemini AI API powers coaching moments that respond to user state instead of static copy.",
      "Firebase Firestore supports live cross-session sync for progress, XP, and habit history.",
      "The RPG progression engine creates a measurable loop where effort becomes visible momentum."
    ],
    links: [
      { label: "Code Walkthrough", href: "/operator#contact" },
      { label: "Discuss Apex", href: "/operator#contact" }
    ]
  }
];

export const featuredSystems = systems.slice(0, 3);

export const filterLabels: Array<"All" | SystemCategory> = [
  "All",
  "AI/ML",
  "Backend & Scale",
  "Public Safety",
  "Gamification"
];

export const ledgerEntries = [
  {
    year: "Recent",
    category: "Hackathon",
    deployment: "1st Place Champion: Cybersecurity & Intelligent Automation Hackathon (MGIT)",
    impact:
      "1st Place at the Cybersecurity & Intelligent Automation Hackathon among all competing teams."
  },
  {
    year: "Recent",
    category: "Hackathon",
    deployment: "2nd Place Champion: Unnati Hackathon (CSI GRIET)",
    impact: "2nd Place at the Unnati Hackathon (Sustainability Domain)."
  },
  {
    year: "Ongoing",
    category: "Leadership",
    deployment: "AAC & MLSC Core Member roles",
    impact: "Core Member (Tech Domain) at Advanced Academic Center (AAC)."
  },
  {
    year: "Ongoing",
    category: "Mentorship",
    deployment: "MLOps Community Mentorship",
    impact:
      "Mentored first-year students on ML-Ops fundamentals, deployment pipelines, and production AI best practices."
  }
];

export const operatorStatement =
  "Building resilient systems requires a resilient mindset. When I step away from the architecture, you'll find me trekking high-altitude trails on a budget seeking out the grit of the mountains over luxury travel. I admire those who execute flawlessly under immense pressure, much like a legendary cricket chase, and I carry that same composure into my deadlines. Let's build something that matters.";

export const contactLinks: SystemLink[] = [
  { label: "Email", href: "mailto:your.email@example.com", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  { label: "GitHub", href: "https://github.com/", external: true }
];

export function getSystemBySlug(slug: string) {
  return systems.find((system) => system.slug === slug);
}
