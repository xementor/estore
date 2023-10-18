import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/utils/types/Product";

const initialState = {
  products: [] as Product[],
};
export const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
