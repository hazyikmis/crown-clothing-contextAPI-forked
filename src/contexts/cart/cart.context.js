//this contextAPI used to remove hidden value from header component state
import { createContext } from "react";

const CartContext = createContext({ 
  hidden: true, //cart is hidden initially
  toggleHidden: () => {} 
}); 

//we also need to use a toggle function to change the value of "hidden"
//but this toggling function handled inside the header component!!!
//we are doing like this, because of showing that if local component make changes
//on context values, these changes propagated to all other components which are using
//this context

export default CartContext;
