import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
// import logo from './logo.svg';
import './App.css';
// import ColorBox from './components/ColorBox';
// import ChangeColor from './components/ColorBox/index1';
// import Todo from './components/TodoList';
// import TodoList from './components/TodoList1';
// import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';


function App() {
  // const [todos, setTodo] = useState([
  //   { id: 1, title: 'Title 1' },
  //   { id: 2, title: 'Title 2' },
  //   { id: 3, title: 'Title 3' },
  // ]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const params = queryString.stringify(filters);
        const url = `http://js-post-api.herokuapp.com/api/posts?${params}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data, pagination } = responseJSON;
        setPost(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPostList();
  }, [filters]);

  useEffect(() => {
    console.log('Todo List Effect');
  }, [posts]);

  function handlePageChange(newPage) {
    console.log('New Page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  // function handleTodoClick(todo) {
  //   console.log(todo);
  //   const indexData = todos.findIndex(x => x.id === todo.id);

  //   console.log(indexData);
  //   if (indexData < 0) return;

  //   const newTodoList = [...todos];
  //   newTodoList.splice(indexData, 1);
  //   console.log(newTodoList);
  //   setTodo(newTodoList);

  // }

  // function handleOnSubmit(formVal) {
  //   const newTodo = {
  //     id: todos.length + 1,
  //     ...formVal, //or using 'title: formVal.title'
  //   };

  //   const todoList = [...todos];
  //   todoList.push(newTodo);
  //   setTodo(todoList);
  // }

  return (
    <div className="App">
      <h1>Welcome to React Hooks</h1>

      <PostList posts={posts} />
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
      />

      {/* <TodoForm onSubmit={handleOnSubmit}/> */}
      {/* <ColorBox />
      <ChangeColor /> */}
      {/* <Todo todos={todos} onTodoClick={handleTodoClick} /> */}

      {/* <TodoList datas={todos} onClickData={handleTodoClick}/> */}
    </div>
  );
}

export default App;
