"use client";

import { useState, useEffect, useRef } from "react";
import { scholarStats, paperCitations } from "@/data/citations";

function AnimatedNumber({ end, duration = 1500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function CitationTicker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sorted = [...paperCitations].sort((a, b) => b.citations - a.citations);
  const totalCitations = scholarStats.totalCitations || sorted.reduce((s, p) => s + p.citations, 0);
  const maxCitations = sorted[0]?.citations || 1;
  const active = sorted[activeIndex % sorted.length];

  // Auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sorted.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sorted.length]);

  return (
    <div className="rounded border border-border bg-bg-surface/30 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-elevated/30">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider">Google Scholar</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <div>
            <span className="text-text-muted">h-index </span>
            <span className="text-accent-green font-semibold"><AnimatedNumber end={scholarStats.hIndex} /></span>
          </div>
          <div>
            <span className="text-text-muted">Citations </span>
            <span className="text-accent-green font-semibold"><AnimatedNumber end={totalCitations} /></span>
          </div>
          <div>
            <span className="text-text-muted">i10 </span>
            <span className="text-text-primary font-semibold"><AnimatedNumber end={scholarStats.i10Index} /></span>
          </div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="px-4 py-3 border-b border-border overflow-hidden">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          {[...sorted, ...sorted].map((paper, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs">
              <span className="text-text-muted font-mono">{paper.journal}</span>
              <span className="text-text-secondary truncate max-w-[250px]">{paper.title}</span>
              <span className="text-accent-green font-mono font-semibold">{paper.citations}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Active paper */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-text-primary truncate">{active.title}</p>
          <p className="text-xs text-text-muted font-mono mt-0.5">{active.journal} · {active.year}</p>
        </div>
        <div className="flex items-center gap-1 ml-4">
          <span className="font-mono text-lg font-bold text-accent-green">{active.citations}</span>
          <span className="text-xs text-text-muted">cites</span>
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="px-4 pb-3 flex items-end gap-1 h-10">
        {sorted.slice(0, 8).map((paper, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t transition-all duration-300 cursor-pointer ${
              activeIndex % sorted.length === i ? "bg-accent-green" : "bg-accent-green/20 hover:bg-accent-green/40"
            }`}
            style={{ height: `${Math.max((paper.citations / maxCitations) * 100, 5)}%` }}
            title={`${paper.title} (${paper.citations})`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
