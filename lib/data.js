import { FaReact, FaPython, FaNode, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const skills = [
  {
    name: "React",
    image: <FaReact />,
  },
  {
    name: "Python",
    image: <FaPython />,
  },
  {
    name: "C++",
    image: <TbBrandCpp />,
  },
  {
    name: "Javascript",
    image: <IoLogoJavascript />,
  },
  {
    name: "Node.js",
    image: <FaNode />,
  },
  {
    name: "SQL",
    image: <SiMysql />,
  },
  {
    name: "Tailwind",
    image: <SiTailwindcss />,
  },
  {
    name: "Linux",
    image: <FaLinux />,
  },
];

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    //imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    //imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //imageUrl: wordanalyticsImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];
