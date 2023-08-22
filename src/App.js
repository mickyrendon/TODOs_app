import React from 'react'
// import logo from './platzi.webp'
import './App.css'
import { Items } from './components/listItems'
import { Title } from './components/title'
import { SearchNavBar } from './components/searchNavBar'
import { Searcher } from './components/searcher'
import { SearchBtn } from './components/searchBtn'
import { ListCtr } from './components/listCtr'
import { CtaBtn } from './components/ctaBtn'


// manera de renderizar sin usar 'react.fragment', la idea es renderizar un array de objetos dentro de la lista, cada elemento debe tener una key
const todos = [
  { name: 'To wash the car', completed: false },
  { name: 'To exercise', completed: true },
  { name: 'To buy lanyards', completed: true},
  { name: 'Create RenPi landing page', completed: false},
  { name: 'To buy bed', completed: false},
  { name: 'ñoñó', completed: false}
]
// css con react, existen dos maneras de usar, importando el archivo css o el css 'interno' en jsx
// css interno en jsx, la sintaxis es con dos llaves: style={{ backgroudnColor: 'string',}}, las propiedades se escriben como en js sin espacio y en camelcase y los valores son strings y los numbers son igual, terminan separados por coma en vez de punto y coma 

// los componentes empiezan con mayuscula
function App() {
  // usando estados para delegar a los hijos, los estados no se pueden pasar del hijo al padre sino al contrario, entonces hay que llamarlos en el componente padre y pasarlo como props al hijo
  const [state, setState] =  React.useState('')
  console.log(`has escrito ${state}`)

  // estado para la cantidad de todos, como parametro inicial tomo al array todos eso lo convierte en un estado con array y se puede usar las veces que quiera en vez de llamar al array original ya que este no es dinamico
  const [todo, setTodo] = React.useState(todos)

// search filter es un estado derivado para validar la coincidencia entre el buscador y los todos
  const filter =  todos.filter( (todo) =>  todo.name.toLocaleLowerCase().includes(state.toLocaleLowerCase()) )

// funcion para mostrar los todo's completados y totales, la doble negacion !! convierte el resultado en booleano
  let completed = todos.filter( todo => !!todo.completed).length

  // total de todos
  const total = todo.length

// return solo retorna un elemento
  return (
    // los elementos se escriben en minuscula, el siguiente codigo no es html es jsx que es similar al html pero escrito en js, revisar que la clase del elemento es className y no class como en html
    // esta etiqueta se usa para anidar el contenido de react y renderizarlo en el html pero tampoco es 100% necesario, tambien se usa la etiqueta 'react.fragment' es una etiqueta invisible en el html
    // La etiqueta 'react.fragment' se puede reemplazar por etiquetas vacias
    
    // <div className="App">
    <React.Fragment>
      
      <Title
      // recibo el parametro de 'completed'
        completed={completed}
        uncomplete={total} 
      />
      
      <SearchNavBar>
          <Searcher
          // creo una propiedad con x nombre y le paso como valor el nombre del estado que quiero usar.
            value={state}
            setValue={setState}
          />        
          <SearchBtn></SearchBtn>
      </SearchNavBar>
      <ListCtr>
        {
          filter.map( item => (
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
