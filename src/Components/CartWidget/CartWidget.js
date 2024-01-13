import Cart from "./assets/carrito-de-compras.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cartwidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart" className="image is-16x16" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img src={Cart} alt="CartWidget" />
      {totalQuantity}
    </Link>
  );
}

export default Cartwidget;
