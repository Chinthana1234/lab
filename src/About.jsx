import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------- Animated Counter ---------- */
function Counter({ value, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* ---------- Reusable Scroll Reveal ---------- */
function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- About Section ---------- */
export default function About() {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-40% 0px -40% 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-32 text-gray-900 overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-neutral-100" />

      {/* TOP TRANSITION FADE */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/10 to-transparent" />

      {/* SUBTLE BRAND ACCENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,140,0,0.06),transparent_60%)]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — CONTENT */}
        <ScrollReveal>
          <div className="max-w-xl">
            <div className="mb-6 h-[2px] w-16 mx-5 bg-orange-500"></div>

            <h2 className="text-4xl mx-5 font-semibold mb-6">
              About <span className="text-orange-500">CeyTech Labs</span>
            </h2>

            <p className="mx-5 text-lg leading-relaxed tracking-[0.01em] text-gray-700">
              CeyTech Labs is a technology and engineering company delivering
              intelligent digital platforms and connected systems for modern
              businesses.
              <br /><br />
              We specialize in designing scalable solutions that integrate software,
              automation, and infrastructure — enabling organizations to operate
              smarter, faster, and more securely in an increasingly connected world.
            </p>
          </div>
        </ScrollReveal>

        {/* RIGHT — METRICS */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-x-12 gap-y-14 justify-self-center">
            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                <Counter value={25} suffix="+" start={inView} />
              </h3>
              <p className="mt-2 text-gray-500 uppercase tracking-wide text-sm">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                <Counter value={15} suffix="+" start={inView} />
              </h3>
              <p className="mt-2 text-gray-500 uppercase tracking-wide text-sm">
                Systems Deployed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                <Counter value={99} suffix="%" start={inView} />
              </h3>
              <p className="mt-2 text-gray-500 uppercase tracking-wide text-sm">
                Uptime Reliability
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                <Counter value={10} suffix="+" start={inView} />
              </h3>
              <p className="mt-2 text-gray-500 uppercase tracking-wide text-sm">
                Active Clients
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
