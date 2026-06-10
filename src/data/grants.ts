export interface Grant {
  agency: string;
  title: string;
  role: string;
  // Omit for proposals under review — publish dollar figures only once awarded.
  amount?: string;
  period: string;
  projectDirector?: string;
  status: string;
}

export const grants: Grant[] = [
  {
    agency: "USDA National Institute of Food and Agriculture (NIFA)",
    title: "Partnership: Next Generation Trade Intelligence for U.S. Beef, Pork, and Poultry Producers",
    role: "Co-Principal Investigator (Co-PI)",
    period: "09/2026 – 08/2029",
    projectDirector: "Modhurima Amin, Texas Tech University",
    status: "Under Review",
  },
];
