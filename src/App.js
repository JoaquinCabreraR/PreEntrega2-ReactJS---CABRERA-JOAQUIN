import NavBar from "./componentes/NavBar/navBar.js";
import "bulma/css/bulma.css";
import ItemListContainer from "./componentes/ItemListContainer/itemListContainer.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer/itemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./componentes/Context/cartContext.js";
import Cart from "./componentes/Cart/cart.js";
import Checkout from "./componentes/CheckOut/checkOut.js";


function App(){
    return(
        <div className="contenedorNav">
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout />}/>
                        <Route path="*" element={<h1>404 Not Found</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;
