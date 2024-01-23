import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const { carrito } = useContext(CartContext)
  return (
    <div>
        <h1>Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.title}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                </div>
                
            ))
        }

        <h2>Precio total: </h2>
    </div>
  )
}

export default Carrito