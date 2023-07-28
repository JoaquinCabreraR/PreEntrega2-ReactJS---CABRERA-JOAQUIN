import  Carrito from "./img/carrito1.png";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cart} = useContext(CartContext)
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return(
        <Link to="/cart">
            <img src={Carrito} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;

