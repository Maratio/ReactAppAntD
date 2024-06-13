import React from "react";
import classes from "./HeaderSite.module.css"; //почемуто не работает
import { Layout } from "antd";

const { Header } = Layout;

export const HeaderSite = () => {
  return (
    <Header className={classes.header}>
      <h1>Путешествуй по нашим маршрутам</h1>
    </Header>
  );
};
