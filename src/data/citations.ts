// Google Scholar data for Xiting Zhuang
// Source: https://scholar.google.com/citations?user=7DWbsPUAAAAJ
//
// Stats and citation counts auto-sync from scholar-live.ts, which is
// regenerated daily by .github/workflows/update-scholar.yml. The curated
// list below owns the journal abbreviations and which papers appear; its
// citation numbers are only fallbacks for titles the sync cannot match.

import { scholarLive } from "./scholar-live";

export const scholarStats = {
  hIndex: scholarLive.stats.hIndex,
  totalCitations: scholarLive.stats.totalCitations,
  i10Index: scholarLive.stats.i10Index,
};

export interface PaperCitation {
  title: string;
  citations: number;
  year: string;
  journal: string;
}

const curatedPapers: PaperCitation[] = [
  { title: "Supply chain disruptions and containerized agricultural exports from California ports", citations: 32, year: "2023", journal: "AEPP" },
  { title: "U.S. agricultural exports and the 2022 Mississippi River drought", citations: 16, year: "2025", journal: "Agribusiness" },
  { title: "Containergeddon and California Agriculture", citations: 11, year: "2021", journal: "ARE Update" },
  { title: "Global shipping container disruptions and U.S. agricultural exports", citations: 8, year: "2022", journal: "Working Paper" },
  { title: "U.S. agricultural trade challenges amid climate and geopolitical disruptions", citations: 6, year: "2024", journal: "Choices" },
  { title: "Soybean basis hits record low amid zero new-crop sales to China", citations: 3, year: "2025", journal: "NDSU Trade Monitor" },
  { title: "China could bypass U.S. soybeans in 2025/26 and IEEPA tariffs raise input costs", citations: 3, year: "2025", journal: "NDSU Trade Monitor" },
  { title: "Global container shipping disruptions, pop-up ports, and U.S. agricultural exports", citations: 3, year: "2024", journal: "AEPP" },
  { title: "The impact of maritime shipping disruptions on U.S. tree nut exports and inventories", citations: 3, year: "2023", journal: "Agribusiness" },
  { title: "IEEPA tariff escalation: What it means for U.S. food and ag-input imports", citations: 2, year: "2025", journal: "NDSU Trade Monitor" },
  { title: "Ripple effects of shipping lane disruptions on U.S. agriculture", citations: 2, year: "2024", journal: "Farmdoc Daily" },
  { title: "IEEPA fertilizer tariffs: Revenue, relief, and pass-through", citations: 2, year: "2026", journal: "NDSU Trade Monitor" },
  { title: "Global container trade disruptions and U.S. agricultural exports", citations: 2, year: "2022", journal: "Working Paper" },
  { title: "Machine learning-assisted systematic review: A case study in learning analytics", citations: 1, year: "2025", journal: "Education Sciences" },
  { title: "Retaliatory tariffs and container shipping disruptions — California's almond industry", citations: 1, year: "2023", journal: "Choices" },
  { title: "A portrait of firms that trade in meat products", citations: 1, year: "2022", journal: "WEF" },
  { title: "Public perspectives on food date labeling", citations: 0, year: "2026", journal: "Food Policy" },
  { title: "Machine learning-assisted abstract screening on learning analytics", citations: 0, year: "2026", journal: "Systematic Reviews" },
  { title: "Work environment and intimate partner violence against women: Evidence from China", citations: 0, year: "2025", journal: "Applied Economics" },
  { title: "Tradition or tragedy: Arranged marriages and domestic violence", citations: 0, year: "2026", journal: "IRLE" },
  { title: "How IEEPA tariffs shaped U.S. biofuel feedstock imports in 2025", citations: 0, year: "2026", journal: "NDSU Trade Monitor" },
  { title: "Parental educational pairings and child physical abuse: Evidence from China", citations: 0, year: "2025", journal: "Intl J Edu Dev" },
  { title: "The 2021 container shipping crisis and its consequences for US agricultural exports", citations: 0, year: "2025", journal: "JTEP" },
  { title: "Trade implications of ending China's zero-Covid policy", citations: 0, year: "2025", journal: "Asian Econ Letters" },
  { title: "The call of kinship: How clan culture shapes rural residents' commitment to hometown development in China", citations: 0, year: "Accepted", journal: "J. Rural Studies" },
];

// Strip everything but letters/digits so "U.S." and "US" normalize alike.
const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");

const livePapers = scholarLive.papers.map((p) => ({
  ...p,
  key: normalize(p.title),
}));

export const paperCitations: PaperCitation[] = curatedPapers.map((paper) => {
  const key = normalize(paper.title);
  const match = livePapers.find(
    (p) => p.key.startsWith(key.slice(0, 40)) || key.startsWith(p.key.slice(0, 40))
  );
  return match ? { ...paper, citations: match.citations } : paper;
});
