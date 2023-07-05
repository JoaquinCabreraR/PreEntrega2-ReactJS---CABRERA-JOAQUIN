import { Link } from "react-router-dom";

const Item = ({id, name, price, category, img, description, stock}) => {

    return(
        <article>
            <header>
                <h2>
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