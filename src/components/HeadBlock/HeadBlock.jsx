import React, { useState } from "react";
import { Logo } from "../index";
import gps from "./images/gps.png";
import chat from "./images/chat.png";
import phoneAll from "./images/phoneAll.png";
import styles from "./HeadBlock.module.css";

const HeadBlock = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo />
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
      <div className={styles.aboutBlock}>
        <div className={styles.textAbout}>
          <div className={styles.headerAbout}>
            ОТРЕМОНТИРУЕМ{window.outerWidth < 750 && <br />} УСТРОЙСТВО{" "}
            {window.outerWidth > 750 && <br />} ПРИ ВАС ЗА 30{" "}
            {window.outerWidth < 750 && <br />}МИНУТ!
          </div>
          <div className={styles.placeAbout}>
            РЕМОНТ СМАРТФОНОВ М. ОКТЯБРЬСКАЯ, М. КУПАЛОВСКАЯ,
            <br /> М. ПЛОЩАДЬ ЛЕНИНА
          </div>
          <div className={styles.scheduleAbout}>
            ГРАФИК РАБОТЫ: 10:00 - 19:00 БЕЗ ВЫХОДНЫХ
          </div>
          <div className={styles.buttonBlock}>
            <div
              className={styles.buttonCall}
              onClick={() => {
                setMenuActive(true);
              }}
            >
              БЫСТРАЯ КОНСУЛЬТАЦИЯ
            </div>
            <div className={styles.recall}>ПЕРЕЗВОНИМ ЗА 7 СЕКУНД</div>
          </div>
        </div>
        <img src={phoneAll} alt="" className={styles.phoneImage} />
      </div>
    </div>
  );
};
export default HeadBlock;
