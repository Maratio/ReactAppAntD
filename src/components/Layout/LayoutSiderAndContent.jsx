import React, { useState } from "react";
import { SiderSite } from "../SideBar/SiderSite.jsx";
import { ContentSite } from "../Content/ContentSite.jsx";

const LayoutSiderAndContent = () => {
  const [selectComponent, setSelectComponent] = useState("Маршруты");

  const selectedSiderMenuItem = (name) => {
    setSelectComponent(name);
  };

  return (
    <>
      <SiderSite selectedSiderMenuItem={selectedSiderMenuItem} />
      <ContentSite selectComponent={selectComponent} />
    </>
  );
};

export default LayoutSiderAndContent;
