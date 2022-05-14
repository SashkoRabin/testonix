import React from 'react';
import cl from '../Todo.module.css';
import PropTypes from 'prop-types';

export default function TodoItem({
  todo,
  setTodoCompleted,
  deleteTodoById,
  editTodoById,
}) {
  return (
    <div className={cl.todo__item}>
      <input
        type="checkbox"
        name="todoCompleted"
        id="todoCompleted"
        value={todo.id}
        // checked={todo.completed}
        onChange={(e) => setTodoCompleted(+e.target.value)}
      />
      <p>
        {todo.id}. {todo.title}
      </p>
      <br />
      <h4>
        {todo.user.name} {todo.user.surname}
      </h4>
      <button
        value={todo.id}
        onClick={(e) => deleteTodoById(+e.target.value)}
        className={cl.todo__deleteButton}
      >
        x
      </button>
      <button
        value={todo.id}
        onClick={(e) => editTodoById(+e.target.value)}
        className={cl.todo__editButton}
      >
        Edit
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  setTodoCompleted: PropTypes.func,
  deleteTodoById: PropTypes.func,
  editTodoById: PropTypes.func,
};
