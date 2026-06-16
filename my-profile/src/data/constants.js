export const NAV = ["About", "Skills", "Projects", "Contact"];

export const ABOUT = {
  name: "Nagendra Burusu",
  role: "Software Engineer",
  experience: "3+ Years",
  summary:
    "Software Engineer with around 3 years of experience in developing enterprise web applications using Java, Spring Boot, Azure, Docker, Kubernetes, MongoDB, and cloud-native technologies. Experienced in backend development, CI/CD pipelines, authentication systems, observability, and scalable application design.",
};

export const SKILLS = [
  // Languages
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "Golang", icon: "🐹", color: "#00ADD8" },

  // Frameworks
  { name: "Spring Boot", icon: "🍃", color: "#6db33f" },
  { name: "Spring Data", icon: "🌱", color: "#6db33f" },
  { name: "Spring Security", icon: "🔒", color: "#6db33f" },

  // Databases
  { name: "MySQL", icon: "🗄️", color: "#00758f" },
  { name: "MongoDB", icon: "🍃", color: "#47a248" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },

  // Cloud & DevOps
  { name: "Azure", icon: "☁️", color: "#0078d4" },
  { name: "Azure DevOps", icon: "🚀", color: "#0078d4" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "Kubernetes", icon: "☸️", color: "#326ce5" },

  // Tools & Platforms
  { name: "Keycloak", icon: "🔐", color: "#0066cc" },
  { name: "Elasticsearch", icon: "🔎", color: "#f4bf75" },
  { name: "Kibana", icon: "📊", color: "#005571" },
  { name: "Firebase", icon: "🔥", color: "#ffca28" },
];

export const PROJECTS = [
  {
    title: "RADSpa",
    desc:
      "Next-generation radiology workflow platform with integrated RIS/PACS. Contributed to patient security framework, ABHA integration, Azure DevOps setup, CI/CD pipelines, and observability dashboards.",
    tags: ["Java", "Spring Boot", "Azure", "Elasticsearch", "Kibana"],
    color: "#00e5b0",
  },
  {
    title: "Manufacturing Execution System (MES)",
    desc:
      "Built backend APIs and integrated Keycloak authentication for a Manufacturing Execution System that monitors and optimizes production processes using real-time factory data.",
    tags: ["Java", "Spring Boot", "Keycloak", "Docker", "MongoDB"],
    color: "#00e5b0",
  },
  {
    title: "Assist",
    desc:
      "Multi-tenant quality assurance platform for construction inspectors. Managed Kubernetes deployments, MongoDB sharding, CI/CD pipelines, and performance optimization.",
    tags: ["Java", "Kubernetes", "Docker", "Azure", "MongoDB"],
    color: "#00e5b0",
  },
  {
    title: "Solid Waste Management",
    desc:
      "Workflow-driven waste management platform for manufacturing plants with Firebase integration, custom workflows, backend APIs, and dashboards.",
    tags: ["Java", "Spring Boot", "Firebase", "MySQL"],
    color: "#00e5b0",
  },
];

export const CONTACTS = [
  {
    icon: "📞",
    label: "+91 9392496974",
    type: "Phone",
    url: "tel:+919392496974",
  },
  {
    icon: "✉️",
    label: "nagendra@gmail.com",
    type: "Email",
    url: "mailto:burusunagendra4@gmail.com",
  },
  {
    icon: "💻",
    label: "github.com/Nagendra-git",
    type: "GitHub",
    url: "https://github.com/Nagendra-git",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    type: "LinkedIn",
    url: "https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3B6xm2BxTARomf2vPu1vjVQQ%3D%3D",
  },
];