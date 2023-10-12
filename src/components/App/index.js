import React from 'react'
// import logo from './platzi.webp'
import './App.css'
import { AppUI } from './AppUi'
import { TodoProvider } from '../TodoContext'
// import { SelectAll } from './components/selectAll'


// manera de renderizar sin usar 'react.fragment', la idea es renderizar un array de objetos dentro de la lista, cada elemento debe tener una key
// const todos = [
//   { name: 'To wash the car', completed: false },
//   { name: 'To exercise', completed: true },
//   { name: 'To buy lanyards', completed: true},
//   { name: 'Create RenPi landing page', completed: false},
//   { name: 'To buy bed', completed: false},
//   { name: 'ñoñó', completed: false}
// ]
// css con react, existen dos maneras de usar, importando el archivo css o el css 'interno' en jsx
// css interno en jsx, la sintaxis es con dos llaves: style={{ backgroudnColor: 'string',}}, las propiedades se escriben como en js sin espacio y en camelcase y los valores son strings y los numbers son igual, terminan separados por coma en vez de punto y coma 


// los componentes empiezan con mayuscula
function App() {
  // retorna al componente AppUI el que contiene el maquetado y envia como props los elementos que necesita
  return (
    
    // sin props drilling, usamos 'React Context'
    
    <TodoProvider>
      <AppUI/>
    </TodoProvider>

    // con props drilling (que es una mala practica)
    // <AppUI
    //   loading={loading}
    //   error={error}
    //   completed={completed}
    //   total={total}
    //   state={state}
    //   setState={setState}
    //   filter={filter}
    //   completeTodo={completeTodo}
    //   deleteTodo={deleteTodo}
    // />
  )
}

export default App
