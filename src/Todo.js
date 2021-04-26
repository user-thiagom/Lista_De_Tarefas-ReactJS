import React from 'react'
import './Todo.css'

export default function Todo({todo,toggleTodo}){ //componente todo
    //Fica monitorando
    function handleChangeTodo(){
        toggleTodo(todo.id)
    }
    return( // é componente com um checkbox, e o texto
        <label>
            <input type="checkbox" onChange={handleChangeTodo} checked={todo.complete}></input>
            <p className={todo.complete ? 'completed': ''}>{todo.name}</p>
            <br></br>
        </label>
    )
}