import './App.css';
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY_TODOLIST = 'todolist'

//O componente app normalmente está concentrada os componentes principais
function App() {
  
  //States 
  const [todoList,setTodoList] = useState([]) //O estado inicial
  const [name,setName] = useState("") //O estado inicial

  useEffect(()=>{
    setTodoList(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOLIST)))
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOLIST,JSON.stringify(todoList))
  },[todoList])

  //Adiciona uma tarefa na lista
  function handleAddTodo(event){ //as funções handle normalmente recebem um evento de parametro
    /*const copy = [...todoList] // fazendo uma cópia do array de todolist
    copy.push({id: uuidv4(), name:name, complete: false}) // adicionando uma atividade na cópia
    setTodoList(copy) // fazendo o atributo todolist receber a cópia modificada
    setName("") // deixando o campo fazio depois de adicionar
    console.log(todoList)*/

    setTodoList(newTodoList=> [...newTodoList, {id: uuidv4(), name:name, complete: false}])
    setName("")
  }

  function handleChangeName(event){
    setName(event.target.value) // troca o valor do atributo nome a cada input do usuario
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
          <button onClick={handleClearCompletes} className="clear-btn">Limpar Tarefas</button>
      </div>

      <div className="todoListContainer">
          <TodoList todolist={todoList} toggleTodo={toggleTodo}></TodoList>
      </div>
      <p>{todoList.filter(x=> !x.complete).length} tarefa(s) a serem concluidas</p>
    </div>
  );
}

export default App;
