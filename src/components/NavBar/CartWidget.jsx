
import { useContext } from "react";
import "./NavBar.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext) 
    return (
        <div>
            <Link className="cartwidget" to = "/carrito">
                <MdOutlineShoppingCart color = "#FEFAE0" size={30} />
                <p>{cantidadEnCarrito()}</p>
            </Link>
            
        </div>
    )
}

export default CartWidget