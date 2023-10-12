import React from 'react'
// creando un custom hooks, los hooks empiezan con 'use...'
export const useLocalStorage = (itemName, initialValue) => {
    // creando un nuevo estado del customhook
    const [item, setItem] = React.useState(initialValue)
    // estados de carga, loading, error y ok
    const [loading, setLoading] =  React.useState(true)
    const [error, setError] =  React.useState(false)

    // creo un efecto para renderizar cuando tenga que renderizarse los estados de carga
    React.useEffect(() => {
      // tiempo de espera para la ejecucion de 2"
      setTimeout(() => {
        // try y catch para controlar las respuestas
        // try para actulizar los estados si todo esta ok
        try{
          const lSTodos = localStorage.getItem(itemName)
          // declaro una variable para parsear los todos
          let parseItems
          
          // verifica el estado de localstorage
          if(!lSTodos){
            // si esta vacio, agrego el valor de initialValue, puede ser incluso un array vacio
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            // y le agrego el valor del initialvalue al parseItems
            parseItems = initialValue
          }else{
            // si el ls no esta vacio, parseo lo que contiene y cambio el estado del hook item para mostrar los resultados en le interfaz
            parseItems = JSON.parse(lSTodos)
            setItem(parseItems)
          }

          //actualizo el estado del hook loading
          setLoading(false)

        }catch(error){
          // cuando hay error, cambia el estado de loading y de error
          setLoading(false)
          setError(true)

        }
      }, 3000)
      // ignorar la advertencia de eslint ya que el uso de efectos en react es mas complejo 
    }, [])
  
    // funcion que actualiza el estado y el localstorage
    const saveItem = (newItem) => {
      // persistencia de datos en ls
      localStorage.setItem(itemName, JSON.stringify(newItem))
      // actualiza el estado setTodo
      setItem(newItem)
    }

    // retorna un objeto cuando el contenido es mayor a dos elementos, es mas facil para leer y renderizar, esta regla es por convencion de react
    return {
      item,
      saveItem,
      loading,
      error
    }
  }
  