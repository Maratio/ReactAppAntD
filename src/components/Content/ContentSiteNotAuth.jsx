import React from 'react';
import classes from './ContentSiteNotAuth.module.css'
import { Outlet } from 'react-router-dom';

const ContentSiteNotAuth = () => {
    return (
        <div className={classes.content}>
           <h2>Чтобы погрузиться в удивительный мир наших Маршрутов, пожалуйста Авторизируйтесь!</h2> 
           <br />
           <h2>После авторизации Вам будут доступны разделы Меню слева</h2>
        </div>
    );
};

export default ContentSiteNotAuth;