import './App.css';
import React, { useState } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todoList,setTodoList] = useState([])
  const [name,setName] = useState("")

  function handleAddTodo(event){
    const copy = [...todoList]
    copy.push({id: uuidv4(), name:name, complete: false})
    setTodoList(copy)
    setName("")
    console.log(todoList)
  }

  function handleChangeName(event){
    setName(event.target.value)
  }

  function toggleTodo(id){
    const copyTodoList = [...todoList]
    const todo = copyTodoList.find(x => x.id === id)
    todo.complete = !todo.complete
    setTodoList(copyTodoList)
  }

  function handleClearCompletes(){
    const todosNotCompleted = todoList.filter(x=> !x.complete)
    setTodoList(todosNotCompleted)
  }

  return (
    <div className="Container">
      <div className="controls">
          <input value={name} type="text" onChange={handleChangeName}></input>
          <button onClick={handleAddTodo}>Adiiconar Tarefa</button>
          <button onClick={handleClearCompletes}>Limpar Tarefas</button>
      </div>

      <div className="todoListContainer">
          <TodoList todolist={todoList} toggleTodo={toggleTodo}></TodoList>
      </div>
      <p>{todoList.filter(x=> !x.complete).length} tarefa(s) a serem concluidas</p>
    </div>
  );
}

export default App;
