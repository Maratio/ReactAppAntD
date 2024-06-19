import React from "react";
import classes from "./MenuHeader.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const MenuHeader = ({ items }) => {
  const cnMenu = cn(classes.menu);
  return (
    <ul className={cnMenu}>
      {items.map((item) => (
        <li key={item.name} className={classes.item}>
          <Link className={classes.link} to={item.url}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuHeader;
