import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
        
    }

    const restar = () => {
        if (contador > 1){
            setContador (contador - 1);
        }
        
    }
  
    return (
    <div >
        <div className="contenedor-contadores">
            <button className="sumar" onClick={restar}>-</button>
            <p>{contador}</p>
            <button className="sumar" onClick={sumar}>+</button>
        </div>
        
        <button className="comprar">agregar al carrito</button>
    </div>
  )
}

export default ItemCount