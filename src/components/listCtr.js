import './listCtr.css'
export const ListCtr = ( { children } ) => {
    return (
        <ul className='listCtr'>
        {/* la propiedad chilren en react hace referencia a que es un elemento padre y contiene sus hijos, pero gracias a la destructuracion 'props.' no se necesita usar y puede usar 'children' */}
            { children }
        </ul>
    )
}