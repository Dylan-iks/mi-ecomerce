import { Link } from "react-router-dom"

const ItemList = ( { productos, titulo } ) => {
    return (
        <div className="main">
            <h1>{titulo}</h1>
            <div className="productos">{ 
                productos.length > 0 && 

                productos.map((producto) => {
                    return(
                        <div className="item" key={producto.id}>
                            <img src={producto.image} alt="" />
                            <h2>{producto.title}</h2>
                            <p>Precio: ${producto.price}</p>
                            <p>Categoria: {producto.category}</p>
                            <Link className="ver-mas" to= {`/item/${producto.id}`} >Ver más</Link>
                        </div>  
                    )
                })
                
            }
            </div>
            
        </div>
    )
}

export default ItemList