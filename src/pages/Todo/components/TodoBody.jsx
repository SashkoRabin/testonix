import React, { useState, useEffect } from 'react';
import TodoBodyView from './TodoBodyView';

export default function TodoBody() {
  const [titleValue, setTitleValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [sortIndex, setSortIndex] = useState(1);
  const [currentTodo, setCurrentTodo] = useState();
  const [dragCurrentTodo, setDragCurrentTodo] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [todos, setTodos] = useState([
    // массив из объектов. вложенность есть.
    {
      id: 1,
      title: 'Bread',
      user: { name: 'Alex', surname: 'Merkulov' },
      active: false,
      completed: false,
      hotkey: '1',
    },
    {
      id: 2,
      title: 'Milk',
      user: { name: 'Ivan', surname: 'Ivanov' },
      completed: false,
      active: false,
      hotkey: '2',
    },
    {
      id: 3,
      title: 'Butter',
      user: { name: 'Vladilen', surname: 'Minin' },
      completed: false,
      active: false,
      hotkey: '3',
    },
  ]);
  const keypressHanlder = (e) => {
    if (e.path.join('').search('HTMLInputElement') < 0) {
      todos.forEach((item) => item.hotkey === e.key && setActiveTodo(item.id));
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', keypressHanlder);
    return () => {
      document.removeEventListener('keypress', keypressHanlder);
    };
  });
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
      const index = todos.findIndex((item) => item.id === id);
      setTodos((prev) => {
        const arr = [...prev];
        arr[index].completed = !arr[index].completed;
        return arr;
      });
    }
  };

  const deleteTodoById = (id) => {
    //удаление из массива
    if (id) {
      setTodos((prev) => prev.filter((item) => item.id !== id));
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
            return a.title.toLowerCase() < b.title.toLowerCase()
              ? -1
              : a.title.toLowerCase() > b.title.toLowerCase()
              ? 1
              : 0;
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

  const setActiveTodo = (id) => {
    setTodos((prev) => {
      const arr = [...prev];
      arr[arr.findIndex((item) => item.id === id)].active =
        !arr[arr.findIndex((item) => item.id === id)].active;
      return arr;
    });
  };

  const editTodoById = (id) => {
    if (id) {
      const my = todos.find((item) => item.id === id);
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
      const arr = prev.map((item) => ({ ...item }));
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
  const dragStart = (e, dragTodo) => {
    setDragCurrentTodo((prev) => (prev = dragTodo));
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragDrop = (e, dropTodo) => {
    e.preventDefault();
    setTodos((prev) => {
      const arr = [...prev];
      let temp =
        arr[arr.findIndex((item) => item.id === dragCurrentTodo.id)].id;
      arr[arr.findIndex((item) => item.id === dragCurrentTodo.id)].id =
        dropTodo.id;
      arr[arr.findIndex((item) => item.id === dropTodo.id)].id = temp;

      return arr;
    });
    sortingFunc(sortIndex);
  };
  return (
    <TodoBodyView
      titleValue={titleValue}
      setTitleValue={setTitleValue}
      nameValue={nameValue}
      setNameValue={setNameValue}
      surnameValue={surnameValue}
      setSurnameValue={setSurnameValue}
      newTodo={newTodo}
      isDisabled={isDisabled}
      submitEditTodoById={submitEditTodoById}
      setSortIndex={setSortIndex}
      todos={todos}
      setTodos={setTodos}
      setTodoCompleted={setTodoCompleted}
      deleteTodoById={deleteTodoById}
      editTodoById={editTodoById}
      setActiveTodo={setActiveTodo}
      dragDrop={dragDrop}
      dragStart={dragStart}
      dragOver={dragOver}
    />
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
