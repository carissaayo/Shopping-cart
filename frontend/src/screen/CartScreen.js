import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context";
const CartScreen = () => {
  const { cart } = useGlobalContext();

    return (
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cart.map(item=><CartItem key={item.id} {...item}/>)}
          
        </div>
      <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>subtotal (0) items</p>
              <p>$400</p>
          </div>
            <div>
                <button>Proceed To Checkout</button>
            </div>
              
        </div>
     ;   </div>
    )
}

export default CartScreen
