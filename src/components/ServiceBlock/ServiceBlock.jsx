import React from "react";
import { Service } from "./components";
import { ins1, ins2, ins5, ins3, ins7, ins4, ins6, earth } from "./images";
import styles from "./ServiceBlock.module.css";

const ServiceBlock = () => {
  const data = [
    {
      icon: ins1,
      topText: "ЗАМЕНА",
      bottomText: "ДИСПЛЕЙНОГО МОДУЛЯ",
      price: "60",
    },
    {
      icon: ins2,
      topText: "ЗАМЕНА",
      bottomText: "АККУМУЛЯТОРА",
      price: "25",
    },
    {
      icon: ins3,
      topText: "ЗАМЕНА",
      bottomText: `ЗАДНЕЙ КРЫШКИ`,
      price: "20",
    },
    {
      icon: ins4,
      topText: "ЗАМЕНА",
      bottomText: "ДИНАМИКА",
      price: "15",
    },
    {
      icon: ins5,
      topText: "ЗАМЕНА",
      bottomText: "КАМЕРЫ",
      price: "25",
    },
    {
      icon: ins6,
      topText: "ЧИСТКА",
      bottomText: "ОТ ПЫЛИ/ВЛАГИ",
      price: "40",
    },
    {
      icon: ins7,
      topText: "ПЕРЕПРОШИВКА",
      bottomText: "ОБНОВЛЕНИЕ",
      price: "30",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        СКОЛЬКО СТОЯТ НАШИ{window.outerWidth < 750 && <br />} УСЛУГИ?
      </div>
      {data.map((el) => (
        <Service
          icon={el.icon}
          topText={el.topText}
          bottomText={el.bottomText}
          price={el.price}
        />
      ))}
      <a
        href={
          "https://yandex.by/maps/157/minsk/?ll=27.550118%2C53.892970&mode=poi&poi%5Bpoint%5D=27.549686%2C53.893031&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57157061172&z=18.54"
        }
        target={"_blank"}
        className={styles.link}
      >
        <div className={styles.button}>НАЙТИ НАС НА КАРТЕ</div>
      </a>
      <img src={earth} alt="" className={styles.earth} />
    </div>
  );
};

export default ServiceBlock;
