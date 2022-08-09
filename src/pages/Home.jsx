import React from "react";
import styles from "../styles/Home.module.scss";
import img from "../assets/Screenshot 2022-08-08 at 12.40.59 AM.png";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiHtml5, SiJavascript, SiCss3, SiReact } from "react-icons/si";
import Logos from "../components/Logos";
import { LogoList } from "../helpers/LogoList";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sectionone}>
        <div className={styles.item}>
          <h2>Hi, my name is Jimmy</h2>
          <h1>
            I am an aspiring web developer with passion to learn and build web
            applications
          </h1>
        </div>
        <div className={styles.item}>
          <img src={img} className={styles.photo} alt="Jimmy" />
          <div className={styles.icons}>
            <GrLinkedin size="3rem" />
            <BsGithub size="3rem" />
            <FiMail size="3rem" />
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.logos}>
          {LogoList.map((elem, index) => {
            return (
              <Logos
                key={index}
                title={elem.title}
                logo={elem.logo}
                color={elem.class}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
