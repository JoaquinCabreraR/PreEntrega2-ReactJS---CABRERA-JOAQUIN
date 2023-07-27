import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";


const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc (db, "productos", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productosAdapted = {id: response.id, ...data}
                setProductos(productosAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [itemId]
    )

    return(
        <div>
            <ItemDetail {...productos} />
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemDetail {...productos} />
            )}
        </div>
    )
}

export default ItemDetailContainer;

