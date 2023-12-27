
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from './components/cards/ItemListContainer'
import ItemDetailContainer from './components/cards/ItemDetailContainer'


function App() {
  

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer itemId = {2}/>
        
      </div>
      {/* <ItemCount stock = {10}/> */}
    </>
  )
}

export default App
