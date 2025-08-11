import { FaUniversity, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'

const education = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institution: "National University (Tejgaon College, Dhaka)",
    session: "2021-2022 (3rd Year, Running)",
    icon: <FaUniversity className="text-2xl text-indigo-400" />,
    details: "Currently pursuing my Bachelor’s degree in CSE. Focused on software engineering, web development, and problem solving.",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College, Dhaka",
    session: "Completed in 2020",
    icon: <FaGraduationCap className="text-2xl text-rose-400" />,
    details: "Secured GPA 5.00 (Science). Built a strong foundation in mathematics, physics, and computer basics.",
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4 bg-slate-950 text-slate-100 overflow-hidden roboto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
          Education
        </h2>
        <p className="text-lg text-slate-300 mt-2">
          My academic background and achievements.
        </p>
      </motion.div>

      <div className="mx-auto max-w-3xl grid gap-8 md:grid-cols-2">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -48 : 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', delay: idx * 0.1 }}
            className={`
              group rounded-2xl p-6 md:p-8 border shadow-2xl
              bg-slate-900/80 border-white/10
              backdrop-blur-lg
              hover:scale-[1.025] hover:shadow-3xl transition-all duration-300
              relative
              before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-0 group-hover:before:opacity-100 before:transition
            `}
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(80, 0, 120, 0.10)",
              borderWidth: 1.5,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              {edu.icon}
              <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
                {edu.title}
              </h3>
            </div>
            <div className="text-slate-100/90 text-base leading-relaxed">
              <div className="font-semibold">{edu.institution}</div>
              <div className="text-sm text-slate-300 mb-2">{edu.session}</div>
              <div>{edu.details}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}