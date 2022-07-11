/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import cl from '../Todo.module.css';

export default function SettingBar({ setSortIndex }) {
  const [sortValue, setSortValue] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    setSortIndex(sortValue);
  }, [sortValue, setSortIndex]);

  const changeSortIndex = (e) => {
    setSortValue(+e.target.value);
  };
  return (
    <div>
      <label htmlFor="sortSelect">{t('sort')}</label>
      <select
        value={sortValue}
        className={cl.todo__sortSelect}
        name=""
        id="sortSelect"
        onChange={changeSortIndex}
      >
        <option value="default" disabled>
          {t('sort_opt')}
        </option>
        <option value="1">ID</option>
        <option value="2">Title</option>
        <option value="3">Name</option>
      </select>
    </div>
  );
}

SettingBar.propTypes = {
  setSortIndex: PropTypes.func.isRequired,
};
