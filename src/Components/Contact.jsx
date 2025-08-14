import { useRef, useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Replace with your actual EmailJS values
  const SERVICE_ID = 'service_3k45nj5';
  const TEMPLATE_ID = 'template_40go5su';
  const PUBLIC_KEY = 'oIwybkuoq_mhq9c9I';

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSent(false), 4000);
      }, () => {
        setLoading(false);
        alert("Failed to send. Please try again.");
      });
  };

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
          Feel free to reach out directly or send me a message!
        </p>
      </motion.div>

      {/* Contact Form */}
      <div className="mx-auto max-w-xl mb-12 p-2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg shadow-xl p-8 flex flex-col gap-5 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-indigo-400/30 via-violet-400/20 to-rose-400/20 blur-[2px] opacity-70" />
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-300 via-violet-300 to-rose-300 bg-clip-text text-transparent z-10 relative">
            Send me a message
          </h3>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition z-10 relative"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition z-10 relative"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition z-10 relative"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 px-6 py-2.5 text-base font-semibold text-white shadow-lg hover:shadow-indigo-400/30 hover:-translate-y-0.5 hover:scale-105 transition cursor-pointer z-10 relative"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && (
            <span className="text-green-400 text-sm mt-2 z-10 relative">Message sent! I’ll get back to you soon.</span>
          )}
        </form>
      </div>

      {/* Contact Info Cards */}
      <div className="mx-auto max-w-xl flex flex-col gap-8 p-2">
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
              label="+8801742025100"
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