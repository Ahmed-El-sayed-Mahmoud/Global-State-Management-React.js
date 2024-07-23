import React, { useCallback, useState } from 'react';
import './ProductCard.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { add_item,remove_item,update_price } from './state/cartSlice';
const ProductCard = ({ product }) => {
const dispatch=useDispatch()
const products=useSelector(state=>state.cart)
const [incart,setincart]=useState(product.InCart)


  const handleclick=()=>{
    const updatedProduct = { ...product, InCart: !product.InCart };
    
    if(product.InCart)
    {
      dispatch(remove_item(updatedProduct))
    }
    else
    {
      dispatch(add_item(updatedProduct))

    }
  
    dispatch(update_price())
    setincart(p=>!p)
   // product.InCart=!product.InCart
  }
  console.log(products)
  return (
    <div className="product-card">
      <div className='add-remove-button' onClick={handleclick} style={{cursor:"pointer"}}>
          <p>{incart? "-":"+"}</p>
      </div>
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
