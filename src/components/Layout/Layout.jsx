import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <Link className="navbar-item" to="/">
          Home
        </Link>

        <Link className="navbar-item" to="/form">
          Formulario
        </Link>

        <Link className="navbar-item" to="/effect">
          useEffect
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
