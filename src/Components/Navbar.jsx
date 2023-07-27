import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Home",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "About",
    key: "app",
    icon: <AppstoreOutlined />
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      // theme="dark"
      className="mt-10"
    />
  );
};
export default Navbar;
