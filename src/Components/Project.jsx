import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-cyan-400" title="React" />,
  HTML: <FaHtml5 className="text-orange-400" title="HTML5" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />,
  JavaScript: <FaJs className="text-yellow-300" title="JavaScript" />,
  Firebase: <SiFirebase className="text-yellow-400" title="Firebase" />,
  MongoDB: <SiMongodb className="text-emerald-400" title="MongoDB" />,
  "Node.js": <FaNodeJs className="text-green-400" title="Node.js" />,
  Express: <SiExpress className="text-gray-300" title="Express.js" />,
};

const projects = [
  {
    name: "Matrify",
    image: "https://iili.io/FZR8zs1.png",
    tech: [
      "React",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    description:
      "Matrify is a modern Matrimonial Web Application designed to help individuals find the perfect life partner. It features a clean, intuitive interface and a powerful biodata filtering system to match users with suitable profiles based on their preferences.",
    live: "https://matrify-ph-12.web.app/",
    github: "https://github.com/RifatRahman7/Matrify",
    challenges: [
      "Implementing secure user authentication and privacy for sensitive biodata.",
      "Designing an efficient and flexible biodata filtering and matching algorithm.",
      "Handling image uploads and optimizing profile images for performance.",
      "Ensuring a smooth, mobile-friendly user experience across all devices."
    ],
    improvements: [
      "Add real-time chat and messaging between matched users.",
      "Integrate advanced search filters (e.g., by interests, education, profession).",
      "Implement profile verification and admin moderation tools.",
      "Add push/email notifications for new matches and messages."
    ],
  },
  {
    name: "Review Hub",
    image: "https://iili.io/FZRiXDb.png",
    tech: [
      "React",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    description:
      "ReviewHub is a full-stack MERN web application where users can explore services, submit reviews with ratings, and manage their own service listings. It includes authentication, protected routes, filtering, search, and count-up analytics.",
    live: "https://reviewhub11ph.web.app/",
    github: "https://github.com/RifatRahman7/ReviewHub",
    challenges: [
      "Building a robust review and rating system with anti-spam measures.",
      "Managing authentication and protected routes for user dashboards.",
      "Implementing efficient search and filtering for services and reviews.",
      "Displaying analytics and count-up stats in a performant way."
    ],
    improvements: [
      "Enable users to upload images with their reviews.",
      "Add social login (Google, Facebook) for easier onboarding.",
      "Implement review moderation and reporting features.",
      "Add pagination or infinite scroll for large lists of reviews."
    ],
  },
  {
    name: "Freelance Mart",
    image: "https://iili.io/FZ57Kkx.png",
    tech: [
      "React",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    description:
      "FreelanceMart is a simple and functional freelancing platform where users can post jobs, edit tasks, update task details, and manage their listings. The platform is designed using CRUD operations and provides a clean and user-friendly interface for job/task management.",
    live: "https://freelancemart-bdbaa.web.app/",
    github: "https://github.com/RifatRahman7/FreelanceMart",
    challenges: [
      "Designing a flexible job/task CRUD system for both clients and freelancers.",
      "Managing user roles and permissions securely.",
      "Handling real-time updates for job status and task changes.",
      "Ensuring data consistency and validation across the platform."
    ],
    improvements: [
      "Integrate a messaging/chat system for clients and freelancers.",
      "Add payment gateway integration for secure transactions.",
      "Implement user ratings and feedback after job completion.",
      "Add notifications for job updates and new applications."
    ],
  }
]

export default function ProjectsSection() {
  const [modal, setModal] = useState({ open: false, project: null });

  const openModal = (project) => setModal({ open: true, project });
  const closeModal = () => setModal({ open: false, project: null });

  return (
    <section className="relative py-10 px-4 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
          Projects
        </h2>
        <p className="text-lg text-slate-300 mt-2">
          Explore my best work, built with modern web technologies.
        </p>
      </div>

      <div className="mx-auto max-w-6xl p-2 grid gap-10 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, boxShadow: "0 0 16px 2px #818cf8, 0 8px 24px 0 rgba(80,0,120,0.10)" }}
            className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-lg flex flex-col overflow-hidden transition-all duration-300"
            style={{
              boxShadow: "0 0 12px 2px #818cf8, 0 4px 16px 0 rgba(80,0,120,0.10)",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative h-44 w-full overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full transition-transform duration-500 cursor-pointer"
                draggable={false}
                onClick={() => openModal(project)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </motion.div>
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10"
                  >
                    {techIcons[tech] || <FaDatabase className="text-slate-300" />}
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-auto">
                <button
                  onClick={() => openModal(project)}
                  className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-indigo-400/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                  style={{
                    boxShadow: "0 0 8px 1px #6366f1, 0 2px 8px 0 rgba(80,0,120,0.08)",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal.open && modal.project && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center roboto bg-black/70 backdrop-blur-[4px] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.97, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-2xl w-full bg-slate-900/95 rounded-2xl shadow-lg border border-white/10 p-8 md:p-12 backdrop-blur-2xl overflow-y-auto"
              style={{
                boxShadow:
                  "0 0 24px 4px #818cf8, 0 8px 32px 0 rgba(80,0,120,0.10)",
                minHeight: "320px",
                maxHeight: "90vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-300 hover:text-rose-400 text-3xl font-bold transition cursor-pointer z-10"
                aria-label="Close"
                tabIndex={0}
              >
                &times;
              </motion.button>
              <img
                src={modal.project.image}
                alt={modal.project.name}
                className="w-full h-36 object-cover rounded-xl mb-5 shadow-md border border-white/10"
                draggable={false}
                style={{ objectPosition: "center" }}
              />
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
                {modal.project.name}
              </h2>
              <div className="flex flex-wrap gap-3 mb-4">
                {modal.project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10 shadow cursor-default"
                  >
                    {techIcons[tech] || <FaDatabase className="text-slate-300" />}
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 mb-4 text-base">{modal.project.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={modal.project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 shadow-md hover:shadow-indigo-400/30 hover:scale-105 transition cursor-pointer ring-2 ring-indigo-400/30"
                  style={{
                    boxShadow: "0 0 12px 2px #6366f1, 0 2px 8px 0 rgba(80,0,120,0.08)",
                    textShadow: "0 0 6px #818cf8, 0 0 2px #fff"
                  }}
                >
                  <FaExternalLinkAlt className="text-lg" /> <span>Live Project</span>
                </a>
                <a
                  href={modal.project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 via-slate-700 to-indigo-700 shadow-md hover:shadow-indigo-400/30 hover:scale-105 transition cursor-pointer ring-2 ring-slate-400/30"
                  style={{
                    boxShadow: "0 0 12px 2px #818cf8, 0 2px 8px 0 rgba(80,0,120,0.08)",
                    textShadow: "0 0 6px #818cf8, 0 0 2px #fff"
                  }}
                >
                  <FaGithub className="text-lg" /> <span>GitHub Repository</span>
                </a>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-indigo-300 mb-1">
                  Challenges Faced
                </h3>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                  {modal.project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-rose-300 mb-1">
                  Improvements & Future Plans
                </h3>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                  {modal.project.improvements.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}