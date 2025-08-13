import { FaUserGraduate, FaRegSmile, FaCode, FaMusic, FaFilm, FaVolleyballBall } from 'react-icons/fa'
import { MdSportsCricket, MdSportsTennis } from 'react-icons/md'
import { motion } from 'framer-motion'

// Reusable animated grid background
function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-transform duration-300 ease-out"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        animation: 'moveGrid 20s linear infinite',
      }}
    >
      {/* Soft glows */}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -top-24 -right-24 w-[50vmin] h-[50vmin] rounded-full bg-rose-500/10 blur-[120px]" />
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>
  )
}

const aboutCards = [
  {
    icon: <FaCode className="text-2xl text-indigo-300 drop-shadow" />,
    title: "Programming Journey",
    desc: (
      <>
        Started coding 3 years ago—faced setbacks, but always bounced back. Every challenge has made me a stronger developer.
      </>
    ),
    gradient: "from-indigo-400/20 via-violet-400/20 to-rose-400/10",
    border: "border-violet-400/20"
  },
  {
    icon: <FaRegSmile className="text-2xl text-violet-300 drop-shadow" />,
    title: "Work Style",
    desc: (
      <>
        I thrive in calm, focused spaces and love building clean, user-friendly interfaces that solve real problems.
      </>
    ),
    gradient: "from-violet-400/30 via-indigo-400/10 to-rose-400/10",
    border: "border-violet-400/30"
  },
  {
    icon: (
      <span className="flex gap-1">
        <FaMusic className="text-2xl text-rose-300 drop-shadow" />
        <FaFilm className="text-2xl text-rose-300 drop-shadow" />
        <MdSportsCricket className="text-2xl text-rose-300 drop-shadow" />
        <MdSportsTennis className="text-2xl text-rose-300 drop-shadow" />
      </span>
    ),
    title: "Beyond Coding",
    desc: (
      <>
        Tech explorer, music lover, movie buff, and a big fan of cricket and badminton.
      </>
    ),
    gradient: "from-rose-400/20 via-violet-400/10 to-indigo-400/10",
    border: "border-rose-400/20"
  },
  {
    icon: <FaVolleyballBall className="text-2xl text-cyan-300 drop-shadow" />,
    title: "Personality",
    desc: (
      <>
        Curious, resilient, and always eager to learn and grow—both as a developer and as a person.
      </>
    ),
    gradient: "from-cyan-400/20 via-violet-400/10 to-indigo-400/10",
    border: "border-cyan-400/20"
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-7 bg-slate-950 text-slate-100 overflow-hidden">
      <GridBackground />
      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaUserGraduate className="text-3xl text-indigo-400 drop-shadow" />
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent tracking-tight roboto">
              About Me
            </h2>
          </div>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Hi, I’m <span className="font-semibold text-indigo-200 roboto">Md Rifat Rahman</span> — CSE student at Tejgaon College, Dhaka (National University). I focus on frontend development, creating fast, accessible, and user-friendly web interfaces.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 px-4 roboto">
          {aboutCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, type: 'spring' }}
              className={`
                group rounded-2xl p-6 md:p-8 border shadow-lg
                bg-gradient-to-br ${card.gradient} ${card.border}
                backdrop-blur-lg
                transition-all duration-300
                relative
                before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-0 group-hover:before:opacity-100 before:transition
              `}
              style={{
                boxShadow: "0 2px 8px 0 #818cf8, 0 1.5px 8px 0 rgba(80,0,120,0.08)",
                borderWidth: 1.5,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                {card.icon}
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
                  {card.title}
                </h3>
              </div>
              <div className="text-slate-100/90 text-base leading-relaxed">
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}