export type ProjectLink = {
  label: string;
  url: string;
  kind: "web" | "playstore" | "admin" | "drive" | "github";
};

export type ProjectItem = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  filterGroup: "mobile" | "web" | "systems";
  year: string;
  organization: string;
  role: string;
  status: string;
  packageOrDomain: string;
  summary: string;
  engineeringContext: string;
  deliverables: string[];
  techStack: string[];
  links: ProjectLink[];
  blueprintType:
    | "koyo-mobile-web"
    | "jaraaf-suite"
    | "duvic-logistics"
    | "ceproam-app"
    | "learnvault-web"
    | "gandg-culinary"
    | "apk-releases"
    | "core-systems";
};

export type ExperienceItem = {
  id: string;
  index: string;
  role: string;
  company: string;
  location: string;
  period: string;
  track: "engineering" | "leadership";
  highlights: string[];
  technologies?: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  honors?: string;
  location: string;
  period: string;
  details: string[];
};

export type CertificationItem = {
  year: string;
  title: string;
  issuer: string;
  category: "Scholarship" | "Certification" | "Award";
};

export const PROFILE = {
  name: "Ayanyiola Enoch",
  firstName: "Ayanyiola",
  lastName: "Enoch",
  monogram: "AE",
  role: "Software Engineer — Frontend Web & Mobile Systems",
  headline:
    "Architecting tactile mobile applications and high-clarity web platforms with React Native, Next.js, and TypeScript.",
  subheadline:
    "Computer Science graduate (B.Tech, Second Class Upper) from LAUTECH with 2+ years shipping production Android/iOS interfaces, multi-surface web applications, and consumer products across Nigeria and the UK.",
  location: "Ogbomoso, Oyo State, Nigeria",
  availability: "Available for Frontend & Mobile Engineering Roles",
  email: "ayanyiolaenoch155@gmail.com",
  phone: "+234 703 9990 134",
  phoneHref: "tel:+2347039990134",
  github: "https://github.com/Ayanyiola-Enoch",
  githubHandle: "github.com/Ayanyiola-Enoch",
  linkedin: "https://www.linkedin.com/in/ayanyiolaenoch/",
  linkedinHandle: "linkedin.com/in/ayanyiolaenoch",
  summary:
    "A motivated Computer Science graduate and Software Engineer with over two years of hands-on experience in Frontend Web and Mobile App Development. Educated at Ladoke Akintola University of Technology (LAUTECH), one of Nigeria's leading state universities, I build practical software that solves real-world problems while drawing creative discipline from a deep appreciation for music.",
  stats: [
    { value: "2+", label: "Years Production Experience", detail: "Web & Mobile Engineering" },
    { value: "10+", label: "Shipped Products & Builds", detail: "Play Store, Vercel & Render" },
    { value: "100+", label: "Ambassadors Led at LAUTECH", detail: "60%+ Financial Literacy Reach" },
    { value: "B.Tech", label: "Computer Science (2:1)", detail: "LAUTECH, Class of 2025" },
  ],
  spokenLanguages: [
    { language: "English", proficiency: "Fluent / Native Working" },
    { language: "Yoruba", proficiency: "Conversational / Basic" },
    { language: "French", proficiency: "Foundational / Basic" },
  ],
  interests: [
    "Technological Innovations",
    "Web & Mobile Interface Architecture",
    "Music & Acoustic Arrangement",
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "koyo",
    index: "01",
    title: "Koyo",
    subtitle: "Indigenous African Language Learning App & 2026 Web Overhaul",
    category: "Mobile Application + Web Platform",
    filterGroup: "mobile",
    year: "2026",
    organization: "KOYO (Remote)",
    role: "Mobile App & Frontend Web Developer",
    status: "Live on Google Play & Web",
    packageOrDomain: "koyoapp.com · com.koyo.koyoapp",
    summary:
      "A cultural and language learning ecosystem helping Africans at home and in the diaspora master indigenous languages including Yoruba, Igbo, and Edo through bite-sized daily lessons, native speaker audio, and spaced repetition.",
    engineeringContext:
      "Collaborated directly with senior engineers on the full Koyo App Overhaul, building interactive lesson screens, modern functional UI components, and pronunciation drill flows, alongside engineering the 2026 overhaul of the Koyo marketing and learning web platform.",
    deliverables: [
      "Engineered interactive lesson screens, fluency drills, and native audio playback components on the Koyo mobile app.",
      "Co-executed the comprehensive Koyo App Overhaul with senior engineering leadership for smoother navigation and retention.",
      "Developed the new 2026 version of the Koyo website (koyoapp.com) with responsive layouts and fast load performance.",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Next.js", "Modern UI Components", "Audio APIs"],
    links: [
      { label: "Live Website (koyoapp.com)", url: "https://koyoapp.com/", kind: "web" },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.koyo.koyoapp",
        kind: "playstore",
      },
    ],
    blueprintType: "koyo-mobile-web",
  },
  {
    id: "jaraaf",
    index: "02",
    title: "Jaraaf Platform & Admin Suite",
    subtitle: "Dual-Surface Client Web Application & Operations Command Dashboard",
    category: "Full-Surface Web Architecture",
    filterGroup: "systems",
    year: "2025",
    organization: "Jaraaf Digital",
    role: "Frontend Engineer",
    status: "Deployed on Vercel",
    packageOrDomain: "jaraaf-frontend.vercel.app · jaraaf-admin-dashboard.vercel.app",
    summary:
      "A decoupled two-tier web ecosystem comprising a customer-facing frontend platform and a dedicated administrative control dashboard for real-time oversight, data management, and operational workflows.",
    engineeringContext:
      "Architected both the public-facing client application and the internal admin dashboard to share consistent design tokens while optimizing the admin surface for high-density tabular inspection, status filtering, and rapid operator actions.",
    deliverables: [
      "Built the customer-facing Jaraaf Frontend with responsive views, clean navigation, and dynamic data binding.",
      "Engineered the Jaraaf Admin Dashboard with structured data tables, KPI metric cards, and role-oriented management controls.",
      "Deployed and optimized both production surfaces on Vercel with strict TypeScript component contracts.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API Integration", "Vercel"],
    links: [
      {
        label: "Client Web App",
        url: "https://jaraaf-frontend.vercel.app/",
        kind: "web",
      },
      {
        label: "Admin Dashboard",
        url: "https://jaraaf-admin-dashboard.vercel.app/",
        kind: "admin",
      },
    ],
    blueprintType: "jaraaf-suite",
  },
  {
    id: "duvic",
    index: "03",
    title: "DuvicDrop & Duvic Rider",
    subtitle: "Two-Sided On-Demand Grocery Marketplace & Courier Dispatch Apps",
    category: "Dual Mobile Application Ecosystem",
    filterGroup: "mobile",
    year: "2025",
    organization: "Software Solutions Dev · Cephas ICT Hub",
    role: "Mobile Application Developer",
    status: "Published on Google Play Store",
    packageOrDomain: "Software Solutions Dev · Android APK / Play Store",
    summary:
      "An end-to-end on-demand retail, restaurant, and grocery delivery suite operating in the UK. DuvicDrop serves customers ordering daily essentials, while Duvic Rider equips delivery couriers with real-time order routing and fulfillment tracking.",
    engineeringContext:
      "Developed within the mobile engineering team at Cephas ICT Hub (published under Software Solutions Dev). Focused on responsive multi-step cart & checkout flows in DuvicDrop and low-latency delivery status transitions for couriers in Duvic Rider.",
    deliverables: [
      "Implemented store discovery, category filtering, basket management, and live order tracking screens for DuvicDrop.",
      "Built courier dispatch queues, pickup/drop-off state machines, and earnings summaries for the Duvic Rider companion app.",
      "Packaged and shipped production Android APK/AAB builds to the Google Play Store under Software Solutions Dev.",
    ],
    techStack: ["React Native", "Expo", "JavaScript", "React Navigation", "Location & Maps", "REST APIs"],
    links: [
      {
        label: "Google Play Store (Cephas / Software Solutions Dev)",
        url: "https://play.google.com/store/apps/details?id=com.ceproam.com",
        kind: "playstore",
      },
      {
        label: "Direct APK Build I (Drive)",
        url: "https://drive.google.com/file/d/1qHm72jAf9r3GVYGlENblxnex8w6x3rXM/view?usp=drive_link",
        kind: "drive",
      },
    ],
    blueprintType: "duvic-logistics",
  },
  {
    id: "ceproam",
    index: "04",
    title: "Ceproam",
    subtitle: "Cross-Platform Mobile Application & Digital Service Suite",
    category: "Mobile Application (Google Play)",
    filterGroup: "mobile",
    year: "2025",
    organization: "Cephas Digital Technology",
    role: "Mobile App Developer",
    status: "Live on Google Play Store",
    packageOrDomain: "com.ceproam.com",
    summary:
      "Production Android application engineered within the Cephas Digital Technology suite, delivering mobile-first service management, user account workflows, and resilient API synchronization.",
    engineeringContext:
      "Built using React Native CLI and Expo workflows during my extended tenure at Cephas ICT Hub, focusing on clean component modularity, predictable state handling, and smooth native gesture interactions across diverse Android device viewports.",
    deliverables: [
      "Engineered reusable mobile UI primitives, onboarding screens, and authenticated user dashboard flows.",
      "Integrated backend service endpoints with structured error recovery and offline-aware state feedback.",
      "Prepared production release artifacts published under package identifier com.ceproam.com.",
    ],
    techStack: ["React Native CLI", "Expo", "TypeScript", "JavaScript", "Mobile UI Architecture"],
    links: [
      {
        label: "Google Play Store (com.ceproam.com)",
        url: "https://play.google.com/store/apps/details?id=com.ceproam.com",
        kind: "playstore",
      },
    ],
    blueprintType: "ceproam-app",
  },
  {
    id: "learnvault",
    index: "05",
    title: "LearnVault",
    subtitle: "Digital Knowledge Repository & Structured Learning Platform",
    category: "Web Application",
    filterGroup: "web",
    year: "2025",
    organization: "Independent / Academic Engineering",
    role: "Frontend Web Developer",
    status: "Live on Render",
    packageOrDomain: "learnvault-ia4s.onrender.com",
    summary:
      "A dedicated learning and knowledge-management web platform designed to organize study tracks, curated educational resources, and structured progress workflows in a distraction-free interface.",
    engineeringContext:
      "Designed and engineered from the ground up to prioritize reading legibility, fast resource indexing, and responsive multi-device access for students and self-directed learners.",
    deliverables: [
      "Architected a clean, content-first frontend interface with intuitive resource categorization and search.",
      "Implemented responsive card grids and distraction-free reading views across desktop and mobile viewports.",
      "Deployed production web build on Render with optimized static and dynamic asset delivery.",
    ],
    techStack: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Grid", "Render"],
    links: [
      {
        label: "Live Platform (learnvault-ia4s.onrender.com)",
        url: "https://learnvault-ia4s.onrender.com/",
        kind: "web",
      },
    ],
    blueprintType: "learnvault-web",
  },
  {
    id: "gandg-restaurant",
    index: "06",
    title: "G&G Restaurant",
    subtitle: "Hospitality, Culinary Menu Showcase & Digital Ordering Experience",
    category: "Web Platform",
    filterGroup: "web",
    year: "2024",
    organization: "G&G Hospitality",
    role: "Frontend Web Developer",
    status: "Live on Render",
    packageOrDomain: "gandg-restaurant.onrender.com",
    summary:
      "A bespoke digital storefront for G&G Restaurant presenting curated culinary menus, dish photography, chef specials, table reservation inquiries, and streamlined customer ordering.",
    engineeringContext:
      "Focused on sensory visual hierarchy, fast menu category switching, and mobile-friendly ordering flows so guests can browse dishes and place orders effortlessly from any device.",
    deliverables: [
      "Crafted an editorial restaurant landing experience with interactive menu sections and course filtering.",
      "Built responsive reservation and customer inquiry flows with accessible form validation.",
      "Deployed and maintained the live web application hosted on Render.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive UI", "Render"],
    links: [
      {
        label: "Live Website (gandg-restaurant.onrender.com)",
        url: "https://gandg-restaurant.onrender.com/",
        kind: "web",
      },
    ],
    blueprintType: "gandg-culinary",
  },
  {
    id: "mobile-apk-archive",
    index: "07",
    title: "Mobile Engineering & APK Release Archive",
    subtitle: "Standalone Android Builds, Health Management App & Field Prototypes",
    category: "Mobile APK Distribution",
    filterGroup: "mobile",
    year: "2024 — 2025",
    organization: "Cephas ICT Hub & Independent Builds",
    role: "Mobile App Engineer",
    status: "Direct APK Releases on Google Drive",
    packageOrDomain: "drive.google.com · Android APK Packages",
    summary:
      "Direct distribution archive of standalone Android application builds and field-tested React Native / Expo packages, including collaborative work on the Health Management Mobile Project and custom client deliverables.",
    engineeringContext:
      "Alongside Google Play Store listings, standalone APK builds are packaged and distributed via Google Drive for stakeholder QA, direct device installation, and field testing across Android hardware profiles.",
    deliverables: [
      "Collaborated directly with senior team members on the architecture and execution of a Health Management Mobile Project.",
      "Compiled, signed, and distributed standalone Android APK builds for direct device testing and stakeholder review.",
      "Engineered custom navigation stacks, form workflows, and native device integrations using Expo and React Native CLI.",
    ],
    techStack: ["React Native", "Expo", "Android APK", "JavaScript", "Mobile UI", "EAS Build"],
    links: [
      {
        label: "APK / Project Release I (Google Drive)",
        url: "https://drive.google.com/file/d/1qHm72jAf9r3GVYGlENblxnex8w6x3rXM/view?usp=drive_link",
        kind: "drive",
      },
      {
        label: "APK / Project Release II (Google Drive)",
        url: "https://drive.google.com/file/d/1Ptlk6LtjiUPbcPZa6EGOFJ1rgMO26KSv/view?usp=drivesdk",
        kind: "drive",
      },
    ],
    blueprintType: "apk-releases",
  },
  {
    id: "engineering-foundations",
    index: "08",
    title: "Hospital Records System & Web Utilities",
    subtitle: "C++ Hospital Management Record, E-Commerce APIs & Thermodynamic Converter",
    category: "Systems & Frontend Foundations",
    filterGroup: "systems",
    year: "2022 — 2024",
    organization: "LAUTECH SWEP · Sunmence · Oasis Infobyte",
    role: "Software & Frontend Developer",
    status: "Open Source on GitHub",
    packageOrDomain: "github.com/Ayanyiola-Enoch",
    summary:
      "Foundational software engineering projects spanning a C++ Hospital Management System Record (SWEP Group D), an API-driven E-Commerce platform at Sunmence, a Beauty Store landing experience, and a multi-scale Temperature Converter.",
    engineeringContext:
      "Demonstrates breadth from low-level structured programming in C++ for patient record management to clean DOM manipulation, REST API integration, and mathematical unit conversion on the web.",
    deliverables: [
      "SWEP Project (Group D): Created a Hospital Management System Record in C++ handling patient registration, records, and lookup.",
      "Sunmence E-Commerce: Collaborated on a commercial e-commerce web storefront integrating backend APIs for dynamic catalog functionality.",
      "Oasis Infobyte Suite: Built a Beauty Store landing page and a precision Temperature Converter supporting Celsius, Fahrenheit, and Kelvin.",
    ],
    techStack: ["C++", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git & GitHub"],
    links: [
      {
        label: "GitHub Repositories (@Ayanyiola-Enoch)",
        url: "https://github.com/Ayanyiola-Enoch",
        kind: "github",
      },
    ],
    blueprintType: "core-systems",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "koyo-exp",
    index: "01",
    role: "Mobile App Developer Intern",
    company: "KOYO",
    location: "Remote",
    period: "June 2026 — Present",
    track: "engineering",
    highlights: [
      "Developed interactive learning and cultural screens on the Koyo App, implementing modern UI components and functional React Native patterns.",
      "Collaborated directly with senior team members on the architecture, development, and execution of the Koyo App Overhaul.",
      "Developed the new 2026 version of the Koyo website (koyoapp.com), aligning web performance and brand storytelling with the mobile overhaul.",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Next.js", "Component Architecture"],
  },
  {
    id: "cephas-exp",
    index: "02",
    role: "Mobile App Intern / Industrial Trainee",
    company: "Cephas ICT Hub",
    location: "Ogbomoso, Oyo State",
    period: "August 2024 — Present",
    track: "engineering",
    highlights: [
      "Successfully converted an initial five-month Student Industrial Work Experience Scheme (SIWES) placement into an extended internship based on engineering performance and demonstrated value to the team.",
      "Developed interactive cross-platform mobile applications (including DuvicDrop, Duvic Rider, and Ceproam), implementing modern UI components and production release workflows.",
      "Collaborated directly with senior team members on the development and execution of a Health Management Project and commercial client applications.",
      "Mastered key industry tools including JavaScript, Expo, and React Native CLI to increase personal engineering efficiency and delivery output.",
    ],
    technologies: ["React Native CLI", "Expo", "JavaScript", "TypeScript", "Android APK/Play Store"],
  },
  {
    id: "cowrywise-lead",
    index: "03",
    role: "Campus Lead",
    company: "Cowrywise Student Ambassador, LAUTECH",
    location: "Ogbomoso, Oyo State",
    period: "December 2024 — October 2025",
    track: "leadership",
    highlights: [
      "Coordinated campus-wide financial technology events, engaging 100+ student ambassadors in financial literacy and expanding Cowrywise campus reach by over 60%.",
      "Facilitated cross-functional team collaboration by organizing regular meetings, documenting strategic discussions, and ensuring actionable follow-ups.",
      "Provided mentorship and leadership to the LAUTECH ambassador community, fostering a culture of operational excellence in campus-based initiatives.",
      "Collaborated closely with the Cowrywise headquarters team to align campus activities with organizational goals and relay structured student product feedback.",
    ],
    technologies: ["Community Leadership", "Product Advocacy", "Financial Literacy", "Operations"],
  },
  {
    id: "oasis-exp",
    index: "04",
    role: "Frontend Web Developer Intern",
    company: "Oasis Infobyte",
    location: "New Delhi (Remote)",
    period: "March 2024 — April 2024",
    track: "engineering",
    highlights: [
      "Designed and built a responsive Beauty Store landing page website featuring product showcases and editorial layout composition.",
      "Engineered a multi-scale Temperature Converter web application converting accurately between Celsius, Fahrenheit, and Kelvin in real time.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
  },
  {
    id: "cowrywise-sec",
    index: "05",
    role: "Committee Member — Secretary Committee",
    company: "Cowrywise Student Ambassador, LAUTECH",
    location: "Ogbomoso, Oyo State",
    period: "June 2023 — December 2024",
    track: "leadership",
    highlights: [
      "Documented comprehensive event minutes, synthesized attendee feedback, and supported both virtual and in-person campus ambassador events.",
      "Collaborated with committee partners to publish structured post-event reviews on webinars and educational programs for the ambassador community.",
    ],
    technologies: ["Documentation", "Event Operations", "Written Communication"],
  },
  {
    id: "sunmence-exp",
    index: "06",
    role: "Web Developer Intern",
    company: "Sunmence",
    location: "Ogbomoso, Oyo State",
    period: "December 2022 — April 2023",
    track: "engineering",
    highlights: [
      "Collaborated in developing a full-featured e-commerce website, integrating external APIs for enhanced catalog and shopping functionality.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "API Integration"],
  },
  {
    id: "gdsc-exp",
    index: "07",
    role: "Community Member & Frontend Contributor",
    company: "Google Developer Student Club (GDSC), LAUTECH",
    location: "Ogbomoso, Oyo State",
    period: "November 2021 — Present",
    track: "leadership",
    highlights: [
      "Participated actively in technical workshops, hackathons, and regional developer conferences including DevFest '21, DevFest '23, and TechFiesta 1.0.",
      "Contributed to building a frontend web page in collaboration with a GDSC core team member.",
    ],
    technologies: ["Frontend Web", "Developer Community", "Collaborative Git"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    honors: "Second Class Upper Division (2:1)",
    institution: "Ladoke Akintola University of Technology (LAUTECH)",
    location: "Ogbomoso, Oyo State, Nigeria",
    period: "April 2021 — November 2025",
    details: [
      "Completed a rigorous five-year Computer Science curriculum focused on software engineering, algorithms, data analysis, and technological innovation.",
      "SWEP Group D Engineering Project: Built a Hospital Management System Record application using C++.",
      "Actively led and participated in campus tech communities and ambassador programs to bridge academic theory with industry software delivery.",
    ],
  },
  {
    degree: "High School Diploma (Secondary Education)",
    honors: "Punctuality Prefect · Science & Technology Track",
    institution: "Smith International Baptist Academy",
    location: "Ogbomoso, Oyo State, Nigeria",
    period: "October 2017 — December 2020",
    details: [
      "Acquired foundational knowledge in computer science and mathematics, establishing the analytical base for university engineering studies.",
      "Demonstrated student leadership and institutional discipline serving as the Punctuality Prefect.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    year: "2024",
    title: "Winner — TechTalent Fund Scholarship",
    issuer: "Organized by ATC AFRICA · Powered by SQI College of ICT",
    category: "Scholarship",
  },
  {
    year: "2024",
    title: "AI Augmented Professional Development Skills in the Digital Age",
    issuer: "ALX Africa (Certificate of Achievement)",
    category: "Certification",
  },
  {
    year: "2024",
    title: "ChatGPT for Everyone — Applied Prompt & Workflow Engineering",
    issuer: "Certificate of Completion",
    category: "Certification",
  },
  {
    year: "2023",
    title: "Award on Financial Literacy",
    issuer: "Jobberman Nigeria",
    category: "Award",
  },
  {
    year: "2021",
    title: "Certificate in Digital Works & Online Systems",
    issuer: "Online Digital Training Program",
    category: "Certification",
  },
  {
    year: "2020",
    title: "Certificate in Web Programming (HTML)",
    issuer: "SoloLearn",
    category: "Certification",
  },
];

export const SKILL_GROUPS = [
  {
    index: "01",
    category: "Mobile Application Engineering",
    description: "Cross-platform native-feel apps from prototype to Google Play Store release.",
    items: [
      "React Native",
      "Expo & EAS Workflows",
      "React Native CLI",
      "Android APK / AAB Packaging",
      "Mobile Navigation & Gestures",
      "Audio & Location Integrations",
    ],
  },
  {
    index: "02",
    category: "Frontend Web Architecture",
    description: "Responsive, accessible, typographically precise web applications and admin suites.",
    items: [
      "React & Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & Semantic DOM",
      "CSS3, Tailwind CSS & Bootstrap",
      "REST API Integration",
    ],
  },
  {
    index: "03",
    category: "Programming, Data & Tooling",
    description: "Core programming languages, design collaboration, and version control workflows.",
    items: [
      "Python",
      "C++",
      "Git & GitHub",
      "Figma (UI Inspection & Handoff)",
      "VS Code & Sublime Text",
      "Microsoft Excel & Office Suite",
    ],
  },
  {
    index: "04",
    category: "Engineering & Leadership Attributes",
    description: "Human-centered execution forged through team delivery and campus leadership.",
    items: [
      "Problem-Solving & Systems Thinking",
      "Team Collaboration & Mentorship",
      "Attention to Customer Needs",
      "Emotional Intelligence & Adaptability",
      "Financial Literacy & Product Strategy",
      "Clear Written & Technical Communication",
    ],
  },
];
