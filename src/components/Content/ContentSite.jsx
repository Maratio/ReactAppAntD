import React from "react";
import classes from "./ContentSite.module.css";
import { Layout } from "antd";
import ListCardsTrip from "../ListCardsTrip/ListCardsTrip";

const { Content } = Layout;

export const ContentSite = () => {
  return (
    <Content className={classes.content}>
      <ListCardsTrip/>
    </Content>
  );
};
