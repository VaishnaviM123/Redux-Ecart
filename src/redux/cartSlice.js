import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if(state.find(item => item.id == action.payload.id)){
        toast("Product already exist in Cart")
      }else{
        state.push(action.payload);
        toast("Product added successfully to Cart");
      }
    },
    removeItem: (state, action) => {
      toast("Product removed from Cart")
      return state.filter(item => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state = [];
      return state;
    }
  }
});

export const { addToCart, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer