import React from 'react';
import cl from '../Todo.module.css';

export default function TodoItemView({
  todo,
  setTodoCompleted,
  deleteTodoById,
  editTodoById,
  wrapperClassName,
  clickHandler,
}) {
  return (
    <div className={wrapperClassName || 'todo__item'} onClick={clickHandler}>
      <input
        type="checkbox"
        name="todoCompleted"
        id="todoCompleted"
        value={todo.id}
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
      <span className={cl.hotkey}>{todo.hotkey}</span>
    </div>
  );
}
