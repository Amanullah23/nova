// MOCK DATA — replace with Supabase queries in the next phase.
// Categories here must stay in sync with the public /news page's category list.
export const CATEGORIES = [
  "Company Updates",
  "Projects",
  "Engineering Insights",
];

export const mockArticles = [
  {
    id: 1,
    slug: "educational-campus-kandahar",
    title: "NOVA INC. Breaks Ground on New Educational Campus in Kandahar",
    excerpt:
      "Our latest project brings a fully-equipped campus with modern classrooms, laboratories, and sports facilities to serve thousands of students in the region.",
    content:
      "Full article body goes here. Replace with real content when publishing.",
    category: "Projects",
    image: "/p5.jpeg",
    date: "2026-08-12",
    status: "published",
    featured: true,
  },
  {
    id: 2,
    slug: "structural-steel-seismic-zones",
    title: "How We Approach Structural Steel Fabrication in Seismic Zones",
    excerpt:
      "A look at the engineering principles our team applies when designing steel structures for regions with elevated seismic activity.",
    content: "Full article body goes here.",
    category: "Engineering Insights",
    image: "/p1.jpg",
    date: "2026-07-28",
    status: "published",
    featured: false,
  },
  {
    id: 3,
    slug: "trusted-partner-infrastructure",
    title:
      "NOVA INC. Named a Trusted Partner for Regional Infrastructure Projects",
    excerpt:
      "Reflecting on a decade of civil and infrastructure work across Afghanistan, and what it means for the projects ahead.",
    content: "Full article body goes here.",
    category: "Company Updates",
    image: "/1.jpeg",
    date: "2026-07-15",
    status: "published",
    featured: false,
  },
  {
    id: 4,
    slug: "industrial-factory-mazar",
    title: "Behind the Build: Our Industrial Factory Project in Mazar-i-Sharif",
    excerpt:
      "From site survey to final handover — a walkthrough of how our team delivered a state-of-the-art industrial facility on schedule.",
    content: "Full article body goes here.",
    category: "Projects",
    image: "/p3.jpg",
    date: "2026-06-30",
    status: "published",
    featured: false,
  },
  {
    id: 5,
    slug: "sustainable-materials",
    title: "Sustainable Materials: What We're Changing About How We Build",
    excerpt:
      "Our engineering department on the shift toward more sustainable material sourcing and what it means for long-term durability.",
    content: "Full article body goes here.",
    category: "Engineering Insights",
    image: "/2.png",
    date: "2026-06-09",
    status: "draft",
    featured: false,
  },
  {
    id: 6,
    slug: "leadership-next-decade",
    title: "Meet the Team Leading NOVA's Next Decade of Growth",
    excerpt:
      "An introduction to the leadership team steering our engineering, operations, and finance departments forward.",
    content: "Full article body goes here.",
    category: "Company Updates",
    image: "/b.png",
    date: "2026-05-22",
    status: "draft",
    featured: false,
  },
];
