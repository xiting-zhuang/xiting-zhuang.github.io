"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";

interface PipelineCase {
  label: string;
  title: string;
  outlet: string;
  sources: string[];
  methods: string[];
  contribution: string;
  accent: string;
  stageDetails: string[];
}

const stages = [
  { label: "Raw data" },
  { label: "Cleaning" },
  { label: "Identification" },
  { label: "Evidence" },
  { label: "Paper" },
];

const pipelineCases: PipelineCase[] = [
  {
    label: "Trade",
    title: "Container shipping crisis and U.S. agricultural exports",
    outlet: "JTEP · 2025",
    sources: ["Trade flows", "Shipping disruptions", "Port conditions"],
    methods: ["Causal inference", "Trade-flow analysis"],
    contribution:
      "Shows how logistics shocks translate into measurable export damage for agricultural markets.",
    accent: "#22c55e",
    stageDetails: [
      "trade flows + shipping records",
      "align routes, ports, and timing",
      "define disruption shock windows",
      "estimate export losses",
      "translate shock into policy relevance",
    ],
  },
  {
    label: "Supply Chain",
    title: "Pop-up ports and agricultural export resilience",
    outlet: "AEPP · 2024",
    sources: ["Port activity", "Export data", "Disruption timelines"],
    methods: ["System adaptation", "Policy interpretation"],
    contribution:
      "Explains how port adaptation strategies partially absorb global shipping stress.",
    accent: "#06b6d4",
    stageDetails: [
      "port activity + export series",
      "merge ports with disruption events",
      "separate adaptation from shock",
      "trace resilience effects",
      "show what worked under stress",
    ],
  },
  {
    label: "Social",
    title: "Work environment and intimate partner violence",
    outlet: "Applied Economics · 2025",
    sources: ["Social data", "Household outcomes", "Economic conditions"],
    methods: ["Applied microeconomics", "Causal inference"],
    contribution:
      "Connects labor conditions to socially consequential household outcomes.",
    accent: "#f59e0b",
    stageDetails: [
      "survey and household outcome data",
      "construct work-condition measures",
      "link labor setting to outcomes",
      "identify social exposure patterns",
      "frame implications for policy",
    ],
  },
  {
    label: "Food Policy",
    title: "Food date labeling and public perceptions",
    outlet: "Food Policy · 2026",
    sources: ["Public comments", "Policy text", "Food-system responses"],
    methods: ["Text mining", "Content analysis"],
    contribution:
      "Uses large-scale text evidence to surface policy-relevant public concerns.",
    accent: "#3b82f6",
    stageDetails: [
      "public comments + policy text",
      "clean language and code themes",
      "map themes to policy questions",
      "summarize major public signals",
      "turn text evidence into insight",
    ],
  },
];

export default function EvidencePipeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const activeCase = pipelineCases[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pipelineCases.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setActiveStep(0);
    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 1150);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const packets = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        delay: `${i * 0.8}s`,
        top: `${18 + (i % 3) * 24}%`,
      })),
    []
  );

  return (
    <div className="rounded border border-border bg-bg-surface/30 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-elevated/30">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
            Evidence Pipeline
          </span>
        </div>
        <span className="font-mono text-[10px] text-text-muted">
          data supports research
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-0">
        <div className="p-4 border-b lg:border-b-0 lg:border-r border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            {pipelineCases.map((item, i) => (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={`tag px-2 py-1 rounded border transition-all ${
                  activeIndex === i
                    ? "text-text-primary border-transparent"
                    : "bg-bg-elevated text-text-secondary border-border hover:text-text-primary"
                }`}
                style={
                  activeIndex === i
                    ? {
                        backgroundColor: `${item.accent}18`,
                        borderColor: `${item.accent}33`,
                        color: item.accent,
                      }
                    : undefined
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className="relative rounded border border-border/70 bg-[#0d0f10] min-h-[250px] overflow-hidden"
            style={
              {
                ["--pipeline-accent" as string]: activeCase.accent,
              } as CSSProperties
            }
          >
            <div className="pipeline-mesh absolute inset-0" />
            <div className="pipeline-scanline absolute inset-y-0 w-24" />

            <div className="absolute inset-0 opacity-60">
              <div className="absolute inset-x-4 top-6 h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />
              <div className="absolute inset-x-4 bottom-6 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />
              <div className="absolute inset-y-4 left-[20%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
              <div className="absolute inset-y-4 left-[50%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
              <div className="absolute inset-y-4 left-[80%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            </div>

            <div className="relative px-4 pt-6 pb-20">
              <div className="grid grid-cols-5 gap-2">
                {stages.map((stage, i) => (
                  <div key={stage.label} className="relative">
                    {(() => {
                      const isCurrent = i === activeStep;
                      const isComplete = i < activeStep;
                      const detail = activeCase.stageDetails[i];

                      return (
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`pipeline-stage-orb ${
                          i === stages.length - 1 ? "pipeline-stage-orb-final" : ""
                        }`}
                        style={
                          isCurrent || i === stages.length - 1
                            ? {
                                borderColor: `${activeCase.accent}55`,
                                backgroundColor: `${activeCase.accent}18`,
                              }
                            : isComplete
                              ? {
                                  borderColor: `${activeCase.accent}30`,
                                }
                              : undefined
                        }
                      >
                        <span
                          className="pipeline-stage-core"
                          style={{
                            background: isComplete || isCurrent ? activeCase.accent : "rgba(255,255,255,0.28)",
                            boxShadow: isComplete || isCurrent
                              ? `0 0 14px ${activeCase.accent}66`
                              : "none",
                          }}
                        />
                      </span>
                      <div
                        className={`rounded border px-2 py-2 text-center transition-all ${
                          isCurrent
                            ? "text-text-primary"
                            : i < stages.length - 1
                              ? "border-border bg-bg-elevated/70 text-text-secondary"
                              : "text-accent-green"
                        }`}
                        style={{
                          borderColor:
                            isCurrent || i === stages.length - 1
                              ? `${activeCase.accent}44`
                              : isComplete
                                ? `${activeCase.accent}22`
                                : undefined,
                          backgroundColor:
                            isCurrent || i === stages.length - 1
                              ? `${activeCase.accent}14`
                              : isComplete
                                ? `${activeCase.accent}0d`
                                : undefined,
                          color:
                            isCurrent || i === stages.length - 1
                              ? activeCase.accent
                              : undefined,
                        }}
                      >
                        <p className="font-mono text-[10px] uppercase tracking-wider">
                          {stage.label}
                        </p>
                        <p
                          className={`font-mono text-[9px] mt-1 transition-colors ${
                            isCurrent ? "text-text-primary" : "text-text-muted"
                          }`}
                        >
                          {detail}
                        </p>
                      </div>
                    </div>
                      );
                    })()}
                    {i < stages.length - 1 ? (
                      <div className="absolute top-4 left-[calc(100%-2px)] w-[calc(100%+4px)] h-px">
                        <div
                          className="pipeline-connector h-full"
                          style={{
                            opacity: i < activeStep ? 1 : i === activeStep ? 0.8 : 0.45,
                            background:
                              i <= activeStep
                                ? `linear-gradient(90deg, rgba(255, 255, 255, 0.06), ${activeCase.accent}, rgba(59, 130, 246, 0.18))`
                                : undefined,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-4 bottom-12">
              <div className="relative h-10">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-accent-green/10 via-accent-green/30 to-accent-blue/10" />
                {packets.map((packet) => (
                  <span
                    key={packet.id}
                    className="pipeline-packet"
                    style={{
                      animationDelay: packet.delay,
                      top: packet.top,
                      opacity: Number(packet.id % stages.length) <= activeStep ? undefined : 0.55,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="absolute left-4 right-4 bottom-3 grid grid-cols-3 gap-2">
              {activeCase.sources.map((source) => (
                <div
                  key={source}
                  className="rounded border border-border/60 bg-bg-primary/80 px-2 py-1.5 backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    input
                  </p>
                  <p className="text-[11px] text-text-secondary mt-0.5">
                    {source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-3">
            Active Case
          </p>

          <div className="rounded border border-border/70 bg-bg-elevated/40 p-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span
                className="tag px-2 py-0.5 rounded border"
                style={{
                  borderColor: `${activeCase.accent}33`,
                  backgroundColor: `${activeCase.accent}14`,
                  color: activeCase.accent,
                }}
              >
                {activeCase.label}
              </span>
              <span className="font-mono text-[10px] text-text-muted">
                {activeCase.outlet}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-text-primary leading-snug">
              {activeCase.title}
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mt-3">
              {activeCase.contribution}
            </p>

            <div className="mt-4">
              <div className="flex items-end gap-1 h-8 mb-3">
                {[0.35, 0.55, 0.8, 0.45, 0.9, 0.6, 0.75, 0.4].map((height, i) => (
                  <span
                    key={i}
                    className="pipeline-signal-bar flex-1 rounded-t"
                    style={{
                      height: `${height * 100}%`,
                      animationDelay: `${i * 0.12}s`,
                      background: `linear-gradient(180deg, ${activeCase.accent}, rgba(255,255,255,0.08))`,
                    }}
                  />
                ))}
              </div>
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-2">
                Methods
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeCase.methods.map((method) => (
                  <span
                    key={method}
                    className="tag px-2 py-0.5 rounded border border-border bg-bg-primary/60 text-text-secondary"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-text-muted leading-relaxed">
            Research starts from messy data sources, moves through design and identification, and ends in interpretable evidence.
          </div>
        </div>
      </div>
    </div>
  );
}
