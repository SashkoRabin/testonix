import React, { useState, useEffect } from 'react';
import cl from '../Todo.module.css';
import PropTypes from 'prop-types';

export default function SettingBar({ setSortIndex }) {
  const [sortValue, setSortValue] = useState(1);

  useEffect(() => {
    setSortIndex((prev) => (prev = sortValue));
  }, [sortValue, setSortIndex]);

  const changeSortIndex = (e) => {
    setSortValue(+e.target.value);
  };
  return (
    <div>
      <label htmlFor="sortSelect">Сортировка</label>
      <select
        value={sortValue}
        className={cl.todo__sortSelect}
        name=""
        id="sortSelect"
        onChange={changeSortIndex}
      >
        <option value="default" disabled>
          Выберите параметр сортировки
        </option>
        <option value="1">ID</option>
        <option value="2">Title</option>
        <option value="3">Name</option>
      </select>
    </div>
  );
}

SettingBar.propTypes = {
  setSortIndex: PropTypes.func,
};
