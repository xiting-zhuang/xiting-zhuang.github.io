"use client";

import { useState, useEffect, useRef } from "react";

interface CommandOutput {
  command: string;
  output: string[];
}

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  bio        — About me",
    "  projects   — Selected computational work",
    "  stack      — Technical toolkit",
    "  pipeline   — Research workflow",
    "  papers     — Recent publications",
    "  contact    — Get in touch",
    "  research   — Research interests",
    "  clear      — Clear terminal",
  ],
  bio: [
    "Xiting Zhuang | Research Assistant Professor",
    "North Dakota State University",
    "",
    "Ph.D. Agricultural & Resource Economics, UConn",
    "M.S. Computer Science, Georgia Tech (2020-present)",
    "M.S. Quantitative Economics, Fuzhou University",
    "B.A. Accounting, Xiamen University",
  ],
  papers: [
    "Recent Publications (2024-2026):",
    "",
    "→ Food Policy (2026) — Food date labeling",
    "→ Systematic Reviews (2026) — ML-assisted screening",
    "→ Applied Economics (2025) — IPV and work environment",
    "→ JTEP (2025) — Container shipping crisis",
    "→ AEPP (2024) — Pop-up ports & ag exports",
    "",
    "Total: 15+ peer-reviewed | 9 working papers",
  ],
  projects: [
    "Selected Computational Work:",
    "",
    "→ Customs Trade Data Scraper",
    "→ ML-assisted abstract screening",
    "→ Food labeling text mining",
    "→ Meteorite interception simulator",
  ],
  stack: [
    "Core:       Python, R, SQL, Stata",
    "ML/AI:      Scikit-learn, NLP, Text Mining",
    "Data:       Scraping, APIs, batch processing",
    "Inference:  DID, RDD, IV, quasi-experiments",
    "Tools:      Git, LaTeX, ArcGIS",
    "Human:      English, Mandarin, Hokkien",
  ],
  pipeline: [
    "Research Pipeline:",
    "",
    "▸ Collect data from APIs, customs sites, or documents",
    "▸ Clean and structure large policy / trade datasets",
    "▸ Apply NLP or ML for screening and text analysis",
    "▸ Combine computational outputs with causal inference",
    "▸ Translate results into publication and policy insight",
  ],
  contact: [
    "Email:    xiting.zhuang@ndsu.edu",
    "GitHub:   github.com/xiting-zhuang",
    "Scholar:  scholar.google.com/citations?user=7DWbsPUAAAAJ",
    "LinkedIn: linkedin.com/in/xiting-zhuang",
  ],
  research: [
    "Research Interests:",
    "",
    "▸ Causal Inference (RDD, DID, quasi-experiments)",
    "▸ Supply Chain Disruptions (shipping, ports, drought)",
    "▸ Social Issues (domestic violence, child welfare)",
    "▸ Trade Policy (tariffs, IEEPA, pass-through)",
    "▸ Machine Learning (text mining, NLP, systematic reviews)",
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { command: "", output: ["Welcome to xiting-zhuang.sh — Type 'help' for commands"] },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (cmd === "clear") {
      setHistory([{ command: "", output: ["Terminal cleared. Type 'help' for commands."] }]);
      return;
    }

    const output = COMMANDS[cmd] || [`Command not found: ${cmd}`, "Type 'help' for available commands."];
    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  return (
    <div
      className="w-full rounded border border-border bg-[#0c0c0c] font-mono text-sm overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-bg-elevated/50 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-xs text-text-muted ml-2">xiting-zhuang — bash</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 h-[300px] overflow-y-auto">
        {history.map((entry, i) => (
          <div key={i} className="mb-3">
            {entry.command && (
              <div className="flex gap-2">
                <span className="text-accent-green">$</span>
                <span className="text-text-primary">{entry.command}</span>
              </div>
            )}
            {entry.output.map((line, j) => (
              <div key={j} className={`text-text-secondary ${line.startsWith("→") || line.startsWith("▸") ? "text-text-primary" : ""}`}>
                {line || "\u00A0"}
              </div>
            ))}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <span className="text-accent-green">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-text-primary outline-none caret-accent-green"
            autoFocus
            spellCheck={false}
            aria-label="Terminal input"
            placeholder="type a command..."
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
