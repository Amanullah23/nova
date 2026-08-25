// MOCK DATA — replace with Supabase queries in the next phase.
// Categories here should stay in sync with the public Projects section.
export const CATEGORIES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Education",
  "Infrastructure",
];

export const mockProjects = [
  {
    id: 1,
    title: "Residential Complex",
    location: "Kabul, Afghanistan",
    image: "/p4.jpeg",
    category: "Residential",
    year: "2022",
    description:
      "A modern residential complex with 200+ apartments, featuring sustainable design and smart infrastructure built for lasting community living.",
    status: "published",
    featured: true,
  },
  {
    id: 2,
    title: "Commercial Office Tower",
    location: "Herat, Afghanistan",
    image: "/p1.jpg",
    category: "Commercial",
    year: "2021",
    description:
      "High-rise office building with advanced facilities, designed for corporate and tech companies seeking a premium workspace.",
    status: "published",
    featured: false,
  },
  {
    id: 3,
    title: "Industrial Factory",
    location: "Mazar-i-Sharif, Afghanistan",
    image: "/p3.jpg",
    category: "Industrial",
    year: "2020",
    description:
      "State-of-the-art industrial factory with modern machinery and eco-friendly systems engineered for maximum output.",
    status: "published",
    featured: false,
  },
  {
    id: 4,
    title: "Educational Campus",
    location: "Kandahar, Afghanistan",
    image: "/p5.jpeg",
    category: "Education",
    year: "2023",
    description:
      "A fully equipped educational campus including classrooms, laboratories, and sports facilities serving thousands of students.",
    status: "published",
    featured: false,
  },
];
