import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 h-14 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      {/* FULL-WIDTH BAR */}
      <div className="w-full h-full flex justify-center px-6">
        {/* CONSTRAINED CONTENT */}
        <div className="w-full max-w-7xl h-full flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-2.5">
            <img
              src="/images/k9c-logo.png"
              alt="K9C Labs Logo"
              className="h-9 w-auto object-contain rounded-md border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:scale-105 transition cursor-pointer"
            />
            <span className="font-display text-base font-bold tracking-wider text-white">
              K9C <span className="text-cyan-400">LABS</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#services" className="text-white hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#work" className="text-white hover:text-cyan-400 transition-colors">
              Work
            </a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-4 font-medium">
              <a onClick={() => setOpen(false)} href="#about" className="text-white hover:text-cyan-400">
                About
              </a>
              <a onClick={() => setOpen(false)} href="#services" className="text-white hover:text-cyan-400">
                Services
              </a>
              <a onClick={() => setOpen(false)} href="#work" className="text-white hover:text-cyan-400">
                Work
              </a>
              <a onClick={() => setOpen(false)} href="#contact" className="text-white hover:text-cyan-400">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
