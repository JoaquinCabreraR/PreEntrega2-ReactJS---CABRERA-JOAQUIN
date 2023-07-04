import { useState, useEffect } from "react";
import { getProducts } from "../../AsyncMock";
import ItemList from "../ItemList/itemList";



function ItemListContainer({greeting}){

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;
