export interface ShowcaseLink {
  label: string;
  href: string;
}

export interface ShowcaseItem {
  title: string;
  theme: string;
  year: string;
  outlet: string;
  question: string;
  approach: string;
  takeaway: string;
  methods: string[];
  links?: ShowcaseLink[];
}

export const showcaseItems: ShowcaseItem[] = [
  {
    title: "The 2021 container shipping crisis and its consequences for U.S. agricultural exports",
    theme: "Trade Disruptions",
    year: "2025",
    outlet: "Journal of Transport Economics and Policy",
    question:
      "How did the container shipping crisis reshape U.S. agricultural export performance?",
    approach:
      "Combined trade-flow evidence with shipping-disruption context to trace how logistics shocks translated into export losses.",
    takeaway:
      "Frames a logistics crisis as a measurable trade shock with direct implications for agricultural exporters and policy.",
    methods: ["Trade Data", "Shock Analysis", "Policy Context"],
    links: [
      {
        label: "Paper",
        href: "https://www.ingentaconnect.com/contentone/lse/jtep/2025/00000059/00000002/art00004",
      },
    ],
  },
  {
    title: "Global container shipping disruptions, pop-up ports, and U.S. agricultural exports",
    theme: "Supply Chains",
    year: "2024",
    outlet: "Applied Economic Perspectives and Policy",
    question:
      "Can port adaptation strategies offset the damage from global shipping disruptions?",
    approach:
      "Connected disruption patterns, port responses, and export outcomes to study how trade systems adapt under stress.",
    takeaway:
      "Presents your work as systems-oriented research with clear relevance to logistics resilience and agricultural trade.",
    methods: ["Trade Data", "Port Analysis", "Supply Chain Resilience"],
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1002/aepp.13399",
      },
    ],
  },
  {
    title: "Work environment and intimate partner violence against women: Evidence from China",
    theme: "Social Outcomes",
    year: "2025",
    outlet: "Applied Economics",
    question:
      "How do workplace conditions affect exposure to intimate partner violence?",
    approach:
      "Uses applied microeconomic reasoning to connect labor conditions and household outcomes in a socially consequential setting.",
    takeaway:
      "Balances the trade papers with a strong social-outcomes example and keeps the emphasis on your main research agenda.",
    methods: ["Applied Micro", "Social Data", "Causal Inference"],
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1080/00036846.2025.2590113",
      },
    ],
  },
  {
    title: "U.S. public perceptions of food date labeling: Text mining and content analysis of USDA RFI responses",
    theme: "Food Policy",
    year: "2026",
    outlet: "Food Policy",
    question:
      "What do large-scale public comments reveal about how consumers interpret food date labels?",
    approach:
      "Used text mining and structured content analysis to convert unstructured USDA responses into interpretable policy themes.",
    takeaway:
      "Shows how large-scale text data can support policy-oriented research without displacing the central substantive question.",
    methods: ["Text Mining", "Content Analysis", "Policy Data"],
    links: [
      {
        label: "Paper",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0306919226000229",
      },
    ],
  },
  {
    title: "Machine learning-assisted abstract screening on learning analytics: A step-by-step tutorial",
    theme: "Evidence Synthesis",
    year: "2025-2026",
    outlet: "Systematic Reviews / Education Sciences",
    question:
      "How can abstract screening in systematic reviews be made faster and more reproducible?",
    approach:
      "Turned screening into a workflow paper by documenting ML-assisted prioritization, review design, and practical decision rules.",
    takeaway:
      "Keeps big-data and ML work visible as part of your research background, without making it the dominant identity.",
    methods: ["ML-assisted Screening", "Systematic Review", "Workflow Design"],
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1186/s13643-026-03111-2",
      },
      {
        label: "Case Study",
        href: "https://doi.org/10.3390/educsci15111488",
      },
    ],
  },
];

export const showcaseThemes = [
  "Trade disruptions",
  "Supply chain resilience",
  "Social outcomes",
  "Food and policy analysis",
];

export const showcaseMethods = [
  "Causal inference",
  "Big data analytics",
  "Trade-flow analysis",
  "Policy interpretation",
  "Text mining",
  "Systematic review design",
  "Applied microeconomics",
];
