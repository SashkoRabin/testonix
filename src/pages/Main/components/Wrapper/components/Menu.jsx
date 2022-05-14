import React from 'react';
import cl from '../Wrapper.module.css';
import PropTypes from 'prop-types';

export default function Menu({ day, prefix, month, year }) {
  return (
    <div className={cl.menu}>
      <div className={cl.menu_coffee}></div>
      <div className={cl.menu_text}>
        <h2>Today`s Menu</h2>
        <p className={cl.menu_date}>
          {day + prefix + ' ' + month + ' ' + year}
        </p>
        <p className={cl.menu_dish}>
          Delight in three layers of cake paired with two generous layers of
          filling. DeEtta's uses real buttercream, offers a variety of flavors
          and fillings, and tailors everything — from taste to design — to your
          personal preferences.
        </p>
        <div className={cl.menu_line}></div>
        <a href="*" className={cl.menu_view}>
          view menu
        </a>
      </div>
      <div className={cl.menu_food}></div>
    </div>
  );
}

Menu.propTypes = {
  day: PropTypes.number,
  year: PropTypes.number,
  prefix: PropTypes.string,
  month: PropTypes.string,
};
