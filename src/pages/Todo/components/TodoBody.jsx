import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import cl from '../Todo.module.css';
import SettingBar from './SettingBar';
import Input from './Input';

export default function TodoBody() {
  const [titleValue, setTitleValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [sortIndex, setSortIndex] = useState(3);
  const [currentTodo, setCurrentTodo] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [todos, setTodos] = useState([
    // массив из объектов. вложенность есть.
    {
      id: 1,
      title: 'Bread',
      user: { name: 'Alex', surname: 'Merkulov' },
      completed: false,
    },
    {
      id: 2,
      title: 'Milk',
      user: { name: 'Ivan', surname: 'Ivanov' },
      completed: false,
    },
    {
      id: 3,
      title: 'Butter',
      user: { name: 'Vladilen', surname: 'Minin' },
      completed: false,
    },
  ]);

  useEffect(() => {
    sortingFunc(sortIndex);
  }, [sortIndex]);

  const createTodo = (obj) => {
    // добавление в массив
    setTodos((prev) => [...prev, obj]);
  };
  const newTodo = () => {
    //добавление в массив
    if (titleValue && nameValue && surnameValue) {
      const todo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: titleValue,
        user: {
          name: nameValue,
          surname: surnameValue,
        },
        completed: false,
      };
      createTodo(todo);
      setNameValue('');
      setSurnameValue('');
      setTitleValue('');
    }
  };
  const setTodoCompleted = (id) => {
    if (id) {
      const my = todos.filter((item) => item.id === id)[0];
      setTodos((prev) => {
        const arr = [...prev];
        arr[my.id - 1].completed = !arr[my.id - 1].completed;
        return arr;
      });
    }
  };

  const deleteTodoById = (id) => {
    //удаление из массива
    if (id) {
      setTodos((prev) => [...prev].filter((item) => item.id !== id));
    }
  };

  const sortingFunc = (sortIndex) => {
    // сортировка
    if (sortIndex) {
      if (sortIndex === 1) {
        setTodos((prev) => {
          const arr = [...prev];
          for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].id > arr[i + 1].id) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
            }
          }
          return arr;
        });
      }
      if (sortIndex === 2) {
        setTodos((prev) =>
          [...prev].sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          })
        );
      }
      if (sortIndex === 3) {
        setTodos((prev) =>
          [...prev].sort((a, b) => {
            if (a.user.name.toLowerCase() < b.user.name.toLowerCase()) {
              return -1;
            }
            if (a.user.name.toLowerCase() > b.user.name.toLowerCase()) {
              return 1;
            }
            return 0;
          })
        );
      }
    }
  };

  const editTodoById = (id) => {
    if (id) {
      const my = todos.filter((item) => item.id === id)[0];
      const arr = [...todos];
      setNameValue(arr[my.id - 1].user.name);
      setSurnameValue(arr[my.id - 1].user.surname);
      setTitleValue(arr[my.id - 1].title);
      setIsDisabled((prev) => (prev = false));
      setCurrentTodo({
        id,
        title: arr[my.id - 1].title,
        user: {
          name: arr[my.id - 1].user.name,
          surname: arr[my.id - 1].user.surname,
        },
        completed: arr[my.id - 1].completed,
      });
    }
  };
  const submitEditTodoById = () => {
    setTodos((prev) => {
      const ind = currentTodo.id - 1;
      const arr = [...prev];
      arr[ind].title = titleValue;
      arr[ind].user.name = nameValue;
      arr[ind].user.surname = surnameValue;
      return [...arr];
    });
    setNameValue('');
    setSurnameValue('');
    setTitleValue('');
    setIsDisabled((prev) => (prev = true));
  };
  return (
    <div className={cl.todo__body}>
      <div className={cl.todo__formWrapper}>
        <div className={cl.todo__form}>
          <Input
            value={titleValue}
            inputId="todo__title"
            setValue={setTitleValue}
            text={'Enter Todo Title'}
          />
          <Input
            value={nameValue}
            inputId="todo__name"
            setValue={setNameValue}
            text={'Enter your name'}
          />
          <Input
            value={surnameValue}
            inputId="todo__surname"
            setValue={setSurnameValue}
            text={'Enter your surname'}
          />

          <button onClick={newTodo}>Create new todo</button>
          <button disabled={isDisabled} onClick={() => submitEditTodoById()}>
            Save
          </button>
        </div>
      </div>
      <SettingBar setSortIndex={setSortIndex} />
      {todos.length ? (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            setTodoCompleted={setTodoCompleted}
            deleteTodoById={deleteTodoById}
            editTodoById={editTodoById}
          />
        ))
      ) : (
        <h3 className={cl.todo__nothing}>Список дел пуст...</h3>
      )}
    </div>
  );
}

// то что не попало в код:

// удаление из объекта:
// delete myObj.key

// добавление в объект:
// myObj.newkey = 123 || {...myObj, newkey: 123}

// переписывание объекта через spread:
// {...myObj, key: 1}, в данном случае уже существующий
// ключ key объекта myObj меняет своё значение

// не попало в код, т.к. не знал куда реализовать, чтобы
// было уместно
