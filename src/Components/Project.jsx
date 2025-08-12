import { useNavigate } from 'react-router'
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

export default function Project() {
    const navigate = useNavigate();

    return (
        <section id="projects" className="relative py-20 px-4 bg-slate-950 text-slate-100 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
                    Projects
                </h2>
                <p className="text-lg text-slate-300 mt-2">
                    Some of my best work, built with modern web technologies.
                </p>
            </motion.div>

            <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.08, type: 'spring' }}
                        className={`
              group rounded-2xl p-0 border shadow-2xl
              bg-slate-900/80 border-white/10
              backdrop-blur-lg
              hover:scale-[1.025] hover:shadow-3xl transition-all duration-300
              relative flex flex-col
              before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-0 group-hover:before:opacity-100 before:transition
            `}
                        style={{
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(80, 0, 120, 0.10)",
                            borderWidth: 1.5,
                        }}
                    >
                        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1 flex flex-col p-6">
                            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
                                {project.name}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                            <div className="mt-auto">
                                <button
                                    onClick={() => navigate(`/projects/${idx}`)}
                                    className="inline-block rounded-full cursor-pointer bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 hover:scale-105 transition"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}