import logo from "./images/img_1.png";
import styles from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <div className={styles.contactsContainer}>contacts</div>
      <div className={styles.locateContainer}>location</div>
    </div>
  );
};

export default AboutCompany;
