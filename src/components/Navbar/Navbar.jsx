import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <Link className={cl.navbar__linkItem} to="/">
        Main
      </Link>
      <Link className={cl.navbar__linkItem} to="/cakes">
        Cakes
      </Link>
      <Link className={cl.navbar__linkItem} to="/todo">
        Todo
      </Link>
    </div>
  );
};

export default Navbar;
