import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiGit,
  SiSwift, SiXcode, SiApple,
  SiMeta, SiAdidas, SiNvidia, SiClaude,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Front-End",
    emoji: "🎨",
    description: "Building responsive, fast, and user-friendly web interfaces.",
    items: [
      { name: "HTML", icon: SiHtml5, level: "Familiar" },
      { name: "CSS", icon: SiCss, level: "Familiar" },
      { name: "JavaScript", icon: SiJavascript, level: "Learning" },
      { name: "React", icon: SiReact, level: "Learning" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Familiar" },
    ],
  },
  {
    title: "Back-End",
    emoji: "⚙️",
    description: "Designing APIs, server logic, and databases for scalable applications.",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: "Learning" },
      { name: "Express", icon: SiExpress, level: "Learning" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Learning" },
    ],
  },
  {
    title: "iOS Development",
    emoji: "📱",
    description: "Developing native iOS apps within the Apple ecosystem.",
    items: [
      { name: "Swift", icon: SiSwift, level: "Learning" },
      { name: "Xcode", icon: SiXcode, level: "Learning" },
      { name: "iOS SDK", icon: SiApple, level: "Learning" },
    ],
  },
  {
    title: "Tools",
    emoji: "🧰",
    description: "Tools for clean collaboration and development.",
    items: [
      { name: "Git & GitHub", icon: SiGit, level: "Familiar" },
    ],
  },
];

export const iosTools = ["Xcode", "Swift", "SwiftUI", "Simulator", "TestFlight"];

export const projects = [
  {
    title: "Nova Commerce",
    category: "E-Commerce Platform",
    description: "An online store with a product catalog, cart, secure checkout, and an admin dashboard to manage orders and inventory.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    emoji: "🛒",
    color: "bg-primary/20",
    github: "#",
    demo: "#",
  },
  {
    title: "Pulse Fitness",
    category: "iOS Mobile App",
    description: "A native iOS app for tracking workouts, habits, and daily goals with offline support and Apple Health integration.",
    stack: ["Swift", "SwiftUI", "Core Data", "HealthKit"],
    emoji: "💪",
    color: "bg-secondary/20",
    github: "#",
    demo: "#",
  },
  {
    title: "Orbit Analytics",
    category: "Data Dashboard",
    description: "A dashboard that shows live metrics, charts, and filters, with CSV and PDF export for teams.",
    stack: ["React", "Node.js", "WebSocket", "Chart.js"],
    emoji: "📊",
    color: "bg-accent/20",
    github: "#",
    demo: "#",
  },
  {
    title: "Nomad Hub",
    category: "Web + iOS App",
    description: "A companion app for remote workers to plan work across time zones, track travel, and find co-working spots.",
    stack: ["React", "Express", "Swift", "REST API"],
    emoji: "🌍",
    color: "bg-info/20",
    github: "#",
    demo: "#",
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Claude (Anthropic)",
    type: "Full-time",
    period: "2025 - Present",
    location: "Remote",
    logo: SiClaude,
    points: [
      "Build and ship full-stack features used by millions of people.",
      "Turn research prototypes into reliable production systems.",
      "Improve API performance across web and mobile clients.",
    ],

  },
  {
    role: "Software Engineer",
    company: "NVIDIA",
    type: "Full-time",
    period: "2023 - 2025",
    location: "Santa Clara, USA",
    logo: SiNvidia,
    points: [
      "Built dashboards to monitor GPU workloads in real time.",
      "Shipped REST services used by multiple engineering teams.",
      "Wrote automated tests and CI pipelines.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Adidas",
    type: "Internship",
    period: "Summer 2022",
    location: "Herzogenaurach, Germany",
    logo: SiAdidas,
    points: [
      "Improved the product discovery and checkout flow.",
      "Built accessible UI components with designers.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Meta",
    type: "Internship",
    period: "Summer 2021",
    location: "Menlo Park, USA",
    logo: SiMeta,
    points: [
      "Built an internal experimentation prototype.",
      "Presented the results to the team.",
    ],
  },
  {
    role: "iOS Engineering Intern",
    company: "Apple",
    type: "Internship",
    period: "Summer 2020",
    location: "Cupertino, USA",
    logo: SiApple,
    points: [
      "Developed native iOS features with Swift and SwiftUI.",
      "Learned Apple's design and review standards.",
    ],
  },
]
  export const contact = {
  email: "traveloka123@gmail.com",
  github: "https://github.com/Eldin-Syauqi",
  linkedin: "https://www.linkedin.com/in/muhammad-eldyne-syauqillah-745257275/?isSelfProfile=true",
};

export const testimonials = [
  {
    name: "Nienke Appels",
    role: "lecturer",
    quote: "He is competent and skillful developer,always make outstanding thing",
  },
  {
    name: "Glenn",
    role: "team mate",
    quote: "Professional dan tampan",
  },
  {
    name: "Fatima louis",
    role: "Mentor",
    quote: "He is game changer and good role model",
  },
];


