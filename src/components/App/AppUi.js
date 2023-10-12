import React from 'react'
import { Items } from '../ListItems'
import { Title } from '../Title'
import { SearchNavBar } from '../SearchNavBar'
import { Searcher } from '../Searcher'
import { SearchBtn } from '../SearchBtn'
import { ListCtr } from '../ListCtr'
import { CtaBtn } from '../CtaBtn'
import { LoadingTodo } from '../LoadingTodo'
import { ErrorTodo } from '../ErrorTodo'
import { EmptyTodo } from '../EmptyTodo'
import { Modal } from '../Modal'
import { NewTodoForm } from '../NewTodoForm'
import { TodoContext } from '../TodoContext'


// usando useContext
export const AppUI = () => {
  const {
    loading,
    error,
    filter,
    completeTodo,
    deleteTodo,
    modal,
    setModal
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <Title/>
      <SearchNavBar>
          <Searcher/>        
          <SearchBtn></SearchBtn>
      </SearchNavBar>
      <CtaBtn
        setModal={setModal}
      />
        <ListCtr>
          {loading && (
            <>
              <LoadingTodo/>
              <LoadingTodo/>
              <LoadingTodo/>
            </>
          )}
          {error && <ErrorTodo/>}
          {(!loading && filter.length === 0) && <EmptyTodo/>}

          {
            filter.map( item => (
              <Items 
                key={item.name}
                text={item.name} 
                completed={item.completed}
                onComplete={() => completeTodo(item.name)}
                onDelete={() => deleteTodo(item.name)}
              />
            ))
          }
        </ListCtr>
        {modal && (
          <Modal>
            <NewTodoForm>
            </NewTodoForm>
          </Modal>
        )}
    </React.Fragment>
  )
}
// // usando react context
// export const AppUI = () => {
//   return (
//     <React.Fragment>
      
//       <Title/>
//       <SearchNavBar>
//           <Searcher/>        
//           <SearchBtn></SearchBtn>
//       </SearchNavBar>
//       <CtaBtn/>
//       <TodoContext.Consumer>
//        {({
//           loading,
//           error,
//           filter,
//           completeTodo,
//           deleteTodo,
//        }) => (
//         <ListCtr>
//           {loading && (
//             <>
//               <LoadingTodo/>
//               <LoadingTodo/>
//               <LoadingTodo/>
//             </>
//           )}
//           {error && <ErrorTodo/>}
//           {(!loading && filter.length === 0) && <EmptyTodo/>}

//           {
//             filter.map( item => (
//               <Items 
//                 key={item.name}
//                 text={item.name} 
//                 completed={item.completed}
//                 onComplete={() => completeTodo(item.name)}
//                 onDelete={() => deleteTodo(item.name)}
//               />
//             ))
//           }
//         </ListCtr>
//        )}
//       </TodoContext.Consumer>

//     </React.Fragment>
//   )
// }
// usando propiedades
// export const AppUI = ( {
//   loading, error, completed, total, state, setState, filter, completeTodo, deleteTodo
// } ) => {
//     // return solo retorna un elemento
//   return (
//     // los elementos se escriben en minuscula, el siguiente codigo no es html es jsx que es similar al html pero escrito en js, revisar que la clase del elemento es className y no class como en html
//     // esta etiqueta se usa para anidar el contenido de react y renderizarlo en el html pero tampoco es 100% necesario, tambien se usa la etiqueta 'react.fragment' es una etiqueta invisible en el html
//     // La etiqueta 'react.fragment' se puede reemplazar por etiquetas vacias
    
//     // <div className="App">
//     <React.Fragment>
      
//       <Title
//       // recibo el parametro de 'completed'
//         completed={completed}
//         total={total} 
//       />
//         <SearchNavBar>
//             <Searcher
//             // creo una propiedad con x nombre y le paso como valor el nombre del estado que quiero usar.
//               value={state}
//               setValue={setState}
//             />        
//             <SearchBtn></SearchBtn>
//         </SearchNavBar>
//         <CtaBtn/>
//       {/* <SelectAll>
//         { filter.map( item => deleteAll(item.name))}
//       </SelectAll> */}
//       <ListCtr>
//         {loading && (
//           <>
//             <LoadingTodo/>
//             <LoadingTodo/>
//             <LoadingTodo/>
//           </>
//         )}
//         {error && <ErrorTodo/>}
//         {(!loading && filter.length === 0) && <EmptyTodo/>}

//         {
//           filter.map( item => (
//             <Items 
//               key={item.name}
//               text={item.name} 
//               completed={item.completed}
//               onComplete={() => completeTodo(item.name)}
//               onDelete={() => deleteTodo(item.name)}
//             />
//           ))
//         }
//       </ListCtr>

//     </React.Fragment>
//   )
// }