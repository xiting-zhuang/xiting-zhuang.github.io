"use client";

import ScrollReveal from "@/components/ScrollReveal";

const contacts = [
  {
    label: "Email",
    value: "xiting.zhuang@ndsu.edu",
    href: "mailto:xiting.zhuang@ndsu.edu",
    icon: "✉",
  },
  {
    label: "GitHub",
    value: "github.com/xiting-zhuang",
    href: "https://github.com/xiting-zhuang",
    icon: "⌘",
  },
  {
    label: "Google Scholar",
    value: "Scholar Profile",
    href: "https://scholar.google.com/citations?user=7DWbsPUAAAAJ&hl=en",
    icon: "🎓",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/xiting-zhuang",
    href: "https://www.linkedin.com/in/xiting-zhuang",
    icon: "🔗",
  },
  {
    label: "Location",
    value: "Fargo, North Dakota",
    icon: "📍",
  },
  {
    label: "Department",
    value: "Agribusiness and Applied Economics, NDSU",
    icon: "🏛",
  },
];

export default function ContactPage() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-text-secondary font-mono text-sm mb-12">
          Get in touch for research collaboration
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {contacts.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="block p-5 rounded border border-border bg-bg-surface/30 card-hover group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-accent-green transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <div className="p-5 rounded border border-border bg-bg-surface/30">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-text-secondary">{item.value}</p>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
