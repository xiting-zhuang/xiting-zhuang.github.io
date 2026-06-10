export interface Coauthor {
  name: string;
  inst: string;
  papers: number;
  role: string;
}

export const coauthors: Coauthor[] = [
  { name: "Sandro Steinbach", inst: "NDSU", papers: 10, role: "Supply Chain · Trade" },
  { name: "Colin A. Carter", inst: "UC Davis", papers: 3, role: "Container Shipping · Ag Exports" },
  { name: "Weidong Tian", inst: "SWUFE", papers: 5, role: "Domestic Violence · Social Issues" },
  { name: "Zhiyong Dai", inst: "SWUFE", papers: 2, role: "Social Issues · Rural Development" },
  { name: "Zhihong Xu", inst: "Texas A&M", papers: 3, role: "ML · Systematic Reviews" },
  { name: "Shawn Arita", inst: "NDSU/ARPC", papers: 7, role: "Trade Monitor · Tariffs" },
  { name: "Peng Lu", inst: "UGA", papers: 1, role: "Food Policy · Text Mining" },
  { name: "Heidi Schweizer", inst: "NC State", papers: 1, role: "Meat Trade · Firm Analysis" },
  { name: "Raghav Goyal", inst: "LSU", papers: 2, role: "Climate · Trade Disruptions" },
];
