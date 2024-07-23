import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counterSlice/counter.js"

export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store