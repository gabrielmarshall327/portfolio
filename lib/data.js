import { FaGithub, FaReact, FaPython, FaNode, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { SiOpengl } from "react-icons/si";
import rocketPic from "@/public/Rocket-Takeoff.gif";
import shampoochPic from "@/public/shampoochmepic.png";
import shareteaPic from "@/public/shareteaPOS.PNG";
import skolGame from "@/public/skolGame.png";

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
    name: "C/C++",
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
    name: "OpenGL",
    image: <SiOpengl />,
  },
];

export const projectsData = [
  {
    title: "Sharetea POS System",
    description:
      "A Point-of-Sales system created for Sharetea. The site includes a menu, customer, manager, and cashier view. OAuth, Openweathermap and Google Translate API were implemented also with additional accessibility options. React, NodeJS, and PostgreSQL were used.",
    tags: ["React", "Node.js", "PostgreSQL", "OAuth"],
    buttons: [
      <FaGithub key="shareteaKey1" />,
      <HiMiniArrowTopRightOnSquare key="shareteaKey2" />,
    ],
    links: [
      "https://github.com/csce-315-331-2023c/project-3-902_02m_ggga",
      "https://shareteamock.vercel.app/",
    ],
    imageUrl: shareteaPic,
  },

  {
    title: "Shampooch Me Website",
    description:
      "A professional website made for a previous employer, Shampooch Me Mobile Dog Grooming. This website was made with ReactJS and TailwindCSS, including an emailing feature.",
    tags: ["React", "Tailwind", "EmailJS"],
    buttons: [
      <FaGithub key="shampoochmeKey1" />,
      <HiMiniArrowTopRightOnSquare key="shampoochmeKey2" />,
    ],
    links: [
      "https://github.com/gabrielmarshall327/shampoochme",
      "https://shampoochme.pet/",
    ],
    imageUrl: shampoochPic,
  },
  {
    title: "SKOL Game",
    description:
      "A guessing game featuring all Minnesota Vikings players. This web application was built using a MERN stack, using TypeScript for the React components",
    tags: ["TypeScript", "Node.js", "MongoDB", "ExpressJS"],
    buttons: [
      <FaGithub key="skolKey1" />,
      <HiMiniArrowTopRightOnSquare key="skolKey2" />,
    ],
    links: [
      "https://github.com/gabrielmarshall327/skol-game",
      "https://skol-game.vercel.app/",
    ],
    imageUrl: skolGame,
  },
  {
    title: "Build-a-Rocket",
    description:
      "A group project I led through the Aggie Coding Club. An Arduino was configured and attached to a small rocket to track various measurables such as speed, rotation and altitude. PythonQT was also used to create a GUI to view all of the data received over a radio transmitter.",
    tags: ["Python", "C++", "PyQT", "Arduino"],
    buttons: [<FaGithub key="rocketKey1" />],
    links: ["https://github.com/gabrielmarshall327/build-a-rocket"],
    imageUrl: rocketPic,
  },
];
