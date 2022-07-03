/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import cl from '../Wrapper.module.css';

// eslint-disable-next-line object-curly-newline
export default function Menu({ day, prefix, month, year }) {
  const { t } = useTranslation();
  return (
    <div className={cl.menu}>
      <div className={cl.menu_coffee} />
      <div className={cl.menu_text}>
        <h2>{t('todays_menu')}</h2>
        <p className={cl.menu_date}>
          {`${day}${prefix} ${month} ${year}`}
        </p>
        <p className={cl.menu_dish}>{t('menu')}</p>
        <div className={cl.menu_line} />
        <a href="*" className={cl.menu_view}>
          {t('view_menu')}
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
