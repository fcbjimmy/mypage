import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styles from "./Svg.module.scss";

const Svg = ({ icons }) => {
  return (
    <div className={styles[icons]}>
      <GrLinkedin size="3rem" />
      <BsGithub size="3rem" />
      <FiMail size="3rem" />
    </div>
  );
};

export default Svg;
