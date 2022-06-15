/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import cl from '../Wrapper.module.css';

// eslint-disable-next-line object-curly-newline
export default function Menu({ day, prefix, month, year }) {
  return (
    <div className={cl.menu}>
      <div className={cl.menu_coffee} />
      <div className={cl.menu_text}>
        <h2>Today`s Menu</h2>
        <p className={cl.menu_date}>{`${day}${prefix} ${month} ${year}`}</p>
        <p className={cl.menu_dish}>
          Delight in three layers of cake paired with two generous layers of
          filling. DeEtta's uses real buttercream, offers a variety of flavors
          and fillings, and tailors everything — from taste to design — to your
          personal preferences.
        </p>
        <div className={cl.menu_line} />
        <a href="*" className={cl.menu_view}>
          view menu
        </a>
      </div>
      <div className={cl.menu_food} />
    </div>
  );
}

Menu.propTypes = {
  day: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  prefix: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
};
