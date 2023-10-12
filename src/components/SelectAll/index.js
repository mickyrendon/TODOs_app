import './selectAll.css'

export const SelectAll = ({onDeleteAll}) => {
    return (
        <span 
            className='deleteAll'
            onClick={onDeleteAll}
        ></span>
    )
}