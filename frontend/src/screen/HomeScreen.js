import "./HomeScreen.css";
import Product from "../components/Product";
import { useGlobalContext } from "../context";
const HomeScreen = ()=>{
  const {cart} = useGlobalContext()
    return (
      <div className="homescreen">
        <h2 className="homescreen__title">Latest Products</h2>
        <div className="homescreen__products">
          {cart.map((cartItem)=><Product key={cartItem.id} cartItem={cartItem}/>)}
        </div>
      </div>
    );
}
export default HomeScreen;