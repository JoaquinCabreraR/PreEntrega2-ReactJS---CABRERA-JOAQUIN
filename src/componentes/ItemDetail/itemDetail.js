import ItemCount from "../ItemCount/itemCount";
import "../CSS/ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";

const ItemDetail = ({id, name, price, category, img, description, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article>
            <header>
                <h2 className="tituloDetalle">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="imagenDetalle"/>
            </picture>
            <section className="seccionDetalle">
                <p className="categoria">
                    Categoria: {category}
                </p>
                <p className="descripcion">
                    {description}
                </p>
                <p className="precio">
                    Precio: U$S {price}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'>Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail;
