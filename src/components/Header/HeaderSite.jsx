import React from "react";
import classes from "./HeaderSite.module.css";
import { Layout } from "antd";
import { Button, Space, Typography } from "antd";
import Logo from "../Logo/Logo";
import MenuHeader from "../Menu/MenuHeader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../castomHooks/useAuth";

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

  const userName = auth.user ? auth.user : "Вы гость";

  const buttonCaption = auth.user ? "Выйти" : "Войти";

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
        {buttonCaption === "Войти" ? (
          <Button
            className={classes.btnLogin}
            type="primary"
            onClick={() => navigate("/login")}
          >
            {buttonCaption}
          </Button>
        ) : (
          <Button
            className={classes.btnLogin}
            type="primary"
            onClick={() => auth.signout(() => navigate("/login"))}
          >
            {buttonCaption}
          </Button>
        )}
      </Space>
    </Header>
  );
};
