export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  detail: string;
  type: "education" | "career" | "milestone";
  highlights?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2024–",
    title: "Research Assistant Professor",
    subtitle: "North Dakota State University",
    detail:
      "Leading research on U.S.–China tariff pass-through, USDA Agricultural Trade Monitor, and NIFA-funded projects.",
    type: "career",
    highlights: ["USDA NIFA Proposal (Co-PI)", "Trade Monitor Series", "Policy Briefs"],
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
    detail:
      "Dissertation on global supply chain disruptions and U.S. agricultural exports. Advised by Sandro Steinbach.",
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
