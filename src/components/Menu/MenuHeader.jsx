import React from "react";
import classes from "./MenuHeader.module.css";
import cn from "classnames";

const MenuHeader = ({items}) => {
  const cnMenu = cn(classes.menu);
  return (
    <ul className={cnMenu} >
      {items.map((item) => (
        <li key={item.name} className={classes.item}>
          <a className={classes.link} href={"#privet"}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuHeader;
