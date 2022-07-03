/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import cl from './Navbar.module.css';

function Navbar() {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
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
      <div title="Change language" className={cl.navbar__lang}>
        <span>
          <i
            data-tooltip="your tooltip message"
            className="fa-solid fa-globe"
          />
          <span
            className={cl.navbar__langItem}
            onClick={() => {
              changeLanguage('ua');
            }}
            role="note"
          >
            UA
          </span>
          <span
            className={cl.navbar__langItem}
            onClick={() => {
              changeLanguage('ru');
            }}
            role="note"
          >
            RU
          </span>
          <span
            className={cl.navbar__langItem}
            onClick={() => {
              changeLanguage('en');
            }}
            role="note"
          >
            EN
          </span>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
