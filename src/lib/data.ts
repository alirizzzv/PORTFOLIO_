export const site = {
  name: "Ali Husain Rizvi",
  role: "Software Engineer",
  tagline: "GeoInformatics · B.Tech @ NSUT",
  location: "New Delhi, India",
  email: "ali.husain.ug23@nsut.ac.in",
  phone: "+91-9599696044",
  phoneHref: "tel:+919599696044",
  valueProp:
    "I design scalable, high-performance systems — from local-first AI security to real-time ad bidding in under five milliseconds.",
  bio: [
    "I'm a B.Tech student in GeoInformatics at Netaji Subhas University of Technology, focused on data structures, backend systems, and building software that scales reliably.",
    "My work centers on two shipped systems — SENTINEL for local-first AI prompt security and ADPULSE for in-memory real-time ad bidding — with a bias toward performance, testing, and production-ready engineering.",
    "300+ DSA problems solved. Top 10 percentile in JEE Main. Open to software engineering internships and full-time roles.",
  ],
  resumePath: "/Ali Husain Rizvi Resume.pdf",
  photo: {
    src: "/ali-husain-rizvi.jpg",
    fallback: "/ali-husain-rizvi.jpg",
    alt: "Ali Husain Rizvi — software engineer portrait with editorial duotone treatment",
    width: 900,
    height: 1200,
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-husain-rizvi/",
  },
  {
    label: "GitHub",
    href: "https://github.com/alirizzzv",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/alirizzzv/",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/user/alirizzzv/",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    title: "Systems & CS",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "OOP",
      "System Design",
    ],
  },
  {
    title: "Problem-Solving",
    items: [
      "Algorithm Design",
      "Complexity Analysis",
      "Debugging & Optimization",
    ],
  },
  {
    title: "Analytical",
    items: [
      "Logical Reasoning",
      "Pattern Recognition",
      "Data Interpretation",
    ],
  },
] as const;

export type ExperienceKind = "project" | "competition";

export const experience = [
  {
    id: "sentinel",
    kind: "project" as ExperienceKind,
    title: "SENTINEL — AI Prompt Security Gateway",
    org: "Independent · Academic Project",
    type: "Security Engineering",
    period: "2026-06",
    stack: [
      "Python",
      "Manifest V3",
      "React",
      "Chart.js",
      "FastAPI",
      "JWT",
    ],
    highlights: [
      "Built a Manifest V3 Chrome extension that intercepts prompts on ChatGPT, Claude, and Gemini — scanning for API keys, credentials, and PII with zero network calls in the detection path.",
      "Implemented 5 algorithms from scratch (Aho-Corasick, Shannon entropy, Trie, Max-Heap, Merge-Intervals) detecting 24 secret patterns plus base64 decode-and-rescan.",
      "Shipped a React + Chart.js dashboard with FastAPI + JWT backend, 3 sensitivity levels, and 104 tests covering ReDoS safety and a false-positive corpus.",
    ],
    liveUrl: "https://alirizzzv.github.io/SENTINEL",
    githubUrl: "https://github.com/alirizzzv/SENTINEL",
  },
  {
    id: "adpulse",
    kind: "project" as ExperienceKind,
    title: "ADPULSE — Real-Time Demand-Side Platform",
    org: "Independent · Academic Project",
    type: "Real-Time Systems",
    period: "2026-06",
    stack: ["Python", "LightGBM", "Flask-SocketIO", "Three.js", "Docker"],
    highlights: [
      "Built a full-stack DSP participating in real-time ad auctions with in-memory bid pricing at ~5 ms and a sustained live feed of 7 bids/sec.",
      "Trained 2 LightGBM models (CTR + CVR) on IPinYou logs with 12 engineered features; pricing scales up to 11× base with budget pacer and hard cap of 300.",
      "Engineered a generator-based pipeline streaming multi-GB logs in O(1) memory; Flask-SocketIO + Three.js 3D dashboard, 46 tests across Python 3.9/3.11 CI.",
    ],
    liveUrl: "https://adpulse-457r.onrender.com",
    githubUrl: "https://github.com/alirizzzv/ADPULSE",
  },
  {
    id: "moksha-fest",
    kind: "competition" as ExperienceKind,
    title: "Team Lead — Moksha Fest",
    org: "Security & Operations · 50,000+ attendee festival",
    type: "Leadership",
    period: "2025",
    stack: null,
    highlights: [
      "Led a 12-member team for security protocols and risk assessment at a major Northeast India festival.",
      "Coordinated real-time incident response with zero breaches across a 3-day event.",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "jee-main",
    kind: "competition" as ExperienceKind,
    title: "JEE Main — Top 10 Percentile",
    org: "Among 1M+ candidates nationwide",
    type: "Achievement",
    period: "2023",
    stack: null,
    highlights: [
      "Ranked within the top 10 percentile in JEE Main among over one million candidates.",
      "Achieved top 1% AIR in VITEEE, qualifying for a top-tier branch seat at VIT University.",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "dsa",
    kind: "competition" as ExperienceKind,
    title: "300+ DSA Problems",
    org: "LeetCode · GeeksforGeeks",
    type: "Practice",
    period: "Ongoing",
    stack: null,
    highlights: [
      "Consistent problem-solving demonstrating algorithm design, complexity analysis, and optimization under pressure.",
    ],
    liveUrl: "https://leetcode.com/u/alirizzzv/",
    githubUrl: null,
  },
] as const;

export type ProjectCategory = "Security" | "Real-Time Systems";

export const projects = [
  {
    id: "sentinel",
    name: "SENTINEL",
    subtitle: "AI Prompt Security Gateway",
    tagline: "Your prompts. Scanned locally. Before they leave the browser.",
    date: "June 2026",
    category: "Security" as ProjectCategory,
    liveUrl: "https://alirizzzv.github.io/SENTINEL",
    githubUrl: "https://github.com/alirizzzv/SENTINEL",
    stack: [
      "Python",
      "Manifest V3",
      "React",
      "Chart.js",
      "FastAPI",
      "JWT",
    ],
    highlights: [
      "Manifest V3 Chrome extension intercepts prompts on ChatGPT, Claude, and Gemini with zero network calls in the detection path.",
      "Five algorithms from scratch — Aho-Corasick, Shannon entropy, Trie, Max-Heap, Merge-Intervals — detecting 24 secret patterns plus base64 decode-and-rescan.",
      "React + Chart.js dashboard with FastAPI + JWT backend, 3 sensitivity levels, and 104 tests covering ReDoS safety and a false-positive corpus.",
    ],
    metrics: ["104 tests", "24 patterns", "5 algorithms", "<5 ms local scan"],
    featured: true,
  },
  {
    id: "adpulse",
    name: "ADPULSE",
    subtitle: "Real-Time Demand-Side Platform",
    tagline: "Bid smarter, in under five milliseconds.",
    date: "June 2026",
    category: "Real-Time Systems" as ProjectCategory,
    liveUrl: "https://adpulse-457r.onrender.com",
    githubUrl: "https://github.com/alirizzzv/ADPULSE",
    stack: ["Python", "LightGBM", "Flask-SocketIO", "Three.js", "Docker"],
    highlights: [
      "Full-stack DSP participating in real-time ad auctions with in-memory bid pricing at ~5 ms and a sustained live feed of 7 bids/sec.",
      "Two LightGBM models (CTR + CVR) on IPinYou logs with 12 engineered features; pricing scales up to 11× base with budget pacer and hard cap of 300.",
      "Generator-based pipeline streams multi-GB logs in O(1) memory; Flask-SocketIO + Three.js 3D dashboard, 46 tests across Python 3.9/3.11 CI.",
    ],
    metrics: ["~5 ms bids", "7 bids/sec", "46 tests", "11× pricing"],
    featured: false,
  },
] as const;

export const education = [
  {
    degree: "B.Tech in GeoInformatics",
    school: "Netaji Subhas University of Technology",
    period: "2023 – 2027",
    detail: "7.03 CGPA",
    primary: true,
  },
  {
    degree: "Senior Secondary (CBSE Class XII)",
    school: "Bal Bharti Public School, Dwarka",
    period: "2022",
    detail: "91%",
    primary: false,
  },
  {
    degree: "Secondary (CBSE Class X)",
    school: "Bal Bharti Public School, Dwarka",
    period: "2020",
    detail: "81%",
    primary: false,
  },
] as const;

export const certifications = [
  {
    name: "100% Educational Scholarship (2018–2022) for sports performance, Class 8 through Class 12",
    url: null,
  },
  {
    name: "3× Gold Medals at the CBSE National Championship — national-level athletic excellence",
    url: null,
  },
  {
    name: "Top 10 percentile in JEE Main among 1M+ candidates",
    url: null,
  },
  {
    name: "Top 1% AIR in VITEEE — qualified for a top-tier branch seat at VIT University",
    url: null,
  },
] as const;
