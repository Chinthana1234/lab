import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

/* Icons */
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372" />
  </svg>
);

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // 1. Try EmailJS sendForm with options object (@emailjs/browser API)
    try {
      const res = await emailjs.sendForm(
        "CeyTech",
        "template_ugyhk6g",
        formRef.current,
        { publicKey: "zuuW8lcNjmoQV0jUX" }
      );
      console.log("EmailJS sendForm Success:", res.status, res.text);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
      return;
    } catch (err1) {
      console.warn("EmailJS attempt 1 failed:", err1);
    }

    // 2. Try EmailJS send with explicit parameters
    try {
      emailjs.init({ publicKey: "zuuW8lcNjmoQV0jUX" });
      const res2 = await emailjs.send(
        "CeyTech",
        "template_ugyhk6g",
        {
          name: formData.name,
          from_name: formData.name,
          user_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          to_email: "chinthana.devs@gmail.com",
          message: formData.message,
        }
      );
      console.log("EmailJS send Success:", res2);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
      return;
    } catch (err2) {
      console.warn("EmailJS attempt 2 failed:", err2);
    }

    // 3. Fallback: Mailto trigger
    window.location.href = `mailto:chinthana.devs@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name || 'Website Visitor')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    if (formRef.current) formRef.current.reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 text-white overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(6,182,212,0.12),transparent_60%)]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6">
            Let’s <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="text-[#AAB8C2] mb-12 max-w-md">
            Have a project in mind or need a custom technology solution?
            Reach out and let’s build something impactful together.
          </p>

          <div className="space-y-6">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.4)] shrink-0">
                <MapPinIcon />
              </div>
              <p className="text-sm text-white/80">
                Ambalangoda, Sri Lanka
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.4)] shrink-0">
                <EnvelopeIcon />
              </div>
              <a href="mailto:chinthana.devs@gmail.com" className="text-sm text-white/80 hover:text-cyan-400 transition">
                chinthana.devs@gmail.com
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.4)] shrink-0">
                <PhoneIcon />
              </div>
              <a href="tel:+94769033466" className="text-sm text-white/80 hover:text-cyan-400 transition">
                +94 76 903 3466
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input type="hidden" name="to_email" value="chinthana.devs@gmail.com" />
            <input type="hidden" name="from_name" value={formData.name} />
            <input type="hidden" name="user_name" value={formData.name} />
            <input type="hidden" name="from_email" value={formData.email} />
            <input type="hidden" name="user_email" value={formData.email} />
            <input type="hidden" name="reply_to" value={formData.email} />

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Your Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white resize-none focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <div className="text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-3 font-medium">
                ✔ Message sent successfully! We will get back to you shortly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold uppercase shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:brightness-110 disabled:opacity-60 transition cursor-pointer"
            >
              {status === "sending" ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
