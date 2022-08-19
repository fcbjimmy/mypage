import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import Navbar from "../components/Navbar";
import styles from "../styles/ProjectDisplay.module.scss";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  console.log(project);
  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <h1>{project.title}</h1>
        <div className={styles.skills}>
          {project.technologies.map((elem, indx) => {
            return (
              <div className={styles.description}>
                <p key={indx}>{elem}</p>
              </div>
            );
          })}
        </div>
        {project.screenshots.map((obj, indx) => (
          <div key={indx}>
            <img className={styles.screenshots} src={obj.img} alt={obj.alt} />
          </div>
        ))}
        <a href={project.link} target="_blank" rel="noreferrer">
          <p className={styles.git}>View Source Code</p>
        </a>
      </section>
    </>
  );
};

export default ProjectDisplay;
