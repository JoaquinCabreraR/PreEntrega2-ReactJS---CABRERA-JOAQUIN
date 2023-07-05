import NavBar from "./componentes/NavBar/navBar.js";
import "bulma/css/bulma.css";
import ItemListContainer from "./componentes/ItemListContainer/itemListContainer.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer/itemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
    return(
        <div className="contenedorNav">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h1>404 Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
