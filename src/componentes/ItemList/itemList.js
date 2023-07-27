import Item from "../Item/item";
import "../CSS/ItemList.css";


const ItemList = ({productos}) => {
    return(
        <div className="listGroup">
            {productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;
