import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
const initialState ={value:0};

const counterSlice=createSlice({
name:"counter",
initialState,
reducers:{
    increment: (state)=>{state.value+=1},
    decrement:(state)=>{state.value-=1},
    incrementAmount:(state,action)=>{state.value+=action.payload}
},
extraReducers:(builder)=>{
    builder.addCase(incrementAsync.fulfilled,(state,action)=>{
        console.log(action.payload)
        state.value+=action.payload
    })
    .addCase(incrementAsync.pending,()=>{
        console.log("increment pending...")
    })
}
})

export const incrementAsync=createAsyncThunk("counter/incrementAsync",
    async (num)=>{
        await new Promise((resolve,reject)=>setTimeout(resolve,1000))
            return num;
        }
)
export const {increment,decrement,incrementAmount} =counterSlice.actions
export default counterSlice.reducer
