import React, { createContext, useState, useEffect } from "react";

//import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemsCount } from "./cart.utils";

//CartContext also defined inside the /src/contexts/cart/cart.context.js,
//but only with "hidden" and "toggleHidden" key-values.
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item)); //very similar to redux reducer code
  const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item)); //very similar to redux reducer code
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems, item));
  
  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems))
  }, [cartItems])
  
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem, //if these function names do not written here, then its not usable from component imports CartContext
        removeItem,  //if these function names do not written here, then its not usable from component imports CartContext
        clearItemFromCart, //if these function names do not written here, then its not usable from component imports CartContext
        cartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;