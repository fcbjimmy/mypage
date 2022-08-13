import styles from "./Footer.module.scss";
import Svg from "./Svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Svg icons={"footer"} />
      <p> &copy; 2022 Jimmy Chan</p>
    </div>
  );
};

export default Footer;
