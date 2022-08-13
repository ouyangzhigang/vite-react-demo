import React, { useState } from 'react'
import 'antd/dist/antd.css';
import TodoItem from './components/TodoItem';
import TodoContainer from './components/TodoContainer';
import './App.css'

function App() {
  const [todolist, setTodolist] = useState([]);

  const handleSubmit = (data) => {
    setTodolist([
      ...todolist,
      data
    ]);
    console.log(todolist);
  }

  const changeList = (it) => {
    const data = todolist;
    // const rest = todolist.filter(item => item.id !== it.id);
    const index = todolist.findIndex(item => item.id === it.id);
    data[index] = it;
    setTodolist([...data])
  }

  return (
    <div className="App">
      <h3 className="todo-title text-center">代办事项清单</h3>
      <TodoItem onSubmit={handleSubmit} />
      <TodoContainer data={todolist} changeData={changeList} />
    </div>
  )
}

export default App
