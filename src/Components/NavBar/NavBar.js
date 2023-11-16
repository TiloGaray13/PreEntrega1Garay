import Cartwidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="title $family-monospace">Bienvenidos a Maxikiosco La Barra</h3>
            <div>
                <button className="button is-link is-focused">Golosinas</button>
                <button className="button is-link is-focused">Bebidas</button>
                <button className="button is-link is-focused">Chocolates</button>
                <button className="button is-link is-focused">Box</button>
                <button className="button is-link is-focused">Termos</button>
                <button className="button is-link is-focused">Peluches</button>
            </div>
            <Cartwidget/>
        </nav>
    )

}

export default NavBar;