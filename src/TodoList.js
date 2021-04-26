import React from 'react'
import './TodoList.css'
import Todo from './Todo'

export default function TodoList({todolist,toggleTodo}) {
    // Percorre o array e pra cada item retorna um componente todo
    return(
        <div>
            {todolist.map(todo=>
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}></Todo>
            )}
        </div>
    )
}