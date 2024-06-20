import React from "react";
import classes from "./MenuSite.module.css";
import { Menu } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const MenuSite = ({ selectedMenuItem }) => {
  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Маршруты",
      onClick: () => selectedMenuItem("Маршруты"),
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Заметки",
      onClick: () => selectedMenuItem("Заметки"),
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Option 3",
    },
    {
      key: "4",
      icon: <MailOutlined />,
      label: "Option 4",
    },
  ];

  return (
    <Menu
    className={classes.menu}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="light"
      items={items}
    />
  );
};

export default MenuSite;
