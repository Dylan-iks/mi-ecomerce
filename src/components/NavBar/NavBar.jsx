import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className = "navbar">
            <Link to = "/" className="logo"><h1>EG</h1></Link>
            <ul>
                <li>
                    <Link to="/productos/Procesador">Procesadores</Link>
                </li>
                <li>
                    <Link to="/productos/GPU">Placa de video</Link>
                </li>
                <li>
                    <Link to="/productos/Gabinete">Gabinete</Link>
                </li>
                <li>
                    <Link to="/Contacto">Contacto</Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
