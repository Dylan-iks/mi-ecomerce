import { useEffect, useState } from "react";
import {orderProducts} from "../helpers/orderProducts";
import ItemList from "./ItemList";
import "./ItemListStyle.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const category = useParams().category;
    
    
    useEffect(() => {
        orderProducts()
        .then((res) => {
            if (category) {
                setProductos(res.filter((prod) => prod.category === category));
                setTitulo(category);
            } else {
                setProductos(res);
                setTitulo("Productos")
            }
            
            
        })
    }, [category])
    
    

    return(
        <div id="cards">
            <ItemList productos = {productos} titulo = {titulo}/>
        </div>
    )
}

export default ItemListContainer