import React from 'react';

import ToDoList from './toDoList.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World! To Do List!</h2>
        {/*pass in list as props for ToDoList component*/}
        <ToDoList list={['milk', 'juice', 'eggs']} />
      </div>
    );
  }
};