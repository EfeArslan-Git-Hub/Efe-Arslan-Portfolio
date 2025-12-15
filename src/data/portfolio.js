
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaSuperscript } from 'react-icons/fa';
import {
    SiPython, SiJavascript, SiReact, SiNodedotjs,
    SiTailwindcss, SiDocker, SiMongodb, SiRedis,
    SiPytorch, SiOpenai, SiGit,
    SiTypescript, SiPostgresql, SiLatex
} from 'react-icons/si';

export const profile = {
    name: "Efe Arslan",
    avatar: "https://github.com/EfeArslan-Git-Hub.png",
    title: "Full Stack Developer & Researcher",
    email: "efearslancontact@gmail.com", // Add your real email here
    bio: "Passionate about building scalable web applications and exploring the frontiers of AI. Transforming complex problems into elegant solutions.",
    social: [
        { icon: FaGithub, link: "https://github.com/EfeArslan-Git-Hub", label: "GitHub" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/efe-arslan-8699a1230/", label: "LinkedIn" },
        { icon: FaTwitter, link: "https://twitter.com", label: "Twitter" },
        { icon: FaEnvelope, link: "mailto:efearslancontact@gmail.com", label: "Email" },
    ],
    resumeUrl: "https://drive.google.com/file/d/1BZVBOqTdKt1-wLLOzaq9h5juK4P_7cnl/view?usp=sharing"
};

export const projects = [
    {
        id: 1,
        title: "RAG Chatbot",
        desc: "An intelligent chatbot using Retrieval-Augmented Generation to answer queries based on custom document knowledge bases.",
        techStack: ["Python", "LangChain", "OpenAI", "Streamlit"],
        link: "https://efe-arslan-rag.streamlit.app/",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/RAG-Retrieval-Augmented-Generation-Document-Assistant",
        category: "AI & ML",
        span: "col-span-1 md:col-span-2 row-span-1" // Feature item
    },
    {
        id: 2,
        title: "E-Commerce API",
        desc: "A robust RESTful API for a scalable e-commerce platform featuring authentication, payment processing, and inventory management.",
        techStack: ["Node.js", "Express", "MongoDB", "Redis"],
        link: "https://efe-arslan-api.onrender.com",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/FastAPI-Ecommerce-Core",
        category: "Backend",
        span: "col-span-1 row-span-1"
    },
    {
        id: 7,
        title: "Lumina - AI Knowledge Base",
        desc: "A smart 'Second Brain' SaaS application built with Next.js 14. It allows users to store notes and links, while Gemini AI automatically generates concise summaries and smart tags in the background.",
        techStack: ["Next.js 14", "TypeScript", "Supabase", "Gemini AI", "Tailwind"],
        link: "https://lumina-ai-knowledge-base.vercel.app/",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/Lumina-AI-Knowledge-Base",
        category: "Full Stack SaaS",
        span: "col-span-1 md:col-span-2 row-span-1"
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
        id: 6,
        title: "Math Wizard (Symbolic Solver)",
        desc: "An advanced symbolic mathematics engine inspired by WolframAlpha. It solves complex Geometry, Calculus, and Physics problems, providing step-by-step LaTeX proofs and interactive 3D visualizations.",
        techStack: ["React", "Vite", "Python (SymPy)", "Plotly.js", "Tailwind"],
        link: "https://symbolic-geometry-solver.vercel.app/",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/Symbolic-Geometry-Solver",
        category: "AI & Research",
        span: "col-span-1 md:col-span-2 row-span-1"
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
    },
    {
        id: 5,
        title: "Cyber Snake AI",
        desc: "A classic Snake game reimagined with a Cyberpunk aesthetic. Features a 'Manual Mode' and an 'AI Autopilot' powered by Breadth-First Search (BFS) algorithm.",
        techStack: ["React", "Vite", "Tailwind", "Algorithms"],
        link: "https://cyber-snake-ai.vercel.app",
        githubUrl: "https://github.com/EfeArslan-Git-Hub/Cyber-Snake-AI",
        category: "Game Dev",
        span: "col-span-1 row-span-1"
    },


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
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "LaTeX", icon: SiLatex, color: "#008080" },
    { name: "Isabelle/HOL", icon: FaSuperscript, color: "#2563EB" },
];

export const education = [
    {
        id: 1,
        school: "Eskişehir Osmangazi University",
        degree: "M.Sc. in Mathematics and Computer Science",
        date: "Feb 2025 - Present",
        desc: "Specializing in Automated Theorem Proving & AI Architectures. Conducting research on formalizing mathematical proofs using Isabelle/HOL. Advisor: Assoc. Prof. Dr. Temel Ermiş."
    },
    {
        id: 2,
        school: "Eskişehir Osmangazi University",
        degree: "B.Sc. in Mathematics and Computer Science",
        date: "2020 - 2025",
        desc: "Built a strong foundation in both theoretical mathematics and software development. Relevant Coursework: Abstract Mathematics, System Simulation, Numerical Analysis."
    }
];
