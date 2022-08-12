import { useState, useRef } from "react";
import Button from "./Button";
import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        "12324",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <div className={styles.form}>
        <h1>Send Message</h1>
        <div className={styles.group}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" name="message" required />
        </div>
        <div className={styles.but}>
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
