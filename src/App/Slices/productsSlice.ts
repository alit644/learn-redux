import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface productsSliceState {
  isLoading: boolean;
  data: [] | undefined
  error: string | null;
}

const initialState: productsSliceState = {
  isLoading: true,
  data: [],
  error: null,
};

//! createAsyncThunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    //! rejectWithValue is used to return a custom error message
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      return data; 
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //!  pending
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
    //!  fulfilled
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload; 
      })
    //!  rejected
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = true;
        state.data = [];
        state.error = action.payload as string; 
      });
  },
});

export default productsSlice.reducer;
