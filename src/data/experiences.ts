export interface Experience {
  role: string;
  institution: string;
  location: string;
  period: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Honor {
  title: string;
  issuer: string;
  year: string;
}

export const professional: Experience[] = [
  {
    role: "Research Assistant Professor",
    institution: "North Dakota State University",
    location: "Fargo, ND",
    period: "Nov 2024 – Present",
  },
  {
    role: "Postdoctoral Research Associate",
    institution: "Texas A&M University",
    location: "College Station, TX",
    period: "Feb 2024 – Oct 2024",
  },
];

export const education: Education[] = [
  {
    degree: "Ph.D. in Agricultural and Resource Economics",
    institution: "University of Connecticut",
    location: "Storrs, CT",
    period: "2018 – 2024",
  },
  {
    degree: "M.S. in Computer Science (current)",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    period: "2020 – Present",
  },
  {
    degree: "M.S. in Applied and Resource Economics",
    institution: "University of Connecticut",
    location: "Storrs, CT",
    period: "2017 – 2018",
  },
  {
    degree: "M.S. in Quantitative Economics",
    institution: "Fuzhou University",
    location: "Fuzhou, China",
    period: "2014 – 2017",
  },
  {
    degree: "B.A. in Accounting",
    institution: "Xiamen University, Tan Kah Kee College",
    location: "Xiamen, China",
    period: "2010 – 2014",
  },
];

export const honors: Honor[] = [
  { title: "Conference Participation Award", issuer: "Graduate School, University of Connecticut", year: "2022" },
  { title: "26th Participation Grant", issuer: "European Association of Environmental and Resource Economists", year: "2021" },
  { title: "Predoctoral Fellowship Award", issuer: "ARE, University of Connecticut", year: "2021" },
  { title: "Summer Fellowship", issuer: "ARE, University of Connecticut", year: "2020" },
  { title: "2019 Travel Award", issuer: "Agricultural & Applied Economics Association", year: "2019" },
  { title: "Summer Fellowship", issuer: "ARE Department, University of Connecticut", year: "2019" },
  { title: "TKK First Order Scholarship", issuer: "Xiamen University", year: "2011" },
];

export const affiliations: string[] = [
  "Agricultural and Applied Economics Association",
  "International Agricultural Trade Research Consortium",
  "Northeastern Agricultural and Resource Economics Association",
  "Association of Environmental and Resource Economists",
  "European Association of Environmental and Resource Economists",
];

export const reviewerService: string[] = [
  "Agribusiness",
  "Violence Against Women",
  "Humanities and Social Sciences Communications",
  "Applied Economic Perspectives and Policy",
  "Oxford Bulletin of Economics and Statistics",
  "International Food and Agribusiness Management Review",
  "Journal of the Agricultural and Applied Economics Association",
  "Agricultural & Applied Economics Association (Conference Review)",
];

export const skills = {
  computational: ["Python", "Machine Learning", "Text Mining", "API-based Data Collection", "R", "Stata", "SQL", "LaTeX", "ArcGIS", "Git"],
  languages: ["English (Professional)", "Mandarin Chinese (Native)", "Hokkien (Native)"],
};
