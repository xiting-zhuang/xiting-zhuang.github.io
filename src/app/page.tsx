"use client";

import Image from "next/image";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";
import AnimatedCounter from "@/components/AnimatedCounter";
import Timeline from "@/components/Timeline";
import CitationTicker from "@/components/CitationTicker";
import EvidencePipeline from "@/components/EvidencePipeline";
import { publications } from "@/data/publications";
import { showcaseItems, showcaseMethods } from "@/data/projects";

const researchInterests = [
  "Causal Inference",
  "Supply Chain Disruptions",
  "Social Issues & Public Policy",
  "International Trade",
];

export default function Home() {
  const recentPubs = publications.filter(
    (p) => p.year === "2025" || p.year === "2024" || p.year === "2026"
  ).slice(0, 5);
  const featuredShowcase = showcaseItems.slice(0, 3);

  return (
    <div className="dot-grid">
      {/* ===== ROW 1: Hero + Stats sidebar ===== */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Hero — 2 cols */}
            <div className="lg:col-span-2 p-6 rounded border border-border bg-bg-surface/30">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 hidden md:block">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border glow-green">
                      <Image src="/images/shenghuo.jpg" alt="Xiting Zhuang" width={80} height={80} className="object-cover w-full h-full" priority />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent-green border-2 border-bg-primary animate-pulse" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-accent-green text-xs tracking-widest uppercase">Research Assistant Professor</p>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">Xiting Zhuang</h1>
                  <p className="text-sm text-text-secondary font-mono mt-0.5">
                    <span className="text-text-muted">// </span>North Dakota State University
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mt-3 max-w-xl">
                    I am a <span className="text-text-primary font-medium">Research Assistant Professor</span> studying how <span className="text-text-primary font-medium">supply chain disruptions</span>, <span className="text-text-primary font-medium">trade policy</span>, and <span className="text-text-primary font-medium">economic shocks</span> affect agricultural markets and social outcomes. <span className="text-text-primary font-medium">Big data analytics</span>, <span className="text-text-primary font-medium">text mining</span>, and other computational tools support this research agenda. Also pursuing M.S. in CS at Georgia Tech.
                  </p>
                  <div className="font-mono text-xs mt-3">
                    <span className="text-text-muted">focus: </span>
                    <TypeWriter words={researchInterests} className="text-accent-green" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <Link href="/publications" className="px-3 py-1.5 bg-accent-green/10 text-accent-green border border-accent-green/30 rounded font-mono text-xs hover:bg-accent-green/20 transition-all">Publications</Link>
                    <a href="/file/XitingZhuang-Resume.pdf" target="_blank" className="px-3 py-1.5 border border-border text-text-secondary rounded font-mono text-xs hover:text-text-primary transition-all">CV</a>
                    <a href="mailto:xiting.zhuang@ndsu.edu" className="px-3 py-1.5 border border-border text-text-secondary rounded font-mono text-xs hover:text-text-primary transition-all">Contact</a>
                    <span className="text-border">|</span>
                    <a href="https://scholar.google.com/citations?user=7DWbsPUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-green transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/xiting-zhuang" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-blue transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://github.com/xiting-zhuang" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats sidebar — 1 col */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                <AnimatedCounter end={15} suffix="+" label="Papers" />
                <AnimatedCounter end={91} label="Citations" />
                <AnimatedCounter end={5} label="h-index" />
              </div>
              {/* Research areas compact */}
              <div className="flex-1 p-4 rounded border border-border bg-bg-surface/30">
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-3">Research Areas</p>
                <div className="space-y-2">
                  {[
                    { icon: "⚡", name: "Causal Inference", sub: "RDD · DID · IV" },
                    { icon: "🚢", name: "Supply Chain", sub: "Shipping · Ports · Drought" },
                    { icon: "🏛", name: "Social Issues", sub: "DV · Child Welfare · Equality" },
                    { icon: "📊", name: "Trade Policy", sub: "Tariffs · IEEPA · Pass-through" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-2 group">
                      <span className="text-sm">{a.icon}</span>
                      <div>
                        <p className="text-xs font-medium text-text-secondary group-hover:text-accent-green transition-colors">{a.name}</p>
                        <p className="text-[10px] text-text-muted font-mono">{a.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 2: Citation Ticker (full width) ===== */}
      <section className="pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <CitationTicker />
        </div>
      </section>

      {/* ===== ROW 3: News + Publications side by side ===== */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Selected Publications */}
            <div className="p-4 rounded border border-border bg-bg-surface/30">
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-xs text-accent-green uppercase tracking-wider">Recent Publications</p>
                <Link href="/publications" className="font-mono text-[10px] text-text-muted hover:text-accent-green transition-colors">View all →</Link>
              </div>
              <div className="space-y-2">
                {recentPubs.map((pub, i) => (
                  <div key={i} className="py-2 border-b border-border/50 last:border-0 pub-item pl-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        {pub.url ? (
                          <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-text-primary hover:text-accent-green transition-colors leading-snug block">{pub.title}</a>
                        ) : (
                          <span className="text-xs font-medium text-text-primary leading-snug block">{pub.title}</span>
                        )}
                        <p className="text-[10px] text-text-muted font-mono mt-0.5">{pub.journal} · {pub.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coauthor Network */}
            <div className="p-4 rounded border border-border bg-bg-surface/30">
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-xs text-accent-green uppercase tracking-wider">Coauthor Network</p>
                <span className="font-mono text-[10px] text-text-muted">8+ institutions</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Sandro Steinbach", inst: "NDSU", papers: 10, role: "Supply Chain · Trade" },
                  { name: "Colin A. Carter", inst: "UC Davis", papers: 3, role: "Container Shipping · Ag Exports" },
                  { name: "Weidong Tian", inst: "SWUFE", papers: 4, role: "Domestic Violence · Social Issues" },
                  { name: "Zhihong Xu", inst: "Texas A&M", papers: 3, role: "Machine Learning · Systematic Reviews" },
                  { name: "Peng Lu", inst: "UGA", papers: 1, role: "Food Policy · Text Mining" },
                  { name: "Shawn Arita", inst: "NDSU/ARPC", papers: 7, role: "Trade Monitor · Tariffs" },
                  { name: "Heidi Schweizer", inst: "NC State", papers: 1, role: "Meat Trade · Firm Analysis" },
                  { name: "Raghav Goyal", inst: "LSU", papers: 2, role: "Climate · Trade Disruptions" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0 group">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60 group-hover:bg-purple-500 transition-colors" />
                      <div>
                        <p className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors">{c.name}</p>
                        <p className="text-[10px] text-text-muted font-mono">{c.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-text-muted font-mono">{c.inst}</p>
                      <p className="text-[10px] text-accent-green font-mono">{c.papers} papers</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 4: Evidence Pipeline ===== */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-6">
          <EvidencePipeline />
        </div>
      </section>

      {/* ===== ROW 5: Selected Research ===== */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 p-4 rounded border border-border bg-bg-surface/30">
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-xs text-accent-green uppercase tracking-wider">
                  Selected Research
                </p>
                <Link
                  href="/projects"
                  className="font-mono text-[10px] text-text-muted hover:text-accent-green transition-colors"
                >
                  View all →
                </Link>
              </div>
              <div className="space-y-3">
                {featuredShowcase.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded border border-border/60 bg-bg-elevated/20 card-hover"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
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
                        <h3 className="text-sm font-semibold text-text-primary">
                          {item.title}
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed mt-1">
                          <span className="text-text-primary font-medium">Research question:</span> {item.question}
                        </p>
                        <p className="text-[11px] text-text-muted leading-relaxed mt-1.5">
                          <span className="text-text-secondary">Contribution:</span> {item.takeaway}
                        </p>
                      </div>
                      {item.links?.[0] ? (
                        <a
                          href={item.links[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 border border-border text-text-secondary rounded font-mono text-[10px] hover:text-accent-green hover:border-accent-green/30 transition-all whitespace-nowrap"
                        >
                          {item.links[0].label} ↗
                        </a>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.methods.map((method) => (
                        <span
                          key={method}
                          className="tag px-2 py-0.5 rounded border border-border bg-bg-elevated text-text-secondary"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded border border-border bg-bg-surface/30">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-xs text-accent-green uppercase tracking-wider">
                    Methods & Data
                  </p>
                  <span className="font-mono text-[10px] text-text-muted">
                    supporting toolkit
                  </span>
                </div>
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
              <div className="p-4 rounded border border-border bg-bg-surface/30">
                <p className="font-mono text-xs text-accent-green uppercase tracking-wider mb-3">
                  Research Profile
                </p>
                <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  <p>
                    The main emphasis here is the research agenda itself: trade, supply chains, food policy, and social outcomes.
                  </p>
                  <p className="text-text-muted">
                    Big data and computational methods appear as part of the background and toolkit, not as a separate professional identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 6: Timeline (compact) ===== */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-4 rounded border border-border bg-bg-surface/30">
            <p className="font-mono text-xs text-accent-green uppercase tracking-wider mb-4">Timeline</p>
            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
}
