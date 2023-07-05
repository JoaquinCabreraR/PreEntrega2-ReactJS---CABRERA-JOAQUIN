import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({id, name, price, category, img, description, stock}) => {
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: U$S {price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregtada: ", quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;
