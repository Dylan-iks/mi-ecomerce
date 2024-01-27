
import "./ItemCount.css"

const ItemCount = ({cantidad, sumar, restar, comprar}) => {
    
  
    return (
    <div >
        <div className="contenedor-contadores">
            <button className="sumar" onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button className="sumar" onClick={sumar}>+</button>
        </div>
        
        <button className="comprar" onClick={comprar}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount