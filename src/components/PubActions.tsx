"use client";

import { useState } from "react";

interface PubActionsProps {
  bibtex: string;
  abstract?: string;
  doi?: string;
}

export default function PubActions({ bibtex, abstract, doi }: PubActionsProps) {
  const [copied, setCopied] = useState(false);
  const [showAbstract, setShowAbstract] = useState(false);

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (http, old browser) — leave the button as is.
    }
  };

  const buttonClass =
    "font-mono text-[10px] px-2 py-0.5 rounded border border-border text-text-muted hover:text-accent-green hover:border-accent-green/40 transition-colors";

  return (
    <div className="mt-2.5">
      <div className="flex items-center gap-2">
        {abstract && (
          <button onClick={() => setShowAbstract(!showAbstract)} className={buttonClass}>
            {showAbstract ? "Hide abstract" : "Abstract"}
          </button>
        )}
        <button onClick={copyBibtex} className={buttonClass}>
          {copied ? "Copied ✓" : "BibTeX"}
        </button>
        {doi && (
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            DOI
          </a>
        )}
      </div>
      {showAbstract && abstract && (
        <p className="mt-2 text-xs text-text-secondary leading-relaxed border-l-2 border-accent-green/30 pl-3">
          {abstract}
        </p>
      )}
    </div>
  );
}
