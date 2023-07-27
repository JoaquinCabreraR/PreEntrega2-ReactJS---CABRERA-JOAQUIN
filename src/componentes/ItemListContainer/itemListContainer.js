import ItemList from "../ItemList/itemList";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore";
import  {db} from "../../config/firebase";


const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId
            ? query(collection(db, "productos"), where("category", "==", categoryId))
            : collection(db, "productos")

        getDocs(collectionRef)
            .then(response => {
                const productosAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(productosAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            });
        }, [categoryId]
    );

    return(
        <div>
            <h1>{greeting}</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList productos={productos}/>
            )}
        </div>
    )
}

export default ItemListContainer;
