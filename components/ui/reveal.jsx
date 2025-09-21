"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  as: As = motion.div,
  children,
  delay = 0,
  y = 20,
  duration = 0.6,
  className = "",
}) {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const animate = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };

  return (
    <As
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: [0.21, 0.47, 0.32, 0.99] }}
      className={className}
    >
      {children}
    </As>
  );
}
