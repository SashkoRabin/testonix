import React from 'react';
import PropTypes from 'prop-types';
import TodoItemView from './TodoItemView';

export default function TodoItem(props) {
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

  return (
    <TodoItemView
      todo={todo}
      setTodoCompleted={setTodoCompleted}
      deleteTodoById={deleteTodoById}
      editTodoById={editTodoById}
      clickHandler={clickHandler}
      dragDrop={dragDrop}
      dragOver={dragOver}
      dragStart={dragStart}
    />
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    hotkey: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setTodoCompleted: PropTypes.func.isRequired,
  deleteTodoById: PropTypes.func.isRequired,
  editTodoById: PropTypes.func.isRequired,
  dragDrop: PropTypes.func.isRequired,
  dragOver: PropTypes.func.isRequired,
  setActiveTodo: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
};
