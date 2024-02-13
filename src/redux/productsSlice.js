import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
   name: "products",
   initialState: {
      selectedCategory: "All",
   },
   reducers: {
      filterCategory: (state, action) => {
         state.selectedCategory = action.payload;
      },
   },
});

export const getSelectedCategory = (state) => state.products.selectedCategory;
export const { filterCategory } = productsSlice.actions;
export default productsSlice.reducer;
