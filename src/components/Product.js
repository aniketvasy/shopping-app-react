import React, { useContext } from 'react'
import { GlobleInfo } from '../App';
import AddRemoveButton from '../utils/AddRemoveButton';
import AddToCartButton from '../utils/AddToCartButton';

const Product = (props) => {
    const {product,methods} = useContext(GlobleInfo);
    const {myCart} = useContext(GlobleInfo);
    const [cart,addProductCart] = myCart;
    const [productQuantity,setProductQuantity] = product;
    const [add,remove] = methods;
    // console.log(props)
  return (
    <div className='product-container'>
        <div className='product-image-container'>
        <img src={props.url} className='product-img'/>
        </div>
        <div className='product-title'>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </div>
        <div className='product-price'>
            <p>₹ {props.price}</p>
            </div>
        <div className='product-discription'>
        {props.discription}
        </div>
        <AddRemoveButton methods={[add,remove]} state={[productQuantity]} />
        <AddToCartButton id={props.id} />
    </div>
  )
}

export default Product