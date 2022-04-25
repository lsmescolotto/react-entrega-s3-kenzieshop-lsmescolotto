import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action;

      return [...state, product];

    case REMOVE_FROM_CART:
      const { id } = action;
      const newProductsList = state.filter((product) => product.id !== id);

      return newProductsList;
    default:
      return state;
  }
};

export default CartReducer;
