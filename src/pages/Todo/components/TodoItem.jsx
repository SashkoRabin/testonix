/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemView from './TodoItemView';

export default function TodoItem({
  todo,
  setTodoCompleted,
  deleteTodoById,
  editTodoById,
  setActiveTodo,
}) {
  const [wrapperClassName, setWrapperClassName] = useState('todo__item');
  const clickHandler = async () => {
    await setActiveTodo(todo.id);
  };
  useEffect(() => {
    todo.active
      ? setWrapperClassName('todo__item active')
      : setWrapperClassName('todo__item');
  }, [todo.active]);
  return (
    <TodoItemView
      todo={todo}
      setTodoCompleted={setTodoCompleted}
      deleteTodoById={deleteTodoById}
      editTodoById={editTodoById}
      wrapperClassName={wrapperClassName}
      clickHandler={clickHandler}
    />
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  setTodoCompleted: PropTypes.func,
  deleteTodoById: PropTypes.func,
  editTodoById: PropTypes.func,
};
