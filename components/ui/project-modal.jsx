"use client";

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Github, ExternalLink } from 'lucide-react';

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
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900 flex max-h-[90vh] flex-col"
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

            <div className="overflow-y-auto">
            <div className="p-5 md:p-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">{data.title}</h2>
              <p className="mt-1 text-slate-600 dark:text-gray-300">{data.subtitle}</p>

              {/* Action buttons */}
              {(data.links?.github || data.links?.website) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {data.links?.github && (
                    <a
                      href={data.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
                    >
                      <Github size={16} />
                      <span>View GitHub</span>
                    </a>
                  )}
                  {data.links?.website && (
                    <a
                      href={data.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110"
                    >
                      <ExternalLink size={16} />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              )}

              {data.statsImage ? (
                <div className="mt-5">
                  <img
                    src={data.statsImage}
                    alt="Project statistics"
                    className="w-full rounded-2xl border border-slate-200/70 shadow-sm dark:border-white/10"
                  />
                </div>
              ) : (
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
              )}
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />

            <div className="space-y-5 p-5 md:space-y-6 md:p-6">
              {Array.isArray(data.images) && data.images.length > 0 ? (
                <ImageSlider images={data.images} />
              ) : (
                data.sections?.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-gray-300">{s.desc}</div>
                  </div>
                ))
              )}
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const safeIndex = useMemo(() => (index + total) % total, [index, total]);

  const go = (dir) => setIndex((i) => i + dir);
  const set = (i) => setIndex(i);

  if (total === 0) return null;

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-900 shadow-sm dark:border-white/10">
        <motion.img
          key={safeIndex}
          src={images[safeIndex]}
          alt={`Slide ${safeIndex + 1}`}
          initial={{ opacity: 0.4, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full h-[48vh] md:h-[56vh] object-contain bg-black/10"
        />
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow hover:bg-white dark:bg-white/10 dark:text-gray-200"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow hover:bg-white dark:bg-white/10 dark:text-gray-200"
        >
          ›
        </button>
        <div className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold text-white">
          {safeIndex + 1} / {total}
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => set(i)}
            className={`relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-xl border ${i === safeIndex ? 'border-emerald-400 shadow' : 'border-slate-200/70 dark:border-white/10'}`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <img src={src} alt="thumbnail" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
