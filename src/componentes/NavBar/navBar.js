import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/cartWidget.js";
import "../CSS/NavBar.css"

function NavBar(){
    return(
        <nav className="navBar">
            <Link to="/">
                <h3>BPM Shop</h3>
            </Link>
            <div className="paginasMenu">
                <NavLink to={"/category/Mixer DJ"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Mixer DJ</NavLink>
                <NavLink to={"/category/Auriculares DJ"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Auriculares DJ</NavLink>
                <NavLink to={"/category/Reproductores DJ"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Reproductores DJ</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;

