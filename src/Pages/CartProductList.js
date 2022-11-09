import React from 'react'
import CartProduct from '../components/CartProduct'
import TotalComponent from '../components/TotalComponent';

const CartProductList= () => {
  return (
    <div className='cart'>
    <div className='cart-product-list'>
      <div className='cart-product-component'>
      <CartProduct/>
      </div>
    </div>
    <div className='TotalComponent'>
        <TotalComponent/>
      </div>
    </div>
  )
}

export default CartProductList;