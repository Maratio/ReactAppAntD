import React from "react";
import classes from "./ContentSite.module.css";
import { Layout } from "antd";
import CardsTripList from "../CardsList/CardsTripList";
import CardsPostList from "../CardsList/CardsPostList";

const { Content } = Layout;

export const ContentSite = ({ selectComponent }) => {
  function getComponent() {
    switch (selectComponent) {
      case "Маршруты":
        return <CardsTripList />;
      case "Отчеты":
        return <CardsPostList />;
      default:
        return <CardsTripList />;
    }
  }

  return <Content className={classes.content}>{getComponent()}</Content>;
};
