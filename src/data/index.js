// Content for the Projects, Experience and Contact sections.
// Edit this file to update the site; the components just render it.

export const projects = [
  {
    title: "Tooldy",
    status: "In progress",
    summary:
      "Free online tools for PDFs, images and everyday calculations, running entirely in the browser so files never leave your device. Includes merge, split, rotate, compress, protect and convert tools for PDFs, plus a percentage calculator and currency converter.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "pdf.js",
    ],
    links: [{ label: "Live", href: "https://www.tooldy.com" }],
  },
  {
    title: "Multiplayer Chess",
    status: "",
    summary:
      "A chess game with a custom rule engine written in TypeScript: legal move generation, check, checkmate and stalemate detection, castling, en passant and move history. Real-time multiplayer runs over WebSockets with a Spring Boot backend.",
    stack: [
      "Next.js",
      "TypeScript",
      "Socket.IO",
      "Java",
      "Spring Boot",
      "WebSocket",
    ],
    links: [
      { label: "Live", href: "https://ch3ss.netlify.app" },
      { label: "Frontend", href: "https://github.com/vlakhara/chess-frontend" },
      { label: "Backend", href: "https://github.com/vlakhara/chess-backend" },
    ],
  },
];

// Newest first. Add `highlights: ["...", "..."]` to a role to show bullet points.
export const experience = [
  {
    company: "Thoughtworks",
    roles: [{ title: "Software Engineer", period: "Sep 2026 - Present" }],
    location: "Bengaluru, India",
    highlights: [],
  },
  {
    company: "Lanatus Systems LLP",
    roles: [
      { title: "Software Development Engineer", period: "Jun 2023 - 2026" },
      { title: "Intern", period: "Dec 2022 - Jun 2023" },
    ],
    location: "",
    highlights: [],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vipullakhara/" },
  { label: "GitHub", href: "https://github.com/vlakhara" },
  { label: "Facebook", href: "https://www.facebook.com/vipullakhara.01/" },
];

// Set this to show a "Say hello" email link in the Contact section.
export const contactEmail = "";
