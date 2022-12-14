import { useContext, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Background from "../components/Background";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const { contactClass, setContactClass } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === "/contact") {
      setContactClass(true);
    }
  }, [contactClass, location.pathname]);

  return (
    <>
      <Background />
      <section className={styles.container}>
        <div className={styles.body}>
          <div className={styles.left}>
            <ContactInfo icon={<MdEmail />} text="jim.culers@gmail.com" />
            <ContactInfo icon={<MdLocationOn />} text="Hong Kong" />
            <ContactInfo
              icon={<HiOutlineIdentification />}
              text="Hong Kong Permanent Resident"
            />
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
