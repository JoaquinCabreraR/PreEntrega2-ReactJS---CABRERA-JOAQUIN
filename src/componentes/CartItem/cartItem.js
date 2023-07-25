const CartItem = ({id, name, price, quantity}) => {
    return (
        <div>
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
        </div>
    )
}

export default CartItem;