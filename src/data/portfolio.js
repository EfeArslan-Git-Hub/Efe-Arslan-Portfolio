
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
    ]
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
        title: "Optimizing Neural Networks for Edge Devices",
        publisher: "IEEE International Conference on AI",
        date: "2024",
        desc: "A comprehensive study on reducing latency in deep learning models deployed on IoT hardware.",
        link: "#",
        tags: ["Deep Learning", "IoT"]
    },
    {
        id: 2,
        title: "Blockchain Scalability Solutions",
        publisher: "Journal of Computer Security",
        date: "2023",
        desc: "Proposed a novel sharding mechanism to improve transaction throughput in decentralized networks.",
        link: "#",
        tags: ["Blockchain", "Security"]
    }
];
