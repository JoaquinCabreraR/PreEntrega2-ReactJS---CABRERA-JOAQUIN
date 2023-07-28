import React from "react";
import { Link } from "react-router-dom";
import "../CSS/ItemList.css";

const Item = ({id, name, price, category, img, description, stock}) => {

    return(
        <article className="productos">
            <header>
                <h2 className="titu">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Precio: U$S {price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver más</Link>
            </footer>
        </article>
    )
}

export default Item;