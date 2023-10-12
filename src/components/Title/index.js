// the params are like a callback 'cause the value is passed when the component is called
// css con react, existen dos maneras de usar, importando el archivo css o el css 'interno' en jsx
// css interno en jsx, se declara en la etiqueta jsx la sintaxis es con dos llaves: style={{ backgroudnColor: 'string',}}, las propiedades se escriben como en js sin espacio y en camelcase y los valores son strings y los numbers son igual, terminan separados por coma en vez de punto y coma 
// ejemplo usando css interno
// export const Title = ({completed, total}) => {
//     return (
//     <h1 style={{
//       color:'red',
//       fontSize:'4rem'
//     }}>
//     You have completed {completed} of {total} to dos
//     </h1>
//   )
// }
import React from 'react'
import { TodoContext } from '../TodoContext'
import './title.css'

export const Title = () => {

  const {
    completed,
    total,
  } = React.useContext(TodoContext)

  return completed === total && completed > 0
  ? (
      <h1 className="title"> Congratulations you have completed <span className='title-completed'>{completed}</span> of <span className='title-total'>{total}</span> to dos
      </h1>
  ):(
      <h1 className="title"> You have completed <span className='title-total'>{completed}</span> of <span className='title-completed'>{total}</span> to dos
      </h1>
  )
  
}
