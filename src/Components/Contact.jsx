import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 bg-slate-950 text-slate-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
          Contact
        </h2>
        <p className="text-lg text-slate-300 mt-2">
          Feel free to reach out directly!
        </p>
      </motion.div>

      <div className="mx-auto max-w-xl flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className={`
            group relative rounded-2xl p-8 border
            bg-slate-900/80 border-white/10
            backdrop-blur-lg
            shadow-[0_8px_32px_0_rgba(31,38,135,0.18),0_1.5px_8px_0_rgba(80,0,120,0.10)]
            hover:shadow-[0_16px_48px_0_rgba(80,0,120,0.18),0_4px_16px_0_rgba(80,0,120,0.15)]
            transition-all duration-300
            before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-indigo-400/30 before:via-violet-400/20 before:to-rose-400/20 before:opacity-0 group-hover:before:opacity-100 before:transition
            overflow-hidden
          `}
          style={{
            borderWidth: 1.5,
          }}
        >
          <div className="flex flex-col gap-6 z-10 relative">
            <ContactItem
              href="mailto:rifatdcian@gmail.com"
              icon={<FaEnvelope />}
              label="rifatdcian@gmail.com"
              color="indigo"
            />
            <ContactItem
              href="tel:+8801742025100"
              icon={<FaPhoneAlt />}
              label="+8801742025100"
              color="rose"
            />
            <ContactItem
              href="https://wa.me/8801742025100"
              icon={<FaWhatsapp />}
              label="WhatsApp"
              sublabel="+8801742025100"
              color="emerald"
              target="_blank"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactItem({ href, icon, label, sublabel, color = "indigo", target }) {
  const colorMap = {
    indigo: "text-indigo-400 group-hover:text-indigo-300 shadow-indigo-400/30",
    rose: "text-rose-400 group-hover:text-rose-300 shadow-rose-400/30",
    emerald: "text-emerald-400 group-hover:text-emerald-300 shadow-emerald-400/30",
  }
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`
        group/contact flex items-center gap-4 p-4 rounded-xl
        bg-white/5 hover:bg-white/10
        transition
        text-slate-100
        shadow
        hover:scale-[1.03]
        hover:shadow-2xl
        duration-200
        cursor-pointer
      `}
    >
      <span
        className={`
          text-2xl rounded-lg p-3 bg-slate-900/60
          shadow-md transition-all duration-200
          group-hover/contact:scale-110
          group-hover/contact:shadow-xl
          ${colorMap[color]}
        `}
      >
        {icon}
      </span>
      <span className="font-medium text-lg">{label}</span>
      {sublabel && (
        <span className="text-base text-slate-300 ml-2">{sublabel}</span>
      )}
    </a>
  )
}