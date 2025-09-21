export default function Section({ id, eyebrow, title, children, panel = false, panelClassName = '', wide = false, containerClassName = '', className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={`${wide ? 'mx-auto w-full max-w-screen-2xl px-4 md:px-6' : 'container'} ${containerClassName}`}>
        <div className="mb-10 text-center">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-wider text-emerald-800 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-200">
              {title}
            </h2>
          )}
        </div>
        {panel ? (
          <div className={`rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5 ${panelClassName}`}>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
