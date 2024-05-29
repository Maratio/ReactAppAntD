import React from "react";
import classes from './FooterSite.module.css'

import { Layout } from 'antd';

const { Footer } = Layout;


export const FooterSite = () => {
  return (
    <Footer className={classes.footer}>
 <div>Sber React JS course ©{new Date().getFullYear()} Created by Marat Kamalutdinov</div>
    </Footer>
   
  );
};