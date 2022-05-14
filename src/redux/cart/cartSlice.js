import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      //if return is used in this reducer instead of state.cartItems = [], then it will return a new initial state, i.e., if we return {} then initialState or the new state will be set to {}
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item=>item.id !== itemId)
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
