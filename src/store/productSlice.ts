import { Product } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as Product[],
  searchText: "",
};
export const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setProducts, setSearchText } = productSlice.actions;

export default productSlice.reducer;
