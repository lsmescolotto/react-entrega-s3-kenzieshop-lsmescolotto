import { createStore, combineReducers } from "redux";

import productsReducer from "./modules/products/reducers";
import CartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: CartReducer,
});

const store = createStore(reducers);

export default store;
