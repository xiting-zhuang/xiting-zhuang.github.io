"use client";

import ScrollReveal from "@/components/ScrollReveal";
import {
  professional,
  education,
  honors,
  affiliations,
  reviewerService,
} from "@/data/experiences";
import { invitedTalks, coauthoredPresentations } from "@/data/conferences";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-14">
      <ScrollReveal>
        <h2 className="font-mono text-sm text-accent-green tracking-widest uppercase mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green" />
          {title}
        </h2>
      </ScrollReveal>
      {children}
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="text-3xl font-bold mb-2">Experiences</h1>
        <p className="text-text-secondary font-mono text-sm mb-12">
          Professional background and academic service
        </p>
      </ScrollReveal>

      <Section title="Professional Experience">
        <div className="space-y-3">
          {professional.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="p-4 rounded border border-border bg-bg-surface/30 card-hover">
                <p className="font-medium text-text-primary">{exp.role}</p>
                <p className="text-sm text-text-secondary">{exp.institution}</p>
                <p className="text-xs text-text-muted font-mono mt-1">
                  {exp.location} · {exp.period}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-3">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="p-4 rounded border border-border bg-bg-surface/30 card-hover">
                <p className="font-medium text-text-primary">{edu.degree}</p>
                <p className="text-sm text-text-secondary">
                  {edu.institution}
                </p>
                <p className="text-xs text-text-muted font-mono mt-1">
                  {edu.location} · {edu.period}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="Invited Conference Talks">
        <div className="space-y-2">
          {invitedTalks.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div className="p-3 rounded border border-border bg-bg-surface/30 card-hover">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary leading-snug">
                      {t.title}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {t.venue}
                    </p>
                    <p className="text-xs text-text-muted font-mono mt-0.5">
                      {t.location}
                    </p>
                  </div>
                  <span className="tag px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border whitespace-nowrap">
                    {t.date}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="Coauthored Presentations">
        <div className="space-y-2">
          {coauthoredPresentations.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="p-3 rounded border border-border bg-bg-surface/30 card-hover">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary leading-snug">
                      {t.title}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {t.venue}
                    </p>
                    <p className="text-xs text-text-muted font-mono mt-0.5">
                      {t.location}
                    </p>
                  </div>
                  <span className="tag px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border whitespace-nowrap">
                    {t.date}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="Honors & Awards">
        <div className="space-y-2">
          {honors.map((h, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex items-center justify-between p-3 rounded border border-border bg-bg-surface/30 card-hover">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {h.title}
                  </p>
                  <p className="text-xs text-text-secondary">{h.issuer}</p>
                </div>
                <span className="tag px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border">
                  {h.year}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="Professional Affiliations">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {affiliations.map((aff, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="p-3 rounded border border-border bg-bg-surface/30 text-sm text-text-secondary card-hover">
                {aff}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="Journal Reviewer">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {reviewerService.map((svc, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="p-3 rounded border border-border bg-bg-surface/30 text-sm text-text-secondary card-hover">
                {svc}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
