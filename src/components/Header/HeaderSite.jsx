import React from "react";
import classes from "./HeaderSite.module.css";
import { Layout } from "antd";
import { Button, Space, Typography } from "antd";
import { useState } from "react";
import Logo from "../Logo/Logo";
import MenuHeader from "../Menu/MenuHeader";
import ModalLogin from "../UI/Modal/ModalLogin";

const { Header } = Layout;

const menuItems = [
  {
    name: "О нас",
    url: "about",
  },
  {
    name: "Контакты",
    url: "contacts",
  },
  {
    name: "FAQ",
    url: "faq",
  },
];

export const HeaderSite = ({ authUser, onLogin, onLogout }) => {
  const userName = authUser
    ? `${authUser.firstName} ${authUser.lastName}`
    : "Вы гость";

  const buttonCaption = authUser ? "Выйти" : "Войти";

  const [openModalLogin, setOpenModalLogin] = useState(false);

  function handleLoginLogout(e) {
    if (authUser) {
      onLogout();
    } else {
      setOpenModalLogin(true);
    }
  }

  function handleLogin(e) {
    onLogin(e.userName, e.password);
    setOpenModalLogin(false);
  }

  return (
    <Header className={classes.header}>
      <Logo />
      <Space>
        <MenuHeader items={menuItems} />
        <Typography.Text className={classes.user}>{userName}</Typography.Text>
        <Button
          className={classes.btnLogin}
          type="primary"
          onClick={handleLoginLogout}
        >
          {buttonCaption}
        </Button>
      </Space>
      <ModalLogin
        open={openModalLogin}
        handleLogin={handleLogin}
        onCancel={() => setOpenModalLogin(false)}
      />
    </Header>
  );
};
