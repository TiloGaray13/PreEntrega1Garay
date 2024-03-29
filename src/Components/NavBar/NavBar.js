import Cartwidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (
    <nav className="navbar">
      <Link to='/'>
        <h3 className="title family-monospace">Bienvenidos a Maxikiosco La Barra</h3>
      </Link>
      <div className="Categories"></div>
          <NavLink to={'/category/golosinas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Golosinas</NavLink>
          <NavLink to={'/category/bebidas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bebidas</NavLink>
          <NavLink to={'/category/chocolates'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Chocolates</NavLink>
      <Cartwidget />
    </nav>
  );
};

export default NavBar;
