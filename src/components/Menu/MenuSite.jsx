import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MenuSite.module.css";
import { Menu } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const MenuSite = () => {
  const navigate = useNavigate()

  const items = [
    {
      key: "1",
      icon: <PieChartOutlined/>,
      label: "Маршруты",
      onClick:() => navigate('/trips'),

    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Заметки",
      onClick:() => navigate('/posts'),
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Фото",
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
