import React from "react";
import { Menu } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const MenuSite = ({ selectedMenuItem }) => {
  const items = [
    {
      key: "1",
      icon: (
        <PieChartOutlined
          // onClick={() => {
          //   selectedMenuItem("Путешествия");
          // }}
        />
      ),
      label: "Путешествия",
      onClick: () => selectedMenuItem("Путешествия")
    },
    {
      key: "2",
      icon: (
        <DesktopOutlined
          // onClick={() => {
          //   selectedMenuItem("Отзывы");
          // }}
        />
      ),
      label: "Отчеты",
      onClick: () => selectedMenuItem("Отчеты")

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
