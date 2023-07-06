import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../AsyncMock";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory(categoryId) : getProducts()

        asyncFunc
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;
