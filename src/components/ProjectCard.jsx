import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const ProjectCard = ({ id, name, title, technologies, link, live }) => {
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
              <p className={styles.descrip}>{elem}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.icons}>
        <a href={link} target="_blank" rel="noreferrer">
          <BsGithub className={styles.gitIcon} />
        </a>
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            <BsLink45Deg className={styles.gitIcon} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
