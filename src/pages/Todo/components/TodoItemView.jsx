/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import cl from '../Todo.module.css';

export default function TodoItemView(props) {
  const {
    wrapperClassName,
    dragStart,
    todo,
    dragOver,
    dragDrop,
    clickHandler,
    setTodoCompleted,
    deleteTodoById,
    editTodoById,
  } = props;
  return (
    <div
      role="note"
      className={wrapperClassName || 'todo__item'}
      draggable="true"
      onDragStart={(e) => dragStart(e, todo)}
      onDragOver={dragOver}
      onDrop={(e) => dragDrop(e, todo)}
      onClick={clickHandler}
    >
      <input
        type="checkbox"
        name="todoCompleted"
        id="todoCompleted"
        value={todo.id}
        onChange={(e) => setTodoCompleted(+e.target.value)}
      />
      <span>
        {todo.id}. {todo.title}
      </span>
      <span className={cl.todo__user}>
        {todo.user.name} {todo.user.surname}
      </span>
      <button
        type="button"
        value={todo.id}
        onClick={(e) => deleteTodoById(+e.target.value)}
        className={cl.todo__deleteButton}
      >
        Delete
      </button>
      <button
        type="button"
        value={todo.id}
        onClick={(e) => editTodoById(+e.target.value)}
        className={cl.todo__editButton}
      >
        Edit
      </button>
      <span className={cl.hotkey}>{todo.hotkey}</span>
    </div>
  );
}

TodoItemView.propTypes = {
  wrapperClassName: PropTypes.string.isRequired,
  todo: PropTypes.shape.isRequired,
  setTodoCompleted: PropTypes.func.isRequired,
  deleteTodoById: PropTypes.func.isRequired,
  editTodoById: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
  dragDrop: PropTypes.func.isRequired,
  dragOver: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
};
