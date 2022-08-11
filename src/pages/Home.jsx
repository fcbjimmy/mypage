import { useContext } from "react";
import styles from "../styles/Home.module.scss";
import Logos from "../components/Logos";
import Svg from "../components/Svg";
import { LogoList } from "../helpers/LogoList";
import ThemeContext from "../context/ThemeContext";
import { useLocation } from "react-router-dom";
import img from "../assets/profile.png";
import Navbar from "../components/Navbar";
const Home = () => {
  const { setProjectClass } = useContext(ThemeContext);
  const location = useLocation();

  if (location.pathname === "/") {
    setProjectClass(false);
  }

  return (
    <>
      <Navbar />
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
            <img
              src={img}
              className={styles.photo}
              width="250"
              height="250"
              alt="Jimmy"
            />
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
