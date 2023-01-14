import React from "react";
import { Logo } from "../index";
import gps from "./images/gps.png";
import chat from "./images/chat.png";
import inst from "./images/instagram.png";
import styles from "./FooterBlock.module.css";

const FooterBlock = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.about}>
        <div className={styles.address}>
          <img src={gps} alt="" className={styles.icon} />
          ЛЕНИНГРАДСКАЯ, 5
        </div>
        <div className={styles.contacts}>
          <img src={chat} alt="" className={styles.icon} />
          <div className={styles.phone}>
            <div className={styles.phoneNumber}>+375 (29) 250-99-99</div>
            <div className={styles.text}>ЕСТЬ ВОПРОСЫ? ЗВОНИТЕ!</div>
          </div>
        </div>
      </div>
      <div className={styles.insta}>
        <img src={inst} alt="" className={styles.icon} />
        <a href="#">@CYBERSERVICE.BY</a>
      </div>
    </div>
  );
};

export default FooterBlock;
