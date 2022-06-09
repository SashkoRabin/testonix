import React from 'react';
import cl from '../Todo.module.css';

export default function TodoItemView(props) {
  return (
    <div
      className={props.wrapperClassName || 'todo__item'}
      draggable="true"
      onDragStart={(e) => props.dragStart(e, props.todo)}
      onDragOver={props.dragOver}
      onDrop={(e) => props.dragDrop(e, props.todo)}
      onClick={props.clickHandler}
    >
      <input
        type="checkbox"
        name="todoCompleted"
        id="todoCompleted"
        value={props.todo.id}
        onChange={(e) => props.setTodoCompleted(+e.target.value)}
      />
      <span>
        {props.todo.id}. {props.todo.title}
      </span>
      <span className={cl.todo__user}>
        {props.todo.user.name} {props.todo.user.surname}
      </span>
      <button
        value={props.todo.id}
        onClick={(e) => props.deleteTodoById(+e.target.value)}
        className={cl.todo__deleteButton}
      >
        Delete
      </button>
      <button
        value={props.todo.id}
        onClick={(e) => props.editTodoById(+e.target.value)}
        className={cl.todo__editButton}
      >
        Edit
      </button>
      <span className={cl.hotkey}>{props.todo.hotkey}</span>
    </div>
  );
}
