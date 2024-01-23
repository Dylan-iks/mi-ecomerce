
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from './components/cards/ItemListContainer'
import ItemDetailContainer from './components/cards/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './components/contacto/Contacto'
import { CartContext } from './components/context/CartContext'
import { useState } from 'react'
import Carrito from './components/carrito/Carrito'



function App() {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (item, cantidad) => {
      
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito]

    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)
    
    if (estaEnElCarrito){
      estaEnElCarrito.cantidad += cantidad
    } else {
      nuevoCarrito.push(itemAgregado)
    }

    setCarrito(nuevoCarrito)  
  
  }
  
  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad)
  }

  return (
    <>
      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito} }>
        <BrowserRouter>
            
          <NavBar/>
            
          <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/Item/:id' element = {<ItemDetailContainer />}/>
            <Route path='/productos' element = {<ItemListContainer />}/>
            <Route path='/productos/:category' element = {<ItemListContainer />}/>
            <Route path='/contacto' element = {<Contacto />}/>
            <Route path='/carrito' element = {<Carrito />}/>
          </Routes>

            
          
          </BrowserRouter> 
      </CartContext.Provider> 
      
      {/* <ItemCount stock = {10}/> */}
    </>
  )
}

export default App
