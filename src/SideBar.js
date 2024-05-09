import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css'

function Sidebar() {
  // const location = useLocation();

  return (
    <aside>
      {/*<h2>Сайдбар</h2>*/}
      {/*{location.pathname !== '/' && (*/}
      {/*  <Link to="/" className="btn-back">Назад</Link>*/}
      {/*)}*/}
      {/*<Link to="/new" className="btn-create">Создать новый пост</Link>*/}
    </aside>
  );
}

export default Sidebar;
