import React from "react";
import { TodoContext } from "../TodoContext";
import './newTodoForm.css'

export const NewTodoForm = () => {
    const{
        addTodo,
        setModal
    } = React.useContext(TodoContext)

    // Creo un estado local para saber el valor del input
    const  [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // envio el valor del estado local 'newTodoValue' al useContext para vincularlo con las otras funcionalidades que se encuentran en el TodoContext
        addTodo(newTodoValue)
        // cierra el modal
        setModal(false)
    }
    const onCancel = () => {
        // cierra el modal
        setModal(false)
    }
    // muestra el valor que se va ingresando en el input
    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    return (
        <form 
            onSubmit={onSubmit}
        >
            <label>Nombra la nueva Tarea</label>
            <input 
                type="text"
                id="newTodo"
                className="inputFocus"
                name="newTodo"
                placeholder="Pasear el perro"
                value={newTodoValue}
                onChange={onChange}
            />
            <div 
            className="buttonsContainer"
            >
                <button 
                type="button"
                onClick={onCancel}
                className="newTodoForm-button
                newTodoForm-button--cancelar"
                >
                Cancelar
                </button>
                <button 
                type="submit"
                className="newTodoForm-button
                newTodoForm-button--agregar"
                >
                Agregar
                </button>
            </div>
        </form>
    )
}