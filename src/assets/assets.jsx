import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaMobileAlt, 
  FaReact, 
  FaTools, 
  FaNodeJs, 
  FaCloudUploadAlt 
} from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiMongoose,
  SiRedis,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
// import {lindin} from "../../public/linkdin.jpg"

export const aboutInfo = [
  {
    icon: FaCode,
    title: 'Full Stack Development',
    description: 'Building end-to-end, scalable web applications with Next.js, React, TypeScript, and Node.js.',
    color: 'text-blue'
  },
  {
    icon: FaServer,
    title: 'Backend & REST APIs',
    description: 'Designing secure and robust backend systems with Express.js, JWT authentication, and Socket.io.',
    color: 'text-blue'
  },
  {
    icon: FaDatabase,
    title: 'Database & ORM',
    description: 'Architecting relational & NoSQL databases using PostgreSQL, MongoDB, and Prisma ORM.',
    color: 'text-green'
  },
  {
    icon: FaRocket,
    title: 'Caching & Performance',
    description: 'Optimizing speed and scalability using Redis caching, SSR/ISR in Next.js, and efficient queries.',
    color: 'text-orange'
  },
  {
    icon: FaMobileAlt,
    title: 'Modern UI/UX Design',
    description: 'Crafting responsive, accessible, and elegant user interfaces with Tailwind CSS and shadcn/ui.',
    color: 'text-cyan'
  },
  {
    icon: FaCloudUploadAlt,
    title: 'Deployment',
    description: 'Managing version control via Git/GitHub and deploying reliable full-stack apps on Vercel & Render.',
    color: 'text-pink'
  }
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: [
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: SiJavascript },
      { name: "TypeScript", link: "https://www.typescriptlang.org", icon: SiTypescript },
      { name: "React", link: "https://react.dev", icon: SiReact },
      { name: "Next.js", link: "https://nextjs.org", icon: SiNextdotjs },
      { name: "Tailwind CSS", link: "https://tailwindcss.com", icon: SiTailwindcss },
      { name: "shadcn/ui", link: "https://ui.shadcn.com", icon: SiShadcnui },
      { name: "Bootstrap", link: "https://getbootstrap.com", icon: SiBootstrap }
    ]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: [
      { name: "Node.js", link: "https://nodejs.org", icon: SiNodedotjs },
      { name: "Express", link: "https://expressjs.com", icon: SiExpress },
      { name: "Socket.io", link: "https://socket.io", icon: SiSocketdotio },
      { name: "JWT Authentication", link: "https://jwt.io", icon: SiJsonwebtokens }
    ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: [
      { name: "PostgreSQL", link: "https://www.postgresql.org", icon: SiPostgresql },
      { name: "MongoDB", link: "https://www.mongodb.com", icon: SiMongodb },
      { name: "Prisma", link: "https://www.prisma.io", icon: SiPrisma },
      { name: "Mongoose", link: "https://mongoosejs.com", icon: SiMongoose },
      { name: "Redis", link: "https://redis.io", icon: SiRedis }
    ]
  },
  {
    title: 'Tools & Deployment',
    icon: FaTools,
    description: 'Managing version control and deploying applications to cloud platforms.',
    tags: [
      { name: "Git", link: "https://git-scm.com", icon: SiGit },
      { name: "GitHub", link: "https://github.com", icon: SiGithub },
      { name: "Vercel", link: "https://vercel.com", icon: SiVercel },
      { name: "Render", link: "https://render.com", icon: SiRender }
    ]
  }
];

export const projects = [
    {
    title: "Housing-Management Project",
    description:
      "A full-stack housing and rental management platform enabling tenants to discover and book rooms seamlessly, featuring property listings, online booking workflows, secure payments, and tenant-landlord management dashboards.",
    image: "/housing.png",
    tech: [
      {
        name: "Next.js",
        link: "https://nextjs.org",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com",
        icon: RiTailwindCssFill,
      },
      {
        name: "shadcn/ui",
        link: "https://ui.shadcn.com",
        icon: SiShadcnui,
      },
      {
        name: "Node.js",
        link: "https://nodejs.org",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        link: "https://expressjs.com",
        icon: SiExpress,
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org",
        icon: SiPostgresql,
      },
      {
        name: "Prisma",
        link: "https://www.prisma.io",
        icon: SiPrisma,
      },
    ],
    icons: [SiNextdotjs, RiTailwindCssFill, SiShadcnui, FaNodeJs, SiExpress, SiPostgresql, SiPrisma],
    demo: "https://housing-management-frontend.vercel.app/",
    code: "https://github.com/milon1000000/gearup-project-full-stact",
  },
  {
    title: "Gear-Up Project",
    description:
      "A seamless full-stack gear and equipment rental web app enabling users to discover and rent products on-demand, complete with secure checkout, booking management, and role-based admin controls.",
    image: "/GearUp.png",
    tech: [
      {
        name: "Next.js",
        link: "https://nextjs.org",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com",
        icon: RiTailwindCssFill,
      },
      {
        name: "shadcn/ui",
        link: "https://ui.shadcn.com",
        icon: SiShadcnui,
      },
      {
        name: "Node.js",
        link: "https://nodejs.org",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        link: "https://expressjs.com",
        icon: SiExpress,
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org",
        icon: SiPostgresql,
      },
      {
        name: "Prisma",
        link: "https://www.prisma.io",
        icon: SiPrisma,
      },
    ],
    icons: [SiNextdotjs, RiTailwindCssFill, SiShadcnui, FaNodeJs, SiExpress, SiPostgresql, SiPrisma],
    demo: "https://gearup-project-full-stact.vercel.app",
    code: "https://github.com/milon1000000/gearup-project-full-stact",
  },

  {
    title: "LinkedIn Clone",
    description:
      "A full-stack LinkedIn clone with real-time posts, authentication, connection requests, and profile management system.",
    image: "/linkdin1.png",
    tech: [
      {
        name: "React",
        link: "https://react.dev",
        icon: FaReact,
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com",
        icon: RiTailwindCssFill,
      },
      {
        name: "Node.js",
        link: "https://nodejs.org",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        link: "https://expressjs.com",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com",
        icon: SiMongodb,
      },
    ],
    icons: [FaReact, RiTailwindCssFill, FaNodeJs, SiExpress, SiMongodb],
    demo: "https://linkdinproject-1.onrender.com",
    code: "https://github.com/milon1000000/LinkdinProject",
  },
  {
    title: "e-commerce project",
    description:
      "A full-stack e-commerce platform with secure authentication, product management, shopping cart, online payment integration, order tracking, and admin dashboard features.",
    image: "/e-commerce.webp",
    tech: [
      {
        name: "React",
        link: "https://react.dev",
        icon: FaReact,
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com",
        icon: RiTailwindCssFill,
      },
      {
        name: "Node.js",
        link: "https://nodejs.org",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        link: "https://expressjs.com",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com",
        icon: SiMongodb,
      },
    ],
    icons: [FaReact, RiTailwindCssFill, FaNodeJs, SiExpress, SiMongodb],
    demo: "https://e-commerce-frontend-9dce.onrender.com",
    code: "https://github.com/milon1000000/e-commerce-frontend",
  },
  
];
