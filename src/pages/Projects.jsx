import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/Projects.module.scss";
import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../helpers/ProjectList";
import ThemeContext from "../context/ThemeContext";
import Navbar from "../components/Navbar";
const Projects = () => {
  const { setContactClass } = useContext(ThemeContext);
  const location = useLocation();

  if (location.pathname === "/projects") {
    setContactClass(false);
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
                id={indx}
                name={elem.name}
                title={elem.title}
                technologies={elem.technologies}
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
