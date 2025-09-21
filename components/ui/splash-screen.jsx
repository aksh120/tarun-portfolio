"use client";

import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-900"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
        className="relative flex h-24 w-24 items-center justify-center rounded-full"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute h-full w-full rounded-full bg-emerald-400/30 dark:bg-teal-500/30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute h-[150%] w-[150%] rounded-full bg-emerald-400/20 dark:bg-teal-500/20"
        />

        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg dark:bg-slate-800">
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-200">
            T
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
