"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function LogisticsDashboardPage() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-slate-900">
            <div className="fixed left-4 top-4 z-20">
                <button
                    onClick={() => router.push('/#dashboards')}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Portfolio</span>
                </button>
            </div>

            <iframe
                title="Logistics Analytics Dashboard"
                src="/logistics.html"
                className="block w-full h-screen border-0"
            />
        </div>
    );
}
