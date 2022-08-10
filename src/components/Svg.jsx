import { Link } from "react-router-dom";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styles from "./Svg.module.scss";

const Svg = ({ icons }) => {
  return (
    <div className={styles[icons]}>
      <a
        href="https://www.linkedin.com/in/jimmy-chan-lam-cheung-029b71187/"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedin size="3rem" />
      </a>
      <a href="https://github.com/fcbjimmy" target="_blank" rel="noreferrer">
        <BsGithub size="3rem" />
      </a>
      <Link to="/contact">
        <FiMail size="3rem" />
      </Link>
    </div>
  );
};

export default Svg;
