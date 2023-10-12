// import React from 'react'
import { FiCheck } from 'react-icons/fi'

export const CompletedIcon = ({ className, onClick}) => {
    // const {className, onClick} = props
  return (
    <FiCheck
        className={className}
        onClick={onClick}
    />
  )
}