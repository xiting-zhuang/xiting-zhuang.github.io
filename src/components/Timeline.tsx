"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  detail: string;
  type: "education" | "career" | "milestone";
  highlights?: string[];
}

const events: TimelineEvent[] = [
  {
    year: "2024–",
    title: "Research Assistant Professor",
    subtitle: "North Dakota State University",
    detail: "Leading research on U.S.–China tariff pass-through, USDA Agricultural Trade Monitor, and NIFA-funded projects.",
    type: "career",
    highlights: ["USDA NIFA Grant ($800K)", "Trade Monitor Series", "6 Policy Briefs"],
  },
  {
    year: "2024",
    title: "Postdoctoral Researcher",
    subtitle: "Texas A&M University",
    detail: "Machine learning for systematic reviews, agricultural curricula analytics.",
    type: "career",
  },
  {
    year: "2018–24",
    title: "Ph.D. Agricultural & Resource Economics",
    subtitle: "University of Connecticut",
    detail: "Dissertation on global supply chain disruptions and U.S. agricultural exports. Advised by Sandro Steinbach.",
    type: "education",
    highlights: ["5 Peer-Reviewed Papers", "Predoctoral Fellowship", "AAEA Travel Award"],
  },
  {
    year: "2020–",
    title: "M.S. Computer Science",
    subtitle: "Georgia Institute of Technology",
    detail: "Machine learning, AI, and computational methods for economic research.",
    type: "education",
  },
  {
    year: "2014–17",
    title: "M.S. Quantitative Economics",
    subtitle: "Fuzhou University",
    detail: "Spatial econometrics, urbanization and carbon emissions research.",
    type: "education",
  },
  {
    year: "2010–14",
    title: "B.A. Accounting",
    subtitle: "Xiamen University, Tan Kah Kee College",
    detail: "TKK First Order Scholarship recipient.",
    type: "education",
  },
];

const typeColors: Record<string, string> = {
  education: "border-blue-500 bg-blue-500",
  career: "border-accent-green bg-accent-green",
  milestone: "border-orange-400 bg-orange-400",
};

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

      <div className="space-y-6">
        {events.map((event, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div
              className="relative pl-12 cursor-pointer group"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* Dot */}
              <div
                className={`absolute left-3 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${typeColors[event.type]} transition-transform duration-200 ${
                  expanded === i ? "scale-125" : "group-hover:scale-110"
                }`}
              />

              {/* Content */}
              <div className={`p-4 rounded border transition-all duration-200 ${
                expanded === i
                  ? "border-accent-green/30 bg-bg-surface/50"
                  : "border-border bg-bg-surface/20 hover:border-border-light hover:bg-bg-surface/30"
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs text-accent-green">{event.year}</span>
                    <h3 className="text-sm font-semibold text-text-primary mt-0.5">{event.title}</h3>
                    <p className="text-xs text-text-muted">{event.subtitle}</p>
                  </div>
                  <span className={`text-text-muted text-xs transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </div>

                {expanded === i && (
                  <div className="mt-3 pt-3 border-t border-border animate-fade-in">
                    <p className="text-sm text-text-secondary leading-relaxed">{event.detail}</p>
                    {event.highlights && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {event.highlights.map((h, j) => (
                          <span
                            key={j}
                            className="tag px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
