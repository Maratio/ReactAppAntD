import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MenuSite.module.css";
import { Menu } from "antd";
import {
  CompassOutlined,
  CameraOutlined,
  HomeOutlined,
  FormOutlined,
} from "@ant-design/icons";

const MenuSite = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Главная",
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      icon: <CompassOutlined />,
      label: "Маршруты",
      onClick: () => navigate("/trips"),
    },
    {
      key: "3",
      icon: <FormOutlined />,
      label: "Заметки",
      onClick: () => navigate("/posts"),
    },
    {
      key: "4",
      icon: <CameraOutlined />,
      label: "Фото",
      onClick: () => navigate("/photos"),

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
