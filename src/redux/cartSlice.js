import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      cartItems: [],
   },
   reducers: {
      addItemToCart: (state, action) => {
         const { item, quantity } = action.payload;
         const existingItem = state.cartItems.find(cartItem => cartItem.itemId === item.id);
         
         if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.totalPrice += quantity * item.price;
         } else {
            const timeId = new Date().getTime();
            state.cartItems.push({
               id: timeId,
               itemId: item.id,
               quantity: quantity,
               price: item.price,
               totalPrice: quantity * item.price,
            });
         }
      },

      removeItemFromCart: (state, action) => {
         state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.cartItemId
         );
      },
   },
});

export const getTotalPrice = (state) => {
   return state.cart.cartItems.reduce((total, cartItems) => {
      return cartItems.totalPrice + total;
   }, 0);
};

export const getTotalQuantity = (state) => {
   return state.cart.cartItems.reduce((total, cartItem) => {
      return cartItem.quantity + total;
   }, 0);
};

export const getCartItems = (state) => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
