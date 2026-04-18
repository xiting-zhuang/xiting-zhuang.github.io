export interface Publication {
  title: string;
  year: string;
  journal: string;
  authors: string;
  url?: string;
}

export interface WorkingPaper {
  title: string;
  authors: string;
  status?: string;
}

export interface PolicyBrief {
  title: string;
  authors: string;
  year: string;
  outlet: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    title: "The call of kinship: How clan culture shapes rural residents' commitment to hometown development in China",
    year: "Accepted",
    journal: "Journal of Rural Studies",
    authors: "Zhiyong Dai, Weidong Tian, Minglin Wang, & Xiting Zhuang*",
  },
  {
    title: "U.S. public perceptions of food date labeling: Text mining and content analysis of USDA request for information (RFI) responses",
    year: "2026",
    journal: "Food Policy, 140, 103055",
    authors: "Peng Lu, Lulu Mao, Xiting Zhuang, Zhihong Xu, & Shuai Ma",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0306919226000229",
  },
  {
    title: "Machine learning-assisted abstract screening on learning analytics: A step-by-step tutorial",
    year: "2026",
    journal: "Systematic Reviews, 15, 103",
    authors: "Zhihong Xu, Shuai Ma, Xiting Zhuang, Anjorin Ezekiel Adeyemi, & Ashlynn Kogut",
    url: "https://doi.org/10.1186/s13643-026-03111-2",
  },
  {
    title: "Parental educational pairings and child physical abuse: Evidence from China",
    year: "2025",
    journal: "International Journal of Educational Development",
    authors: "Weidong Tian, Zhiyong Dai, Dongli Cao, & Xiting Zhuang*",
    url: "https://doi.org/10.1016/j.ijedudev.2025.103449",
  },
  {
    title: "Work environment and intimate partner violence against women: Evidence from China",
    year: "2025",
    journal: "Applied Economics",
    authors: "Weidong Tian, Dongli Cao, & Xiting Zhuang*",
    url: "https://doi.org/10.1080/00036846.2025.2590113",
  },
  {
    title: "Machine learning-assisted systematic review: A case study in learning analytics",
    year: "2025",
    journal: "Education Sciences, 15(11), 1488",
    authors: "Zhihong Xu, Xiting Zhuang, & Shuai Ma",
    url: "https://doi.org/10.3390/educsci15111488",
  },
  {
    title: "The 2021 container shipping crisis and its consequences for US agricultural exports",
    year: "2025",
    journal: "Journal of Transport Economics and Policy, 59(2), 110–136",
    authors: "Colin A. Carter, Sandro Steinbach, & Xiting Zhuang",
    url: "https://www.ingentaconnect.com/contentone/lse/jtep/2025/00000059/00000002/art00004",
  },
  {
    title: "Trade implications of ending China's zero-Covid policy",
    year: "2025",
    journal: "Asian Economics Letters, 6(3), 11–22",
    authors: "Sandro Steinbach & Xiting Zhuang",
    url: "https://doi.org/10.46557/001c.137226",
  },
  {
    title: "Global container shipping disruptions, pop-up ports, and U.S. agricultural exports",
    year: "2024",
    journal: "Applied Economic Perspectives and Policy, 46(2), 553–571",
    authors: "Sandro Steinbach & Xiting Zhuang",
    url: "https://doi.org/10.1002/aepp.13399",
  },
  {
    title: "U.S. agricultural trade challenges amid climate and geopolitical disruptions",
    year: "2024",
    journal: "Choices, 39(3), 1–7",
    authors: "Raghav Goyal, Sandro Steinbach, Yasin Yildirim, & Xiting Zhuang",
    url: "https://www.choicesmagazine.org/choices-magazine/submitted-articles/us-agricultural-trade-challenges-amid-climate-and-geopolitical-disruptions",
  },
  {
    title: "The impact of maritime shipping disruptions on U.S. tree nut exports and inventories",
    year: "2023",
    journal: "Agribusiness, 39(3), 904–911",
    authors: "Sandro Steinbach & Xiting Zhuang",
    url: "https://doi.org/10.1002/agr.21809",
  },
  {
    title: "U.S. agricultural exports and the 2022 Mississippi River drought",
    year: "2023",
    journal: "Agribusiness, 41(1), 289–303",
    authors: "Sandro Steinbach & Xiting Zhuang",
    url: "https://doi.org/10.1002/agr.21880",
  },
  {
    title: "Supply chain disruptions and containerized agricultural exports from California ports",
    year: "2023",
    journal: "Applied Economic Perspectives and Policy, 45(2), 1051–1071",
    authors: "Colin A. Carter, Sandro Steinbach, & Xiting Zhuang",
    url: "https://doi.org/10.1002/aepp.13311",
  },
  {
    title: "Retaliatory tariffs and container shipping disruptions cause considerable trade damages to California's almond industry",
    year: "2023",
    journal: "Choices, 38(2)",
    authors: "Sandro Steinbach & Xiting Zhuang",
    url: "https://www.choicesmagazine.org/choices-magazine/submitted-articles/retaliatory-tariffs-and-container-shipping-disruptions-cause-considerable-trade-damages-to-californias-almond-industry",
  },
  {
    title: "A portrait of firms that trade in meat products",
    year: "2022",
    journal: "Western Economics Forum, 20(2), 6–18",
    authors: "Heidi Schweizer, Sandro Steinbach, & Xiting Zhuang",
    url: "https://doi.org/10.22004/ag.econ.329728",
  },
  {
    title: "Urbanization process and carbon emission in China based on semi-parametric spatial lags model",
    year: "2016",
    journal: "Logistics Engineering and Management",
    authors: "Xiting Zhuang*",
  },
];

export const workingPapers: WorkingPaper[] = [
  {
    title: "Tariff pass-through in the 2025 U.S.–China tariff increase",
    authors: "Xiting Zhuang*, Sandro Steinbach, & Carlos Zurita",
  },
  {
    title: "Tradition or tragedy: Arranged marriages and domestic violence",
    authors: "Weidong Tian, Dongli Cao, & Xiting Zhuang*",
    status: "R&R at International Review of Law & Economics",
  },
  {
    title: "Bridging language and data: Transforming agricultural curricula for data analytics through linguistic insights",
    authors: "Zhihong Xu, Jaehyun Ahn, Shuai Ma, Anjorin Ezekiel Adeyemi, Fahmida Husain Choudhury, Xiting Zhuang, Rafael Landaverde, & Gary J. Wingenbach",
    status: "R&R at PLOS One",
  },
  {
    title: "The gift of equality: Legal recognition of same-sex unions and elder abuse",
    authors: "Weidong Tian & Xiting Zhuang*",
  },
  {
    title: "Temperature, allowance, and air pollution: Evidence from regression discontinuity design",
    authors: "Xiting Zhuang*",
  },
  {
    title: "Bread and bruises: The Great Chinese Famine and domestic violence",
    authors: "Weidong Tian & Xiting Zhuang*",
  },
  {
    title: "Global supply chain and domestic cost shocks",
    authors: "Sandro Steinbach & Xiting Zhuang*",
  },
  {
    title: "Global trade effects of tightening environmental trade policies in China",
    authors: "Sandro Steinbach & Xiting Zhuang*",
  },
];

export const policyBriefs: PolicyBrief[] = [
  {
    title: "IEEPA fertilizer tariffs: Revenue, relief, and pass-through",
    authors: "Shawn Arita, Ruchira Chakravorty, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & Xiting Zhuang",
    year: "2026",
    outlet: "NDSU Agricultural Trade Monitor 2026-01",
    url: "https://www.capts-ndsu.com/_files/ugd/3c6228_df79f1f42b5f4d98a0428a2c43085b98.pdf",
  },
  {
    title: "Supreme Court, food and input tariff relief, and market access opportunities through recent trade deals",
    authors: "Shawn Arita, Matthew Gammans, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & Xiting Zhuang",
    year: "2025",
    outlet: "NDSU Agricultural Trade Monitor 2025-12",
    url: "https://www.capts-ndsu.com/_files/ugd/3c6228_c0952c30cd4848a7b76fead0aed0853e.pdf",
  },
  {
    title: "Implications of new U.S.-China deal, soybean commitments, port fee suspension, and SE Asia deals",
    authors: "Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & Xiting Zhuang",
    year: "2025",
    outlet: "NDSU Agricultural Trade Monitor 2025-11",
    url: "https://www.capts-ndsu.com/_files/ugd/3c6228_26d85e314b884039ac6aa9f2d9b3b739.pdf",
  },
  {
    title: "China could bypass U.S. soybeans in 2025/26 and IEEPA tariffs raise input costs",
    authors: "Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & Xiting Zhuang",
    year: "2025",
    outlet: "NDSU Agricultural Trade Monitor 2025-10",
    url: "https://www.capts-ndsu.com/_files/ugd/3c6228_8ba2525b1280446489c686bb8f45bef1.pdf",
  },
  {
    title: "Soybean basis hits record low amid zero new-crop sales to China",
    authors: "Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, & Xiting Zhuang",
    year: "2025",
    outlet: "NDSU Agricultural Trade Monitor 2025-09",
    url: "https://www.capts-ndsu.com/_files/ugd/3c6228_a43f5e48de2d400f88da267c58abfc6f.pdf",
  },
  {
    title: "IEEPA tariff escalation: What it means for U.S. food and ag-input imports",
    authors: "Shawn Arita, Jiyeon Kim, Wint Lwin, Sandro Steinbach, Ming Wang, & Xiting Zhuang",
    year: "2025",
    outlet: "NDSU Agricultural Trade Monitor 2025-08",
    url: "https://www.capts-ndsu.com/_files/ugd/3c6228_44202bdfcc8f4c01af0995141c8215fe.pdf",
  },
  {
    title: "China's import declines reflect broader demand weakness",
    authors: "Shawn Arita, Sandro Steinbach, Ming Wang, & Xiting Zhuang",
    year: "2025",
    outlet: "NDSU Agricultural Trade Monitor 2025-07",
    url: "https://www.capts-ndsu.com/_files/ugd/3c6228_d4656ab5a23e4cb2a2d9572e4817be85.pdf",
  },
  {
    title: "Panama Canal traffic delays threaten Southern Ag global supply chains",
    authors: "Sunghun Lim, Sandro Steinbach, & Xiting Zhuang",
    year: "2024",
    outlet: "Southern Ag Today",
    url: "https://southernagtoday.org/2024/01/18/panama-canal-traffic-delays-threaten-southern-ag-global-supply-chains/",
  },
  {
    title: "Ripple effects of shipping lane disruptions on U.S. agriculture",
    authors: "Sandro Steinbach, Yasin Yildirim, & Xiting Zhuang",
    year: "2024",
    outlet: "Farmdoc Daily",
    url: "https://farmdocdaily.illinois.edu/2024/01/ripple-effects-of-shipping-lane-disruptions-on-u-s-agriculture.html",
  },
  {
    title: "Containergeddon and California agriculture",
    authors: "Colin A. Carter, Sandro Steinbach, & Xiting Zhuang",
    year: "2021",
    outlet: "ARE Update, 25(2), 1–4",
    url: "https://giannini.ucop.edu/publications/are-update/issues/2021/25/2/containergeddon-and-california-agriculture/",
  },
];
