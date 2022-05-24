/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemView from './TodoItemView';

export default function TodoItem(props) {
  const [wrapperClassName, setWrapperClassName] = useState('todo__item');
  const clickHandler = async () => {
    await props.setActiveTodo(props.todo.id);
  };
  useEffect(() => {
    props.todo.active
      ? setWrapperClassName('todo__item active')
      : setWrapperClassName('todo__item');
  }, [props.todo.active]);

  return (
    <TodoItemView
      todo={props.todo}
      setTodoCompleted={props.setTodoCompleted}
      deleteTodoById={props.deleteTodoById}
      editTodoById={props.editTodoById}
      wrapperClassName={wrapperClassName}
      clickHandler={clickHandler}
      dragDrop={props.dragDrop}
      dragOver={props.dragOver}
      dragStart={props.dragStart}
    />
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  setTodoCompleted: PropTypes.func,
  deleteTodoById: PropTypes.func,
  editTodoById: PropTypes.func,
};
