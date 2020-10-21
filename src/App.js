import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ChangeColor from './components/ColorBox/index1';
import Todo from './components/TodoList';
import TodoList from './components/TodoList1';

function App() {
  const [todos, setTodo] = useState([
    {id: 1, title: 'Title 1'},
    {id: 2, title: 'Title 2'},
    {id: 3, title: 'Title 3'},
  ]);

  function handleTodoClick (todo) {
    console.log(todo);
    const indexData = todos.findIndex(x => x.id == todo.id);
    
    console.log(indexData);
    if(indexData < 0) return;
    
    const newTodoList = [...todos];
    newTodoList.splice(indexData, 1);
    console.log(newTodoList);
    setTodo(newTodoList);

  }

  return (
    <div className="App">
      <h1>Welcome to React Hooks</h1>

      {/* <ColorBox />
      <ChangeColor /> */}
      <Todo todos={todos} onTodoClick={handleTodoClick} />

      <TodoList datas={todos} onClickData={handleTodoClick}/>
    </div>
  );
}

export default App;
