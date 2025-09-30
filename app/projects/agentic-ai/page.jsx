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
    <>
      {/* Floating back button over the embedded app */}
      <Link
        href="/#dashboards"
        className="fixed top-3 left-3 md:top-4 md:left-4 z-[60] inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_20px_rgba(0,0,0,0.25)] backdrop-blur-md hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 0.75rem)' }}
      >
        <ArrowLeft size={16} />
        <span>Back to Portfolio</span>
      </Link>

      {/* Full-bleed iframe */}
      <iframe
        src={PROJECT_URL}
        title="Multi-Agent AI Finance Transformation Platform"
        className="fixed inset-0 h-[100dvh] w-screen bg-slate-900 z-[55]"
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; geolocation; microphone; camera"
        allowFullScreen
      />
    </>
  );
}
