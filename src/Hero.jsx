import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blue-tech-bg.jpeg')",
        }}
      />

      {/* VERY LIGHT OVERLAY FOR VIVID BACKGROUND VISIBILITY */}
      <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Building <span className="text-cyan-400 drop-shadow-[0_2px_10px_rgba(6,182,212,0.6)]">Digital Experiences</span>
          </h1>

          <p className="text-gray-200 text-lg mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Transforming concepts into high-performance digital and automated
            solutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* PRIMARY CTA */}
            <a
              href="#contact"
              className="
                inline-block
                bg-cyan-400 text-slate-950
                hover:bg-cyan-300 hover:text-slate-950
                px-8 py-3 rounded-xl
                font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)]
                hover:scale-105
                transition
              "
            >
              Get Started
            </a>

            {/* SECONDARY CTA */}
            <a
              href="#work"
              className="
                inline-block
                px-8 py-3 rounded-xl
                border border-white/30
                text-white
                hover:text-white
                font-semibold
                backdrop-blur
                hover:bg-white/10
                hover:scale-105
                transition
              "
            >
              View Projects
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
