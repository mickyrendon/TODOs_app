import { FiTrash2 } from "react-icons/fi"

export const DeleteIcon = ({ className, onClick}) => {
  return (
    <FiTrash2
        className={className}
        onClick={onClick}
    />
  )
}