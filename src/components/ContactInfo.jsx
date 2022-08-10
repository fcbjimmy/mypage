import styles from "./ContactInfo.module.scss";

const ContactInfo = ({ icon, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
