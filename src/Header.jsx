import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ textAlign: 'center', padding: '2rem 0', borderBottom: '1px solid #ccc' }}>
      <h1><Link to="/new" style={{ textDecoration: 'none', color: '#000' }}>Создать пост</Link></h1>
    </header>
  );
}

export default Header;