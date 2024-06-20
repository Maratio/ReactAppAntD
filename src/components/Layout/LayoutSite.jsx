import React from "react";
import classes from "../../pages/ContentSite.module.css";
import { HeaderSite } from "../Header/HeaderSite.jsx";
import { FooterSite } from "../Footer/FooterSite.jsx";
import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { SiderSite } from "../SideBar/SiderSite.jsx";
import { Content } from "antd/es/layout/layout.js";

export const LayoutSite = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout className={classes.layout}>
        <HeaderSite />
        <Layout>
          <SiderSite />
          <Content className={classes.content}>
            <Outlet />
          </Content>
        </Layout>
        <FooterSite />
      </Layout>
    </Flex>
  );
};
