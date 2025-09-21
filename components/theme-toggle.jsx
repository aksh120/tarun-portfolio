"use client";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark';
  const label = mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle theme';

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={mounted ? isDark : undefined}
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-gray-700 shadow-sm outline-none transition hover:bg-white/90 focus:ring-2 focus:ring-emerald-400/60 focus:ring-offset-2 focus:ring-offset-white dark:border-white/10 dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/20 dark:focus:ring-offset-transparent ${className}`}
    >
      <span className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/10 opacity-0 blur-[1px] transition-opacity group-hover:opacity-100" aria-hidden />

      {mounted && (
        <>
          <Sun
            size={18}
            className={`transition-all duration-300 ease-out ${
              isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100 text-amber-500'
            }`}
          />
          <Moon
            size={18}
            className={`absolute transition-all duration-300 ease-out ${
              isDark ? 'scale-100 rotate-0 opacity-100 text-sky-200' : 'scale-0 -rotate-90 opacity-0'
            }`}
          />
        </>
      )}
    </button>
  );
}
