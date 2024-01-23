import React, { useContext, useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../context/CartContext'

const ItemDetail = ( {item} ) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext)
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1)

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const restar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }

    

  
  return (
    <div className='container'>
        <img src={item.image} alt={item.title} />
        <div className='producto-detalle'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <ItemCount  cantidad={cantidad} 
                        sumar={sumar} 
                        restar={restar} 
                        comprar={() => {agregarAlCarrito(item, cantidad)}} />
        </div>

    </div>
  )
}

export default ItemDetail