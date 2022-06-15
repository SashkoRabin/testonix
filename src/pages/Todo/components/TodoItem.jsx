/* eslint-disable object-curly-newline */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemView from './TodoItemView';

export default function TodoItem(props) {
  const [wrapperClassName, setWrapperClassName] = useState('todo__item');
  const {
    todo,
    setActiveTodo,
    setTodoCompleted,
    deleteTodoById,
    editTodoById,
  } = props;
  const { dragDrop, dragOver, dragStart } = props;
  const clickHandler = async () => {
    await setActiveTodo(todo.id);
  };
  useEffect(() => {
    if (todo.active) setWrapperClassName('todo__item active');
    else setWrapperClassName('todo__item');
  }, [todo.active]);

  return (
    <TodoItemView
      todo={todo}
      setTodoCompleted={setTodoCompleted}
      deleteTodoById={deleteTodoById}
      editTodoById={editTodoById}
      wrapperClassName={wrapperClassName}
      clickHandler={clickHandler}
      dragDrop={dragDrop}
      dragOver={dragOver}
      dragStart={dragStart}
    />
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape.isRequired,
  setTodoCompleted: PropTypes.func.isRequired,
  deleteTodoById: PropTypes.func.isRequired,
  editTodoById: PropTypes.func.isRequired,
  dragDrop: PropTypes.func.isRequired,
  dragOver: PropTypes.func.isRequired,
  setActiveTodo: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
};
