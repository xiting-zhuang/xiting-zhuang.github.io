type Coord = [number, number];

export interface ResearchPoint {
  position: Coord;
  name: string;
  type: "current" | "education" | "conference" | "collaboration";
  detail: string;
  year?: string;
  size: number;
}

export const researchPoints: ResearchPoint[] = [
  // Current & past positions
  { position: [-96.79, 46.88], name: "NDSU", type: "current", detail: "Research Asst. Professor (2024–Present)", size: 10 },
  { position: [-96.34, 30.6], name: "Texas A&M", type: "education", detail: "Postdoc (2024)", size: 6 },
  { position: [-72.25, 41.81], name: "UConn", type: "education", detail: "Ph.D. in ARE (2018–2024)", size: 7 },
  { position: [-84.39, 33.78], name: "Georgia Tech", type: "education", detail: "M.S. in CS (current)", size: 6 },

  // Conferences
  { position: [-77.04, 38.9], name: "Washington, DC", type: "conference", detail: "IATRC 2025 · AAEA 2023", year: "2023, 2025", size: 5 },
  { position: [-90.07, 29.95], name: "New Orleans", type: "conference", detail: "AAEA 2024 · ASSA 2023", year: "2023, 2024", size: 5 },
  { position: [-117.91, 33.84], name: "Anaheim", type: "conference", detail: "AAEA 2022", year: "2022", size: 4 },
  { position: [-82.8, 27.98], name: "Clearwater", type: "conference", detail: "IATRC 2023 · 2022", year: "2022, 2023", size: 4 },
  { position: [-71.97, 41.35], name: "Mystic, CT", type: "conference", detail: "NAREA 2022 · 2020", year: "2020, 2022", size: 4 },
  { position: [-84.39, 33.75], name: "Atlanta", type: "conference", detail: "AAEA 2019", year: "2019", size: 4 },
  { position: [-97.94, 29.88], name: "San Marcos", type: "conference", detail: "AAAE 2025", year: "2025", size: 4 },

  // Collaborators
  { position: [-121.74, 38.54], name: "UC Davis", type: "collaboration", detail: "Colin A. Carter", size: 4 },
  { position: [-101.84, 33.58], name: "Texas Tech", type: "collaboration", detail: "Modhurima Amin", size: 4 },
  { position: [-96.35, 30.63], name: "TAMU (collab)", type: "collaboration", detail: "Zhihong Xu · Shuai Ma · Ashlynn Kogut", size: 4 },
  { position: [-83.37, 33.95], name: "UGA", type: "collaboration", detail: "Peng Lu", size: 4 },
  { position: [-78.68, 35.79], name: "NC State", type: "collaboration", detail: "Heidi Schweizer", size: 4 },
  { position: [-91.19, 30.41], name: "LSU", type: "collaboration", detail: "Raghav Goyal", size: 4 },
  { position: [-96.81, 46.92], name: "NDSU (collab)", type: "collaboration", detail: "Yasin Yildirim", size: 3 },
];
