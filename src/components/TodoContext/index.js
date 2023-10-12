import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext()

export const TodoProvider = ({ children }) => {
    // logica del componente
   // estado para la cantidad de todos, como parametro inicial tomo al array todos eso lo convierte en un estado con array y se puede usar las veces que quiera en vez de llamar al array original ya que este no es dinamico
  // const [todo, setTodo] = React.useState(parseTodos)
  const {
    item: todo,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('todos_v1', [])

 // usando estados para delegar a los hijos, los estados no se pueden pasar del hijo al padre sino al contrario, entonces hay que llamarlos en el componente padre y pasarlo como props al hijo. el estado se basa en lo que contenga 'parseTodos'
  const [state, setState] =  React.useState('')
//estado para el modal
  const [modal, setModal] =  React.useState(false)

// validador de todos duplicados
  // const [validator, SetValidator] =  React.useState(false)

  //Efectos en react son utiles para cargar las veces que sea necesario un elemento optimizando el codigo y los tiempos de espera, despues de que se renderiza el documento por primera vez. el codigo se encapsula en una funcion que recibe dos argumentos, el primero es el codigo a ejecutar y el segundo el estado de cualquier elemento entro de un array, el array puede usarse vacio inclusive, asi, cada vez que el estado cambie o se renderice se ejecuta el codigo del useEfect
//   React.useEffect( () => { 
//   console.log('contenido usando el hook de useEffect')
//   }, [todo])

// search filter es un estado derivado para validar la coincidencia entre el buscador y los todos
  const filter =  todo.filter( (todo) =>  todo.name.toLocaleLowerCase().includes(state.toLocaleLowerCase()) )

  // total de todos
  const total = todo.length

  // funcion para mostrar los todo's completados y totales, la doble negacion !! convierte el resultado en booleano
  let completed = todo.filter( todo => !!todo.completed).length
  

  // const duplicateValidator = () => {

  // }


  // funcion addTodo que contiene el valor del nuevo Todo que ingresa el usuario, tambien hace uso del hook del local estorage que agrega un nuevo todo al ls
  const addTodo = (name) => {
    const allTodos = [...todo]
    const todoFindDuplicated = allTodos.includes(name)
    
      // console.log(todoFindDuplicated)
      // console.log(name)
      // allTodos.forEach(item => todoFindDuplicated? console.log(name): console.log(item))
      
      // FIXME, no funciona el validador
      if(todoFindDuplicated){
        
        alert('el todo que intentas ingresar ya existe')

    }else if(!todoFindDuplicated){
      
      allTodos.push({
        name,
        completed: false
      })
      // hook del ls en donde envio el nuevo array de todos
      saveTodos(allTodos)
    }
  }
  
  // complete
  // marcard todo como completados
  const completeTodo = (todoKey) => {
    // copio el array de estate el cual es una copia del global pero aplicando un estado 
    const newArray = [...todo]
    // toogle function
    const todoFindIndex = newArray.findIndex(todo => todo.name === todoKey) 
    // valido si es true o false para cambiar el estado, como un toggle
    newArray[todoFindIndex].completed = newArray[todoFindIndex].completed ? false : true;
    // renderizo
    saveTodos(newArray)
  }
// Delete todo
  const deleteTodo = (todoKey) => {
    // --CODIGO LARGO
    // copio el array de estate el cual es una copia del global pero aplicando un estado 
    // const uploadedArray = [...todo]
    // // guardo en una variable el metodo findindex para validar que es igual al parametro recibido
    // const todoIndex = uploadedArray.findIndex((todo) => todo.name !== todoKey)
    // // al elemento le agrego true a completed, obtengo el valor del elemento a borrar y el index
    // uploadedArray.splice(todoIndex, 1)
    // // delete newArray.todoIndex
    // // llamo al renderizador para actualizar el estado del elemento
    // setTodo(uploadedArray)
    // --CODIGO CORTO
    const resultado = todo.filter(todo => todo.name !== todoKey)  
    saveTodos(resultado)
  }
// FIXME
// delete all/ intento de eliminar todos de una vez
  // const deleteAll = (todoKey) => {
  //   const newArray = [...todo]
  //   const newTodos = newArray.filter((todo) => todo.name !== todoKey)
  //   setTodo(newTodos)
  // }; 
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completed,
            total,
            state,
            setState,
            filter,
            completeTodo,
            deleteTodo,
            modal,
            setModal, 
            addTodo
        }}>
            { children }
        </TodoContext.Provider>
        )
    }