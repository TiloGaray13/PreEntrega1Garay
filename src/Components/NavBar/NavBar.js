import Cartwidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const isActive = true;
    
    return (
    <nav className="navbar">
      <Link to='/'>
        <h3 className="title family-monospace">Bienvenidos a Maxikiosco La Barra</h3>
      </Link>
      <div className="Categories"></div>
      <NavLink to={'/category/golosinas'} className={`button is-link ${isActive ? 'ActiveOption' : 'Option'}`}>
        Golosinas
      </NavLink>
      <NavLink to={'/category/bebidas'} className={`button is-link ${isActive ? 'ActiveOption' : 'Option'}`}>
        Bebidas
      </NavLink>
      <NavLink to={'/category/chocolates'} className={`button is-link ${isActive ? 'ActiveOption' : 'Option'}`}>
        Chocolates
      </NavLink>
      <Cartwidget />
    </nav>
  );
};

export default NavBar;
