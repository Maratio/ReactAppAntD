import React, { useState } from "react";
import { SiderSite } from "../SideBar/SiderSite.jsx";
import { ContentSite } from "../Content/ContentSite.jsx";

const LayoutSiderAndContent = () => {
  const [selectComponent, setSelectComponent] = useState("Маршруты");

  return (
    <>
      <SiderSite/>
      <ContentSite />
    </>
  );
};

export default LayoutSiderAndContent;
