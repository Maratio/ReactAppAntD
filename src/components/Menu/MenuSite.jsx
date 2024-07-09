import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MenuSite.module.css";
import cn from "classnames";
import { Menu } from "antd";
import {
  CompassOutlined,
  CameraOutlined,
  HomeOutlined,
  FormOutlined,
  MessageOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeColorThemeAction } from "../../store/actions/changeColorThemeAction";

const MenuSite = () => {
  const navigate = useNavigate();
  const handleSelectHome = () => navigate("/");
  const handleSelectTrips = () => navigate("/trips");
  const handleSelectPosts = () => navigate("/posts");
  const handleSelectPhotos = () => navigate("/photos");
  const handleSelectComments = () => navigate("/comments");

  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.themeReducer.colorTheme);
  const cnMenuSite = cn(classes.menu, classes[`${colorTheme}`]);

  const handleChangeWhite = () => {
    dispatch(changeColorThemeAction("white"));
  };

  const handleChangeAqua = () => {
    dispatch(changeColorThemeAction("aqua"));
  };

  const handleChangeOrange = () => {
    dispatch(changeColorThemeAction("orange"));
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
      icon: <FormatPainterOutlined />,
      label: "Смена стиля",
      style: { height: "auto" },
      children: [
        {
          key: "7",
          label: "Стандартный",
          onClick: handleChangeWhite,
        },
        {
          key: "8",
          label: "Аква",
          onClick: handleChangeAqua,
        },
        {
          key: "9",
          label: "Апельсин",
          onClick: handleChangeOrange,
        },
      ],
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
