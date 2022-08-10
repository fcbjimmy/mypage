import React from "react";
import { SiJavascript, SiCss3, SiReact, SiHtml5 } from "react-icons/si";
import { LogoList } from "../helpers/LogoList";
import styles from "../styles/Home.module.scss";

const Logos = ({ title, logo, color }) => {
  return (
    <div className={styles.logo}>
      <p>{title}</p>
      <span className={styles[color]}>{logo}</span>
    </div>
  );
};

export default Logos;
