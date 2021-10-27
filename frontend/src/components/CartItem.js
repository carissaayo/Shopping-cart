import { Link } from "react-router-dom";
import "./CartItem.css";
import { useGlobalContext } from "../context";

const CartItem = ({ name, countInStock, imageUrl, price, description ,id}) => {
  const {removeProduct} = useGlobalContext()
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="/images/iphone12.jpg" alt="product name" />
      </div>
      <Link to={"/product/${111}"} className="cartitem__name">
        <p>{name}</p>
      </Link>
      <p className="cartitem__price">${price}</p>
      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem__delete-btn" onClick={()=>removeProduct(id)}>
        <img src="/images/icon-delete.svg" alt="" />
      </button>
    </div>
  );
};

export default CartItem
