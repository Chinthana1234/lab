import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  y = 40,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: y,
        scale: 0.96,     // 👈 subtle scale down
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,        // 👈 scales to normal
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
