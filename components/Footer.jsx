import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60 dark:border-white/10">
      <div className="container py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p className="text-center md:text-left"> {new Date().getFullYear()} Tarun Asrani • Turning Data Into Insights to Make Decisions • Open to Relocate</p>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent dark:via-white/10 md:hidden" />
          
          <div className="flex items-center gap-4">
            {[
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Twitter, href: '#', label: 'Twitter' },
              { Icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-teal-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
