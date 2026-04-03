"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { publications, workingPapers, policyBriefs } from "@/data/publications";

export default function PublicationsPage() {
  const grouped = publications.reduce<Record<string, typeof publications>>(
    (acc, pub) => {
      const key = pub.year;
      if (!acc[key]) acc[key] = [];
      acc[key].push(pub);
      return acc;
    },
    {}
  );

  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === "Accepted") return -1;
    if (b === "Accepted") return 1;
    return Number(b) - Number(a);
  });

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="text-3xl font-bold mb-2">Publications</h1>
        <p className="text-text-secondary font-mono text-sm mb-2">
          Peer-reviewed publications, working papers, and policy briefs
        </p>
        <p className="text-xs text-text-muted font-mono mb-12">
          * denotes corresponding author
        </p>
      </ScrollReveal>

      {/* Peer-Reviewed */}
      {sortedYears.map((year) => (
        <div key={year} className="mb-10">
          <ScrollReveal>
            <h2 className="font-mono text-sm text-accent-green tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              {year}
            </h2>
          </ScrollReveal>
          <div className="space-y-2">
            {grouped[year].map((pub, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="pub-item p-4 rounded border border-border bg-bg-surface/30 group">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-text-primary hover:text-accent-green transition-colors"
                    >
                      {pub.title} ↗
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-text-primary">
                      {pub.title}
                    </span>
                  )}
                  <p className="text-xs text-accent-blue font-mono mt-1">
                    {pub.journal}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {pub.authors}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      ))}

      {/* Working Papers */}
      <div className="mt-16">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-2">Working Papers</h2>
          <div className="h-px bg-border mb-6" />
        </ScrollReveal>
        <div className="space-y-2">
          {workingPapers.map((paper, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="p-4 rounded border border-border bg-bg-surface/30 group pub-item">
                <span className="text-sm font-medium text-text-primary">
                  {paper.title}
                </span>
                <p className="text-xs text-text-secondary mt-1">
                  {paper.authors}
                </p>
                {paper.status && (
                  <span className="inline-block mt-2 tag px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">
                    {paper.status}
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Policy Briefs */}
      <div className="mt-16">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-2">Policy Briefs & Outreach</h2>
          <div className="h-px bg-border mb-6" />
        </ScrollReveal>
        <div className="space-y-2">
          {policyBriefs.map((brief, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="p-4 rounded border border-border bg-bg-surface/30 group pub-item">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {brief.url ? (
                      <a
                        href={brief.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-text-primary hover:text-accent-green transition-colors"
                      >
                        {brief.title} ↗
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-text-primary">
                        {brief.title}
                      </span>
                    )}
                    <p className="text-xs text-accent-cyan font-mono mt-1">
                      {brief.outlet}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {brief.authors}
                    </p>
                  </div>
                  <span className="tag px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border whitespace-nowrap">
                    {brief.year}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
