import { Product } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { access } from "fs";

const initialState = {
  products: [] as Product[],
  searchText: "",
  searchedProduct: [] as Product[],
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
    setSearchedProduct: (state, action: PayloadAction<string>) => {
      state.searchedProduct = state.products.filter(p => p.name.toLowerCase().includes(action.payload))

    }
  },
});

export const { setProducts, setSearchText, setSearchedProduct } = productSlice.actions;

export default productSlice.reducer;
