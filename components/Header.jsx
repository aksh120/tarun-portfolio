"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from './theme-toggle';
import { Home as HomeIcon, User, Route, Briefcase, LayoutDashboard, Mail as MailIcon } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  { label: 'Journey', href: '#impact' },
  { label: 'Work Projects', href: '#projects' },
  { label: 'Dashboards', href: '#dashboards' },
  { label: 'Contact', href: '#contact' },
];

const ICONS = {
  Home: HomeIcon,
  About: User,
  Journey: Route,
  'Work Projects': Briefcase,
  Dashboards: LayoutDashboard,
  Contact: MailIcon,
};

export default function Header() {
  const [active, setActive] = useState('Home');
  const containerRef = useRef(null);
  const lockRef = useRef(false);
  const timerRef = useRef(null);
  const pathname = usePathname();
  const shouldHide = pathname?.startsWith('/projects');
  const observerRef = useRef(null);
  const observedIdsRef = useRef(new Set());

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', '')).filter(Boolean);
    const options = { root: null, rootMargin: '0px 0px -70% 0px', threshold: 0.1 };

    const handler = (entries) => {
      if (lockRef.current) return;
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        const id = visible.target.id || 'top';
        const match = NAV_LINKS.find((l) => l.href === `#${id}`) || NAV_LINKS[0];
        setActive(match.label);
      }
    };

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handler, options);
    }
    const observer = observerRef.current;

    const tryAttach = () => {
      let attachedAny = false;
      const ensureObserve = (id, el) => {
        if (el && !observedIdsRef.current.has(id)) {
          observer.observe(el);
          observedIdsRef.current.add(id);
          attachedAny = true;
        }
      };

      const topEl = document.getElementById('top');
      ensureObserve('top', topEl);
      ids.forEach((id) => {
        const el = document.getElementById(id);
        ensureObserve(id, el);
      });
      const allAttached = ['top', ...ids].every((id) => observedIdsRef.current.has(id));
      return { allAttached, attachedAny };
    };

    const { allAttached } = tryAttach();
    let retryId = null;
    if (!allAttached) {
      retryId = setInterval(() => {
        const res = tryAttach();
        if (res.allAttached) {
          clearInterval(retryId);
        }
      }, 200);
    }

    const syncFromHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash?.slice(1);
      if (!hash) return;
      const match = NAV_LINKS.find((l) => l.href === `#${hash}`);
      if (match) setActive(match.label);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      if (retryId) clearInterval(retryId);
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = null;
      observedIdsRef.current = new Set();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname, shouldHide]);

  const variants = useMemo(
    () => ({ hidden: { y: -16, opacity: 0 }, show: { y: 0, opacity: 1 } }),
    []
  );

  return (
    shouldHide ? null : (
      <>
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.99] }}
          className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 md:hidden"
        >
          <nav
            ref={containerRef}
            className="no-scrollbar flex items-center gap-1 rounded-2xl border border-black/10 bg-white/70 px-2 py-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/10 overflow-x-auto"
          >
            {NAV_LINKS.map((item) => {
              const Icon = ICONS[item.label] || HomeIcon;
              const isActive = active === item.label;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    lockRef.current = true;
                    if (timerRef.current) clearTimeout(timerRef.current);
                    timerRef.current = setTimeout(() => {
                      lockRef.current = false;
                    }, 700);
                  }}
                  className="relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 shadow-md dark:from-teal-500/60 dark:to-cyan-400/60"
                      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
                    />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                </a>
              );
            })}
            <ThemeToggle className="ml-1 relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/60 text-gray-700 hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:text-white" />
          </nav>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.99] }}
          className="fixed top-4 inset-x-0 z-40 hidden justify-center px-4 md:flex"
        >
          <nav
            className="no-scrollbar flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-2 py-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/10 overflow-x-auto"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  lockRef.current = true;
                  if (timerRef.current) clearTimeout(timerRef.current);
                  timerRef.current = setTimeout(() => {
                    lockRef.current = false;
                  }, 700);
                }}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                {active === item.label && (
                  <motion.span
                    layoutId="active-pill-desktop"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 shadow-md dark:from-teal-500/50 dark:to-cyan-400/50"
                    transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
                  />
                )}
                <span className="relative z-10 mix-blend-normal text-gray-800 dark:text-gray-100">
                  {item.label}
                </span>
              </a>
            ))}
            <ThemeToggle className="ml-1 relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/60 text-gray-700 hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:text-white" />
          </nav>
        </motion.div>
      </>
    )
  );
}
