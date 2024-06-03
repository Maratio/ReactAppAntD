import React, { useState } from "react";
import {BtnMenuSite} from '../UI/Button/BtnMenuSite.jsx'
import { Layout } from "antd";
import MenuSite from "../Menu/MenuSite.jsx";

const { Sider } = Layout;

const siderStyle = {
  textAlign: "center",
  color: "#fff",
  outerWidth: "10px",
  backgroundColor: "#76808e",
  position: "sticky",
};

export const SiderSite = () => {
  const [collapsed, setCollapsed] = useState(true);
  // console.log(typeof setCollapsed)
  const handlerCollapsed = () => setCollapsed(!collapsed)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
      <div style={{ width: "auto" }}>
        <BtnMenuSite handlerCollapsed={handlerCollapsed} collapsed={collapsed} />
        <MenuSite/>
      </div>
    </Sider>
  );
};
