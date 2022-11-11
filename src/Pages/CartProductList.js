import React, { useContext } from 'react'
import { GlobleInfo } from '../App';
import CartProduct from '../components/CartProduct'
import TotalComponent from '../components/TotalComponent';
import uniqid from 'uniqid';


const CartProductList= () => {
  const {myCart} = useContext(GlobleInfo);
  const [cart,addProductCart] = myCart

  // cart.map((product)=>(
  //   <CartProduct
  //   name = {product.name}
  //   id = {product.cartId}
  //   url = {product.url}
  //   cartQty = {product.cartQty}
  //   price = {product.price}
  //   />
  // ))
  // console.log(cart)
  return (
    <div className='cart'>
    <div className='cart-product-list'>
      <div className='cart-product-component'>
      {cart.map((product)=>(
      <CartProduct
        name = {product.name}
        id = {product.cartId}
        url = {product.url}
        cartQty = {product.cartQty}
        price = {product.price}
      key={uniqid()}
      />
  ))
      }
      </div>
    </div>
    <div className='TotalComponent'>
        <TotalComponent/>
      </div>
    </div>
  )
}

export default CartProductList;