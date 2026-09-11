import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, secure, and scalable websites engineered for performance and growth.",
    image: "/images/webdev.png",
    icon: "/images/code.svg",
  },
  {
    title: "IoT Solutions",
    description:
      "Smart device integration, real-time monitoring, and connected systems.",
    image: "/images/iot.png",
    icon: "/images/antenna.svg",
  },
  {
    title: "System Automation",
    description:
      "Automated workflows and intelligent systems to improve efficiency.",
    image: "/images/systemauto.png",
    icon: "/images/setting.svg",
  },
  {
    title: "CCTV Integration",
    description:
      "Advanced surveillance systems with secure monitoring and analytics.",
    image: "/images/cctv.png",
    icon: "/images/cctv.svg",
  },
  {
    title: "3D Printing",
    description:
      "Precision prototyping and manufacturing using advanced 3D technologies.",
    image: "/images/3d.png",
    icon: "/images/threejs.svg",
  },
  {
    title: "Computer Networking",
    description:
      "Enterprise-grade network design, security, and infrastructure setup.",
    image: "/images/computernetwoking.png",
    icon: "/images/network.svg",
  },
];

/* ---------- ANIMATION VARIANTS ---------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 5,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-20 text-white overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.05),transparent_70%)]" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-orange-500">
          Our Services
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Comprehensive technology solutions designed for modern businesses.
        </p>
      </motion.div>

      {/* SERVICE CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="
              rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-md
              border border-white/10
              hover:border-orange-500/40
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            "
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* CONTENT */}
            <div className="relative p-6">
              {/* ICON */}
              <div className="absolute -top-8 left-6 w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
