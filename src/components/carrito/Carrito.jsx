import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import "./Carrito.css"

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }
  return (
    <div className='carrito'>
        <h1>Carrito</h1>

        {
            carrito.map((prod) => (
                <div className='producto' key={prod.id}>
                    <h3>{prod.title}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cantidad}</p>
                    <p className='cant-producto'>Cant: {prod.cantidad}</p>
                </div>
                
            ))
        }

        {   carrito.length > 0 ? 
        
            <div className='info-carrito'>
                <h2>Precio total: ${ precioTotal() }</h2> 
                <div>
                    <button className='finalizar-compra' onClick={ handleVaciar }>Vaciar</button>
                    <Link className='finalizar-compra' to="/checkout">Finalizar compra</Link>
                </div>
                
            </div> :
            <h2>El carrito está vacío</h2>
        }
        
    </div>
  )
}

export default Carrito