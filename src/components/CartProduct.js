import React, { useContext } from 'react'
import { GlobleInfo } from '../App';
import AddRemoveButton from '../utils/AddRemoveButton'
import { TiDelete } from "react-icons/ti";
import { Link } from 'react-router-dom';

const CartProduct = (props) => {
  // const {product,methods} = useContext(GlobleInfo);
  // const [productQuantity,setProductQuantity] = product;
  const {myCart} = useContext(GlobleInfo)
  const [cart,addProductCart,removeProductCart,deleteProductCart] = myCart
  // console.log(props.id)

  // console.log(props.deleteProductCart)
  return (
    <div className='cart-product'>
      <div className='cart-product-image-container'><img src={props.url} className='cart-product-img'/></div>
      <div className='cart-product-info'>
      <div className='product-title'>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </div>
        <div className='product-price'>
            <p>{props.cartQty} × ₹ {props.price}</p>
        </div>
        <AddRemoveButton 
        productDetailsForCart={{
          name:props.name,
          url:props.url,
          id:props.id,
          price:props.price
        }}
        state={props.cartQty}
        />
      </div>
      <div className='cart-product-total-price'>
      <p>₹ {props.cartQty*props.price}</p>
      </div>
      <div className='deleteButtonDiv' onClick={()=>deleteProductCart(props.id)} >
      <TiDelete className='deleteButton'/>
      </div>
    </div>
  )
}

export default CartProduct


// onClick={()=>{deleteProductCart(props.id)}}