export interface TeachingEntry {
  role: string;
  course: string;
  institution: string;
  location: string;
  period: string;
}

export const teaching: TeachingEntry[] = [
  {
    role: "Guest Lecturer",
    course: "Econ 472/672 – International Trade",
    institution: "North Dakota State University",
    location: "Fargo, ND",
    period: "Spring 2025",
  },
  {
    role: "Teaching Assistant",
    course: "ARE 3250 – Business Management",
    institution: "University of Connecticut",
    location: "Storrs, CT",
    period: "Spring 2020",
  },
  {
    role: "Teaching Assistant",
    course: "ARE 2210/SARE 460 – Essentials of Accounting and Business",
    institution: "University of Connecticut",
    location: "Storrs, CT",
    period: "Fall 2019",
  },
];
