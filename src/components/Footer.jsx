import styles from "./Footer.module.scss";
import Svg from "./Svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Svg icons={"footer"} />
      <p> &copy; 2022 testing.hello</p>
    </div>
  );
};

export default Footer;
