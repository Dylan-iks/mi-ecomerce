import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }
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

        {   carrito.length > 0 ? 
        
            <>
                <h2>Precio total: ${ precioTotal() }</h2> 
                <button onClick={ handleVaciar }>Vaciar</button>
            </> :
            <h2>El carrito está vacío</h2>
        }
        
    </div>
  )
}

export default Carrito