import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GlobleInfo } from '../App';

const AddToCartButton = (props) => {
  const {myCart} = useContext(GlobleInfo);
  const [cart,addProductCart] = myCart;
  
  return (
    <div className='addToCart'>
      <button className='AddToCartButton' onClick={()=>addProductCart(props.productDetailsForCart)}>  <AiOutlineShoppingCart className='cart-icon add-to-cart'/>Add To Cart</button>
    </div>
  )
}
{/* <button className='AddToCartButton' onClick={()=>addProductCart(props.id)}>  <AiOutlineShoppingCart className='cart-icon add-to-cart'/>Add To Cart</button> */}
export default AddToCartButton


//props
// -
// productDetailsForCart={{
//   name:props.name,
//   url:props.url,
//   id:props.id,
//   price:props.price
// }}