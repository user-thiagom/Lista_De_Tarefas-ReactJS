import React from 'react'

export default function Todo(props){
    function handleChangeTodo(){
        props.toggleTodo(props.todo.id)
    }
    return(
        <label>
            <input type="checkbox" onChange={handleChangeTodo}></input>
            <p>{props.todo.name}</p>
            <br></br>
        </label>
    )
}