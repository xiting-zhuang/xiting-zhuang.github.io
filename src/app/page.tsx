"use client";

import Image from "next/image";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";
import ScrollReveal from "@/components/ScrollReveal";
import { news } from "@/data/news";
import { publications } from "@/data/publications";

const researchInterests = [
  "Causal Inference",
  "International Trade",
  "Supply Chain Disruptions",
  "Environmental Economics",
];

export default function Home() {
  const recentPubs = publications.filter(
    (p) => p.year === "2025" || p.year === "2024"
  );

  return (
    <div className="dot-grid">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="font-mono text-accent-green text-sm tracking-widest uppercase">
                  Research Assistant Professor
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Xiting Zhuang
                </h1>
                <p className="text-lg text-text-secondary font-mono">
                  <span className="text-text-muted">// </span>
                  North Dakota State University
                </p>
              </div>

              <p className="text-text-secondary leading-relaxed max-w-xl">
                My research focuses on{" "}
                <span className="text-text-primary font-medium">
                  global supply chain disruptions
                </span>
                ,{" "}
                <span className="text-text-primary font-medium">
                  agri-food trade
                </span>
                , and{" "}
                <span className="text-text-primary font-medium">
                  sustainability
                </span>
                . I combine econometrics with{" "}
                <span className="text-text-primary font-medium">
                  big data analytics and machine learning
                </span>{" "}
                to uncover insights that inform resilient trade strategies.
                Currently also pursuing an M.S. in Computer Science at Georgia Tech.
              </p>

              <div className="font-mono text-sm">
                <span className="text-text-muted">focus: </span>
                <TypeWriter
                  words={researchInterests}
                  className="text-accent-green"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/publications"
                  className="px-5 py-2.5 bg-accent-green/10 text-accent-green border border-accent-green/30 rounded font-mono text-sm hover:bg-accent-green/20 transition-all glow-green-hover"
                >
                  Publications
                </Link>
                <a
                  href="/file/XitingZhuang-Resume.pdf"
                  target="_blank"
                  className="px-5 py-2.5 border border-border text-text-secondary rounded font-mono text-sm hover:border-text-muted hover:text-text-primary transition-all"
                >
                  View CV
                </a>
                <a
                  href="mailto:xiting.zhuang@ndsu.edu"
                  className="px-5 py-2.5 border border-border text-text-secondary rounded font-mono text-sm hover:border-text-muted hover:text-text-primary transition-all"
                >
                  Contact
                </a>
              </div>

              <div className="flex items-center gap-4 pt-3">
                <a
                  href="https://scholar.google.com/citations?user=gSddLM4AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-muted hover:text-accent-green transition-colors text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                  Google Scholar
                </a>
                <a
                  href="https://www.linkedin.com/in/xiting-zhuang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-muted hover:text-accent-blue transition-colors text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/xiting-zhuang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border glow-green">
                  <Image
                    src="/images/shenghuo.jpg"
                    alt="Xiting Zhuang"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-accent-green/10 border border-accent-green/30 rounded-full">
                  <span className="font-mono text-xs text-accent-green flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                    NDSU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-mono text-sm text-accent-green tracking-widest uppercase mb-8">
              Latest News
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {news.slice(0, 5).map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-4 rounded border border-border bg-bg-surface/50 card-hover group">
                  <span className="font-mono text-xs text-accent-green whitespace-nowrap pt-0.5 min-w-[80px]">
                    {item.date}
                  </span>
                  <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    {item.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-mono text-sm text-accent-green tracking-widest uppercase">
                Selected Publications
              </h2>
              <Link
                href="/publications"
                className="font-mono text-xs text-text-muted hover:text-accent-green transition-colors"
              >
                View all →
              </Link>
            </div>
          </ScrollReveal>
          <div className="space-y-2">
            {recentPubs.map((pub, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="pub-item p-4 rounded border border-border bg-bg-surface/30">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-text-primary hover:text-accent-green transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-text-primary">
                          {pub.title}
                        </span>
                      )}
                      <p className="text-xs text-text-muted mt-1 font-mono">
                        {pub.journal}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {pub.authors.replace(/Xiting Zhuang/g, "**Xiting Zhuang**")}
                      </p>
                    </div>
                    <span className="tag px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20 whitespace-nowrap">
                      {pub.year}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-mono text-sm text-accent-green tracking-widest uppercase mb-8">
              Research Interests
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Causal Inference", icon: "⚡" },
              { name: "International Trade", icon: "🌐" },
              { name: "Supply Chain", icon: "📦" },
              { name: "Environmental Econ", icon: "🌱" },
            ].map((interest, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-5 rounded border border-border bg-bg-surface/50 card-hover text-center group">
                  <div className="text-2xl mb-3">{interest.icon}</div>
                  <p className="font-mono text-sm text-text-secondary group-hover:text-accent-green transition-colors">
                    {interest.name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
