import React, { useState } from "react";
import classes from "./SiderSite.module.css";
import { BtnMenuSite } from "../UI/Button/BtnMenuSite.jsx";
import { Layout } from "antd";
import MenuSite from "../Menu/MenuSite.jsx";

const { Sider } = Layout;

export const SiderSite = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handlerCollapsed = () => setCollapsed(!collapsed);

  return (
    <Sider
      className={classes.sider}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div style={{ width: "auto" }}>
        <BtnMenuSite
          className={classes["btn-menu"]}
          handlerCollapsed={handlerCollapsed}
          collapsed={collapsed}
        />
        <MenuSite/>
      </div>
    </Sider>
  );
};
