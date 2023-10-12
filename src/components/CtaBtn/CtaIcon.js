import { FiPlus } from "react-icons/fi"

export const DeleteIcon = ({ className, onClick}) => {
  return (
    <FiPlus
        className={className}
        onClick={onClick}
    />
  )
}