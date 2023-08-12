import React from 'react'
// import logo from './platzi.webp'
import './App.css'
import { Items } from './components/listItems'
import { Title } from './components/title'
import { Searcher } from './components/searcher'
import { ListCtr } from './components/listCtr'
import { CtaBtn } from './components/ctaBtn'


// manera de renderizar sin usar 'react.fragment', la idea es renderizar un array de objetos dentro de la lista, cada elemento debe tener una key
const todos = [
  { name: 'To wash the car', completed: false },
  { name: 'To exercise', completed: true },
  { name: 'To buy lanyards', completed: false}
]

// css con react, existen dos maneras de usar, importando el archivo css o el css 'interno' en jsx
// css interno en jsx, la sintaxis es con dos llaves: style={{ backgroudnColor: 'string',}}, las propiedades se escriben como en js sin espacio y en camelcase y los valores son strings y los numbers son igual, terminan separados por coma en vez de punto y coma 

// los componentes empiezan con mayuscula
function App() {
// return solo retorna un elemento
  return (
    // los elementos se escriben en minuscula, el siguiente codigo no es html es jsx que es similar al html pero escrito en js, revisar que la clase del elemento es className y no class como en html
    // esta etiqueta se usa para anidar el contenido de react y renderizarlo en el html pero tampoco es 100% necesario, tambien se usa la etiqueta 'react.fragment' es una etiqueta invisible en el html
    // La etiqueta 'react.fragment' se puede reemplazar por etiquetas vacias
    
    // <div className="App">
    <React.Fragment>
      
      <Title
      completed={13}
      uncomplete={20} 
      
      />
      <Searcher/>        
      <ListCtr>
        {
          todos.map( item => (
            <Items 
            key={item.name}
            text={item.name} 
            completed={item.completed}
            />
          ))
        }

        {/* <Items/>
        <Items/> */}
      </ListCtr>
      <CtaBtn/>

    </React.Fragment>
  )
}

export default App
