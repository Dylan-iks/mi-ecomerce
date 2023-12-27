import { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";
import ItemList from "./ItemList";
import "./ItemListStyle.css"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      pedirProductos()
        .then((res) => {
            setProductos(res)
        })
    }, [])
    
    

    return(
        <div id="cards">
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer