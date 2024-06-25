import React from "react";
import classes from "./HeaderSite.module.css";
import { Layout } from "antd";
import { Space, Typography } from "antd";
import Logo from "../Logo/Logo";
import MenuHeader from "../Menu/MenuHeader";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

const { Header } = Layout;

const menuHeaderItems = [
  {
    name: "О нас",
    url: "about",
  },
  {
    name: "Контакты",
    url: "contacts",
  },
];

const menuHeaderAuthItems = [
  ...menuHeaderItems,
  {
    name: "Профиль",
    url: "profile",
  },
];

export const HeaderSite = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => auth.signout(() => navigate("/"));

  const userName = auth.user ? auth.user : "Вы гость";

  const linkCaption = auth.user ? "Выйти" : "Войти";

  return (
    <Header className={classes.header}>
      <Logo />
      <Space>
        {auth.user ? (
          <MenuHeader items={menuHeaderAuthItems} />
        ) : (
          <MenuHeader items={menuHeaderItems} />
        )}
        <Typography.Text className={classes.user}>{userName}</Typography.Text>
        {linkCaption === "Войти" ? (
          <Link className={classes.btnLogin} to="/login">
            {linkCaption}
          </Link>
        ) : (
          <Link className={classes.btnLogin} onClick={handleLogout}>
            {linkCaption}
          </Link>
        )}
      </Space>
    </Header>
  );
};
