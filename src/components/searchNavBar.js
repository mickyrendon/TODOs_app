import './searchNavbar.css'
export const SearchNavBar = ({children}) => {
    return (
        <div className='search-nav-bar' onClick={ click } >
            { children }
        </div>
    )
}

function click (e) {
    console.log(`click en ${e.target.tagName}`)
    e.target.classList.add('focus')

    e.target.childNodes.forEach(element => {
        element.classList.add('focus')
    });
    // e.target.lastElementChild.classList.add('color')
    // e.target.lastElementChild.classList.remove('search-btn')
    
}
