
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from './components/cards/ItemListContainer'
import ItemDetailContainer from './components/cards/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './components/contacto/Contacto'
import { CartProvider } from './components/context/CartContext'
import Carrito from './components/carrito/Carrito'



function App() {


  return (
    <>
      <CartProvider>
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
      </CartProvider>
      
      {/* <ItemCount stock = {10}/> */}
    </>
  )
}

export default App
