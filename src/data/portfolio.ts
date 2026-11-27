export type ProjectImage = {
  src: string;
  smallSrc?: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectLink = {
  href: string;
  label: string;
  status: "verified" | "unreachable";
  checkedOn: string;
  note?: string;
};

export type ProjectDetailSection = {
  title: string;
  items: string[];
  link?: ProjectLink;
};

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: "Web" | "Mobile";
  kind: string;
  context: string;
  period?: string;
  description: string;
  role?: string;
  responsibilities: string[];
  solution?: string[];
  detailSections?: ProjectDetailSection[];
  outcome?: string;
  stack: string[];
  link: ProjectLink;
  flagship?: boolean;
  media: {
    kind: "website" | "mobile";
    images: ProjectImage[];
    caption: string;
    source: string;
  };
};

const checkedOn = "2026-11-16";

// Sources and unresolved facts are recorded in CONTENT_REVIEW.md.
// Do not infer a project's framework from the general skills list in the CV.
export const projects: Project[] = [
  {
    id: "enova-estates",
    title: "Enova Estates",
    shortTitle: "Enova Estates",
    category: "Web",
    kind: "Multilingual Real Estate Platform & Admin Portal",
    context: "Spain",
    description: "Developed a multilingual real estate platform and its administration portal for Enova Estates, delivering responsive property browsing experiences, interactive mapping, seven-language support, and a dedicated administrative interface.",
    responsibilities: [
      "Developed the public-facing website using React.js and Tailwind CSS.",
      "Integrated Leaflet.js for interactive property mapping.",
      "Implemented multilingual support across seven languages.",
      "Integrated Google Analytics for website traffic analysis.",
      "Developed the dedicated administration portal for managing website operations.",
    ],
    detailSections: [
      {
        title: "Public website",
        items: [
          "Property listings and discovery.",
          "Search and filtering interfaces.",
          "Interactive property maps.",
          "Available in English, Spanish, German, French, Swedish, Norwegian, and Danish.",
          "Responsive interface for desktop and mobile browsing.",
        ],
      },
      {
        title: "Administration portal",
        items: ["Dedicated administration interface.", "Administrative sign-in with email and password."],
        link: { href: "https://enovaestates.com/admin/login", label: "Open admin portal sign-in", status: "verified", checkedOn: "2026-11-23" },
      },
    ],
    stack: ["React.js", "Leaflet.js", "Tailwind CSS", "Google Analytics"],
    link: { href: "https://enovaestates.com/", label: "Visit Enova Estates public website", status: "verified", checkedOn: "2026-11-23" },
    media: {
      kind: "website",
      images: [{ src: "/projects/enova-estates-1280.webp", smallSrc: "/projects/enova-estates-640.webp", alt: "Enova Estates’ public property search page with location, property type, and price filters", width: 1280, height: 720 }],
      caption: "Public Enova Estates property search · English",
      source: "https://enovaestates.com/properties",
    },
  },
  {
    id: "metabuddy",
    title: "MetaBuddy",
    shortTitle: "MetaBuddy",
    category: "Mobile",
    kind: "Fitness Community Mobile App",
    context: "Fitness & wellness · Mobile",
    description: "A community-driven fitness platform connecting wellness enthusiasts and promoting healthy lifestyles.",
    role: "Mobile feature development · Project coordination",
    responsibilities: [
      "Developed mobile application features for the fitness community platform.",
      "Coordinated delivery planning, development timelines, task allocation, team collaboration, progress tracking, and stakeholder communication.",
    ],
    solution: ["Combined hands-on feature development with delivery planning and day-to-day coordination across the team and stakeholders."],
    stack: ["Flutter"],
    link: { href: "https://play.google.com/store/apps/details?id=app.navy.dxb&hl=en_AU", label: "View on Google Play", status: "verified", checkedOn },
    media: {
      kind: "mobile",
      images: [
        { src: "/projects/metabuddy-1.webp", alt: "Official MetaBuddy Google Play screenshot showing its activity dashboard", width: 273, height: 592 },
        { src: "/projects/metabuddy-2.webp", alt: "Second official MetaBuddy Google Play screenshot", width: 273, height: 592 },
        { src: "/projects/metabuddy-3.webp", alt: "MetaBuddy community screen showing fitness activities", width: 273, height: 592 },
      ],
      caption: "Current public Google Play screenshots",
      source: "https://play.google.com/store/apps/details?id=app.navy.dxb&hl=en_AU",
    },
  },
  {
    id: "nmisw",
    title: "National Monitoring Information System for Waste (NMISW)",
    shortTitle: "NMISW",
    category: "Web",
    kind: "Government information system",
    context: "Jordan · Delivered through Technology Wisdom in collaboration with GIZ Jordan, Ministry of Environment (MoEnv), and Ministry of Local Administration (MoLA)",
    period: "Jul 2025–Present",
    description: "Centralising municipal waste data, approval workflows, and reporting to support government planning in Jordan.",
    role: "Technical leadership · Full-stack engineering · Project coordination",
    responsibilities: [
      "Contributed across frontend, backend, database architecture, and API integrations for a platform supporting 1,000+ users.",
      "Managed planning, milestones, requirements gathering, stakeholder alignment, client communication, and user training as the primary project focal point.",
      "Managed production deployments, Windows Server administration, and IIS configuration on Jordan’s MoDEE infrastructure.",
    ],
    solution: [
      "Centralised municipal data collection and automated approval workflows.",
      "Enabled data-driven reporting to support planning and decision-making.",
      "Connected platform components through database architecture and API integrations.",
    ],
    stack: ["Laravel", "MySQL", "React.js", "Microsoft Windows Server", "IIS"],
    link: {
      href: "https://nwmis.gov.jo/",
      label: "Visit NMISW",
      status: "verified",
      checkedOn,
    },
    flagship: true,
    media: {
      kind: "website",
      images: [{ src: "/projects/nmisw-home-1280.webp", smallSrc: "/projects/nmisw-home-640.webp", alt: "NMISW public homepage in English, showing Ministry of Environment branding, login, and waste generator and recycler registration entry points", width: 1280, height: 800 }],
      caption: "Public NMISW homepage · English",
      source: "https://nwmis.gov.jo/nmis/#/home",
    },
  },
  {
    id: "six-construction",
    title: "SIX Construction",
    shortTitle: "SIX Construction",
    category: "Web",
    kind: "Corporate Website & Interactive Frontend",
    context: "Poland",
    description: "Developed interactive frontend experiences for a Polish construction company's corporate website, featuring an engaging presentation of its services, construction projects, company information, and news.",
    responsibilities: [
      "Implemented interactive frontend functionality and animations using JavaScript and GSAP.",
      "Worked on visual interactions and presentation of website content.",
      "Used JavaScript libraries for interactive UI elements where applicable.",
    ],
    solution: [
      "The site presents company information and services, links to individual construction project profiles, and provides Polish and English versions.",
      "The Latest News carousel uses Swiper.js with previous and next buttons and keyboard navigation.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "GSAP (CDN)", "Swiper.js"],
    link: { href: "https://sixconstruction.com.pl/", label: "Visit SIX Construction", status: "verified", checkedOn: "2026-11-23" },
    media: {
      kind: "website",
      images: [{ src: "/projects/six-construction-1280.webp", smallSrc: "/projects/six-construction-640.webp", alt: "SIX Construction’s English homepage with a sidebar menu and aerial construction-site footage", width: 1280, height: 800 }],
      caption: "Public SIX Construction homepage · English",
      source: "https://sixconstruction.com.pl/",
    },
  },
  {
    id: "sdm",
    title: "Service Delivery Mechanism (SDM)",
    shortTitle: "SDM",
    category: "Web",
    kind: "Enterprise infrastructure platform",
    context: "South Africa · Delivered through Technology Wisdom in collaboration with GIZ South Africa for the African Union Development Agency (AUDA-NEPAD)",
    period: "Jul 2024–Jul 2025",
    description: "Digitalising infrastructure project submissions, evaluations, approvals, and portfolio tracking for AUDA-NEPAD.",
    role: "Full-stack engineering · Solution architecture · End-to-end delivery",
    responsibilities: [
      "Engineered and delivered the full-stack solution using React.js, Laravel, and MySQL.",
      "Integrated existing enterprise systems and databases while coordinating technical delivery and production deployment.",
      "Translated manual business processes into a centralised digital platform for submissions, evaluations, approvals, and reporting.",
    ],
    solution: [
      "Implemented automated project screening and approval workflows.",
      "Built real-time portfolio tracking for infrastructure projects.",
      "Connected the application with existing enterprise systems and databases.",
    ],
    outcome: "Supporting 28 infrastructure projects, as documented in the CV.",
    stack: ["React.js", "Laravel", "MySQL"],
    link: { href: "https://sdm.nepad.org/", label: "Visit SDM", status: "verified", checkedOn },
    flagship: true,
    media: {
      kind: "website",
      images: [{ src: "/projects/sdm-1280.webp", smallSrc: "/projects/sdm-640.webp", alt: "Public Digital SDM sign-in page with AUDA-NEPAD branding and information about the infrastructure platform", width: 1280, height: 720 }],
      caption: "Public platform entry screen · authentication required for the application",
      source: "https://sdm.nepad.org/sign-in",
    },
  },
  {
    id: "doctrine",
    title: "Doctrine",
    shortTitle: "Doctrine",
    category: "Mobile",
    kind: "Medical Professionals Networking Mobile App",
    context: "Healthcare community · Mobile",
    description: "A professional networking application connecting medical professionals and supporting collaboration within the healthcare community.",
    role: "Mobile development · Technical coordination and leadership",
    responsibilities: [
      "Developed the mobile application and led the mobile development team.",
      "Oversaw technical implementation, API integrations, quality assurance, and project delivery.",
    ],
    solution: ["Brought mobile implementation, API integration, and quality assurance together through coordinated technical delivery."],
    stack: [],
    link: { href: "https://play.google.com/store/apps/details?id=com.doctrine&hl=en_AU", label: "View on Google Play", status: "verified", checkedOn },
    media: {
      kind: "mobile",
      images: [
        { src: "/projects/doctrine-1.webp", alt: "Official Doctrine Google Play screenshot introducing its medical community application", width: 312, height: 592 },
        { src: "/projects/doctrine-2.webp", alt: "Second official Doctrine Google Play screenshot", width: 312, height: 592 },
        { src: "/projects/doctrine-3.webp", alt: "Doctrine mobile app’s one-time password verification screen", width: 312, height: 592 },
      ],
      caption: "Current public Google Play screenshots",
      source: "https://play.google.com/store/apps/details?id=com.doctrine&hl=en_AU",
    },
  },
  {
    id: "stir",
    title: "STIR Coffee",
    shortTitle: "STIR Coffee",
    category: "Web",
    kind: "Café Website & Digital Menu",
    context: "Speciality coffee · Kitchen · Community",
    description: "A café presentation with a searchable coffee and kitchen menu, helping visitors browse items, descriptions, and prices.",
    responsibilities: [],
    solution: [
      "The public website presents the café through a browsable photo gallery.",
      "Visitors can navigate drinks and kitchen categories, with sections for coffee, matcha, breakfast, sandwiches, pasta, and more.",
      "Menu search filters matching items, including searches such as “pistachio”. Item descriptions, customisations, and PKR prices are displayed.",
    ],
    stack: ["HTML", "CSS", "Vanilla JavaScript"],
    link: { href: "https://stircoffee.pk/", label: "Explore STIR Coffee", status: "verified", checkedOn },
    media: {
      kind: "website",
      images: [{ src: "/projects/stir-1280.webp", smallSrc: "/projects/stir-640.webp", alt: "STIR Coffee’s public website showing its café photography and drinks and kitchen menu navigation", width: 1280, height: 720 }],
      caption: "Public website capture · café presentation",
      source: "https://stircoffee.pk/",
    },
  },
  {
    id: "pantry",
    title: "Pantry",
    shortTitle: "Pantry",
    category: "Mobile",
    kind: "Grocery Management Mobile App",
    context: "iOS · Pantry Check – Grocery List",
    description: "Mobile grocery management, with frontend development and integrations that connect the app experience to its services.",
    role: "React Native frontend development",
    responsibilities: [
      "Developed the mobile frontend with React Native.",
      "Integrated APIs and implemented Apple Sign-In for iOS users.",
    ],
    solution: ["Connected the mobile frontend to backend APIs and added Apple Sign-In authentication."],
    stack: ["React Native", "Node.js", "Apple Sign-In"],
    link: { href: "https://apps.apple.com/us/app/pantry-check-grocery-list/id966702368", label: "View on App Store", status: "verified", checkedOn },
    media: {
      kind: "mobile",
      images: [
        { src: "/projects/pantry-1.webp", alt: "Official Pantry Check App Store screenshot showing the grocery management application", width: 462, height: 1000 },
        { src: "/projects/pantry-2.webp", alt: "Second official Pantry Check App Store screenshot", width: 462, height: 1000 },
        { src: "/projects/pantry-3.webp", alt: "Pantry Check shopping list showing grocery items and their prices", width: 600, height: 1299 },
      ],
      caption: "Current public App Store screenshots",
      source: "https://apps.apple.com/us/app/pantry-check-grocery-list/id966702368",
    },
  },
];

export const achievementsSummary = "In six years of full-stack, mobile, and enterprise engineering, I’ve led cross-functional teams of up to 15 people and overseen four international production releases. I’ve worked on systems supporting 1,000+ users across government and business workflows. My work on the Service Delivery Mechanism helped support a portfolio of 28 infrastructure projects. I’ve made seven project visits to work with stakeholders on site, six in Jordan and one in South Africa.";

export const experience = [
  { role: "Lead Software Engineer", company: "Technology Wisdom", period: "Aug 2021–Present", detail: "Lead cross-functional teams of up to 15 across requirements, solution architecture, technical decisions, and end-to-end delivery. Engineer and deploy full-stack applications, APIs, relational databases, and enterprise integrations." },
  { role: "Associate Software Engineer", company: "TBOX Solutionz", period: "Jul 2020–Jul 2021", detail: "Developed three React Native applications, including frontend development, bug fixes, and API integrations. Designed, developed, and maintained two WordPress websites." },
] as const;

export const education = [
  { period: "2016–2020", title: "BS Information Technology", institution: "FCIT · Faculty of Computing and Information Technology, Lahore" },
  { period: "Aug 2020–Jan 2021", title: "Career Preparation Fellowship Program", institution: "Amal Academy" },
] as const;

export const services = [
  { icon: "web", title: "Full-stack development", description: "Hands-on frontend and backend engineering, APIs, relational databases, and enterprise integrations built around business requirements.", tags: "Web applications · Enterprise systems" },
  { icon: "mobile", title: "Mobile applications", description: "Mobile application and feature development, API integrations, technical coordination, and quality assurance through delivery.", tags: "React Native · Flutter · API integrations" },
  { icon: "api", title: "Solution architecture", description: "Application and database architecture, integration planning, and practical technical decisions that connect systems and support delivery.", tags: "Architecture · Databases · Integrations" },
  { icon: "transform", title: "Digital transformation", description: "Turning manual business processes into software: requirements, data collection, screening, approval workflows, and reporting.", tags: "Requirements · Business process digitalisation" },
  { icon: "team", title: "Technical leadership & delivery", description: "Leading cross-functional teams, coordinating timelines and priorities, and working with stakeholders through implementation and production release.", tags: "Technical leadership · Project management" },
] as const;

export const skills = [
  { number: "01", name: "Development", tools: ["React.js", "React Native", "Flutter", "Laravel", "Node.js", "JavaScript", "TypeScript", "PHP", "MySQL", "Firebase"], detail: "Frontend, backend, and mobile engineering." },
  { number: "02", name: "Architecture & DevOps", tools: ["Solution Architecture", "Database Architecture", "Enterprise Systems Integration", "Microsoft Windows Server", "GitHub Actions"], detail: "System structure, integrations, and production delivery." },
  { number: "03", name: "Leadership & delivery", tools: ["Technical Leadership", "Project Management", "Requirements Engineering", "Stakeholder Management", "Business Process Digitalisation"], detail: "Aligning people, requirements, and implementation." },
  { number: "04", name: "Tools", tools: ["Git", "GitHub", "Bitbucket", "Postman", "Trello", "Figma", "Canva"], detail: "Development, design, and day-to-day collaboration." },
] as const;
