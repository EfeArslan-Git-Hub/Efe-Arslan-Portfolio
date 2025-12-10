
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import {
    SiPython, SiJavascript, SiReact, SiNodedotjs,
    SiTailwindcss, SiDocker, SiMongodb, SiRedis,
    SiPytorch, SiOpenai, SiGit
} from 'react-icons/si';

export const profile = {
    name: "Efe Arslan",
    avatar: "https://github.com/EfeArslan-Git-Hub.png",
    title: "Full Stack Developer & Researcher",
    bio: "Passionate about building scalable web applications and exploring the frontiers of AI. Transforming complex problems into elegant solutions.",
    social: [
        { icon: FaGithub, link: "https://github.com/EfeArslan-Git-Hub", label: "GitHub" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/efe-arslan-8699a1230/", label: "LinkedIn" },
        { icon: FaTwitter, link: "https://twitter.com", label: "Twitter" },
        { icon: FaEnvelope, link: "mailto:contact@efe-arslan.com", label: "Email" },
    ],
    resumeUrl: "https://drive.google.com/file/d/1BZVBOqTdKt1-wLLOzaq9h5juK4P_7cnl/view?usp=sharing"
};

export const projects = [
    {
        id: 1,
        title: "RAG Chatbot",
        desc: "An intelligent chatbot using Retrieval-Augmented Generation to answer queries based on custom document knowledge bases.",
        techStack: ["Python", "LangChain", "OpenAI", "Streamlit"],
        link: "efe-arslan-rag.streamlit.app/",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/RAG-Retrieval-Augmented-Generation-Document-Assistant",
        category: "AI & ML",
        span: "col-span-1 md:col-span-2 row-span-1" // Feature item
    },
    {
        id: 2,
        title: "E-Commerce API",
        desc: "A robust RESTful API for a scalable e-commerce platform featuring authentication, payment processing, and inventory management.",
        techStack: ["Node.js", "Express", "MongoDB", "Redis"],
        link: "efe-arslan-api.onrender.com/docs",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/FastAPI-Ecommerce-Core",
        category: "Backend",
        span: "col-span-1 row-span-1"
    },
    {
        id: 3,
        title: "Sorting Visualizer",
        desc: "Interactive visualization tool for various sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort.",
        techStack: ["React", "JavaScript", "CSS Animations"],
        link: "https://efe-arslan-sorting-visualizer.vercel.app/",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/React-Sorting-Visualizer",
        category: "Frontend",
        span: "col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "Biometric Dashboard",
        desc: "Analysis dashboard for biometric data usage and security metrics.",
        techStack: ["Python", "Streamlit", "Pandas"],
        link: "#",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/Biometric-Face-Analysis-Dashboard",
        category: "Data Viz",
        span: "col-span-1 row-span-1"
    }
];

export const publications = [
    {
        id: 1,
        title: "AI-Assisted Theorem Proving with Isabelle/HOL",
        publisher: "Academic Research & Technical Series",
        date: "2023 - Present",
        desc: "A comprehensive project on formalizing complex mathematical theorems using the Isabelle/HOL proof assistant. Investigating the integration of LLMs to automate intermediate proof steps.",
        link: "https://github.com/EfeArslan-Git-Hub",
        tags: ["Isabelle/HOL", "Formal Verification", "Automated Reasoning"]
    },
    {
        id: 2,
        title: "Automated Geometry Reasoning via GeoGebra Discovery",
        publisher: "Educational Series (Upcoming)",
        date: "2025",
        desc: "An upcoming technical series exploring the capabilities of GeoGebra Discovery for automated theorem proving in Euclidean geometry, bridging the gap between visual intuition and formal logic.",
        link: "#",
        tags: ["GeoGebra", "Geometry", "Symbolic Computation"]
    }
];

export const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "OpenAI", icon: SiOpenai, color: "#412991" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Git", icon: SiGit, color: "#F05032" },
];
