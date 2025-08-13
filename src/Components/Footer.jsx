import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const SOCIALS = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/RifatRahman7',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rifat-rahman7/',
  },
  {
    icon: <FaFacebook />,
    label: 'Facebook',
    url: 'https://facebook.com/rifatdcian',
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-full px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8 bg-slate-950 text-slate-100 shadow-lg
        backdrop-blur-lg border border-white/10 ">
        <div className="text-center md:text-left">
          <span className="font-semibold text-lg bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
            Md Rifat Rahman
          </span>
          <span className="block text-slate-400 text-sm mt-1">
            Dhaka, Bangladesh
          </span>
          <span className="block text-slate-500 text-xs mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-2xl p-2 rounded-full bg-white/10 hover:bg-gradient-to-tr from-indigo-500 via-violet-500 to-rose-500 text-slate-300 hover:text-white transition shadow hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}