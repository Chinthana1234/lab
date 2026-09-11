import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aura Gems and Jewellers",
    types: ["Website", "E-Commerce"],
    image: "/work/aura.png",
    description:
      "The Aura Gems and Jewellers website is a modern and visually engaging online platform designed to showcase a curated collection of luxury jewellery and gemstones. The site presents product categories such as rings, necklaces, bracelets, and precious stones with rich visuals and detailed information. Built with a responsive layout, it ensures an intuitive browsing experience on all devices and allows visitors to explore products, view craftsmanship details, and contact the business easily. The site emphasizes both performance and aesthetic quality, delivering a seamless user experience for jewellery enthusiasts and potential buyers alike.",
    topics: [
      "Jewellery Catalogue & Product Display",
      "Responsive Web Design for Luxury Brand",
      "Visual Storytelling Through High-Quality Imagery",
      "Product Categorization & Detailing",
      "User Engagement & Contact Integration",
      "Brand Identity Presentation",
    ],
    features: [
      "Clean and modern jewellery showcase layout",
      "Responsive design optimized for mobile, tablet, and desktop",
      "High-resolution product imagery with visual emphasis",
      "Structured content organization for categories and items",
      "Brand presentation elements showcasing craftsmanship and heritage",
      "Easy contact and inquiry access for potential customers",
    ],
    link: "https://auragems-client.vercel.app/",
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="work"
      className="relative w-full py-16 text-white overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-semibold mb-4">
            Our <span className="text-cyan-400">Work</span>
          </h2>
          <p className="font-body text-[#AAB8C2] max-w-2xl mx-auto">
            Featured project showcasing our expertise in high-performance web development and e-commerce platforms.
          </p>
        </div>

        {/* Single Centered Project Card */}
        <div className="flex justify-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              onClick={() => setActiveProject(project)}
              className="
                max-w-md w-full
                cursor-pointer
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-2xl overflow-hidden
                hover:border-cyan-400/50
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                transition
              "
            >
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Type Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.types.map((type, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400 text-slate-950 font-bold shadow-md"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#AAB8C2]">
                  Click to view project details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                relative bg-black
                border border-white/15
                rounded-2xl
                max-w-2xl w-full mx-4
                max-h-[85vh]
                overflow-hidden
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="
                  absolute top-3 right-3 z-20
                  w-8 h-8 rounded-full
                  bg-black/60 border border-white/20
                  flex items-center justify-center
                  text-white/70 hover:text-white
                  hover:border-white/40
                  transition
                "
                aria-label="Close modal"
              >
                <X size={14} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[85vh]">

                {/* Modal Image */}
                <div className="relative h-60">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>

                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {activeProject.types.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-400 text-slate-950 font-bold"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4">
                    {activeProject.title}
                  </h3>

                  <p className="font-body text-[#AAB8C2] mb-6 leading-relaxed">
                    {activeProject.description}
                  </p>

                  {activeProject.topics && (
                    <div className="mb-6">
                      <h4 className="font-display text-lg mb-3">
                        Topics Covered
                      </h4>
                      <ul className="list-disc list-inside text-[#AAB8C2] space-y-1">
                        {activeProject.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProject.features && (
                    <div className="mb-8">
                      <h4 className="font-display text-lg mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[#AAB8C2]"
                          >
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      px-5 py-3 rounded-xl
                      bg-cyan-400 text-slate-950 font-bold
                      hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]
                      transition
                    "
                  >
                    Visit Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
