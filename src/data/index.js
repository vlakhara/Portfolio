// All the content for the site lives here. Edit this file; the components
// just render it.

export const profile = {
  name: "Vipul Lakhara",
  role: "System Support Engineer",
  company: "Thoughtworks",
  city: "Bengaluru",
};

export const projects = [
  {
    id: "tooldy",
    title: "Tooldy",
    status: "In progress",
    summary:
      "Free PDF and image tools that run in your browser, so your files never leave your device. Merge, split, rotate, compress, protect and convert. There is also a percentage calculator and a currency converter.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "pdf.js"],
    links: [{ label: "Open tooldy.com", href: "https://www.tooldy.com" }],
  },
  {
    id: "chess",
    title: "Ch3ss",
    status: "",
    summary:
      "A multiplayer chess game. The rules engine (legal moves, check, checkmate, castling, en passant) is written from scratch in TypeScript, and a Spring Boot WebSocket server connects the two players.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "Java", "Spring Boot", "WebSocket"],
    links: [
      { label: "Play it", href: "https://ch3ss.netlify.app" },
      { label: "Frontend", href: "https://github.com/vlakhara/chess-frontend" },
      { label: "Backend", href: "https://github.com/vlakhara/chess-backend" },
    ],
  },
];

// Newest first. Add `highlights: ["...", "..."]` to a stop to list bullet points.
export const experience = [
  {
    company: "Thoughtworks",
    role: "System Support Engineer",
    period: "Sep 2026 – Now",
    place: "Bengaluru",
    current: true,
    highlights: [],
  },
  {
    company: "Lanatus Systems LLP",
    role: "Software Development Engineer",
    period: "Jun 2023 – 2026",
    place: "",
    current: false,
    highlights: [],
  },
  {
    company: "Lanatus Systems LLP",
    role: "Intern",
    period: "Dec 2022 – Jun 2023",
    place: "",
    current: false,
    highlights: [],
  },
];

// Entries with an empty `href` are hidden everywhere.
export const socialLinks = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/vlakhara",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vipullakhara/",
  },
  // TODO: add your profile URL, e.g. "https://x.com/<your-handle>"
  { key: "x", label: "X", href: "https://x.com/vipullakhara_" },
];

// Set this to show an email link in the Contact section.
export const contactEmail = "vipullakhara18@gmail.com";

// Optional: a few favourites shown as ticket stubs on the movies tile.
// Example: ["Interstellar", "Whiplash"]
export const favouriteMovies = [];
