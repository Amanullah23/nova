// MOCK DATA — replace with Supabase queries in the next phase.
// Departments should stay in sync with the public Careers page's badge labels.
export const DEPARTMENTS = ["Engineering", "Operations", "Finance"];
export const EMPLOYMENT_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Full-time · Entry-level",
];

export const mockJobs = [
  {
    id: 1,
    slug: "site-engineer",
    title: "Site Engineer",
    department: "Engineering",
    location: "Kabul",
    type: "Full-time",
    description:
      "Oversee daily site activities, coordinate with subcontractors, and ensure structural work meets design specifications and safety standards.",
    status: "open",
    postedDate: "2026-07-20",
  },
  {
    id: 2,
    slug: "project-manager",
    title: "Project Manager",
    department: "Operations",
    location: "Kabul",
    type: "Full-time",
    description:
      "Own project timelines and budgets end-to-end, serving as the main point of contact between clients, engineering, and site teams.",
    status: "open",
    postedDate: "2026-07-15",
  },
  {
    id: 3,
    slug: "quantity-surveyor",
    title: "Quantity Surveyor",
    department: "Finance",
    location: "Herat",
    type: "Full-time",
    description:
      "Prepare cost estimates, manage procurement budgets, and track project expenditure against approved plans.",
    status: "open",
    postedDate: "2026-07-10",
  },
  {
    id: 4,
    slug: "safety-officer",
    title: "Safety Officer",
    department: "Operations",
    location: "Kabul",
    type: "Full-time",
    description:
      "Enforce site safety protocols, conduct regular inspections, and lead safety training across active construction sites.",
    status: "open",
    postedDate: "2026-08-01",
  },
  {
    id: 5,
    slug: "junior-civil-engineer",
    title: "Junior Civil Engineer",
    department: "Engineering",
    location: "Kabul",
    type: "Full-time · Entry-level",
    description:
      "Support senior engineers on structural design and planning tasks — a strong fit for recent graduates looking to build hands-on experience.",
    status: "open",
    postedDate: "2026-08-05",
  },
];
