import { FiPlus } from 'react-icons/fi'
import './ctaBtn.css'
export const CtaBtn = ({setModal}) => {
    return (
        <button
        className="cta" 
        onClick={
            () => {
            // uso el actualizador del estado para crear un evento toggle al darle click al cta
                setModal(state => !state)
            }
        }
        >
            <FiPlus className='add'></FiPlus>
        </button>
    )
}