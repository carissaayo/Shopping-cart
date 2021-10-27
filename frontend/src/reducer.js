const reducer = (state,action)=>{
    
    if (action.type === "ADD_TO_CART") {
      const item = action.payload;
      const  existItem= state.cart.find(cartItem=> cartItem.id ===item.id);
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === existItem.id ? item : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    } else if (action.type === "REMOVE_FROM_CART") {
        return {
          ...state,
          cart: state.cart.filter(cartItem=>cartItem.id !== action.payload),
        }; 
    } else if (action.type === "CLEAR_CART") {
      const item = action.payload;
    } else if (action.type === "GET_PRODUCTS_REQUEST") {
      const item = action.payload;
    } else if (action.type === "GET_SINGLE_PRODUCT_REQUEST") {
      const item = action.payload;
    }
    
    

    return state
}

export default reducer;