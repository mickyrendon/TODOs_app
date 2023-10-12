import React from "react"
import ReactDOM  from "react-dom"
import './modal.css'
export const Modal = ({ children }) => {

    return ReactDOM.createPortal(
        // bloque que se quiere enviar por el 'portal'
        <div className="modalBkg">
            {children}
        </div>,
        // elemento o destino que recibe el bloque que se envia en el portal
        document.querySelector('#modal')
    )
}