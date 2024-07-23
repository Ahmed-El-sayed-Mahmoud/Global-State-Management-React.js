import React from 'react';
import './ProductCard.css'; 
import useShop from './ShopContext';
const ProductCard = ({ product }) => {
  const {add_to_cart,products,remove_from_cart}=useShop();
  const handleclick=()=>{
    if(product.InCart)
    {
      remove_from_cart(product)
      product.InCart=false;
    }
    else
    {
      add_to_cart(product)
      product.InCart=true;
    }
console.log(products)
  }
  return (
    <div className="product-card">
      <div className='add-remove-button' onClick={handleclick} style={{cursor:"pointer"}}>
          <p>{product.InCart? "-":"+"}</p>
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
