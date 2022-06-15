import React from 'react';
import withNavbar from '../../components/HOC/withNavbar/withNavbar';
import TodoBody from './components/TodoBody';

class Todo extends React.Component {
  render() {
    return (
      <>
        <TodoBody />
      </>
    );
  }
}

Todo = withNavbar(Todo);
export default Todo;
