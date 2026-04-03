"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { showcaseItems, showcaseMethods, showcaseThemes } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="text-3xl font-bold mb-2">Research Highlights</h1>
        <p className="text-text-secondary font-mono text-sm mb-12">
          Selected papers and research directions presented in a compact format
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
        <ScrollReveal className="lg:col-span-2">
          <div className="p-4 rounded border border-border bg-bg-surface/30 h-full">
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-xs text-accent-green uppercase tracking-wider">
                Research Themes
              </p>
              <span className="font-mono text-[10px] text-text-muted">
                core agenda
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {showcaseThemes.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded border border-border/60 bg-bg-elevated/40 text-sm text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="p-4 rounded border border-border bg-bg-surface/30 h-full">
            <p className="font-mono text-xs text-accent-green uppercase tracking-wider mb-3">
              Methods & Data
            </p>
            <div className="flex flex-wrap gap-2">
              {showcaseMethods.map((item) => (
                <span
                  key={item}
                  className="tag px-2 py-1 rounded border border-border bg-bg-elevated text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-3">
        {showcaseItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.05}>
            <div className="p-4 rounded border border-border bg-bg-surface/30 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="tag px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">
                      {item.theme}
                    </span>
                    <span className="tag px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border">
                    {item.year}
                    </span>
                    <span className="tag px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border">
                      {item.outlet}
                    </span>
                  </div>

                  <h2 className="text-base font-semibold text-text-primary">
                    {item.title}
                  </h2>
                  <div className="space-y-2 mt-3">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="text-text-primary font-medium">Research question:</span> {item.question}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="text-text-primary font-medium">Approach:</span> {item.approach}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="text-text-primary font-medium">Contribution:</span> {item.takeaway}
                    </p>
                  </div>
                </div>

                {item.links?.length ? (
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-border text-text-secondary rounded font-mono text-xs hover:text-accent-green hover:border-accent-green/30 transition-all"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.methods.map((method) => (
                  <span
                    key={method}
                    className="tag px-2 py-1 rounded border border-border bg-bg-elevated/60 text-text-secondary"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
