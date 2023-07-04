import CartWidget from "../CartWidget/cartWidget.js";
import "../CSS/NavBar.css"

function NavBar(){
    return(
        <nav className="navBar">
            <h3>BPM Shop</h3>
            <div className="paginasMenu">
                <button>Inicio</button>
                <button>Nosotros</button>
                <button>Productos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;

