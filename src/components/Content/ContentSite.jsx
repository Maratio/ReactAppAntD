import React from "react";
import classes from "./ContentSite.module.css";
import { Layout } from "antd";
import ListCardsTrip from "../CardsList/CardsTripList";
import ListCardsPost from "../CardsList/CardsPostList";

const { Content } = Layout;

export const ContentSite = ({ selectComponent }) => {
  function getComponent() {
    switch (selectComponent) {
      case "Маршруты":
        return <ListCardsTrip />;
      case "Отчеты":
        return <ListCardsPost />;
      default:
        return <ListCardsTrip />;
    }
  }

  return <Content className={classes.content}>{getComponent()}</Content>;
};
