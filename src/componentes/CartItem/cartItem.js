import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";


const CartItem = ({id, name, price, quantity}) => {

    const {removeItem} = useContext(CartContext)
    return (
        <div>
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${quantity * price}</p>
            <button onClick={()=> removeItem(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem;