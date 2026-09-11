import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

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
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function sendEmail(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "CeyTech",
        "template_ugyhk6g",
        e.target,
        "zuuW8lcNjmoQV0jUX"
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  }

  return (
    <section
      id="contact"
      className="relative w-full py-32 text-white overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,140,0,0.06),transparent_60%)]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6">
            Let’s <span className="text-[#FF8C00]">Connect</span>
          </h2>

          <p className="text-[#AAB8C2] mb-12 max-w-md">
            Have a project in mind or need a custom technology solution?
            Reach out and let’s build something impactful together.
          </p>

          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <MapPinIcon />
              </div>
              <p className="text-sm text-white/80">
                180 Kurudugolle Estate, Weralagama
              </p>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <EnvelopeIcon />
              </div>
              <p className="text-sm text-white/80">
                nadulawathura@gmail.com
              </p>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <PhoneIcon />
              </div>
              <p className="text-sm text-white/80">
                +94 77 572 8757
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={sendEmail} className="space-y-6">

            <input
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white resize-none"
            />

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <div className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2">
                ✔ Message sent successfully. We’ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                ✖ Failed to send message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#ff9f26] text-black font-bold uppercase disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
