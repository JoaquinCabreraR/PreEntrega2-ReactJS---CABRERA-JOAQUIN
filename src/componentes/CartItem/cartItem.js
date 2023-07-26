import React from "react";


const CartItem = ({id, name, price, quantity}) => {

    return (
        <div>
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${quantity * price}</p>
        </div>
    )
}

export default CartItem;