import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCartButton = () => {
  return (
    <div className='addToCart'>
      <button className='AddToCartButton'>    <AiOutlineShoppingCart className='cart-icon add-to-cart'/>Add To Cart</button>
    </div>
  )
}

export default AddToCartButton