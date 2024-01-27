import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";
import "./ItemListStyle.css"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const category = useParams().category;
    
    
    useEffect(() => {

        let consulta 
        const productosRef = collection(db, "productos");

        if(category){
            consulta = query(productosRef, where("category", "==", category))
            setTitulo(category)
        }else{
            consulta = productosRef
            setTitulo("Productos")
        }


        getDocs(consulta)
            .then((resp) => {

                let productosDb = resp.docs.map((producto) =>{
                    return {id: producto.id, ...producto.data()};
                })

                setProductos(productosDb)
            })
            
            .catch((error) => console.log(error));
            
       
    }, [category])
    
    

    return(
        <div id="cards">
            <ItemList productos = {productos} titulo = {titulo}/>
        </div>
    )
}

export default ItemListContainer