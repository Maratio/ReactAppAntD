import React from 'react';
import { Menu } from "antd";
import {
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
  } from "@ant-design/icons";

const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Option 1",
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Option 2",
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Option 3",
    },
    {
      key: "4",
      icon: <MailOutlined />,
      label: "Option 4",
    },
  ];

const MenuSite = () => {
    return (
        <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        items={items}
      />
    );
};

export default MenuSite;