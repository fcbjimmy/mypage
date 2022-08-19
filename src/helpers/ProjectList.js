import port1 from "../assets/portfolio-1.png";
import port2 from "../assets/portfolio-2.png";
import superm1 from "../assets/superM-1.png";
import superm2 from "../assets/superM-2.png";
import todo1 from "../assets/todo-1.png";
import todo2 from "../assets/todo-2.png";
import auth1 from "../assets/Auth-1.png";
import auth2 from "../assets/Auth-2.png";

export const ProjectList = [
  {
    title: "Portfolio",
    name: "portfolio",
    technologies: ["React Js", "CSS Modules", "Sass", "React Router"],
    link: "https://github.com/fcbjimmy/mypage",
    screenshots: [
      { img: port1, alt: "image-one" },
      { img: port2, alt: "image-two" },
    ],
  },
  {
    title: "superM",
    name: "superm",
    technologies: ["React Js", "Redux Toolkit", "React Router"],
    link: "https://github.com/fcbjimmy/superM",
    screenshots: [
      { img: superm1, alt: "image-one" },
      { img: superm2, alt: "image-two" },
    ],
  },
  {
    title: "To Do List",
    name: "todo",
    technologies: ["React Js", "Material UI"],
    link: "https://github.com/fcbjimmy/todolist-app",
    screenshots: [
      { img: todo1, alt: "image-one" },
      { img: todo2, alt: "image-two" },
    ],
  },
  {
    title: "Authentication",
    name: "auth",
    technologies: ["React Js", "TypeScript", "Firebase", "Axios"],
    link: "https://github.com/fcbjimmy/banksystem",
    screenshots: [
      { img: auth1, alt: "image-one" },
      { img: auth2, alt: "image-two" },
    ],
  },
];
