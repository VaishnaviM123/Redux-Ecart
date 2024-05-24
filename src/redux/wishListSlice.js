import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      if (state.find(item => item.id === action.payload.id)) {
        toast("Product already exists in wishList");
      } else {
        state.push(action.payload);
        toast("Product added to your wishList");
      }
    },
    removeItemWishList: (state, action) => {
      toast("Product removed from wishList");
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToWishList, removeItemWishList } = wishListSlice.actions;

export default wishListSlice.reducer;