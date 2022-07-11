import { useState } from "react";
import { Menu } from "antd";

import items from "./items";
import "./Header.module.css";

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="Header">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Header;
