import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: 'intro', icon: <FaHome className="inline-block mr-2" /> },
  { label: 'About', to: 'about', icon: <FaUser className="inline-block mr-2" /> },
  { label: 'Skills', to: 'skills', icon: <FaTools className="inline-block mr-2" /> },
  { label: 'Education', to: 'education', icon: <FaUser className="inline-block mr-2" /> },
  { label: 'Projects', to: 'projects', icon: <FaProjectDiagram className="inline-block mr-2" /> },
  { label: 'Contact', to: 'contact', icon: <FaEnvelope className="inline-block mr-2" /> },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -90
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  const toggleMenu = () => setMenuOpen((v) => !v)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [menuOpen])

  // Scrollspy effect
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.to)
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean)
    let ticking = false

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = sectionIds[0]
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i]
            const rect = section.getBoundingClientRect()
            if (rect.top <= 120 && rect.bottom > 120) {
              current = section.id
              break
            }
          }
          setActiveSection(current)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isSection = (to) => ['intro', 'about', 'skills', 'education', 'contact', 'projects'].includes(to)

  return (
    <nav className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="relative p-[1.5px] rounded-full bg-gradient-to-r from-indigo-400/80 via-violet-500/80 to-rose-500/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between rounded-full bg-slate-900/70 backdrop-blur-xl px-4 sm:px-6 py-2.5 ring-1 ring-white/10">
            {/* Logo */}
            <Link
              to="/"
              className="group w-11 h-11 overflow-hidden rounded-full ring-1 ring-white/15 hover:ring-white/30 transition-all duration-300"
            >
              <img
                src="https://iili.io/FZayG3X.jpg"
                alt="Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Name for mobile */}
            <span className="md:hidden flex-1 text-center font-extrabold text-xl bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent tracking-wider select-none">
              Rifat Rahman
            </span>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
              {navLinks.map((item) => (
                isSection(item.to) ? (
                  <button
                    key={item.to}
                    onClick={() => scrollToSection(item.to)}
                    className={`relative group px-3 py-1.5 text-sm font-medium flex items-center bg-transparent border-none outline-none cursor-pointer
                      ${activeSection === item.to ? "text-white" : "text-slate-200 hover:text-white"}
                    `}
                    style={{ background: 'none' }}
                  >
                    {activeSection === item.to && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute inset-0 -z-10 rounded-full ring-2 ring-indigo-400/40 bg-white/10 backdrop-blur-md"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    {item.icon}
                    <span className="relative z-10">{item.label}</span>
                    <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 via-violet-500 to-rose-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </button>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="relative group px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-white transition flex items-center cursor-pointer"
                  >
                    {item.icon}
                    <span className="relative z-10">{item.label}</span>
                    <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 via-violet-500 to-rose-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                )
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://drive.google.com/file/d/1hEcZ52ekgvq71XAgVG52fpbpoTRRQHe1/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                download
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-rose-500/30 hover:-translate-y-0.5 transition"
              >
                <FiDownload /> Resume
              </a>

              <button
                className="md:hidden text-slate-100 text-2xl focus:outline-none hover:opacity-90 transition"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-full max-w-5xl">
                <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-indigo-400/80 via-violet-500/80 to-rose-500/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
                  <div className="rounded-2xl bg-slate-900/70 backdrop-blur-2xl ring-1 ring-white/10 p-6">
                    <div className="space-y-2 text-center">
                      {navLinks.map((item, idx) => (
                        isSection(item.to) ? (
                          <button
                            key={item.to}
                            onClick={() => {
                              scrollToSection(item.to)
                              setMenuOpen(false)
                            }}
                            className={`block rounded-xl px-4 py-3 text-base font-medium flex items-center justify-center w-full bg-transparent border-none outline-none cursor-pointer
                              ${activeSection === item.to ? "text-white" : "text-slate-100 hover:text-white"}
                            `}
                            style={{ background: 'none' }}
                          >
                            {activeSection === item.to && (
                              <motion.span
                                layoutId="active-nav"
                                className="absolute inset-0 -z-10 rounded-xl ring-2 ring-indigo-400/40 bg-white/10 backdrop-blur-md"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              />
                            )}
                            {item.icon}
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-xl px-4 py-3 text-base font-medium text-slate-100 hover:text-white hover:bg-white/10 transition flex items-center justify-center cursor-pointer"
                          >
                            {item.icon}
                            {item.label}
                          </Link>
                        )
                      ))}
                      <a
                        href="https://drive.google.com/file/d/1hEcZ52ekgvq71XAgVG52fpbpoTRRQHe1/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                        download
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-rose-500/30 transition"
                      >
                        <FiDownload />Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}