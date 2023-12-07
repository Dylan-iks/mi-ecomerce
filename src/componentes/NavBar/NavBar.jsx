import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div id = "navbar">
            <h1>EG</h1>
            <ul>
                <li>
                    <a href="">Procesadores</a>
                </li>
                <li>
                    <a href="">Placa de video</a>
                </li>
                <li>
                    <a href="">Gabinete</a>
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar
