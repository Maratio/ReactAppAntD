import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MenuSite.module.css";
import cn from "classnames";
import { Menu, Switch } from "antd";
import {
  CompassOutlined,
  CameraOutlined,
  HomeOutlined,
  FormOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import appContext from "../../context/appContext";

const MenuSite = () => {
  const navigate = useNavigate();
  const handleSelectHome = () => navigate("/");
  const handleSelectTrips = () => navigate("/trips");
  const handleSelectPosts = () => navigate("/posts");
  const handleSelectPhotos = () => navigate("/photos");
  const handleSelectComments = () => navigate("/comments");
  const { colorTheme, setColorTheme } = useContext(appContext);
  const cnMenuSite = cn(classes.menu, { [classes.othTheme]: colorTheme });

  const onChange = (checked) => {
    setColorTheme(checked);
  };

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
   
    {
      key: "6",
      icon: <Switch size="small"  onChange={onChange} />,
      label: "Смена стиля",
    },
  ];

  return (
    <Menu
      className={cnMenuSite}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="light"
      items={items}
    />
  );
};

export default MenuSite;
