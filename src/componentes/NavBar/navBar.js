import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/cartWidget.js";
import "../CSS/NavBar.css";

function NavBar(){
    return(
        <nav className="navBar">
            <Link to="/">
                <h3>BPM Shop</h3>
            </Link>
            <div className="paginasMenu">
                <NavLink to={"/category/mixer"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Mixer</NavLink>
                <NavLink to={"/category/auriculares"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Auriculares</NavLink>
                <NavLink to={"/category/reproductores"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Reproductores</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;

