import  Carrito from "./img/carrito1.png";
import  "../CSS/CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to="/cart" style={{display: totalQuantity > 0 ? "block" : "none"}}>
            <img src={Carrito} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;