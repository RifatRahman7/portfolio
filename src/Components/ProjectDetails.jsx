import { useParams } from 'react-router'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const projects = [
    {
        name: "Matrify",
        image: "https://iili.io/FZR8zs1.png",
        tech: ["React", "HTML", "Tailwind CSS", "JavaScript", "Firebase", "MongoDB", "Node.js", "Express"],
        description: "Matrify is a modern Matrimonial Web Application designed to help individuals find the perfect life partner. It features a clean, intuitive interface and a powerful biodata filtering system to match users with suitable profiles based on their preferences.",
        live: "https://matrify-ph-12.web.app/",
        github: "https://github.com/RifatRahman7/Matrify",
        challenges: [
            "Challenge 1",
            "Challenge 2"
        ],
        improvements: [
            "Improvement 1",
            "Improvement 2"
        ]
    },
    {
        name: "Review Hub",
        image: "https://iili.io/FZRiXDb.png",
        tech: ["React", "HTML", "Tailwind CSS", "JavaScript", "Firebase", "MongoDB", "Node.js", "Express"],
        description: "ReviewHub is a full-stack MERN web application where users can explore services, submit reviews with ratings, and manage their own service listings. It includes authentication, protected routes, filtering, search, and count-up analytics.",
        live: "https://reviewhub11ph.web.app/",
        github: "https://github.com/RifatRahman7/ReviewHub",
        challenges: [
            "Challenge 1",
            "Challenge 2"
        ],
        improvements: [
            "Improvement 1",
            "Improvement 2"
        ]
    },
    {
        name: "Freelance Mart",
        image: "https://iili.io/FZ57Kkx.png",
        tech: ["React", "HTML", "Tailwind CSS", "JavaScript", "Firebase", "MongoDB", "Node.js", "Express"],
        description: "FreelanceMart is a simple and functional freelancing platform where users can post jobs, edit tasks, update task details, and manage their listings. The platform is designed using CRUD operations and provides a clean and user-friendly interface for job/task management.",
        live: "https://freelancemart-bdbaa.web.app/",
        github: "https://github.com/RifatRahman7/FreelanceMart",
        challenges: [
            "Challenge 1",
            "Challenge 2"
        ],
        improvements: [
            "Improvement 1",
            "Improvement 2"
        ]
    }
]


export default function ProjectDetails() {
    const { id } = useParams()
    const project = projects[Number(id)]
console.log(id)
    return (
        <section className="relative min-h-screen py-20 px-4 bg-slate-950 text-slate-100 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="mx-auto max-w-3xl rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-lg p-8 md:p-12"
                style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(80, 0, 120, 0.10)",
                    borderWidth: 1.5,
                }}
            >
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-2xl w-full object-cover shadow-lg border border-white/10"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent mb-2">
                            {project.name}
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-slate-300 mb-4">{project.description}</p>
                        <div className="flex gap-4 mb-4">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-400 transition"
                            >
                                <FaExternalLinkAlt /> Live Project
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white transition"
                            >
                                <FaGithub /> GitHub Repo
                            </a>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold text-indigo-300 mb-1">Challenges Faced</h3>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                                {project.challenges.map((c, i) => (
                                    <li key={i}>{c}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-rose-300 mb-1">Improvements & Future Plans</h3>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                                {project.improvements.map((c, i) => (
                                    <li key={i}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}