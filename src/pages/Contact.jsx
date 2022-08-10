import React from "react";
import styles from "../styles/Contact.module.scss";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { MdEmail, MdLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <section className={styles.container}>
      <h1>Get in touch</h1>
      <div className={styles.body}>
        <div className={styles.left}>
          <ContactInfo icon={<MdEmail />} text="jim.culers@gmail.com" />
          <ContactInfo icon={<MdLocationOn />} text="Hong Kong" />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
