// Verified media coverage of Xiting Zhuang's research and coauthored reports.
// Every URL was fetched and checked before inclusion (June 2026). DTN and
// Brownfield cover the coauthored Trade Monitor work without naming authors
// individually — the section heading frames these as coverage of the research,
// not personal quotes.

export interface MediaMention {
  outlet: string;
  title: string;
  date: string;
  url: string;
}

export interface MediaStory {
  study: string;
  context: string;
  mentions: MediaMention[];
}

export const mediaStories: MediaStory[] = [
  {
    study: "China's 2025/26 retaliatory tariffs cost U.S. agriculture $14.9 billion",
    context:
      "NDSU Agricultural Trade Monitor retrospective (with Shawn Arita & Sandro Steinbach), May 2026",
    mentions: [
      {
        outlet: "Yahoo Finance",
        title:
          "New study peels back the whopping toll on American agriculture from the tariffs against China",
        date: "May 21, 2026",
        url: "https://finance.yahoo.com/economy/policy/articles/study-peels-back-whopping-toll-174808265.html",
      },
      {
        outlet: "AGDAILY",
        title: "New study: China tariffs cost U.S. ag $14.9 billion in lost exports",
        date: "May 21, 2026",
        url: "https://www.agdaily.com/crops/new-study-china-tariffs-cost-u-s-ag-14-9b-in-lost-exports/",
      },
      {
        outlet: "Farm Policy News (Univ. of Illinois)",
        title: "China's retaliatory tariffs cost US ag exporters $15 billion, study says",
        date: "May 22, 2026",
        url: "https://farmpolicynews.illinois.edu/2026/05/chinas-retaliatory-tariffs-cost-us-ag-exporters-15-billion-study-says/",
      },
      {
        outlet: "DTN Progressive Farmer",
        title: "Report shows ag exports to China hit lowest level since 2007",
        date: "May 22, 2026",
        url: "https://www.dtnpf.com/agriculture/web/ag/blogs/ag-policy-blog/blog-post/2026/05/22/report-shows-ag-exports-china-hit",
      },
      {
        outlet: "Brownfield Ag News",
        title:
          "NDSU study: U.S. ag exports hit hard — China tariffs drive $15 billion in annual losses",
        date: "May 2026",
        url: "https://www.brownfieldagnews.com/news/ndsu-study-u-s-ag-exports-hit-hard-china-tariffs-drive-15-billion-in-annual-losses/",
      },
      {
        outlet: "Farm and Dairy (syndicated column)",
        title: "The 'beans, beef and Boeing' show sputters back to reality",
        date: "June 7, 2026",
        url: "https://www.farmanddairy.com/columns/the-beans-beef-and-boeing-show-sputters-back-to-reality/917353.html",
      },
      {
        outlet: "Morning Ag Clips",
        title: "China's retaliatory tariffs cost US ag exporters $15 billion, study says",
        date: "May 22, 2026",
        url: "https://www.morningagclips.com/chinas-retaliatory-tariffs-cost-us-ag-exporters-15-billion-study-says/",
      },
    ],
  },
  {
    study: "\"Containergeddon\" cost California agriculture $2.1 billion in exports",
    context:
      "ARE Update analysis (with Colin A. Carter & Sandro Steinbach), December 2021",
    mentions: [
      {
        outlet: "Inside U.S. Trade",
        title: "Study: 'Containergeddon' led to $2.1 billion loss in California ag exports",
        date: "January 5, 2022",
        url: "https://insidetrade.com/trade/study-%E2%80%98containergeddon%E2%80%99-led-21-billion-loss-california-ag-exports",
      },
      {
        outlet: "Fruit Growers News",
        title: "'Containergeddon' at ports cost California farmers $2.1 billion in exports",
        date: "December 22, 2021",
        url: "https://fruitgrowersnews.com/news/containergeddon-at-ports-cost-california-farmers-2-1-billion-in-exports/",
      },
      {
        outlet: "Rice Farming",
        title: "'Containergeddon' at ports cost California farmers $2.1 billion in exports",
        date: "December 22, 2021",
        url: "https://www.ricefarming.com/departments/breaking-news/containergeddon-at-ports-cost-california-farmers-2-1-billion-in-exports/",
      },
    ],
  },
];
