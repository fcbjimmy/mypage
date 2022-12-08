import port1 from "../assets/portfolio-1.png";
import port2 from "../assets/portfolio-2.png";
import superm1 from "../assets/superM-1.png";
import superm2 from "../assets/superM-2.png";
import todo1 from "../assets/todo-1.png";
import todo2 from "../assets/todo-2.png";
import auth1 from "../assets/Auth-1.png";
import auth2 from "../assets/Auth-2.png";
import crypto1 from "../assets/crypto-1.png";
import crypto2 from "../assets/ crypto-2.png";
import job1 from "../assets/job-1.png";
import job2 from "../assets/job-2.png";
import zero1 from "../assets/zero-1.png";
import zero2 from "../assets/zero-2.png";

export const ProjectList = [
  {
    title: "Zero Waste Stores",
    name: "zerowaste",
    technologies: ["React TS", "Tailwind CSS", "PostgresSQL", "Express.js"],
    link: "https://github.com/fcbjimmy/zerowaste-client",
    live: "https://zerowaste-client.onrender.com/",
    screenshots: [
      { img: zero1, alt: "image-one" },
      { img: zero2, alt: "image-two" },
    ],
  },
  {
    title: "Job Tracker",
    name: "job",
    technologies: ["React JS", "SCSS", "MongoDB", "Express.js"],
    link: "https://github.com/fcbjimmy/jobtracker-frontend",
    live: "https://jobtracker-frontend.onrender.com/",
    screenshots: [
      { img: job1, alt: "image-one" },
      { img: job2, alt: "image-two" },
    ],
  },
  {
    title: "Crypto Tracker",
    name: "crypto",
    technologies: ["React JS", "TypeScript", "SCSS", "CoinGecko API"],
    link: "https://github.com/fcbjimmy/react-crypto",
    live: "https://crypto-react.onrender.com",
    screenshots: [
      { img: crypto1, alt: "image-one" },
      { img: crypto2, alt: "image-two" },
    ],
  },
  {
    title: "Portfolio",
    name: "portfolio",
    technologies: ["React JS", "SCSS"],
    link: "https://github.com/fcbjimmy/mypage",
    live: "https://jimmychan.netlify.app/",
    screenshots: [
      { img: port1, alt: "image-one" },
      { img: port2, alt: "image-two" },
    ],
  },
  {
    title: "superM",
    name: "superm",
    technologies: ["React JS", "Redux Toolkit"],
    link: "https://github.com/fcbjimmy/superM",
    live: "",
    screenshots: [
      { img: superm1, alt: "image-one" },
      { img: superm2, alt: "image-two" },
    ],
  },
  {
    title: "To Do List",
    name: "todo",
    technologies: ["React JS", "Material UI"],
    link: "https://github.com/fcbjimmy/todolist-app",
    live: "",
    screenshots: [
      { img: todo1, alt: "image-one" },
      { img: todo2, alt: "image-two" },
    ],
  },
  {
    title: "Authentication",
    name: "auth",
    technologies: ["React JS", "TypeScript", "Firebase"],
    link: "https://github.com/fcbjimmy/banksystem",
    live: "",
    screenshots: [
      { img: auth1, alt: "image-one" },
      { img: auth2, alt: "image-two" },
    ],
  },
];
