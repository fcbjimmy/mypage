import React from "react";
import styles from "../styles/Projects.module.scss";
import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../helpers/ProjectList";

const Projects = () => {
  return (
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
  );
};

export default Projects;
