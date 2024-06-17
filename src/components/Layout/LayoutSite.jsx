import React from "react";
import classes from "../Content/ContentSite.module.css";
import { HeaderSite } from "../Header/HeaderSite.jsx";
import { FooterSite } from "../Footer/FooterSite.jsx";
import { Flex, Layout } from "antd";
// import LayoutSiderAndContent from "./LayoutSiderAndContent.jsx";
import { Outlet } from "react-router-dom";
import { SiderSite } from "../SideBar/SiderSite.jsx";
import { Content } from "antd/es/layout/layout.js";
// import { ContentSite } from "../Content/ContentSite.jsx";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100vw",
  maxWidth: "100vw",
  height: "auto",
};

export const LayoutSite = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
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
