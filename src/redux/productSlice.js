import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//fetch product  -  api call
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
});

//slice
const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        allProducts: [],
        copyProducts: [],
        error: ""
    },
    extraReducers: (builder) => {
        //async action in each case
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
            state.copyProducts = action.payload; // Initialize copyProducts
            state.error = "";
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.allProducts = [];
            state.copyProducts = [];
            state.error = action.error.message; // Handle error correctly
        });
    },
    reducers: {
        searchProduct: (state, action) => {
            state.allProducts = state.copyProducts.filter(i =>
                i.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        }
    }
});

export default productsSlice.reducer;
export const { searchProduct } = productsSlice.actions;
