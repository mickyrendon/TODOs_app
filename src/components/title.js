// the params are like a callback 'cause the value is passed when the component is called
// css con react, existen dos maneras de usar, importando el archivo css o el css 'interno' en jsx
// css interno en jsx, se declara en la etiqueta jsx la sintaxis es con dos llaves: style={{ backgroudnColor: 'string',}}, las propiedades se escriben como en js sin espacio y en camelcase y los valores son strings y los numbers son igual, terminan separados por coma en vez de punto y coma 
// ejemplo usando css interno
// export const Title = ({completed, uncomplete}) => {
//     return (
//     <h1 style={{
//       color:'red',
//       fontSize:'4rem'
//     }}>
//     You have completed {completed} of {uncomplete} to dos
//     </h1>
//   )
// }
import './title.css'
export const Title = ({completed, uncomplete}) => {
    return (
    <h1 className="title"> You have completed {completed} of {uncomplete} to dos
    </h1>
  )
}
