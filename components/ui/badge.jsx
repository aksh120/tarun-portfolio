export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-emerald-800 bg-gradient-to-r from-emerald-200 to-teal-200 dark:from-emerald-900/30 dark:to-teal-900/20 dark:text-brand-200 border-emerald-400/60 dark:border-white/10 shadow-sm hover:shadow transition ${className}`}
    >
      {children}
    </span>
  );
}
