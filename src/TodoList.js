import React from 'react'
import './TodoList.css'
import Todo from './Todo'

export default function TodoList(props) {
    return(
        <div>
            {props.todolist.map(todo=>
            <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}></Todo>
            )}
        </div>
    )
}