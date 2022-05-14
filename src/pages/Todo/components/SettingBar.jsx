import React, { useRef } from 'react';
import cl from '../Todo.module.css';
import PropTypes from 'prop-types';

export default function SettingBar({ setSortIndex }) {
  const selectSort = useRef('');

  const sel = () => {
    setSortIndex(
      (prev) =>
        (prev =
          +selectSort.current.options[selectSort.current.selectedIndex].value)
    );
  };
  return (
    <div>
      <label htmlFor="sortSelect">Сортировка</label>
      <select
        ref={selectSort}
        className={cl.todo__sortSelect}
        name=""
        id="sortSelect"
        onChange={sel}
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
