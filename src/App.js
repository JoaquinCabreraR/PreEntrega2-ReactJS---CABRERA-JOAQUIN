import NavBar from "./componentes/NavBar/navBar.js";
import "bulma/css/bulma.css";
import ItemListContainer from "./componentes/ItemListContainer/itemListContainer.js";
import ItemCount from "./componentes/ItemCount/itemCount.js";

function App(){
    return(
        <div className="contenedorNav">
            <NavBar/>
            <ItemListContainer className="paginasMenu" greeting={"Bienvenido a BPM SHOP"}/>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => (console.log("Cantidad agregtada: ") , quantity)}/>
        </div>
    )
}

export default App;
