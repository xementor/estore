import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

export const reducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});
