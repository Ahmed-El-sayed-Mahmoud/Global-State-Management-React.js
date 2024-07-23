import React from 'react'
import useShop from './ShopContext'
import ProductCard from './ProductCard';
function Cart() {
    const {products,total}=useShop();
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