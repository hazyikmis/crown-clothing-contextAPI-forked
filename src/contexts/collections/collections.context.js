import { createContext } from "react";

import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA); 
//set initial value (like in reducer)

export default CollectionsContext;
