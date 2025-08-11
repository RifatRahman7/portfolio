import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Home', to: '/', icon: <FaHome className="inline-block mr-2" /> },
    { label: 'About', to: '/about', icon: <FaUser className="inline-block mr-2" /> },
     { label: 'Skills', to: '/skills', icon: <FaTools className="inline-block mr-2" /> }, 
    { label: 'Projects', to: '/projects', icon: <FaProjectDiagram className="inline-block mr-2" /> },
    { label: 'Contact', to: '/contact', icon: <FaEnvelope className="inline-block mr-2" /> },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { pathname } = useLocation()

    const toggleMenu = () => setMenuOpen((v) => !v)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => (document.body.style.overflow = '')
    }, [menuOpen])

    return (
        <nav className="fixed top-4 inset-x-0 z-50 px-4">
            <div className="mx-auto max-w-5xl">
                <div className="relative p-[1.5px] rounded-full bg-gradient-to-r from-indigo-400/80 via-violet-500/80 to-rose-500/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
                    <div className="flex items-center justify-between rounded-full bg-slate-900/70 backdrop-blur-xl px-4 sm:px-6 py-2.5 ring-1 ring-white/10">
                        <Link
                            to="/"
                            className="group w-11 h-11 overflow-hidden rounded-full ring-1 ring-white/15 hover:ring-white/30 transition-all duration-300"
                        >
                            <img
                                src="https://i.ibb.co/SDjH2f75/R-logo.jpg"
                                alt="Logo"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        <div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
                            {navLinks.map((item) => {
                                const active = pathname === item.to
                                return (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="relative group px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-white transition flex items-center"
                                    >
                                        {active && (
                                            <motion.span
                                                layoutId="active-pill"
                                                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                        {item.icon}
                                        <span className="relative z-10">{item.label}</span>
                                        <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 via-violet-500 to-rose-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                                    </Link>
                                )
                            })}
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href="/resume.pdf"
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
                                                <motion.div
                                                    key={item.to}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.04 * idx }}
                                                >
                                                    <Link
                                                        to={item.to}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="block rounded-xl px-4 py-3 text-base font-medium text-slate-100 hover:text-white hover:bg-white/10 transition flex items-center justify-center"
                                                    >
                                                        {item.icon}
                                                        {item.label}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                            <a
                                                href="/resume.pdf"
                                                download
                                                onClick={() => setMenuOpen(false)}
                                                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-rose-500/30 transition"
                                            >
                                                <FiDownload /> Download Resume
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