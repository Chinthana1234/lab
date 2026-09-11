import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backgroundimg.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Building <span className="text-orange-500">Digital Experiences</span>
          </h1>

          <p className="text-gray-300 text-lg mb-10">
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
                bg-orange-500 text-black
                hover:text-black
                px-8 py-3 rounded-xl
                font-semibold
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
