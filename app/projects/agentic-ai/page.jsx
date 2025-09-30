import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Multi-Agent AI Finance Transformation Platform | Tarun Asrani',
  description:
    'Agentic workflows for finance automation with RAG, orchestration, and evaluation. Embedded live demo.',
  openGraph: {
    title: 'Multi-Agent AI Finance Transformation Platform | Tarun Asrani',
    description:
      'Agentic workflows for finance automation with RAG, orchestration, and evaluation. Embedded live demo.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Agent AI Finance Transformation Platform | Tarun Asrani',
    description:
      'Agentic workflows for finance automation with RAG, orchestration, and evaluation. Embedded live demo.',
  },
};

const PROJECT_URL = 'https://finance-agentic-ai.vercel.app/';

export default function AgenticAIProjectPage() {
  return (
    <section className="py-6 md:py-10">
      <div className="container">
        {/* Back button */}
        <div className="mb-4 md:mb-6">
          <Link
            href="/#dashboards"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Multi-Agent AI Finance Transformation Platform
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-gray-300">
          Embedded live project demo. If the frame does not load, the external site may block embedding; use the
          open-in-new tab button below.
        </p>

        {/* Actions */}
        <div className="mt-4">
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110"
          >
            Open Fullscreen
          </a>
        </div>

        {/* Iframe container */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm dark:border-white/10">
          <iframe
            src={PROJECT_URL}
            title="Multi-Agent AI Finance Transformation Platform"
            className="w-full h-[75vh] md:h-[80vh] bg-white dark:bg-slate-900"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; geolocation; microphone; camera"
          />
        </div>
      </div>
    </section>
  );
}
