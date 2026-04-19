export interface ConferenceTalk {
  venue: string;
  location: string;
  title: string;
  date: string;
  type: "invited" | "coauthored";
}

export const invitedTalks: ConferenceTalk[] = [
  {
    venue: "International Agricultural Trade Research Consortium (IATRC)",
    location: "Washington, DC",
    title: "Tariff Pass-Through in the 2025 U.S.–China Tariff Escalation",
    date: "Dec 2025",
    type: "invited",
  },
  {
    venue: "Agricultural & Applied Economics Association (AAEA) Annual Meeting",
    location: "New Orleans, LA",
    title: "Temperature, Allowance, and Air Pollution: Evidence from Regression Discontinuity Design",
    date: "Jul 2024",
    type: "invited",
  },
  {
    venue: "International Agricultural Trade Research Consortium (IATRC)",
    location: "Clearwater, FL",
    title: "Global Supply Chain and Trade Cost Shocks",
    date: "Dec 2023",
    type: "invited",
  },
  {
    venue: "Agricultural & Applied Economics Association (AAEA) Annual Meeting",
    location: "Washington, DC",
    title: "U.S. Agricultural Exports and the 2022 Mississippi River Drought",
    date: "Jul 2023",
    type: "invited",
  },
  {
    venue: "AAEA at ASSA",
    location: "New Orleans, LA",
    title: "Global Container Trade Disruptions, Pop-Up Ports, and U.S. Agricultural Exports",
    date: "Jan 2023",
    type: "invited",
  },
  {
    venue: "International Agricultural Trade Research Consortium (IATRC)",
    location: "Clearwater, FL",
    title: "Covid-19 Pandemic on International Trade: Evidence from China",
    date: "Dec 2022",
    type: "invited",
  },
  {
    venue: "Agricultural & Applied Economics Association (AAEA) Annual Meeting",
    location: "Anaheim, CA",
    title: "Global Shipping Container Disruptions and U.S. Agricultural Exports",
    date: "Aug 2022",
    type: "invited",
  },
  {
    venue: "Northeastern Agricultural & Resource Economics Association (NAREA) Meeting",
    location: "Mystic, CT",
    title: "Supply Chain Crisis and Empty Shipping Containers",
    date: "Jun 2022",
    type: "invited",
  },
  {
    venue: "CAHNR Graduate Student Research Forum, University of Connecticut",
    location: "Storrs, CT",
    title: "Global Trade Effects of Tightening Environmental Standards in China",
    date: "May 2022",
    type: "invited",
  },
  {
    venue: "Steinbach Research Group Seminar, University of Connecticut",
    location: "Storrs, CT",
    title: "Global Shipping Container Disruptions and U.S. Agricultural Exports",
    date: "Mar 2022",
    type: "invited",
  },
  {
    venue: "International Agricultural Trade Research Consortium (IATRC)",
    location: "Virtual",
    title: "The Heterogeneous Effect of Vaccination on Trade in the United States",
    date: "Jan 2021",
    type: "invited",
  },
  {
    venue: "Association of Environmental & Resource Economists (AERE) Summer Conference",
    location: "Virtual",
    title: "The Waste Backhaul Between the United States and China",
    date: "Jun 2021",
    type: "invited",
  },
  {
    venue: "European Association of Environmental & Resource Economists (EAERE)",
    location: "Virtual",
    title: "Environmental Standard, Waste Backhaul and Maritime Trade",
    date: "Jun 2021",
    type: "invited",
  },
  {
    venue: "Northeastern Agricultural & Resource Economics Association (NAREA) Annual Meeting",
    location: "Mystic, CT",
    title: "Global Waste Crisis? The Role of Chinese Environmental Trade Policies",
    date: "Jul 2020",
    type: "invited",
  },
  {
    venue: "Association of Environmental & Resource Economists (AERE) Summer Conference",
    location: "Virtual",
    title: "International Trade Effects of Stricter Environmental Trade Policies in China",
    date: "Jun 2020",
    type: "invited",
  },
  {
    venue: "Agricultural & Applied Economics Association (AAEA) Annual Meeting",
    location: "Atlanta, GA",
    title: "Global Trade Effects of Tightening Environmental Standards in China",
    date: "Jul 2019",
    type: "invited",
  },
  {
    venue: "Agricultural & Resource Economics Seminar, University of Connecticut",
    location: "Storrs, CT",
    title: "Global Trade Effects of Tightening Environmental Standards in China",
    date: "Oct 2019",
    type: "invited",
  },
];

export const coauthoredPresentations: ConferenceTalk[] = [
  {
    venue: "Western Region American Association for Agricultural Education",
    location: "San Marcos, TX",
    title: "Bridging Language and Data: Transforming Agricultural Curricula for Big Data Analytics Through Linguistic Insights",
    date: "Sep 2025",
    type: "coauthored",
  },
  {
    venue: "Association for International Agricultural and Extension Education (AIAEE)",
    location: "Inverness, Scotland",
    title: "Evaluating ChatGPT for Abstract Screening in Systematic Reviews: A Case Study on the Beef Production Risk",
    date: "Apr 2025",
    type: "coauthored",
  },
];
