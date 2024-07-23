import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shopData } from "../Data";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    add_item: (state, action) => {
      state.items.push(action.payload);
    },
    remove_item: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },
    update_price: (state) => {
      if (state.items.length > 0) {
        state.total = state.items.reduce((acc, cur) => acc + cur.price, 0);
      } else {
        state.total = 0;
      }
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchItems.pending,()=>{console.log("Detching pending")})
    .addCase(fetchItems.fulfilled,(state,action)=>{
        state.items=action.payload
    })
  }
});
export const fetchItems=createAsyncThunk(
    "cart/fetchItems",
    async()=>{
        await new Promise(resolve=>setTimeout(resolve,1000))
        return shopData
    }
    
)
export const { add_item, remove_item, update_price } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
