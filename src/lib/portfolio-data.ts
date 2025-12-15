import { Code, BrainCircuit, Database, Cloud, GitBranch, Github, Linkedin, Mail, BarChart, Settings, GanttChartSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: LucideIcon;
  url: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  avatarId: string;
  socials: SocialLink[];
}

interface SkillItem {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  category: string;
  icon: LucideIcon;
  items: SkillItem[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  huggingFaceLink?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Rakshit",
  title: "Data Science Aspirant",
  summary: "A highly motivated and detail-oriented data science aspirant with hands-on experience in machine learning, data analysis, and AI application development. Proven ability to leverage data to drive insights and build intelligent systems, with a strong foundation in statistical modeling and a passion for solving complex problems.",
  avatarId: "avatar",
  socials: [
    { icon: Github, url: "https://github.com/example" },
    { icon: Linkedin, url: "https://linkedin.com/in/example" },
    { icon: Mail, url: "mailto:rakshit@example.com" },
  ]
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Analyzer", href: "#analyzer" },
];

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    icon: Code,
    items: [
      { name: "Python", proficiency: 95 },
      { name: "R", proficiency: 80 },
      { name: "SQL", proficiency: 90 },
      { name: "C++", proficiency: 70 },
    ],
  },
  {
    category: "ML/AI",
    icon: BrainCircuit,
    items: [
      { name: "Scikit-learn", proficiency: 95 },
      { name: "Deep Learning", proficiency: 85 },
      { name: "NLP", proficiency: 90 },
      { name: "Computer Vision", proficiency: 75 },
    ],
  },
  {
    category: "Analytics",
    icon: BarChart,
    items: [
      { name: "Pandas & NumPy", proficiency: 95 },
      { name: "Power BI", proficiency: 85 },
      { name: "Statistics", proficiency: 90 },
      { name: "Data Visualization", proficiency: 90 },
    ],
  },
  {
    category: "Frameworks",
    icon: GanttChartSquare,
    items: [
      { name: "TensorFlow", proficiency: 85 },
      { name: "PyTorch", proficiency: 80 },
      { name: "Hugging Face", proficiency: 88 },
      { name: "FastAPI", proficiency: 75 },
    ],
  },
  {
    category: "Cloud/DevOps",
    icon: Cloud,
    items: [
      { name: "Docker", proficiency: 80 },
      { name: "Git & GitHub", proficiency: 95 },
      { name: "GCP", proficiency: 70 },
      { name: "CI/CD", proficiency: 65 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Data Analyst Intern",
    company: "Tech Solutions Inc.",
    period: "May 2023 - Aug 2023",
    description: "Developed and maintained Power BI dashboards to track key performance indicators, providing actionable insights to the marketing team. Performed exploratory data analysis on customer datasets to identify trends and patterns, leading to a 10% improvement in campaign targeting.",
  },
  {
    role: "Research Intern",
    company: "AI Research Lab",
    period: "Jan 2023 - Apr 2023",
    description: "Contributed to a research project on transfer learning for NLP tasks. Fine-tuned BERT-based models for sentiment analysis and text classification, achieving state-of-the-art results on internal benchmarks. Co-authored a paper submitted to a top-tier AI conference.",
  }
];

export const projects: Project[] = [
  {
    title: "NayaLLM",
    description: "A specialized Large Language Model (LLM) fine-tuned on a custom legal dataset for contract analysis and summarization. The project involves data preprocessing, model training, and evaluation.",
    tags: ["LLM", "NLP", "PyTorch", "Hugging Face"],
    huggingFaceLink: "https://huggingface.co/Rak-shit/Naya-Model-Summeriser"
  },
  {
    title: "BSP Shayak Chatbot",
    description: "An AI-powered chatbot designed to assist customers with service inquiries. Built using retrieval-augmented generation (RAG) to provide accurate answers from a knowledge base.",
    tags: ["Chatbot", "RAG", "FastAPI", "NLP"],
    githubLink: "https://github.com/Mr-RAKSHIT-2004-GUPTA/bsp_gatepass_chatbot"
  },
  {
    title: "Sensor Fault Detection",
    description: "An end-to-end machine learning project to detect faults in industrial sensors. The system uses a classification model to predict failures, deployed as a web service with a CI/CD pipeline.",
    tags: ["Machine Learning", "Classification", "Docker", "GCP"],
    githubLink: "https://github.com/Mr-RAKSHIT-2004-GUPTA/Sensor-Project"
  }
];
