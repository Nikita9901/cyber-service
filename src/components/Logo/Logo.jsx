import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>CYBERSERVICE</div>
      <div className={styles.fix}>РЕМОНТ ГАДЖЕТОВ</div>
    </div>
  );
};

export default Logo;
