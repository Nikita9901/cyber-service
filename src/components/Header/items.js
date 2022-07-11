import { NavLink } from "react-router-dom";
import {
  DollarOutlined,
  DownOutlined,
  HomeOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: <NavLink to="/">Главная</NavLink>,
    key: "main",
    icon: <HomeOutlined />,
  },
  {
    label: "О компании",
    key: "SubMenuAbout",
    icon: <DownOutlined />,
    children: [
      {
        label: "Сотрудничество",
        key: "About_two",
      },
      {
        label: "For vendors only",
        key: "About_three",
      },
      {
        label: "Отзывы клиентов",
        key: "About_four",
      },
      {
        label: "Вакансии",
        key: "About_five",
      },
      {
        label: "Новости",
        key: "About_six",
      },
      {
        label: "Контакты",
        key: "About_seven",
      },
    ],
  },
  {
    label: "Ремонт мобильных телефонов",
    key: "SubMenuRepair",
    icon: <DownOutlined />,
    children: [
      {
        label: "Экспресс ремонт",
        key: "Repair_two",
      },
      {
        label: "Ремонт Samsung",
        key: "Repair_three",
      },
      {
        label: "Ремонт Apple",
        key: "Repair_four",
      },
      {
        label: "Ремонт Xiaomi",
        key: "Repair_five",
      },
      {
        label: "Ремонт HTC",
        key: "Repair_six",
      },
      {
        label: "Ремонт Huawei",
        key: "Repair_seven",
      },
      {
        label: "Расчет ремонта",
        key: "Repair_eight",
      },
    ],
  },
  {
    label: "Сертификаты",
    key: "SubMenuCertificates",
    icon: <DownOutlined />,
    children: [
      {
        label: "Негарантийный ремонт",
        key: "Certificates_two",
      },
      {
        label: "Исправный телефон",
        key: "Certificates_three",
      },
      {
        label: "Дисплей OK",
        key: "Certificates_four",
      },
      {
        label: "Оптом для юр. лиц",
        key: "Certificates_five",
      },
      {
        label: "Регистрация сертификата",
        key: "Certificates_six",
      },
      {
        label: "Все программы",
        key: "Certificates_seven",
      },
    ],
  },
  {
    label: <NavLink to="/payment">Оплата</NavLink>,
    key: "payment",
    icon: <DollarOutlined />,
  },
  {
    label: "Защитное покрытие",
    key: "defender",
    icon: <MobileOutlined />,
  },
  {
    label: "Ещё",
    key: "SubMenuMore",
    icon: <DownOutlined />,
    children: [
      {
        label: "Выгодно защити свой смартфон",
        key: "More_two",
      },
      {
        label: "Новости",
        key: "More_three",
      },
      {
        label: "Белгосстрах",
        key: "More_four",
      },
      {
        label: "Сотрудничество",
        key: "SubMenuCoop",
        children: [
          {
            label: "Партнеры",
            key: "More_Coop_two",
          },
          {
            label: "Оптом для юр.лиц",
            key: "More_Coop_three",
          },
          {
            label: "For vendors only",
            key: "More_Coop_four",
          },
          {
            label: "Белгосстрах",
            key: "More_Coop_five",
          },
        ],
      },
      {
        label: "Заберем и привезем",
        key: "More_six",
      },
      {
        label: "Контакты",
        key: "More_seven",
      },
      {
        label: "Акции На Связи",
        key: "More_eight",
      },
    ],
  },
];
export default items;
