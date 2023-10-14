import React from 'react'
import './searcher.css'
import { TodoContext } from '../TodoContext'
// hago destructuracino de props para pasar como parametros el estado y el renderizador del estado para controlar el evento de onChange
export const Searcher = () => {
    // trabajando con estados, el estado es inmutable y tiene dos 'parametros' dentro del array, el primero es el nombre que le pondremos al estado y el segundo es el 'renderizador' o el que controla la actualizacion de ese estado y debe empezar por regla con 'set' seguido del nombre del estado 'setEstado', el estado lo vinculo con el la propiedad 'value' del input y asi obtengo el valor del input y setSearch value se llama dentro del evento onchange pasando como parametro el valor del target para que la propiedad value del html tome ese parametro, creo es que es como un callback y asi poder renderizar cada vez que el evento se dispare
   const {
    state,
    setState,
   } = React.useContext(TodoContext)

    return (
        <input
            placeholder="Buscar tarea"
            className='searcher' 
            value={state}
            onClick={ change } 
            onChange={ (e) => {
                setState(e.target.value)
            }}
        />
    )
}
function change (e) {
    // const ctr = document.querySelector('.search-nav-bar')
    // ctr.classList.add('focus')

    e.target.classList.add('focus')
    e.target.parentNode.classList.add('focus')
}
// function value (e) {
//     console.log(`has escrito ${e.target.value}`)
//     // para usar el parametro o renderizador del estado es mejor usar una arrow function porque el estado debe ser declarado dentro de un componente 
//     setState(e.target.value)
// }
