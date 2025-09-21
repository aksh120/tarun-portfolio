"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

export default function ProjectModal({ open, onClose, data }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const count = (parseInt(body.dataset.lockCount || '0') + 1);
    body.dataset.lockCount = String(count);
    if (count === 1) {
      body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      const newCount = Math.max((parseInt(body.dataset.lockCount || '0') - 1), 0);
      body.dataset.lockCount = String(newCount);
      if (newCount === 0) {
        body.style.overflow = '';
        body.style.paddingRight = '';
      }
    };
  }, [open]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/40 backdrop-blur-sm p-3 md:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start gap-2 border-b border-slate-200/60 p-5 md:p-6 dark:border-white/10">
              <button
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 dark:text-teal-300 dark:hover:text-teal-200"
              >
                <ArrowLeft size={16} />
                <span className="text-sm font-semibold">Back to Portfolio</span>
              </button>
              <button
                onClick={onClose}
                className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/60 bg-white text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-300"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 md:p-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">{data.title}</h2>
              <p className="mt-1 text-slate-600 dark:text-gray-300">{data.subtitle}</p>

              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5">
                {data.metrics?.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="text-xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-200">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-gray-300">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />

            <div className="space-y-5 p-5 md:space-y-6 md:p-6">
              {data.sections?.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-gray-300">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
