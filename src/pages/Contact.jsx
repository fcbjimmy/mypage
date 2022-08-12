import { useContext, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Background from "../components/Background";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const { projectClass, setProjectClass } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact") {
      setProjectClass(true);
    }
  }, [projectClass]);

  return (
    <>
      <Background />
      <section className={styles.container}>
        <div className={styles.body}>
          <div className={styles.left}>
            <ContactInfo icon={<MdEmail />} text="jim.culers@gmail.com" />
            <ContactInfo icon={<AiOutlineMobile />} text="6625-7711" />
            <ContactInfo icon={<MdLocationOn />} text="Hong Kong" />
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
