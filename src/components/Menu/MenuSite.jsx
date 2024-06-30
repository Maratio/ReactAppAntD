import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MenuSite.module.css";
import { Menu } from "antd";
import {
  CompassOutlined,
  CameraOutlined,
  HomeOutlined,
  FormOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const MenuSite = () => {
  const navigate = useNavigate();
  const handleSelectHome = () => navigate("/");
  const handleSelectTrips = () => navigate("/trips");
  const handleSelectPosts = () => navigate("/posts");
  const handleSelectPhotos = () => navigate("/photos");
  const handleSelectComments = () => navigate("/comments");

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Главная",
      onClick: handleSelectHome,
    },
    {
      key: "2",
      icon: <CompassOutlined />,
      label: "Маршруты",
      onClick: handleSelectTrips,
    },
    {
      key: "3",
      icon: <FormOutlined />,
      label: "Заметки",
      onClick: handleSelectPosts,
    },
    {
      key: "4",
      icon: <MessageOutlined />,
      label: "Отзывы на Заметки",
      onClick: handleSelectComments,
    },
    {
      key: "5",
      icon: <CameraOutlined />,
      label: "Фото",
      onClick: handleSelectPhotos,
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
