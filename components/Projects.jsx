"use client";

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Section from './ui/section';
import Reveal from './ui/reveal';
import ProjectModal from './ui/project-modal';
import { Sparkles } from 'lucide-react';

export default function Dashboards() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const router = useRouter();

  const dashboards = useMemo(
    () => [
      {
        key: 'enterprise-data',
        title: 'Enterprise Data Modernization',
        desc: 'End-to-end analytics platform architecture that streamlined tracking and accelerated insights through unified dashboards, improved data latency, and enhanced KPI visibility.',
        tags: ['Analytics', 'Power BI', 'SQL', 'Data Engineering'],
        impact: 'Unified Enterprise Analytics',
        link: '/projects/enterprise-data-modernization',
      },
      {
        key: 'bi-transform',
        title: 'Transforming Tomorrow: From Data to Discovery at Boehringer Ingelheim',
        desc: 'Enterprise reporting and analytics modernization across supply, demand, and finance—driving faster decisions and resilient operations.',
        tags: ['Analytics', 'Automation', 'Supply Chain'],
        impact: 'Improved Decision Velocity',
        modal: {
          title: 'Transforming Tomorrow: From Data to Discovery at Boehringer Ingelheim',
          subtitle: 'Highlights from EM 675 – streamlining analytics to accelerate discovery and outcomes.',
          metrics: [
            { value: '95%', label: 'Duplicate Data Reduction' },
            { value: '90%', label: 'Faster Reports' },
            { value: '75%', label: 'Less Manual Work' },
            { value: '0', label: 'API Downtime' },
            { value: '0', label: 'Security Breaches' },
          ],
          images: [
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-0.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-1.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-2.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-3.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-4.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-5.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-6.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-7.jpg',
            '/EM%20675%20Final%20Presentation/f0c8b051-2865-4157-a0dc-fbee5ef5d5d9-8.jpg',
          ],
        },
      },
      {
        key: 'financial',
        title: 'Financial Performance',
        desc: 'Real-time tracking of KPIs, revenue streams, and cost centers to drive strategic financial decisions.',
        tags: ['Power BI', 'SQL', 'Azure'],
        impact: '15% Profit Margin Increase',
        modal: {
          title: 'Financial Performance',
          subtitle: 'Real-time tracking of KPIs, revenue streams, and cost centers.',
          metrics: [
            { value: '$820K', label: 'Total Annual Impact' },
            { value: '96%', label: 'Faster Reporting' },
            { value: '18%', label: 'Logistics Efficiency' },
            { value: '94%', label: 'On-Time Delivery' },
            { value: '5', label: 'Suppliers Monitored' },
          ],
          sections: [
            {
              title: 'Supplier Compliance Risk',
              desc: 'Real-time supplier compliance monitoring and anomaly detection.',
              placeholder: '[Placeholder for Supplier Compliance Table]',
            },
            {
              title: 'Workflow Automation Efficiency',
              desc: 'Tracking automation impact on key financial workflows.',
              placeholder: '[Placeholder for Efficiency Line Chart]',
            },
          ],
        },
      },
      {
        key: 'market',
        title: 'AI Market Growth Analysis',
        desc: 'Analyzed market trends and competitive landscape for the AI travel sector to identify growth opportunities.',
        tags: ['Tableau', 'Python', 'SQL'],
        impact: '$770M Market Potential Identified',
        modal: {
          title: 'AI Market Growth Analysis',
          subtitle: 'Market trends and competitive landscape analysis for the AI travel sector.',
          metrics: [
            { value: '$770M', label: 'Market Potential' },
            { value: '43.6%', label: 'CAGR Growth' },
            { value: '85%', label: 'Data Coverage' },
            { value: '12', label: 'Competitors Tracked' },
            { value: '3', label: 'New Segments' },
          ],
          sections: [
            {
              title: 'Competitive Landscape',
              desc: 'Analysis of key players and market share distribution.',
              placeholder: '[Placeholder for Competitor Matrix]',
            },
            {
              title: 'Growth Opportunity Map',
              desc: 'Identifying untapped regions and user segments for expansion.',
              placeholder: '[Placeholder for Geographical Heatmap]',
            },
          ],
        },
      },
      {
        key: 'strategy',
        title: 'B2B/B2C Strategy Tracker',
        desc: 'Monitored the rollout and performance of new B2B and B2C financial strategies at Bajaj Finance.',
        tags: ['Power BI', 'Excel', 'JIRA'],
        impact: '20% Faster Strategy Adoption',
        modal: {
          title: 'B2B/B2C Strategy Tracker',
          subtitle: 'Monitoring the rollout and performance of new B2B and B2C strategies.',
          metrics: [
            { value: '20%', label: 'Faster Adoption' },
            { value: '15%', label: 'Increase in B2B Leads' },
            { value: '10%', label: 'Conversion Rate Uplift' },
            { value: '5,500+', label: 'Users Onboarded' },
            { value: '98%', label: 'System Uptime' },
          ],
          sections: [
            {
              title: 'Onboarding Funnel',
              desc: 'Tracking user progression from initial contact to successful onboarding.',
              placeholder: '[Placeholder for Funnel Chart]',
            },
            {
              title: 'Performance Metrics by Channel',
              desc: 'Comparing the effectiveness of different acquisition channels.',
              placeholder: '[Placeholder for Channel Performance Bar Chart]',
            },
          ],
        },
      },

    ],
    []
  );

  const openModal = (item) => {
    if (item.link) {
      router.push(item.link);
    } else {
      setActive(item);
      setOpen(true);
    }
  };

  return (
    <>
      <Section id="projects" title="Professional Projects" eyebrow="Career Highlights" wide containerClassName="max-w-screen-lg px-2 md:px-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 items-stretch auto-rows-fr">
          {dashboards.map((c) => (
            <Reveal key={c.title}>
              <button
                onClick={() => openModal(c)}
                aria-label={c.title}
                type="button"
                className="group isolate h-full w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 dark:border-white/10 dark:bg-white/5 dark:focus-visible:ring-teal-300/50 flex flex-col min-h-[460px]"
              >
                <div className="relative h-40 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 rounded-t-3xl">
                  <div className="absolute inset-x-8 bottom-6 flex items-end justify-between gap-1.5" aria-hidden>
                    <div className="w-5 rounded-md bg-white/45 origin-bottom animate-bar-wave" style={{ height: '38px', animationDelay: '0s' }} />
                    <div className="w-5 rounded-md bg-white/40 origin-bottom animate-bar-wave" style={{ height: '60px', animationDelay: '.09s' }} />
                    <div className="w-5 rounded-md bg-white/35 origin-bottom animate-bar-wave" style={{ height: '86px', animationDelay: '.18s' }} />
                    <div className="w-5 rounded-md bg-white/30 origin-bottom animate-bar-wave" style={{ height: '54px', animationDelay: '.27s' }} />
                    <div className="w-5 rounded-md bg-white/35 origin-bottom animate-bar-wave" style={{ height: '104px', animationDelay: '.36s' }} />
                    <div className="w-5 rounded-md bg-white/30 origin-bottom animate-bar-wave" style={{ height: '72px', animationDelay: '.45s' }} />
                    <div className="w-5 rounded-md bg-white/35 origin-bottom animate-bar-wave" style={{ height: '92px', animationDelay: '.54s' }} />
                    <div className="w-5 rounded-md bg-white/30 origin-bottom animate-bar-wave" style={{ height: '52px', animationDelay: '.63s' }} />
                    <div className="w-5 rounded-md bg-white/40 origin-bottom animate-bar-wave" style={{ height: '80px', animationDelay: '.72s' }} />
                    <div className="w-5 rounded-md bg-white/35 origin-bottom animate-bar-wave" style={{ height: '60px', animationDelay: '.81s' }} />
                    <div className="w-5 rounded-md bg-white/30 origin-bottom animate-bar-wave" style={{ height: '70px', animationDelay: '.90s' }} />
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-white p-6 dark:border-white/10 dark:bg-white/5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{c.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">{t}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-gray-300" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{c.desc}</p>
                  <div className="mt-auto pt-4">
                    <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-gradient-to-r from-cyan-50 via-teal-50 to-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 shadow-sm transition-colors group-hover:border-cyan-400/60 group-hover:shadow-md group-hover:shadow-cyan-500/10 dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-white/10 dark:text-cyan-300">
                      <Sparkles size={16} className="text-cyan-600 dark:text-cyan-300" />
                      <span>{c.impact}</span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <ProjectModal open={open} onClose={() => setOpen(false)} data={active?.modal && {
        title: active.modal.title,
        subtitle: active.modal.subtitle,
        metrics: active.modal.metrics,
        sections: active.modal.sections,
        statsImage: active.modal.statsImage,
        images: active.modal.images,
        links: active.modal.links,
      }} />
    </>
  );
}
