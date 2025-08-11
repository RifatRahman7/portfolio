import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb, SiFramer, SiFirebase } from 'react-icons/si'
import { BiLogoVisualStudio } from "react-icons/bi";
import { motion } from 'framer-motion'

// Skill data
const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-emerald-400" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "GitHub", icon: <FaGithub className="text-white" /> },
            { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400" /> },
            { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 px-4 bg-slate-950 text-slate-100 overflow-hidden">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
                    Skills
                </h2>
                <p className="text-lg text-slate-300 mt-2">
                    My technical toolbox, categorized for clarity.
                </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3">
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.08, type: 'spring' }}
                        className={`
              group rounded-2xl p-6 md:p-8 border shadow-2xl
              bg-slate-900/80 border-white/10
              backdrop-blur-lg
              hover:shadow-3xl transition-all duration-300
              relative
              before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-0 group-hover:before:opacity-100 before:transition
            `}
                        style={{
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(80, 0, 120, 0.10)",
                            borderWidth: 1.5,
                        }}
                    >
                        <h3 className="text-xl text-center font-bold mb-6 bg-gradient-to-r from-indigo-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
                            {cat.title}
                        </h3>
                        <div className="grid grid-cols-3 gap-y-6 justify-items-center">
                            {cat.skills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center">
                                    <span
                                        className="
                      inline-flex items-center justify-center
                      text-4xl mb-2
                      border border-white/20
                      rounded-xl
                      shadow-lg
                      bg-slate-800/60
                      transition
                      duration-200
                      ease-in-out
                      cursor-pointer
                      hover:scale-105
                      focus-visible:scale-105
                      hover:border-violet-400
                      hover:shadow-violet-400/30
                      active:scale-95
                      p-3
                    "
                                        tabIndex={0}
                                        aria-label={skill.name}
                                    >
                                        {skill.icon}
                                    </span>
                                    <span className="text-sm text-slate-100/90 text-center mt-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}