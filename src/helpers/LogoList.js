import { SiHtml5, SiJavascript, SiCss3, SiReact } from "react-icons/si";
import styles from "../styles/_variables.scss";

export const LogoList = [
  { title: "HTML", logo: <SiHtml5 size="5rem" />, class: "html" },
  { title: "CSS", logo: <SiCss3 size="5rem" />, class: "css" },
  {
    title: "JavaScript",
    logo: <SiJavascript size="5rem" />,
    class: "js",
  },
  { title: "React", logo: <SiReact size="5rem" />, class: "react" },
];
