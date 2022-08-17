import { useContext } from "react";
import styles from "../styles/Home.module.scss";
import Logos from "../components/Logos";
import Svg from "../components/Svg";
import { LogoList } from "../helpers/LogoList";
import ThemeContext from "../context/ThemeContext";
import { useLocation } from "react-router-dom";
import img from "../assets/profile.png";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  const { setContactClass } = useContext(ThemeContext);
  const location = useLocation();

  if (location.pathname === "/") {
    setContactClass(false);
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.sectionone}>
          <div className={styles.item}>
            <h2>Hello, my name is Jimmy</h2>
            <h1>
              I am an aspiring web developer with passion to learn and build web
              applications
            </h1>
          </div>
          <div className={styles.item}>
            <motion.div
              initial={{ y: "50%", opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={img}
                className={styles.photo}
                width="250"
                height="250"
                alt="Jimmy"
              />
            </motion.div>
            <Svg icons={"home"} />
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
    </>
  );
};

export default Home;
