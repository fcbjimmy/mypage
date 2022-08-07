import React from "react";
import styles from "./Home.module.css";
import img from "../assets/Screenshot 2022-08-08 at 12.40.59 AM.png";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sectionone}>
        <div>
          <h2>Hi, my name is Jimmy</h2>
          <h1>
            I am an aspiring web developer with passion to learn and build web
            applications
          </h1>
        </div>
        <div>
          <img src={img} className={styles.photo} />
          <div className={styles.icons}>
            <GrLinkedin />
            <BsGithub />
            <FiMail />
          </div>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
      </section>
    </div>
  );
};

export default Home;
