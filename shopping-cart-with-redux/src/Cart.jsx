import React from 'react'

import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
function Cart() {
  const products=useSelector(state=>state.cart.items)
  const total=useSelector(state=>state.cart.total)
  return (
<>
    <div className='details'>{total}</div>
    <div className="wrapper">
        {products.map((val, index) => {
          return <ProductCard product={val} key={index} />;
        })}
      </div>
      </>
  )
}

export default Cart