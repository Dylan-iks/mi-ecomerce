const ItemList = ( { productos } ) => {
    return (
        <div className="main">
            <h1>Productos</h1>
            <div className="productos">{ 
                productos.length > 0 && 

                productos.map((producto) => {
                    return(
                        <div className="item">
                            <img src={producto.image} alt="" />
                            <h2>{producto.title}</h2>
                            <p>Precio: ${producto.price}</p>
                            <p>Categoria: {producto.category}</p>
                            <a className="ver-mas" href="{`/item/${producto.id}`}">Ver más</a>
                        </div>  
                    )
                })
                
            }
            </div>
            
        </div>
    )
}

export default ItemList