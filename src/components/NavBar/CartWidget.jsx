
import "./NavBar.css"
import { MdOutlineShoppingCart } from "react-icons/md";

const CartWidget = () => {
    return (
        <div className="cartwidget">
            <MdOutlineShoppingCart color = "#FEFAE0" size={30} />
            <p>1</p>
        </div>
    )
}

export default CartWidget