"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { grants } from "@/data/grants";

export default function GrantsPage() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="text-3xl font-bold mb-2">Grants & Funding</h1>
        <p className="text-text-secondary font-mono text-sm mb-12">
          Research funding and sponsored projects
        </p>
      </ScrollReveal>

      <div className="space-y-4">
        {grants.map((grant, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-6 rounded border border-border bg-bg-surface/30 card-hover">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-mono text-sm text-accent-green">
                  {grant.agency}
                </h3>
                <span className="tag px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20 whitespace-nowrap">
                  {grant.status}
                </span>
              </div>
              <p className="font-medium text-text-primary mb-3">
                {grant.title}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-text-muted">Role</span>
                  <p className="text-text-secondary font-medium">{grant.role}</p>
                </div>
                <div>
                  <span className="text-text-muted">Amount</span>
                  <p className="text-text-secondary font-medium font-mono">
                    {grant.amount}
                  </p>
                </div>
                <div>
                  <span className="text-text-muted">Period</span>
                  <p className="text-text-secondary font-medium">
                    {grant.period}
                  </p>
                </div>
                {grant.projectDirector && (
                  <div>
                    <span className="text-text-muted">PI</span>
                    <p className="text-text-secondary font-medium">
                      {grant.projectDirector}
                    </p>
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
