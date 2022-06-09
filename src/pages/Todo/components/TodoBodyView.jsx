import React from 'react';
import cl from '../Todo.module.css';
import SettingBar from './SettingBar';
import Input from './Input';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default function TodoBodyView(props) {
  return (
    <div className={cl.todo__body}>
      <div className={cl.todo__formWrapper}>
        <div className={cl.todo__form}>
          <Input
            value={props.titleValue}
            inputId="todo__title"
            setValue={props.setTitleValue}
            text={'Enter Todo Title'}
          />
          <Input
            value={props.nameValue}
            inputId="todo__name"
            setValue={props.setNameValue}
            text={'Enter your name'}
          />
          <Input
            value={props.surnameValue}
            inputId="todo__surname"
            setValue={props.setSurnameValue}
            text={'Enter your surname'}
          />

          <button className={cl.create__btn} onClick={props.newTodo}>
            Create new todo
          </button>
          <button
            className={cl.save__btn}
            disabled={props.isDisabled}
            onClick={() => props.submitEditTodoById()}
          >
            Save
          </button>
        </div>
      </div>
      <div className={cl.todos__container}>
        <SettingBar setSortIndex={props.setSortIndex} />
        {props.todos.length ? (
          props.todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              setTodos={props.setTodos}
              setTodoCompleted={props.setTodoCompleted}
              deleteTodoById={props.deleteTodoById}
              editTodoById={props.editTodoById}
              setActiveTodo={props.setActiveTodo}
              dragDrop={props.dragDrop}
              dragStart={props.dragStart}
              dragOver={props.dragOver}
            />
          ))
        ) : (
          <h3 className={cl.todo__nothing}>Список дел пуст...</h3>
        )}
      </div>
    </div>
  );
}

TodoBodyView.propTypes = {
  isDisabled: PropTypes.bool,
  titleValue: PropTypes.string,
  nameValue: PropTypes.string,
  surnameValue: PropTypes.string,
  todos: PropTypes.array,
  setTitleValue: PropTypes.func,
  setNameValue: PropTypes.func,
  setSurnameValue: PropTypes.func,
  newTodo: PropTypes.func,
  submitEditTodoById: PropTypes.func,
  setSortIndex: PropTypes.func,
  setTodoCompleted: PropTypes.func,
  deleteTodoById: PropTypes.func,
  editTodoById: PropTypes.func,
};
