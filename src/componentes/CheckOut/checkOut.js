import { useContext, useState } from "react";
import { db } from "../../config/firebase";
import { CartContext } from "../Context/cartContext";
import { Timestamp, addDoc, collection, getDocs, query, where, writeBatch, documentId } from "firebase/firestore";
import CheckoutForm from "../CheckForm/checkForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, "productos")
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productosAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productosAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Sin stock")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if (orderId) {
        return <h1>Orden: {orderId}</h1>
    }

    return (
        <div>
            <h1>Salir</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;