import React, { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( {item} ) => {

  const [cantidad, setCantidad] = useState(1)

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const restar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }

    const comprar = () => {
        console.log({...item, cantidad});
    }
  return (
    <div className='container'>
        <img src={item.image} alt={item.title} />
        <div className='producto-detalle'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <ItemCount cantidad={cantidad} sumar={sumar} restar={restar} comprar={comprar} />
        </div>

    </div>
  )
}

export default ItemDetail