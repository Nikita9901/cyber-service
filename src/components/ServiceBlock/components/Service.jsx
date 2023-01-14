import React from "react";
import styles from "./Service.module.css";

const Service = ({ icon, topText, bottomText, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBlock}>
        <img src={icon} alt="" className={styles.icon} />
      </div>
      <div className={styles.text}>
        <div className={styles.topText}>{topText}</div>
        <div className={styles.bottomText}>{bottomText}</div>
      </div>
      <div className={styles.price}> ОТ {price} РУБ.</div>
    </div>
  );
};

export default Service;
