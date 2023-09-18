import { combineReducers } from 'redux'
import cartReducer from './cartSlice'


export const reducer = combineReducers({
  cart: cartReducer,
})