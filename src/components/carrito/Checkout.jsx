import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config'

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm();

   const comprar = (data) => {
    const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
    }

    console.log(pedido);

    const pedidosRef = collection(db, "pedidos")

    addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id)
            vaciarCarrito()
        })

   }

   if (pedidoId) {
        return (
            <div className='formulario'>
                <h1 className='main-title'>Muchas gracias por tu compra </h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        ) 
   }

  return (
    <div className='formulario'>
        <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")}/>
            
            <input  type="email" placeholder='ingresá tu email' {...register("email")}/>

            <input type='phone' placeholder='ingresá tu teléfono' {...register("telefono")}/>
            
            <button type='submit'>Comprar</button>
        </form>
    </div>
  )
}

export default Checkout