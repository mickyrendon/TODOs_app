// usando css import
import './listItems.css'
import { CompletedIcon } from './completedIcon'
import { DeleteIcon } from './deleteIcon'
// usando arrow function para probar si funciona
export const Items = ({text, completed, onComplete, onDelete}) => {
    return (
      <li 
      className={`items ${completed && 'inactive'}`}
      >
        <CompletedIcon 
          className='checked'
          onClick={onComplete}
        >
        </CompletedIcon>
        <p className='text'>{text}</p>
        <DeleteIcon 
          className='close'
          onClick={onDelete}
        >
        </DeleteIcon>
      </li>
    )
}