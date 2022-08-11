import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/Projects.module.scss";
import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../helpers/ProjectList";
import ThemeContext from "../context/ThemeContext";
import Navbar from "../components/Navbar";
const Projects = () => {
  const { currentPath, setProjectClass } = useContext(ThemeContext);
  const location = useLocation();

  if (location.pathname === "/projects") {
    setProjectClass(false);
  }

  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.test}>
          {ProjectList.map((elem, indx) => {
            return (
              <ProjectCard
                key={indx}
                name={elem.name}
                title={elem.title}
                technologies={elem.Technologies}
                link={elem.link}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
