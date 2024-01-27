
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/cards/ItemListContainer'
import ItemDetailContainer from './components/cards/ItemDetailContainer'
import Carrito from './components/carrito/Carrito'
import Checkout from './components/carrito/Checkout'
import './App.css'


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
            <Route path='/carrito' element = {<Carrito />}/>
            <Route path='/checkout' element = {<Checkout />}/>
          </Routes>

            
          
        </BrowserRouter> 
      </CartProvider>
    </>
  )
}

export default App
