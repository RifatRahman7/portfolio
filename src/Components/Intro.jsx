import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

const PHOTO_URL = 'https://iili.io/FQLWpwJ.jpg'

// Replace these with your actual profile URLs
const SOCIALS = [
    {
        icon: <FaGithub />,
        label: 'GitHub',
        url: 'https://github.com/RifatRahman7',
        color: 'hover:text-white',
    },
    {
        icon: <FaLinkedin />,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rifat-rahman7/',
        color: 'hover:text-blue-400',
    },
    {
        icon: <FaFacebook />,
        label: 'Facebook',
        url: 'https://facebook.com/rifatdcian',
        color: 'hover:text-blue-400',
    },
]

export default function Intro() {
    return (
        <section id="home" className="relative overflow-hidden bg-slate-950 text-slate-100 p-5">
            <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        {/* Modern designation pill */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400" />
                            <span className="text-[18px] lg:text-[20px] font-semibold tracking-widest uppercase">
                                Frontend Developer
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Hi, I’m <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">Md Rifat Rahman</span>
                        </h1>

                        {/* Tagline */}
                        <p className="mt-3 text-xl font-bold text-slate-300">
                            I build fast, accessible interfaces for the modern web.
                        </p>

                        {/* Subtext */}
                        <p className="mt-3 text-slate-300 text-lg max-w-xl mx-auto md:mx-0">
                            Skilled in frontend development with HTML, CSS, JavaScript, React, and Tailwind CSS.
                            Experienced in the MERN stack for building robust full-stack web applications.


                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-4">
                            {SOCIALS.map((s, i) => (
                                <a
                                    key={s.label}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className={`text-2xl p-2 rounded-full bg-white/10 hover:bg-gradient-to-tr from-indigo-500 via-violet-500 to-rose-500 transition ${s.color} shadow hover:scale-110`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative">
                            {/* Glow */}
                            <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-rose-500/20 blur-2xl" />
                            {/* Gradient ring */}
                            <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-rose-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
                                <img
                                    src={PHOTO_URL}
                                    alt="Md Rifat Rahman — professional headshot"
                                    className="size-40 sm:size-48 md:size-64 rounded-full object-cover ring-1 ring-white/20 bg-white"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}