import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Strong Technical Skills",
    description:
      "We build reliable websites and systems using modern, industry-standard technologies.",
  },
  {
    icon: Layers3,
    title: "All-in-One Tech Partner",
    description:
      "Web development, automation, IoT, and networking — everything handled under one team.",
  },
  {
    icon: TrendingUp,
    title: "Built to Grow With You",
    description:
      "Our solutions are easy to scale, update, and improve as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Well-Tested",
    description:
      "We focus on quality, security, and proper testing before delivering any solution.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full py-20 text-gray-900 overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-neutral-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,140,0,0.05),transparent_60%)]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="mb-6 h-[2px] w-16 bg-orange-500"></div>

          <h2 className="font-display text-4xl font-semibold mb-6">
            Why Choose <span className="text-orange-500">CeyTech Labs</span>
          </h2>

          <p className="font-body text-lg text-gray-700 leading-relaxed">
            We provide practical technology solutions for startups, students,
            and growing businesses who need reliable and modern systems.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                  bg-black text-white
                  rounded-2xl p-8
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                  hover:shadow-[0_30px_70px_rgba(255,140,0,0.25)]
                  transition
                "
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-orange-500/15 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {reason.title}
                </h3>

                <p className="font-body text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
