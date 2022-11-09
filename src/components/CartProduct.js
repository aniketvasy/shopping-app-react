import React, { useContext } from 'react'
import { GlobleInfo } from '../App';
import AddRemoveButton from '../utils/AddRemoveButton'

const CartProduct = () => {
  const {product,methods} = useContext(GlobleInfo);
  const [productQuantity,setProductQuantity] = product;
  const [add,remove] = methods;
  return (
    <div className='cart-product'>
      <div className='cart-product-image-container'><img src="https://browntree.in/wp-content/uploads/2021/03/PRO-NAT.BASMATI-RICE-1kg.jpg" className='cart-product-img'/></div>
      <div className='cart-product-info'>
      <div className='product-title'>
            BASMATI RICE
        </div>
        <div className='product-price'>
            <p>{1} × ₹ {100.00}</p>
        </div>
        <AddRemoveButton methods={[add,remove]} state={[productQuantity]}/>
      </div>
      <div className='cart-product-total-price'>
      <p>₹ {100.00}</p>
      </div>
      
    </div>
  )
}

export default CartProduct