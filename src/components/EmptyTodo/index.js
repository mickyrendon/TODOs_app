import React from "react"
import { EmptyIcon } from "./EmptyIcon"
import './emptyTodo.css'

export const EmptyTodo = () => {
    return (
        <div className="emptyTodosCtr">
            <p 
                className="emptyTodos"
            >
                Crea un nuevo todo
            </p>
            <EmptyIcon/>
        </div>
    )
}