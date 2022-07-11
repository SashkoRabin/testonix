import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import cl from '../Todo.module.css';
import SettingBar from './SettingBar';
import Input from './Input';
import TodoItem from './TodoItem';

export default function TodoBodyView(props) {
  const { t } = useTranslation();
  const { titleValue, setTitleValue } = props;
  const { nameValue, setNameValue } = props;
  const { surnameValue, setSurnameValue } = props;
  const { todos, newTodo, submitEditTodoById } = props;
  const { isDisabled } = props;
  const {
    setSortIndex,
    setTodos,
    setTodoCompleted,
    deleteTodoById,
    editTodoById,
    setActiveTodo,
    dragDrop,
    dragStart,
    dragOver,
  } = props;

  return (
    <div className={cl.todo__body}>
      <div className={cl.todo__formWrapper}>
        <div className={cl.todo__form}>
          <Input
            value={titleValue}
            inputId="todo__title"
            setValue={setTitleValue}
            text={t('enter_todo_title')}
          />
          <Input
            value={nameValue}
            inputId="todo__name"
            setValue={setNameValue}
            text={t('enter_your_name')}
          />
          <Input
            value={surnameValue}
            inputId="todo__surname"
            setValue={setSurnameValue}
            text={t('enter_your_surname')}
          />

          <button
            type="button"
            className={cl.create__btn}
            onClick={newTodo}
          >
            {t('create_new_todo')}
          </button>
          <button
            type="button"
            className={cl.save__btn}
            disabled={isDisabled}
            onClick={() => submitEditTodoById()}
          >
            {t('save')}
          </button>
        </div>
      </div>
      <div className={cl.todos__container}>
        <SettingBar setSortIndex={setSortIndex} />
        {todos.length ? (
          todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              setTodos={setTodos}
              setTodoCompleted={setTodoCompleted}
              deleteTodoById={deleteTodoById}
              editTodoById={editTodoById}
              setActiveTodo={setActiveTodo}
              dragDrop={dragDrop}
              dragStart={dragStart}
              dragOver={dragOver}
            />
          ))
        ) : (
          <h3 className={cl.todo__nothing}>{t('todo_list_empty')}</h3>
        )}
      </div>
    </div>
  );
}

TodoBodyView.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  titleValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  surnameValue: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.any).isRequired,
  setTitleValue: PropTypes.func.isRequired,
  setNameValue: PropTypes.func.isRequired,
  setSurnameValue: PropTypes.func.isRequired,
  newTodo: PropTypes.func.isRequired,
  submitEditTodoById: PropTypes.func.isRequired,
  setSortIndex: PropTypes.func.isRequired,
  setActiveTodo: PropTypes.func.isRequired,
  setTodoCompleted: PropTypes.func.isRequired,
  deleteTodoById: PropTypes.func.isRequired,
  editTodoById: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
  dragDrop: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
  dragOver: PropTypes.func.isRequired,
};
