import Section from '../components/ui/section';
import Card from '../components/ui/card';
import Reveal from '../components/ui/reveal';
import MetricTile from '../components/ui/metric-tile';
import GreetingRotator from '../components/ui/greeting-rotator';
import Image from 'next/image';
import Link from 'next/link';
import { Database, Cloud, BarChart3, LineChart, Cpu, Code2, Briefcase, GraduationCap, Building2, Sparkles, Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="story" title="The Path Behind My Impact" eyebrow="About Me">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Reveal>
              <div className="h-full">
                <div className="mb-4">
                  <div className="group relative inline-block cursor-pointer">
                    <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-spin group-hover:scale-110" style={{ animationDuration: '3s' }} />

                    <div className="absolute inset-2 rounded-full border-2 border-emerald-300/50 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-pulse group-hover:scale-105" />

                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 blur-sm transition-all duration-700 group-hover:opacity-100 group-hover:animate-ping" />

                    <div className="relative overflow-hidden rounded-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-emerald-500/25">
                      <Image
                        src="/tarun.jpeg"
                        alt="Tarun portrait"
                        width={224}
                        height={224}
                        className="rounded-full object-cover ring-4 ring-emerald-400/40 shadow-md w-40 h-40 md:w-56 md:h-56 transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110 group-hover:hue-rotate-15"
                      />

                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-emerald-400/0 to-teal-400/0 opacity-0 mix-blend-overlay transition-all duration-300 group-hover:opacity-30 group-hover:animate-pulse" />
                    </div>

                    <div className="absolute -top-2 -left-2 h-3 w-3 rounded-full bg-emerald-400 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-bounce group-hover:-translate-y-8 group-hover:translate-x-4" style={{ animationDelay: '0s' }} />
                    <div className="absolute -top-1 -right-3 h-2 w-2 rounded-full bg-teal-400 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-bounce group-hover:-translate-y-6 group-hover:-translate-x-2" style={{ animationDelay: '0.2s' }} />
                    <div className="absolute -bottom-2 -left-3 h-2.5 w-2.5 rounded-full bg-cyan-400 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-bounce group-hover:translate-y-6 group-hover:translate-x-3" style={{ animationDelay: '0.4s' }} />
                    <div className="absolute -bottom-1 -right-2 h-3 w-3 rounded-full bg-emerald-500 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-bounce group-hover:translate-y-8 group-hover:-translate-x-4" style={{ animationDelay: '0.6s' }} />
                    <div className="absolute top-1/2 -left-4 h-1.5 w-1.5 rounded-full bg-teal-300 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-ping group-hover:-translate-x-6" style={{ animationDelay: '0.8s' }} />
                    <div className="absolute top-1/2 -right-4 h-1.5 w-1.5 rounded-full bg-emerald-300 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-ping group-hover:translate-x-6" style={{ animationDelay: '1s' }} />

                    <div className="absolute bottom-2 right-2 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-800 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg animate-pulse-ring">
                      <span className="text-2xl md:text-3xl animate-wave-hand group-hover:animate-bounce">👋</span>
                    </div>

                    <div className="absolute top-1/2 left-1/2 h-20 w-20 md:h-28 md:w-28 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-spin" style={{ animationDuration: '4s', transform: 'translate(-50%, -50%)' }}>
                      <div className="absolute top-0 left-1/2 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transform -translate-x-1/2" />
                      <div className="absolute bottom-0 left-1/2 h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 transform -translate-x-1/2" />
                      <div className="absolute top-1/2 left-0 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transform -translate-y-1/2" />
                      <div className="absolute top-1/2 right-0 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transform -translate-y-1/2" />
                    </div>
                  </div>
                  <svg viewBox="0 0 260 20" className="mt-3 h-4 w-[220px] text-emerald-500/60" aria-hidden>
                    <path d="M0 10 C 40 0, 90 20, 130 10 S 210 0, 260 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold mb-3 text-emerald-700 dark:text-teal-200">A Business-Minded Analyst Translating Data into Growth</h3>
                <p className="text-muted-foreground">
                  My path from computer engineering to a Masters in Engineering Management was driven by a passion for
                  understanding the 'why' behind the data. I thrive on bridging the gap between technical analysis and
                  strategic business outcomes, turning financial insights into actionable plans that have streamlined
                  global operations.
                </p>

                <Reveal delay={0.6}>
                  <div className="group relative mt-6 overflow-hidden rounded-3xl border border-emerald-300/40 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:scale-[1.02] dark:border-white/15 dark:from-white/10 dark:via-white/5 dark:to-white/8">

                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-emerald-500/60 via-teal-400/60 to-emerald-500/60" />

                    <div className="relative z-10">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500/70" />
                        <div className="text-base font-bold text-emerald-800 dark:text-teal-200">Beyond the Data</div>
                      </div>
                      <p className="text-sm leading-relaxed text-emerald-900/90 dark:text-gray-200">
                        I mentor students, hunt for sunset shots, and love finding patterns in spreadsheets, skylines, and design.
                      </p>
                    </div>

                    <div className="pointer-events-none absolute bottom-2 right-2 h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400/10 to-teal-400/10 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5 md:gap-6">
            {[
              { value: '60M+', label: 'Financial Records Analyzed' },
              { value: '$12M+', label: 'Annual Cost Reduction' },
              { value: '150+', label: 'Work Hours Saved Monthly' },
              { value: '5,500+', label: 'Users Successfully Onboarded' },
            ].map((m, idx) => (
              <Reveal key={m.label}>
                <div className={`${['md:-mt-2 md:-ml-2', 'md:mt-36 md:ml-2', 'md:-mt-16 md:-ml-2', 'md:mt-[100px] md:ml-2'][idx] || ''}`}>
                  <MetricTile value={m.value} label={m.label} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>


      <Section id="impact" title="Where I've Made Impact" eyebrow="Career Journey">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-emerald-200 dark:bg-white/10 md:block" aria-hidden />

          {[
            { kind: 'work', period: 'Aug 2025 — Present', title: 'Business Analyst', org: 'Aperix LLC', highlight: 'Analyzed $770M AI travel market', tags: ['Market Analysis', 'AI/ML'] },
            { kind: 'edu', period: 'Aug 2023 — May 2025', title: 'Masters in Engineering Management', org: 'North Carolina State University', highlight: '$10,000 Graduate Scholarship Recipient', tags: ['Project Management', 'Analytics', 'Leadership'] },
            { kind: 'work', period: 'Aug 2024 — Dec 2024', title: 'Financial Business Analyst Intern', org: 'Boehringer Ingelheim', highlight: 'Migrated & Streamlined 60M+ financial records', tags: ['SQL', 'API Development', 'Change Management', 'Business Process'] },
            { kind: 'work', period: 'Aug 2021 — Jun 2023', title: 'Financial Analyst', org: 'Bajaj Finance', highlight: 'Automated reporting systems saving 150+ hours monthly', tags: ['Power BI', 'Azure Cloud'] },
            { kind: 'edu', period: 'Jul 2019 — Jun 2023', title: 'Bachelor of Technology in Computer Science', org: 'Maharashtra Institute of Technology', highlight: 'General Secretary for Student Body & Boxing', tags: ['Business Analysis', 'Data Visualization', 'AI Fundamentals', 'Financial Modeling'] },
          ].map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const NodeIcon = item.kind === 'edu' ? GraduationCap : Briefcase;
            return (
              <div key={item.title + idx} className="grid md:grid-cols-[1fr_52px_1fr] items-stretch gap-4 md:gap-6 mb-8 md:mb-10">

                <div className="hidden md:block">
                  {isLeft && (
                    <Reveal>
                      <Card className="rounded-2xl border-slate-200/60 bg-white p-5 md:p-6 dark:border-white/10 dark:bg-white/5">
                        <div className="flex items-start justify-between gap-4">
                          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{item.period}</span>
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300"><Building2 size={16} /> {item.org}</div>
                        <div className="mt-3 rounded-xl border border-slate-200/50 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200 flex items-center gap-2">
                          <Sparkles size={16} className="text-emerald-600 dark:text-teal-300" />
                          <span>{item.highlight}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span key={t} className="rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{t}</span>
                          ))}
                        </div>
                      </Card>
                    </Reveal>
                  )}
                </div>

                <div className="relative hidden md:block">
                  <div className="absolute left-1/2 top-8 -translate-x-1/2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-2 ring-emerald-300/60 shadow-sm dark:bg-white/10 dark:ring-white/15">
                      <NodeIcon size={18} className="text-emerald-700 dark:text-teal-300" />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  {!isLeft && (
                    <Reveal>
                      <Card className="rounded-2xl border-slate-200/60 bg-white p-5 md:p-6 dark:border-white/10 dark:bg-white/5">
                        <div className="flex items-start justify-between gap-4">
                          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{item.period}</span>
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300"><Building2 size={16} /> {item.org}</div>
                        <div className="mt-3 rounded-xl border border-slate-200/50 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200 flex items-center gap-2">
                          <Sparkles size={16} className="text-emerald-600 dark:text-teal-300" />
                          <span>{item.highlight}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span key={t} className="rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{t}</span>
                          ))}
                        </div>
                      </Card>
                    </Reveal>
                  )}
                </div>

                <div className="md:hidden">
                  <Reveal>
                    <Card className="rounded-2xl border-slate-200/60 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{item.period}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300"><Building2 size={16} /> {item.org}</div>
                      <div className="mt-3 rounded-xl border border-slate-200/50 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200 flex items-center gap-2">
                        <Sparkles size={16} className="text-emerald-600 dark:text-teal-300" />
                        <span>{item.highlight}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span key={t} className="rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{t}</span>
                        ))}
                      </div>
                    </Card>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Projects />

      <Section id="dashboards" title="Academic Projects That Matter" eyebrow="Academic Excellence" panel panelClassName="p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Meta Financial Analysis',
              link: '/projects/meta-financial-analysis',
              desc: 'Performed comprehensive financial diagnostics on Meta Ray-Ban (AI/AR) using DuPont decomposition, profitability ratios, and forensic models to reveal robust margins and conservative earnings.',
              stack: ['Forensic Models', 'DuPont', 'Ratio Analysis'],
              impact: 'Valuation Scalability Assessed',
            },
            {
              title: 'AI Demand Forecasting',
              desc: 'Built scalable Python data pipelines with Google Analytics to analyze 10M+ records, enabling 25% waste reduction across 100+ markets through data-informed production optimization.',
              stack: ['Python', 'GA4', 'SQL'],
              impact: '$12M Annual Cost Reduction',
              link: '/projects/ai-demand-forecasting',
            },
            {
              title: 'Multi-Agent AI Finance Transformation Platform',
              desc: 'Agentic workflows for finance automation with RAG, orchestration, and evaluation. Built to streamline financial analysis and reporting.',
              stack: ['Next.js', 'Python', 'RAG', 'Agents', 'OpenAI'],
              impact: 'Automation Platform Prototype',
              link: '/projects/agentic-ai',
            },
            {
              title: 'Smartphone Market Analysis',
              desc: 'AI Demand Forecasting with RAG, orchestration, and evaluation. Built to streamline financial analysis and reporting.',
              stack: ['Python', 'RAG', 'Agents', 'OpenAI'],
              impact: 'Automation Platform Prototype',
              link: '/projects/smartphone-market',
            },
            {
              title: 'The Flexport Dashboard',
              desc: 'Interactive dashboard visualizing Flexport\'s logistics revolution, featuring AI-powered solutions, cost savings analysis, and worker impact stories.',
              stack: ['Tailwind CSS', 'JavaScript', 'Interactive Charts'],
              impact: 'Supply Chain Transformation',
              link: '/projects/flexport-dashboard',
            },
            {
              title: 'Logistics Optimization Dashboard',
              desc: 'Comprehensive logistics analytics platform tracking fleet performance, delivery metrics, and operational efficiency with real-time data visualization.',
              stack: ['Data Visualization', 'Fleet Analytics', 'Operational Research'],
              impact: 'Operational Efficiency',
              link: '/projects/logistics-dashboard',
            },
          ].map((p) => (
            <Reveal key={p.title}>
              <div className="group h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-3 text-slate-600 dark:text-gray-300">{p.desc}</p>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 transition-colors group-hover:border-amber-200 group-hover:bg-amber-100 dark:border-white/10 dark:bg-white/10 dark:text-amber-300 dark:group-hover:bg-white/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.impact && (
                      <div className="mt-4">
                        <div className="inline-flex items-center rounded-xl border border-slate-300/60 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                          <span>{p.impact}</span>
                        </div>
                      </div>
                    )}
                    {p.link && (
                      <div className="mt-4">
                        {p.link.startsWith('http') ? (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:brightness-110"
                          >
                            Visit Project
                            <ArrowUpRight size={16} />
                          </a>
                        ) : (
                          <Link href={p.link} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:brightness-110">
                            Open Case Study
                            <ArrowUpRight size={16} />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container pt-32 pb-24 md:pt-40 md:pb-28 relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-teal-300 dark:to-cyan-200 bg-clip-text text-transparent">
                <GreetingRotator />
              </span>
              {", I'm "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-teal-300 dark:to-cyan-200 bg-clip-text text-transparent">Tarun</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">The Data Maverick</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              A FinTech-focused analyst with a background in engineering, I specialize in transforming complex data into
              clear business strategy and measurable results.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-teal-500 dark:to-cyan-400 text-white px-6 py-2.5 shadow-sm hover:brightness-110">Let's Connect</a>
              <a href="#dashboards" className="rounded-full border border-emerald-600/60 px-6 py-2.5 text-emerald-800 hover:bg-emerald-50 transition dark:text-teal-200 dark:hover:bg-white/5">See My Work</a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 text-center text-[11px] uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Tech Stack</div>
        <Reveal delay={0.5}>
          <div className="mt-4 mx-auto max-w-md">
            <div className="rounded-2xl border border-emerald-300/50 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[{
                  icon: Database, label: 'MySQL'
                }, { icon: Cloud, label: 'AWS' }, { icon: BarChart3, label: 'Power BI' }, { icon: LineChart, label: 'Analytics' }, { icon: Cpu, label: 'Azure' }, { icon: Code2, label: 'Python' }].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-emerald-200/50 bg-white px-3 py-3 dark:border-white/10 dark:bg-white/5">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-white/10 dark:text-teal-200">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm text-gray-800 dark:text-gray-200">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-teal-200">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Let's work together
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-200">
              Let's Build Something Amazing
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your data chaos into clarity? I'm just a message away!
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Mail, label: 'Email', value: 'tarunasrani.work@gmail.com', href: 'mailto:tarunasrani.work@gmail.com' },
              { icon: Linkedin, label: 'LinkedIn', value: '/in/tarunasrani', href: 'https://linkedin.com/in/tarunasrani' },
              { icon: Github, label: 'GitHub', value: '/TarunAsrani', href: 'https://github.com/TarunAsrani' },
            ].map((contact, idx) => (
              <Reveal key={contact.label} delay={0.3 + idx * 0.1}>
                <a
                  href={contact.href}
                  className="group relative block rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300/40 dark:border-white/10 dark:bg-slate-800/50 dark:hover:bg-slate-800/70 dark:hover:border-teal-400/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-200 dark:bg-teal-900/30 dark:text-teal-300 dark:group-hover:bg-teal-900/50">
                      <contact.icon size={20} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-slate-600 dark:text-gray-400">{contact.label}</div>
                      <div className="text-base font-semibold text-slate-900 dark:text-white">{contact.value}</div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-600 dark:text-gray-500 dark:group-hover:text-teal-300"
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.7}>
            <div className="mt-12">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-300" />
                <span>Or just say hello</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-300" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
