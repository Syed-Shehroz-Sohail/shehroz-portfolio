const basePath = process.env.NEXT_PUBLIC_PORTFOLIO_BASE_PATH ?? "";

export const site = {
  name: "Syed Shehroz Sohail",
  shortName: "Shehroz",
  role: "Lead Software Engineer",
  headline: "Lead Software Engineer | Full-Stack Development | Database Architecture | AI-Focused Digitalisation",
  location: "Lahore, Pakistan",
  phone: "+92 305 5179501",
  phoneHref: "+923055179501",
  email: "syed.shehroz152@amalacademy.org",
  contactEndpoint: "https://formsubmit.co/syed.shehroz152@amalacademy.org",
  github: "https://github.com/Syed-Shehroz-Sohail",
  linkedin: "https://www.linkedin.com/in/syed-shehroz-sohail-shah/",
  resume: `${basePath}/resume/syed-shehroz-sohail-cv.pdf`,
  description: "Syed Shehroz Sohail, Lead Software Engineer in Lahore. Six years of full-stack, mobile, and enterprise engineering, solution architecture, and international project delivery.",
  url: "https://shehrozit.com/",
  basePath,
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
