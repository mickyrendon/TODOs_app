// usando css import
import './listItems.css'
// usando arrow function para probar si funciona
export const Items = ({text, completed}) => {
    return (
      <li className={`items ${completed && 'inactive'}`}>
        <span className='checked'>
          <span className='circle'></span>
        </span>
        <p>{text}</p>
        <span className='close'></span>
      </li>
    )
}