export default function Card({ children, className = '', as: As = 'div', accent = false }) {
  return (
    <As
      className={`group relative overflow-hidden rounded-2xl border border-emerald-300/60 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {accent && (
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-teal-500/55 dark:to-cyan-400/55" aria-hidden />
      )}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-emerald-300/20 via-teal-300/10 to-emerald-400/20 blur-sm" />
      </div>
      {children}
    </As>
  );
}
