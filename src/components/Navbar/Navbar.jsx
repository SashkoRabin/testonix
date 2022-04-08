import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <Link className={cl.navbar__linkItem} to="*">
        Main
      </Link>
      <a
        className={cl.navbar__linkItem}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/SashkoRabin"
      >
        GitHub
      </a>
      <Link className={cl.navbar__linkItem} to="*">
        Something useful
      </Link>
    </div>
  );
};

export default Navbar;
