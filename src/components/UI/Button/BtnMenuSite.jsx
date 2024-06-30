import React from "react";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const BtnMenuSite = ({ collapsed, handlerCollapsed }) => {
  return (
    <Button
      type="primary"
      onClick={handlerCollapsed}
      style={{
        bottom: 34,
      }}
    >
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
  );
};
