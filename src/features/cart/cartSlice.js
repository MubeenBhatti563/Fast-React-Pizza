import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const checkItem = state.cart.some(
        (item) => item.pizzaId === action.payload.pizzaId,
      );

      if (checkItem)
        alert(
          "It is already added to cart. You can increase quantity from cart!",
        );
      else state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // Only update if the item was actually found
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // Only update if the item was actually found
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearItem(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItem, decreaseItem, clearItem } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;
