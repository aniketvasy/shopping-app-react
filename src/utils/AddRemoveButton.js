import React, { useContext } from 'react'
import { GlobleInfo } from '../App';

const AddRemoveButton = (props) => {
    const productQuantity = props.state;
    const {myCart} = useContext(GlobleInfo);
    const [cart,addProductCart,removeProductCart] = myCart;
  return (
    <>
    <div className='quantity'>
    <button className=' quantity-button add-quantity' onClick={()=>addProductCart(props.productDetailsForCart)}>+</button>
    <p>{productQuantity}</p>
    <button className='quantity-button remove-quantity' onClick={()=>removeProductCart(props.productDetailsForCart)}>-</button>
    </div>
    </>
  )
}

export default AddRemoveButton