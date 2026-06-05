export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const heroContent = {
  name: "Le Thanh Dat",
  badge: "React.js • Next.js • React Three Fiber • Motion UI",
  title: "I'm a skilled software developer with experience.",
  description:
    "Frontend-focused developer crafting polished products with React, Next.js, and production-ready UI systems.",
  primaryCta: {
    label: "View Projects",
    href: "#work",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "#contact",
  },
  stats: [
    { value: "3+", label: "years building frontend products" },
    { value: "12+", label: "shipped landing pages and apps" },
    { value: "24/7", label: "focus on performance and DX" },
  ],
};

export const services = [
  {
    title: "Frontend Engineering",
    icon: "/assets/web.png",
    blurb:
      "Responsive interfaces with attention to performance, accessibility, and consistent design systems.",
  },
  {
    title: "Interactive 3D",
    icon: "/assets/mobile.png",
    blurb:
      "Web scenes using React Three Fiber to add depth, motion, and memorable product storytelling.",
  },
  {
    title: "Backend Integration",
    icon: "/assets/backend.png",
    blurb:
      "Clean API integration, form flows, and production-ready frontend architecture for real products.",
  },
  {
    title: "Product Collaboration",
    icon: "/assets/creator.png",
    blurb:
      "Working closely with designers and stakeholders to turn rough ideas into usable interfaces.",
  },
];

export const technologies = [
  { name: "HTML", icon: "/assets/tech/html.png" },
  { name: "CSS", icon: "/assets/tech/css.png" },
  { name: "JavaScript", icon: "/assets/tech/javascript.png" },
  { name: "TypeScript", icon: "/assets/tech/typescript.png" },
  { name: "React", icon: "/assets/tech/reactjs.png" },
  { name: "Redux", icon: "/assets/tech/redux.png" },
  { name: "Tailwind", icon: "/assets/tech/tailwind.png" },
  { name: "Node.js", icon: "/assets/tech/nodejs.png" },
  { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
  { name: "Three.js", icon: "/assets/tech/threejs.svg" },
  { name: "Git", icon: "/assets/tech/git.png" },
  { name: "Figma", icon: "/assets/tech/figma.png" },
  // { name: "Docker", icon: "/assets/tech/docker.png" },
];

export const experiences = [
  {
    title: "React.js Developer",
    company: "Skyline-tech",
    icon: "/assets/company/skyline-tech.png",
    date: "Jul 2022 - May 2023",
    points: [
      "Built and maintained frontend features with reusable React components.",
      "Worked across design and product teams to ship polished interfaces quickly.",
      "Improved responsive behavior and cross-browser consistency for key flows.",
      "Participated in code review and frontend architecture decisions.",
    ],
  },
 
  {
    title: "Web Developer",
    company: "tinasoft",
    icon: "/assets/company/tinasoft.webp",
    date: "May 2023 - Jul 2024",
    points: [
      "Created conversion-focused interfaces for commerce and marketing surfaces.",
      "Optimized page performance and asset loading for better user experience.",
      "Collaborated with stakeholders to translate business goals into UI work.",
      "Maintained clean, scalable component structures for future iteration.",
    ],
  },
  {
    title: "Web Developer",
    company: "NewGen Tech",
    icon: "/assets/company/newgen.png",
    date: "Jul 2024 - Present",
    points: [
      "Delivered modern web applications with React, Next.js, and service integrations.",
      "Balanced product polish with engineering rigor and deployment readiness.",
      "Mentored frontend decisions around structure, animation, and accessibility.",
      "Pushed for maintainable workflows across UI, data, and collaboration layers.",
    ],
  },
];

export const projects = [
  {
    name: "M-system",
    description:
      "M-System is a specialized core system management software developed by the Vietnam Commodity Exchange (MXV) to connect cash flow and account data with international derivative exchanges. This system serves as a platform for centralized administrative control and financial management, ensuring transparency in all activities of investors and trading members (brokers).",
    image: "/assets/Msystem.png",
    sourceCode: "#",
    liveDemo: "#",
    tags: [
      { name: "react", color: "text-gradient-cyan" },
      { name: "typescript", color: "text-gradient-emerald" },
      { name: "tailwind", color: "text-gradient-amber" },
    ],
  },
  {
    name: "Diamond Ranking",
    description:
      "Diamond Ranking is a web and mobile system that supports badminton match management, scoring, and individual ranking. The application allows users to create competition boards, manage members, create seasons, schedule matches, enter match results, and save season history. In addition, the system provides features such as manual or automatic match scheduling, member status management, season history storage, and performance statistics. The main goal of the project is to make badminton tournament organization fairer, more flexible, and easier to manage for clubs, teams, and casual player groups.",
    image: "/assets/Diamond-Ranking.png",
    sourceCode: "https://github.com/hagasakino01/badminton-rankings-fe",
    liveDemo: "https://diamond-rankings.vercel.app/",
    tags: [
      { name: "react", color: "text-gradient-sky" },
      { name: "express", color: "text-gradient-amber" },
      { name: "mongodb", color: "text-gradient-emerald" },
      { name: "api", color: "text-gradient-rose" },
      { name: "typescript", color: "text-gradient-cyan" },
      { name: "shadcn", color: "text-gradient-lime" },
      { name: "tailwind", color: "text-gradient-sky" },
    ],
  },
  {
    name: "Ready2Go",
    description:
      "Ready2Go is a travel booking mini app, mainly used for booking flight tickets and hotel rooms directly within Zalo. It is a convenient platform that provides flight ticket and hotel booking services, integrated into the Zalo Mini App ecosystem.",
    image: "/assets/Ready2Go.png",
    sourceCode: "#",
    liveDemo: "#",
    tags: [
      { name: "react", color: "text-gradient-cyan" },
      { name: "typescript", color: "text-gradient-emerald" },
      { name: "tailwind", color: "text-gradient-amber" },
    ],
  },
   {
    name: "Hosted-form-Epay/VneId",
    description:
      "Hosted-form-ePay/VNeID is a hosted form project for the VNeID and ePay payment ecosystem. The application supports user session authentication, displays a list of services, enables lookup and payment for various types of bills such as electricity, water, internet, television, mobile top-ups, data package purchases, insurance, and recurring services. It also allows users to save bills, select payment methods, and track transaction statuses through an interface that can be customized for each partner.",
    image: "/assets/Hosted-form.png",
    sourceCode: "#",
    liveDemo: "#",
    tags: [
      { name: "react", color: "text-gradient-cyan" },
      { name: "typescript", color: "text-gradient-emerald" },
      { name: "tailwind", color: "text-gradient-amber" },
    ],
  },
  {
    name: "Trading-admin-GCL",
    description:
      "Trading-admin-GCL is a internal management system for the GCL trading platform, designed to support admins and brokers in managing users, access permissions, customers, trading accounts, deposit/withdrawal/margin transfer requests, order history, position statuses, business approval workflows, and risk configurations. The project is built to centralize operational processes, enhance data control, and support fast, accurate business operations through a web-based interface.",
    image: "/assets/gcl.png",
    sourceCode: "#",
    liveDemo: "#",
    tags: [
      { name: "react", color: "text-gradient-cyan" },
      { name: "typescript", color: "text-gradient-emerald" },
      { name: "tailwind", color: "text-gradient-amber" },
      { name: "ag-grid", color: "text-gradient-lime" },
    ],
  },
   
];

export const testimonials = [
  {
    quote:
      "Strong frontend judgment, clear communication, and a sharp eye for interaction details.",
    name: "Tu Anh",
    role: "Lecturer, PTIT",
    initials: "TA",
  },
  {
    quote:
      "Strong frontend judgment, clear communication, and a sharp eye for interaction details.",
    name: "Viet Anh",
    role: "Senior Software Engineer, NewGen Tech",
    initials: "VA",
  },
  {
    quote:
      "Strong frontend judgment, clear communication, and a sharp eye for interaction details.",
    name: "Ngoc Bich",
    role: "BA, NewGen Tech",
    initials: "NB",
  },
];

export const socialLinks = [
  // { label: "GitHub", href: "https://github.com/" },
  // { label: "Facebook", href: "https://www.facebook.com/atdiamond.491616" },
  { label: "Email: wolfcub2402@gmail.com", href: "" },
];
