"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { teaching } from "@/data/teaching";

export default function TeachingPage() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="text-3xl font-bold mb-2">Teaching</h1>
        <p className="text-text-secondary font-mono text-sm mb-12">
          Courses and teaching experience
        </p>
      </ScrollReveal>

      <div className="space-y-3">
        {teaching.map((entry, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-5 rounded border border-border bg-bg-surface/30 card-hover">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="tag px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20 mb-2 inline-block">
                    {entry.role}
                  </span>
                  <p className="font-medium text-text-primary mt-1">
                    {entry.course}
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    {entry.institution}
                  </p>
                </div>
                <span className="font-mono text-xs text-text-muted whitespace-nowrap">
                  {entry.period}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
