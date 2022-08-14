import styles from "./Background.module.scss";
import Navbar from "../components/Navbar";
import { Parallax } from "react-parallax";
import hongkong from "../assets/HK.jpg";

const Background = () => {
  return (
    <>
      <Parallax
        className={styles.bgimage}
        bgImage={hongkong}
        bgImageAlt="hong kong"
        strength={400}
      >
        <div className={styles.content}>
          <h1>Get in touch</h1>
        </div>
      </Parallax>
    </>
  );
};

export default Background;
