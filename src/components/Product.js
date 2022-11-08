import React, { useContext } from 'react'
import { GlobleInfo } from '../App';

const Product = (props) => {
    const {product,methods} = useContext(GlobleInfo)
    const [add,remove] = methods;
    console.log(props)
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
        <div className='quantity'>
            <button className=' quantity-button add-quantity' onClick={()=>{add()}}>+</button>
            <span>{product}</span>
            <button className='quantity-button remove-quantity' onClick={()=>{remove()}} >-</button>
        </div>
    </div>
  )
}

export default Product