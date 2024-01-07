import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( {item} ) => {
  return (
    <div className='container'>
        <img src={item.image} alt={item.title} />
        <div className='producto-detalle'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <ItemCount stock={item.stock}></ItemCount>
        </div>

    </div>
  )
}

export default ItemDetail