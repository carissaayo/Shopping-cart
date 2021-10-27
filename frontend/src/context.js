import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import {products} from "./products";
import reducer from "./reducer";
const url =""
const AppContext = createContext();
const initialState={
    loading:false,
    cart:products,
    total:0,
    amount:0,
}

const AppProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const [state, dispatch] = useReducer(reducer,initialState);

const fetchProducts = async () => {
  try {
      dispatch({ type: "LOADING" });
      const response = await fetch("/api/products");
      console.log(response);
      const cart = await response.json();
      dispatch({ type: "GET_PRODUCTS_REQUEST", payload: cart });
      localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
      console.log(error);
  }
};
const fetchSingleProduct = async (id) => {
  dispatch({ type: "LOADING" });
  const response = await fetch(`/api/products/${id}`);
//   const cartItem = await response.json();
//   dispatch({ type: "GET_SINGLE_PRODUCT_REQUEST", payload: cartItem });
  
};
 useEffect(()=>{
        fetchProducts()
        console.log(state.cart);
 },[])
const addToCart= async(id)=>{
    const response = await fetch(`/api/products/${id}`);
    // const cartItem = await response.json();
    console.log(response);
    // dispatch({type:"ADD_TO_CART",payload:cartItem})
};
const removeProduct = (id)=>{
    dispatch({type: 'REMOVE_FROM_CART',payload:id})
}
  return (
    <AppContext.Provider value={{ ...state, sideBar, setSideBar,addToCart, 
    removeProduct}}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext  = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider};
