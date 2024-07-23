import React, { createContext, useContext, useReducer } from 'react'
import shopReducer , { InitialState } from './shopReducer'


const MainContext=createContext(InitialState)
export function ShopContext({children}) {

    const[state,dispatch]=useReducer(shopReducer,InitialState)
    const add_to_cart=(product)=>{
        dispatch({type:"ADD_TO_CART",payload:product})
        update_price(product,1)
    }
    const remove_from_cart=(product)=>{
        dispatch({type:"REMOVE_FROM_CART",payload:product})
        update_price(product,-1)
    }
    const update_price=(product,op)=>{
        dispatch({type:"UPDATE_PRICE",payload:product.price,op})
    }
    const value={
        total:state.total,
        products:state.products,
        add_to_cart,
        remove_from_cart
    }
  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  )
}


function useShop() {
    const context=useContext(MainContext)
  return (
   context
  )
}

export default useShop