import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GlobleInfo } from '../App';

const AddToCartButton = (props) => {
  const {myCart} = useContext(GlobleInfo);
  const [cart,addProductCart] = myCart;
  return (
    <div className='addToCart'>
      <button className='AddToCartButton' onClick={()=>addProductCart(props.id)}>  <AiOutlineShoppingCart className='cart-icon add-to-cart'/>Add To Cart</button>
    </div>
  )
}

export default AddToCartButton