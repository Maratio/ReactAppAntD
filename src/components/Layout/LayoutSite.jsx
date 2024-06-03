import React, { useState } from "react";
import { HeaderSite } from "../Header/HeaderSite.jsx";
import { SiderSite } from "../SideBar/SiderSite.jsx";
import { ContentSite } from "../Content/ContentSite.jsx";
import { FooterSite } from "../Footer/FooterSite.jsx";
import { Flex, Layout } from "antd";

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
          <SiderSite/>
          <ContentSite/>
        </Layout>
        <FooterSite />
      </Layout>
    </Flex>
  );
};
