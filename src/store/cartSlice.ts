import { Product } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartProduct extends Product {
  quantity: number,
}
type CartType = {
  products: CartProduct[];
  productsNumber: number;
};
const initialState: CartType = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      // check if in product array
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id,
      );
      if (addProductExists) {
        addProductExists.quantity += action.payload.quantity;
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      state.productsNumber = state.productsNumber + action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      // find the product removing the array
      const productToRemove = state.products.find(
        (product) => product.id === action.payload,
      );
      if (productToRemove)
        // remove the quantity from product number
        state.productsNumber = state.productsNumber - productToRemove.quantity;
      // find index of the product removing
      const index = state.products.findIndex(
        (product) => product.id === action.payload,
      );
      // remove from the array
      state.products.splice(index, 1);
    },
    incrementInCart: (state, action) => {
      const itemInc = state.products.find((item) => item.id === action.payload);
      if (itemInc)
        if (itemInc.quantity >= 1) {
          itemInc.quantity = itemInc.quantity + 1;
        }
      state.productsNumber = state.productsNumber + 1;
    },
    decrementInCart: (state, action) => {
      const itemDec = state.products.find((item) => item.id === action.payload);
      if (itemDec)
        if (itemDec.quantity === 1) {
          const index = state.products.findIndex(
            (item) => item.id === action.payload,
          );
          state.products.splice(index, 1);
        } else {
          itemDec.quantity--;
        }
      state.productsNumber = state.productsNumber - 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
