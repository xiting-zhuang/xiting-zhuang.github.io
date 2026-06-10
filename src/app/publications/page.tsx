import ScrollReveal from "@/components/ScrollReveal";
import PubActions from "@/components/PubActions";
import {
  publications,
  workingPapers,
  policyBriefs,
  type Publication,
  type PolicyBrief,
} from "@/data/publications";
import { pubExtras } from "@/data/pubextras";
import { mediaStories } from "@/data/media";

const normalizeTitle = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");

const extrasByTitle = new Map(
  Object.entries(pubExtras).map(([title, extra]) => [normalizeTitle(title), extra])
);

// Fallback for entries without an authoritative Crossref record.
function fallbackBibtex(pub: Publication): string {
  const authors = pub.authors
    .replace(/\*/g, "")
    .split(/,\s*&\s*|\s*&\s*|,\s+/)
    .filter(Boolean)
    .join(" and ");
  const firstLast = authors.split(" and ")[0]?.trim().split(" ").pop() ?? "zhuang";
  const firstWord = pub.title.split(/\s+/).find((w) => w.length > 3) ?? "paper";
  const key = `${firstLast.toLowerCase()}${pub.year}${firstWord.toLowerCase().replace(/[^a-z]/g, "")}`;
  const lines = [
    `@article{${key},`,
    `  title = {${pub.title}},`,
    `  author = {${authors}},`,
    `  year = {${pub.year}},`,
    `  journal = {${pub.journal}},`,
  ];
  if (pub.url) lines.push(`  url = {${pub.url}},`);
  lines.push("}");
  return lines.join("\n");
}

// Collapse individual outlets into their series for the impact summary.
const seriesOf = (brief: PolicyBrief) =>
  brief.outlet.startsWith("NDSU Agricultural Trade Monitor")
    ? "NDSU Agricultural Trade Monitor"
    : brief.outlet.startsWith("ARE Update")
      ? "ARE Update (UC Giannini Foundation)"
      : brief.outlet;

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

  const briefSeries = policyBriefs.reduce<Record<string, PolicyBrief[]>>(
    (acc, brief) => {
      const key = seriesOf(brief);
      if (!acc[key]) acc[key] = [];
      acc[key].push(brief);
      return acc;
    },
    {}
  );
  const sortedSeries = Object.keys(briefSeries).sort(
    (a, b) => briefSeries[b].length - briefSeries[a].length
  );

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="text-3xl font-bold mb-2">Publications</h1>
        <p className="text-text-secondary font-mono text-sm mb-2">
          Peer-reviewed publications, working papers, and policy writing
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
            {grouped[year].map((pub, i) => {
              const extra = extrasByTitle.get(normalizeTitle(pub.title));
              return (
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
                    <PubActions
                      bibtex={extra?.bibtex ?? fallbackBibtex(pub)}
                      abstract={extra?.abstract}
                      doi={extra?.doi}
                    />
                  </div>
                </ScrollReveal>
              );
            })}
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
                {paper.url ? (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-text-primary hover:text-accent-green transition-colors"
                  >
                    {paper.title}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-text-primary">
                    {paper.title}
                  </span>
                )}
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

      {/* Policy Writing & Impact */}
      <div className="mt-16">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-2">Policy Writing & Impact</h2>
          <div className="h-px bg-border mb-4" />
          <p className="text-sm text-text-secondary mb-6 max-w-2xl">
            Real-time analysis of trade disruptions and tariff policy for
            producers, industry, and policymakers — {policyBriefs.length}{" "}
            briefs across {sortedSeries.length} outlets.
          </p>
        </ScrollReveal>

        {sortedSeries.map((series) => (
          <div key={series} className="mb-8">
            <ScrollReveal>
              <h3 className="font-mono text-sm text-accent-cyan tracking-wide uppercase mb-3 flex items-baseline gap-2">
                {series}
                <span className="text-text-muted normal-case tracking-normal">
                  · {briefSeries[series].length}{" "}
                  {briefSeries[series].length === 1 ? "brief" : "briefs"}
                </span>
              </h3>
            </ScrollReveal>
            <div className="space-y-2">
              {briefSeries[series].map((brief, i) => (
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
        ))}
      </div>

      {/* In the Media */}
      <div className="mt-16">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-2">In the Media</h2>
          <div className="h-px bg-border mb-4" />
          <p className="text-sm text-text-secondary mb-6 max-w-2xl">
            News coverage of my research and coauthored reports.
          </p>
        </ScrollReveal>

        {mediaStories.map((story, s) => (
          <div key={s} className="mb-8">
            <ScrollReveal>
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {story.study}
              </h3>
              <p className="text-xs text-text-muted font-mono mb-3">
                {story.context}
              </p>
            </ScrollReveal>
            <div className="space-y-1.5">
              {story.mentions.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.03}>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline justify-between gap-3 py-2 px-3 rounded border border-border bg-bg-surface/30 pub-item group"
                  >
                    <span className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-accent-orange font-mono">
                        {m.outlet}
                      </span>
                      <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors block mt-0.5">
                        {m.title}
                      </span>
                    </span>
                    <span className="text-[10px] text-text-muted font-mono whitespace-nowrap">
                      {m.date}
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
