import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__linkItem" to="*">
        Main
      </Link>
      <a
        className="navbar__linkItem"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/SashkoRabin"
      >
        GitHub
      </a>
      <Link className="navbar__linkItem" to="*">
        Something useful
      </Link>
    </div>
  );
};

export default Navbar;
