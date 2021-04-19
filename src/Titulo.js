import React from 'react'

export default function Titulo(props){
    return(
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
        </div>
    )
}