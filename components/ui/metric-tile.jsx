export default function MetricTile({ value, label, className = '', tilt = 'auto' }) {
  const tiltClasses = [
    '-rotate-[1.5deg]',
    'rotate-[1.25deg]',
    '-rotate-[0.9deg]',
    'rotate-[0.8deg]',
    '-rotate-[1.1deg]',
    'rotate-[0.6deg]',
  ];
  const indexFromText = (value + '|' + label)
    .split('')
    .reduce((acc, c) => (acc + c.charCodeAt(0)) % tiltClasses.length, 0);
  const tiltClass = tilt === 'none' ? '' : tiltClasses[indexFromText];

  return (
    <div
      className={`relative rounded-2xl border border-slate-200/70 bg-white p-9 md:p-11 shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-emerald-300/25 hover:rotate-0 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:ring-1 dark:hover:ring-cyan-400/20 ${tiltClass} ${className} flex flex-col items-center justify-center min-h-[160px] md:min-h-[180px] w-full md:min-w-[270px]`}
    >
      <div className="relative z-10 text-4xl md:text-5xl font-extrabold text-emerald-700 dark:text-teal-300 text-center">{value}</div>
      <div className="relative z-10 mt-3 text-base md:text-lg leading-relaxed text-slate-600 dark:text-gray-400 text-center">{label}</div>
    </div>
  );
}
