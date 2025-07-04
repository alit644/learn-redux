import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../../interfaces";

export interface CartSliceState {
  cartItems: IProduct[];
}

const initialState: CartSliceState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        //! If the item already exists, increase its quantity
            existingItem.quantity += 1;

      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
