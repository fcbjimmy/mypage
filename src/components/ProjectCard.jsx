import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ id, name, title, technologies, link }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div
        className={styles[`${name}`]}
        onClick={() => {
          navigate("/projects/" + id);
        }}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.skills}>
        {technologies.map((elem, indx) => {
          return (
            <div className={styles.description} key={indx}>
              <p>{elem}</p>
            </div>
          );
        })}
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <BsGithub className={styles.gitIcon} />
      </a>
    </div>
  );
};

export default ProjectCard;
